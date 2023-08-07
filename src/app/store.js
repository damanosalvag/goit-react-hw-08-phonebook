import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/contactSlice";
import authReducer from "../features/auth/authSlice";


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

export default store;
