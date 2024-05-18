import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors/selectContacts";
import { fetchContacts } from "../../redux/contactsOps";

const App = () => {
  const { item, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log(item);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {/* {item.length > 0 && } */}
      <ContactList />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
