import axios from 'axios';

const api = axios.create({
  baseURL: "/api",  // ← Adicionar /api e HTTPS
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;