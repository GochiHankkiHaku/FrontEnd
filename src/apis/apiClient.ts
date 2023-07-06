import axios from 'axios';

export const axiosClient = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://15.164.155.242:8080/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
