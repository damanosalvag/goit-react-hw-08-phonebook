import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
