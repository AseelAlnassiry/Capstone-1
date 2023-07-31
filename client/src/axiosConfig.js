import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URI,
});

export default axiosInstance;
