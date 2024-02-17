// app.tsx
"use client"
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Chatbox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-200 rounded shadow">
      <div className="h-48 overflow-y-scroll border-b mb-4">
        {messages.map((message, index) => (
          <div key={index} className="py-2 text-black">{message}</div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} 
          className="flex-grow mr-2 border p-2 text-black"
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox

// ReactDOM.render(<Chatbox />, document.getElementById('root'));
