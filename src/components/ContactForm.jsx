import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { operations } from "../app/contacts/operations";
import { Button, TextField, Box } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export const ContactForm = () => {
  const token = useSelector((state) => state.auth.token);
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });
  const [error, setError] = useState({
    errorName: false,
    errorPhone: false,
    message: "",
    complete: false,
  });
  const handleValidation = (contact) => {
    const { name, number } = contact;
    const regex = {
      name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+ [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/,
      number: /^\+\d{1,4}[-\s]\d{3,12}$/,
    };
    if (regex.name.test(name)) {
      if (regex.number.test(number)) {
        setError({
          errorName: false,
          errorPhone: false,
          message: "Successful",
          complete: true,
        });
      } else {
        setError({
          errorName: false,
          errorPhone: true,
          message:
            "Enter phone number in format: +CountryCode-LocalNumber or +CountryCode LocalNumber.",
          complete: false,
        });
      }
    } else {
      setError({
        errorName: true,
        errorPhone: false,
        message: "Enter a valid name in format: Name Lastname",
        complete: false,
      });
    }
  };

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
    handleValidation(contact);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataContact = { contact: contact, token: token}
    if (error.complete) {
      await dispatch(operations.addContact(dataContact));
      dispatch(operations.getContacts(token));
      setContact({
        name: "",
        number: "",
      });
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ mt: 2 }}
    >
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        required
        error={error.errorName}
        helperText={error.errorName && error.message}
        id="outlined-error-helper-text"
        label="Name"
        name="name"
        onChange={handleChange}
        value={contact.name}
      ></TextField>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        required
        error={error.errorPhone}
        helperText={error.errorPhone && error.message}
        id="outlined-error-helper-text"
        label="Phone Numer"
        name="number"
        onChange={handleChange}
        value={contact.number}
      ></TextField>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<PersonAddAlt1Icon />}
      >
        Submit
      </Button>
    </Box>
  );
};
