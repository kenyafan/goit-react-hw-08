import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./ContactsPage.module.css";

import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/contactsSlice";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.ContactContainer}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {loading && <Loader />}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
