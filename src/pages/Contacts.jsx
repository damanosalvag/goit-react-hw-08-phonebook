import { ContactList } from "../components/ContactsList";
import { ContactFilter } from "../components/ContactFilter";
import { ContactForm } from "../components/ContactForm";
import MenuAppBar from "../components/NavBar";

const Contacts = () => {
  return (
    <section>
      <MenuAppBar />
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </section>
  );
};

export default Contacts;
