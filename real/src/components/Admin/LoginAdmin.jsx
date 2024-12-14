import React, { useState } from 'react';
import { loginAdmin } from '../API/api';

const LoginAdmin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin(form);
      localStorage.setItem('token', response.data.token); // Save token in localStorage
      setMessage('Login successful');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginAdmin;
