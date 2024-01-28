/* eslint-disable no-param-reassign */
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
