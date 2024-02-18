// app.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Link from 'next/link';
import Header from '../components/header.js';
// import Checkbox from '../components/checkbox';


// function getData() {
//   const [ai_response, setAi_response] = useState(null)
//   axios({
//     method: "GET",
//     url:"/",
//   })
//   .then((response) => {
//     const res = response.data
//     setAi_response(res.response)
//     return ai_response;
//   }).catch((error) => {
//     if (error.response) {
//       console.log(error.response)
//       console.log(error.response.status)
//       console.log(error.response.headers)
//       }
//   })}


const Chatbox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string | null>(null); // State for AI response-
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const chatboxRef = useRef<HTMLDivElement>(null);
  const answersRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput('');

      try {
        const response = await getData();
        setAiResponse(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAiResponse('');
      }
    }

    console.log(aiResponse)
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

  ///////
  const getData = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/", {text: input, isDiagnosis: isChecked});
      const return_data = response.data;
      console.log("answer: ", return_data);
      return return_data["message"]
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  //////////

  return (
    <div>
      {/* Chatbox container */}
      <div className="container mx-auto my-8 p-4 bg-gray-200 rounded shadow">
        <div ref={chatboxRef} className="h-48 overflow-y-scroll border-b mb-4">
          {messages.map((message, index) => (
            <div key={index} className="py-2 text-black whitespace-pre-line">{message}</div>
          ))}
        </div>
        
        <div className="flex p-4">
          <label ></label>
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
          <div>
            <label className="flex items-center text-indigo-600"><input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            Disease Diagnosis?</label>
          </div>
        </div>

        <div ref={answersRef} className="h-48 overflow-y-scroll border-b mb-4 text-black">
          {aiResponse}

        </div>
      </div>
    </div>
  );
};

export default Chatbox

// ReactDOM.render(<Chatbox />, document.getElementById('root'));