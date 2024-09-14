import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://66e0f986c831c8811b536df0.mockapi.io/api/books/books',
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;