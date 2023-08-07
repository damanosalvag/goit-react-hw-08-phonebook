import axios from "axios";

const setAuthHeader = (token) => {
  apiInstance.defaults.headers.common["Authorization"] = token;
};

const clearAuthHeader = () => {
  apiInstance.defaults.headers.common["Authorization"] = '';
};

const apiInstance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const auth = {
  signUp: async (regUserData) => {
    const url = `/users/signup`;
    const response = await apiInstance.post(url, regUserData).then((res) => {
      setAuthHeader(response.data.token);
      return res.data;
    });
    console.log(response);
    return response;
  },
  logIn: async (userData) => {
    const url = `/users/login`;
    const response = await apiInstance.post(url, userData);
    setAuthHeader(response.data.token);
    console.log(response);
    return response.data;
  },
  logOut: async () => {
    const url = `/users/logout`;
    const response = await apiInstance.post(url).then((res) => res.data);
    clearAuthHeader();
    console.log(response);
    return response;
  },
  currentUser: async () => {
    const url = `/users/current`;
    const response = await apiInstance.get(url).then((res) => res.data);
    return response;
  },
};
