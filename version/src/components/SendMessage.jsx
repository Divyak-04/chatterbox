// src/components/SendMessage.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function SendMessage() {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;
    await axios.post('http://localhost:5000/api/chat/send', {
      message: text,
      senderId: "Divya"
    });
    setText("");
    //window.location.reload(); // simple way to refresh
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
