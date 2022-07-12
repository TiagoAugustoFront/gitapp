
import axios from 'axios';

const BASE_DOMAIN = "https://api.github.com"

export const api = axios.create({
  baseURL: BASE_DOMAIN,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})