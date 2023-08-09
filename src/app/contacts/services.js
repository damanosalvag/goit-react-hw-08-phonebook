import axios from "axios";

const getAuthHeader = (token) => {
  apiInstance.defaults.headers.common["Authorization"] = token;
};

const apiInstance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const api = {
  getContacts: async (token = "") => {
    const url = `/contacts`;
    getAuthHeader(token)
    const response = await apiInstance.get(url).then((res) => res.data);
    return response;
  },
  addContact: async ({ contact, token}) => {
    const url = `/contacts`;
    getAuthHeader(token);
    const response = await apiInstance
      .post(url, contact)
      .then((res) => res.data)
    return response;
  },
  deleteContact: async ({id, token}) => {
    const url = `/contacts/${id}`;
    getAuthHeader(token);
    const response = await apiInstance
      .delete(url)
      .then((res) => res.data)
    return response;
  },
};
