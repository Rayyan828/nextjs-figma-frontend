"use client"; // Tells Next.js that this component runs on the client side

import React from "react"; // Importing React

// KeyInsights component that displays key business insights and feedback
export default function KeyInsights() {
  const salesGrowth = 10; // Sales growth percentage
  const feedbackMessage = "Franchisees are requesting more detailed training materials."; // Feedback message

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm max-w-[370px] h-[200px]">
      {/* Title for the component */}
      <h2 className="text-sm font-semibold text-gray-800 mb-2">Insights & Feedback</h2>
      
      {/* Sales Growth section */}
      <div className="flex items-center mb-3">
        <div className="mr-2">
          {/* Display the sales growth percentage */}
          <div className="text-xl font-bold">{salesGrowth}%</div>
          {/* Label for the sales growth */}
          <div className="text-xs text-gray-500">Sales Growth</div>
        </div>
        <div className="ml-auto p-1 bg-blue-50 rounded-full">
          {/* Success icon displayed when sales growth is positive */}
          <div className="p-1 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Top Performer section */}
      <div className="mb-2">
        <div className="text-xs font-medium text-gray-500 mb-1">Top Performer</div>
        {/* Progress bar indicating top performer */}
        <div className="w-full bg-gray-100 h-2 rounded-full mb-1">
          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '70%' }} /> {/* Progress represented as 70% */}
        </div>
      </div>
      
      {/* Feedback section */}
      <div className="border-t pt-2 mt-2">
        <h3 className="text-xs font-semibold mb-1">Feedback</h3>
        <div className="flex items-start">
          {/* Blue dot indicator for feedback */}
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 mr-2" />
          {/* Display feedback message */}
          <p className="text-xs text-gray-600 leading-tight">{feedbackMessage}</p>
        </div>
      </div>
    </div>
  );
}
