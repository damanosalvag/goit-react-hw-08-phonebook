import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./services";

export const operations = {
  getContacts: createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
    try {
      const response = await api.getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }),
  addContact: createAsyncThunk(
    "contacts/addContact",
    async (contactData, thunkAPI) => {
      try {
        const response = await api.addContact(contactData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ),
  deleteContact: createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        const response = await api.deleteContact(id);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ),
};
