import axios from "axios";
const apiInstance = axios.create({
  baseURL: "https://64c4138c67cfdca3b6609bd7.mockapi.io",
});

export const api = {
  getContacts: async () => {
    const url = `/contacts`;
    const response = await apiInstance
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);
    return response;
  },
  addContact: async (contactData) => {
    const url = `/contacts`;
    const response = await apiInstance
      .post(url, contactData)
      .then((res) => res.data)
      .catch((err) => err);
    return response;
  },
  deleteContact: async (id) => {
    const url = `/contacts/${id}`;
    const response = await apiInstance
      .delete(url)
      .then((res) => res.data)
      .catch((err) => err);
    return response;
  },
};
