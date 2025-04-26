"use client"; // This tells Next.js that this component runs on the client side

import React from "react"; // Importing React for JSX syntax

// Defining the type for a question object
type Question = {
  id: string; // Unique identifier for each question
  user: { name: string; username: string; avatar: string }; // User details (name, username, and avatar)
  question: string; // The actual question being asked
  timeAgo: string; // Time elapsed since the question was asked
};

export default function PendingQuestions() {
  // Array holding a list of questions to be displayed
  const questions: Question[] = [
    { id: "1", user: { name: "Phoenix Baker", username: "phoenix", avatar: "" }, question: "What are the requirements for opening a new store?", timeAgo: "5m ago" },
    { id: "2", user: { name: "Koray Okumus", username: "koray", avatar: "" }, question: "How do I manage inventory effectively?", timeAgo: "4h ago" }
  ];

  // Function to generate a fallback avatar URL when the avatar image is empty
  const getFallbackAvatar = (name: string) =>
    `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random&size=64`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 ml-3 ml-0 h-[180px] flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2">
        {/* Title for the section */}
        <h2 className="text-xs font-semibold text-gray-800">Pending Qs</h2>
        {/* Badge showing the number of pending questions */}
        <div className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-[10px] font-semibold">
          {questions.length < 10 ? `0${questions.length}` : questions.length}
        </div>
      </div>

      {/* List of pending questions */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {questions.map((q) => (
          <div key={q.id} className="border-b border-gray-100 pb-1">
            <div className="flex items-start">
              {/* Avatar and status dot */}
              <div className="relative mr-2">
                {/* Status dot indicating the question's activity */}
                <span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-0 left-0"></span>
                {/* User avatar, uses a fallback if avatar is not provided */}
                <img
                  src={getFallbackAvatar(q.user.name)} // Generates a default avatar based on user's name
                  alt={q.user.name}
                  className="w-7 h-7 rounded-full"
                />
              </div>
              {/* User and question details */}
              <div className="flex-1">
                {/* User name and username */}
                <div className="flex items-center mb-0.5">
                  <p className="text-xs font-semibold text-gray-800 leading-tight">{q.user.name}</p>
                  <span className="text-[10px] text-gray-700 ml-1">@{q.user.username}</span>
                </div>
                {/* The actual question */}
                <p className="text-xs text-gray-700 mb-0.5 leading-tight">{q.question}</p>
                {/* Time ago text (how long since the question was asked) */}
                <p className="text-[10px] text-gray-700">{q.timeAgo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section with a button to expand or interact with more questions */}
      <div className="mt-1 text-center">
        <button className="text-blue-700 hover:text-blue-800">
          {/* Down arrow icon for interaction */}
          <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
