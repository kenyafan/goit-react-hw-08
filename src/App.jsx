import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contactsOps";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
