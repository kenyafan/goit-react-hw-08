import { createSlice, createSelector, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logoutThunk } from "../auth/operations";
import { selectFilter } from "../filters/filtersSlice";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.pending, (state) => {
        state.contacts = [];
      })

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex((contact) => {
          return contact.id === payload;
        });
        state.contacts.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { selectLoading, selectError, selectContacts } =
  contactsSlice.selectors;
export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
