import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "./services";

export const operations = {
  signUp: createAsyncThunk("users/register", async (data, thunkAPI) => {
    try {
      const response = await auth.signUp(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }),
  logIn: createAsyncThunk("users/login", async (userData, thunkAPI) => {
    try {
      const response = await auth.logIn(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }),
  logOut: createAsyncThunk("users/logout", async (_, thunkAPI) => {
    try {
      const response = await auth.logOut();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }),
  currentUser: createAsyncThunk("users/current", async (_, thunkAPI) => {
    try {
      const response = await auth.currentUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }),
};
