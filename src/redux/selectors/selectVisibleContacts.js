import { selectContacts } from "./selectContacts";
import { selectNameFilter } from "./selectNameFilter";

export const selectVisibleContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = selectNameFilter(state);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.name.toLowerCase())
  );
};
