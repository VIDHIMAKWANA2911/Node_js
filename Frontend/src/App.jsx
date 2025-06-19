import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';

export default function App() {
  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ccc'
      }}>
        <h2></h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' ,border:"1px solid black",height:"25px",width:"59px",borderRadius:"20px",textAlign:"center",fontSize:"20px" , backgroundColor:"lightpich",padding:"10px 10px 10px 10px"}}> Home</Link>
          <Link to="/create" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' ,border:"1px solid black",height:"25px",width:"59px",borderRadius:"20px",textAlign:"center",fontSize:"20px" , backgroundColor:"lightpich",padding:"10px 10px 10px 10px"}}>Create</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/Update/id" element={<Update />} />
      </Routes>
    </div>
  );
}
