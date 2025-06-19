import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/", form).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required /><br /><br />
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
