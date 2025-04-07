// src/components/ChatBox.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/chat/all')
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []); // Empty dependency array is important
  

  return (
    <div>
      <h2>Chat Messages</h2>
      <div style={{ border: '1px solid gray', padding: '1rem' }}>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.senderId || 'Anonymous'}:</strong> {msg.message}</p>
        ))}
      </div>
    </div>
  );
}
