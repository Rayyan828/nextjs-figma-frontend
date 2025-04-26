"use client";

import React from "react";

type Question = {
  id: string;
  user: { name: string; username: string; avatar: string };
  question: string;
  timeAgo: string;
};

export default function PendingQuestions() {
  const questions: Question[] = [
    { id: "1", user: { name: "Phoenix Baker", username: "phoenix", avatar: "" }, question: "What are the requirements for opening a new store?", timeAgo: "5m ago" },
    { id: "2", user: { name: "Koray Okumus", username: "koray", avatar: "" }, question: "How do I manage inventory effectively?", timeAgo: "4h ago" }
  ];

  const getFallbackAvatar = (name: string) =>
    `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random&size=64`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 ml-3 ml-0 h-[180px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-semibold text-gray-800">Pending Qs</h2>
        <div className="bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-[10px] font-semibold">
          {questions.length < 10 ? `0${questions.length}` : questions.length}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {questions.map((q) => (
          <div key={q.id} className="border-b border-gray-100 pb-1">
            <div className="flex items-start">
              <div className="relative mr-2">
                <span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-0 left-0"></span>
                <img
                  src={getFallbackAvatar(q.user.name)}
                  alt={q.user.name}
                  className="w-7 h-7 rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-0.5">
                  <p className="text-xs font-semibold text-gray-800 leading-tight">{q.user.name}</p>
                  <span className="text-[10px] text-gray-700 ml-1">@{q.user.username}</span>
                </div>
                <p className="text-xs text-gray-700 mb-0.5 leading-tight">{q.question}</p>
                <p className="text-[10px] text-gray-700">{q.timeAgo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-1 text-center">
        <button className="text-blue-700 hover:text-blue-800">
          <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
