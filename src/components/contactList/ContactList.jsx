import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors/selectContacts";
import { selectNameFilter } from "../../redux/selectors/selectNameFilter";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const shownContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.name.toLowerCase())
  );
  const contactList = shownContacts.map(({ name, number, id }) => (
    <li key={id} className={css.listItem}>
      <Contact name={name} phoneNumber={number} id={id} />
    </li>
  ));
  return <ul className={css.list}>{contactList}</ul>;
}
