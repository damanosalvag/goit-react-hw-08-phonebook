import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { ContactFilter } from "./components/ContactFilter";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactsList";
import { operations } from "./app/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Phonebook
      </Typography>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </Container>
  );
}

export default App;
