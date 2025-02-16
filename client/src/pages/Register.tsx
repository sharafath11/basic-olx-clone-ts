import React, { useContext, useState } from "react";
import Logo from "../assets/olx_logo.svg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({...formData,[e.target.name]:e.target.value});
    
   setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    auth?.registerUser(formData.name, formData.email, formData.phoneNumber, formData.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 md:w-96">
        <div className="flex justify-center">
          <img className="w-24 h-24" src={Logo} alt="Logo" />
        </div>
        <form onSubmit={handleRegister}>
          <label className="block mt-4 text-sm font-medium">Username</label>
          <input className="w-full p-2 border-b border-gray-300 outline-none" type="text" name="name" onChange={handleChange} />
          
          <label className="block mt-4 text-sm font-medium">Email</label>
          <input className="w-full p-2 border-b border-gray-300 outline-none" type="email" name="email" onChange={handleChange} />
          
          <label className="block mt-4 text-sm font-medium">Phone</label>
          <input className="w-full p-2 border-b border-gray-300 outline-none" type="number" name="phoneNumber" onChange={handleChange} />
          
          <label className="block mt-4 text-sm font-medium">Password</label>
          <input className="w-full p-2 border-b border-gray-300 outline-none" type="password" name="password" onChange={handleChange} />
          
          <button className="w-full mt-6 py-2 text-white font-bold bg-teal-800 rounded-md hover:bg-white hover:text-teal-800 border-2 border-teal-800 transition">
            Signup
          </button>
        </form>
        <p className="mt-4 text-center text-teal-800 cursor-pointer" onClick={() => navigate("/login")}>Login</p>
      </div>
    </div>
  );
}
