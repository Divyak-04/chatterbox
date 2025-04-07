// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatBox from './components/ChatBox';
import SendMessage from './components/SendMessage';

function ChatPage() {
  return (
    <div style={{ padding: '20px' }}>
      <ChatBox />
      <SendMessage />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}
