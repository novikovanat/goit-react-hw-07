import { selectContacts } from "./selectContacts";
import { selectNameFilter } from "./selectNameFilter";
import { createSelector } from "@reduxjs/toolkit";

// export const selectVisibleContacts = createSelector([selectContacts,selectNameFilter],contacts, nameFiler) => {
// const contacts = selectContacts(state);
// const filter = selectNameFilter(state);
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.name.toLowerCase())
//   );
// };

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    console.log("Calculating visible tasks. Now memoized!");
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.name.toLowerCase())
    );
  }
);
