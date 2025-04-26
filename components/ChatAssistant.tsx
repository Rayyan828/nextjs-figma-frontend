"use client";

import React, { useState } from "react";

// AIChatAssistant component for handling user input and displaying the assistant UI
export default function AIChatAssistant() {
  // State to manage the message typed by the user
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload on form submit
    console.log("Message sent:", message); // Logs the message to the console (can be replaced with real API call)
    setMessage(""); // Clears the input after sending
  };

  return (
    <div className="rounded-lg max-w-[1000px] h-[180px] overflow-hidden p-4">
      
      {/* Header Section with Icon and Title */}
      <div className="flex flex-col items-center justify-center mb-4">
        <svg
          width="40"
          height="24"
          viewBox="0 0 40 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2"
        >
          {/* Assistant Icon SVG */}
          <path
            d="M32.0435 0C27.6429 0 24.0869 3.55603 24.0869 7.95652C24.0869 8.27196 24.1037 8.58237 24.1503 8.8875C24.102 8.88693 24.0553 8.88462 24.0069 8.88462C19.6063 8.88462 16.0503 12.4406 16.0503 16.8411C16.0503 21.2417 19.6063 24.7977 24.0069 24.7977C28.4074 24.7977 31.9634 21.2417 31.9634 16.8411C31.9634 16.5257 31.9466 16.2153 31.9 15.9101C31.9483 15.9107 31.995 15.913 32.0435 15.913C36.444 15.913 40 12.357 40 7.95652C40 3.55603 36.444 0 32.0435 0ZM32.0435 3.4783C34.5293 3.4783 36.5217 5.47071 36.5217 7.95652C36.5217 10.4423 34.5293 12.4348 32.0435 12.4348C29.5576 12.4348 27.5652 10.4423 27.5652 7.95652C27.5652 5.47071 29.5576 3.4783 32.0435 3.4783ZM24.0069 12.3629C26.4927 12.3629 28.4851 14.3553 28.4851 16.8411C28.4851 19.3269 26.4927 21.3194 24.0069 21.3194C21.5211 21.3194 19.5286 19.3269 19.5286 16.8411C19.5286 14.3553 21.5211 12.3629 24.0069 12.3629Z"
            fill="#3B82F6"
          />
          <path
            d="M15.9565 0C11.556 0 8 3.55603 8 7.95652C8 8.27196 8.01675 8.58237 8.06342 8.8875C8.01508 8.88693 7.96842 8.88462 7.91999 8.88462C3.51942 8.88462 0 12.4406 0 16.8411C0 21.2417 3.51942 24.7977 7.91999 24.7977C12.3206 24.7977 15.913 21.2417 15.913 16.8411C15.913 16.5257 15.8962 16.2153 15.8496 15.9101C15.8979 15.9107 15.9446 15.913 15.9931 15.913C20.3936 15.913 24 12.357 24 7.95652C24 3.55603 20.3936 0 15.9565 0ZM15.9565 3.4783C18.4423 3.4783 20.4348 5.47071 20.4348 7.95652C20.4348 10.4423 18.4423 12.4348 15.9565 12.4348C13.4707 12.4348 11.4783 10.4423 11.4783 7.95652C11.4783 5.47071 13.4707 3.4783 15.9565 3.4783ZM7.91999 12.3629C10.4058 12.3629 12.3982 14.3553 12.3982 16.8411C12.3982 19.3269 10.4058 21.3194 7.91999 21.3194C5.43419 21.3194 3.44177 19.3269 3.44177 16.8411C3.44177 14.3553 5.43419 12.3629 7.91999 12.3629Z"
            fill="#93C5FD"
          />
        </svg>

        {/* Assistant Welcome Title */}
        <h2 className="text-lg font-medium">Welcome to AI Chat Assistant</h2>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex items-center mt-auto">
        {/* Text Input Field */}
        <input
          type="text"
          value={message} // Controlled input value
          onChange={(e) => setMessage(e.target.value)} // Update message on input
          placeholder="Ask your question here..."
          className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="ml-2 p-2 bg-gray-100 rounded-full text-gray-500 hover:text-blue-500"
        >
          {/* Arrow Icon for Send Button */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
      
    </div>
  );
}
