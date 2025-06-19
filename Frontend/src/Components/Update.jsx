import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    axios.get(`http://localhost:8000/${id}`)
      .then(res => {
        setForm(res.data.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/${id}`, form)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        /><br /><br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        /><br /><br />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        /><br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
