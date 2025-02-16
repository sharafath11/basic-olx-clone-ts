import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets/olx_logo.svg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (auth) {
      auth.loginUser(formData.email, formData.password);
    } else {
      console.error("Auth context is not available");
    }
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="w-32 h-32" />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <label htmlFor="password" className="block text-gray-700 mt-4">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-teal-700 text-white font-bold rounded hover:bg-white hover:text-teal-700 hover:border-2 hover:border-teal-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-teal-700 cursor-pointer" onClick={() => navigate('/register')}>
          Signup
        </p>
      </div>
    </div>
  );
}

export default Login;
