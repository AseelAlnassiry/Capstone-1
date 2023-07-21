import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '//localhost:4000',
});

export default axiosInstance;
