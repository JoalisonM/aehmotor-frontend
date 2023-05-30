import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://98ea-187-19-116-84.ngrok-free.app/api',
  headers: {
    "Content-Type": "application/json",
  }
})
