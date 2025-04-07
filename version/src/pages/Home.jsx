// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Chatterbox 💬</h1>
      <Link to="/chat">
        <button>Start Chatting</button>
      </Link>
    </div>
  );
}
