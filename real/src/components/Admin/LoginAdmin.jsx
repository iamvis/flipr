import React, { useState } from 'react';
import { loginAdmin } from '../API/api';

const LoginAdmin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin(form);
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-center text-blue-600 mb-4">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full mb-3 p-2 border rounded focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default LoginAdmin;
