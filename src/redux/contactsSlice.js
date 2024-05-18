import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts} from "./contactsOps";
// import testData from "../components/testData.json";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
 
};

const handleSuccess = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.item = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { item: [], loading: false, error: null },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.item.push(action.payload);
  //     },
  //     prepare(contact) {
  //       return {
  //         payload: { id: nanoid(6), ...contact },
  //       };
  //     },
  //   },
  //   deleteContact: {
  //     reducer(state, action) {
  //       const contacts = state.item;
  //       const index = contacts.findIndex((task) => task.id === action.payload);
  //       contacts.splice(index, 1);
  //     },
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleRejected)
      .addCase(fetchContacts.rejected, handleSuccess)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleRejected)
      .addCase(addContact.rejected, handleSuccess);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
