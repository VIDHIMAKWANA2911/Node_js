import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/")
      .then(res => setUsers(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (index) => {
    axios.delete(`http://localhost:8000/${index}`)
      .then(() => {
        const updated = [...users];
        updated.splice(index, 1);
        setUsers(updated);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map((user, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", width: "220px" }}>
            <h4>{user.name}</h4>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <button onClick={() => navigate(`/update/${index}`)}>Edit</button>&nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
