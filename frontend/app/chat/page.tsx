// app.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Link from 'next/link';
import Header from '../components/header.js';
// import Checkbox from '../components/checkbox';

const Chatbox = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const chatboxRef = useRef<HTMLDivElement>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: input, sender: 'User' }]);
      setInput('');

      try {
        const response = await getData();
        setAiResponse(response);
        setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'AI' }]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAiResponse('');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll down the chatbox when messages are added
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const getData = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/", { text: input, isDiagnosis: isChecked });
      const return_data = response.data;
      return return_data["message"];
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <div>
      {/* Chatbox container */}
      <div className="container mx-auto my-8 p-4 bg-gray-200 rounded shadow">
        <div ref={chatboxRef} className="flex flex-col h-full overflow-y-scroll border-b mb-4">
          {messages.map((message, index) => (
            <div key={index} className="py-2 whitespace-pre-line">
              <span className={`font-bold ${message.sender === 'User' ? 'text-blue-500' : 'text-green-500'}`}>
                {`${message.sender}: `}
              </span>
              {message.text}
            </div>
          ))}
        </div>

        <div className="flex p-4 border">
          <label></label>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow mr-2 border rounded p-2 text-black font-mono"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-whit font-mono px-4 py-2 rounded border rounded w-20 h-12 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
          >
            Send
          </button>
          <div>
            <label className="flex items-center text-indigo-600">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              Disease Diagnosis?
            </label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chatbox;