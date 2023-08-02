import { useDispatch } from "react-redux";
import { filterContact } from "../features/contacts/contactSlice";
import { Box, TextField, Typography } from "@mui/material";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Search contact
      </Typography>
      <TextField
        id="standard-basic"
        fullWidth
        label="Search"
        variant="standard"
        onChange={handleChange}
      />
    </Box>
  );
};
