import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log(contacts);

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
