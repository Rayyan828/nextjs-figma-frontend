"use client";

import React from "react";

// AccountProgress component to show user's progress in account setup
export default function AccountProgress() {
  // Hardcoded progress percentage
  const progressPercentage = 85;

  // List of completed steps
  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true },
  ];

  // List of remaining steps
  const remainingSteps = [
    { name: "Financial Integration", completed: false },
    { name: "Final Review", completed: false },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm max-w-[350px] h-[392px]">
      {/* Title */}
      <h2 className="text-[16px] font-semibold text-gray-800 mb-3 text-center">
        Account Progress
      </h2>

      {/* Progress Circle Section */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-20 h-20 mb-2">
          {/* Background Circle */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EBF5FF" // Light background stroke
              strokeWidth="8"
            />
            {/* Foreground Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#2196F3" // Blue colored progress stroke
              strokeWidth="8"
              strokeDasharray="251.2" // Circumference of circle
              strokeDashoffset={251.2 * (100 - progressPercentage) / 100} // Dynamic offset based on progress
              strokeLinecap="round"
              transform="rotate(-90, 50, 50)" // Rotate to start progress from top
            />
          </svg>

          {/* Percentage Text in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[18px] font-bold text-gray-800">{progressPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Completed Steps Section */}
      <div className="bg-gray-100 rounded-md p-3 mb-3">
        <h3 className="text-[14px] font-semibold text-gray-700 mb-2">Steps Completed</h3>
        <div className="space-y-1">
          {/* List each completed step */}
          {completedSteps.map((step, i) => (
            <div key={i} className="flex justify-between items-center">
              {/* Step name */}
              <span className="text-[12px] text-gray-700">{step.name}</span>
              {/* Green checkmark icon */}
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Remaining Steps Section */}
      <div className="bg-gray-100 rounded-md p-3">
        <h3 className="text-[14px] font-semibold text-gray-700 mb-2">Steps Remaining</h3>
        <div className="space-y-1">
          {/* List each remaining step */}
          {remainingSteps.map((step, i) => (
            <div key={i} className="flex justify-between items-center">
              {/* Step name */}
              <span className="text-[12px] text-gray-700">{step.name}</span>
              {/* Empty circle indicating incomplete */}
              <div className="w-4 h-4 rounded-full bg-white border border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
