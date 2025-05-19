import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_BACKEND_URL', // Substitua pelo endereço real da API
});

export default api;
