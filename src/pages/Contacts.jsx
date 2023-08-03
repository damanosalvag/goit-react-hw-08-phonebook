import { ContactList } from "../components/ContactsList";
import { ContactFilter } from "../components/ContactFilter";
import { ContactForm } from "../components/ContactForm";

const Contacts = () => {
  return (
    <section>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </section>
  );
};

export default Contacts;
