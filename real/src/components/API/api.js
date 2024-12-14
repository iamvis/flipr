import axios from 'axios';

// Set the base URL of your backend
const API = axios.create({ baseURL: 'http://localhost:8080/api' });

// Add token to headers for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// API calls
export const registerAdmin = (adminData) => API.post('/admin/register', adminData);
export const loginAdmin = (adminData) => API.post('/admin/login', adminData);
export const getAdminProfile = () => API.get('/admin/profile');
