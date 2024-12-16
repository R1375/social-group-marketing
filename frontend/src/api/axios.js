import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.80.134.157:5000'
});

export default api;