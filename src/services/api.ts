import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;
if (!baseURL) {
  throw new Error('NEXT_PUBLIC_BASE_API не задана');
}

export const apiClient = axios.create({
  baseURL,
  timeout: 5000,
});