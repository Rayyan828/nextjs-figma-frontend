"use client"; // Tells Next.js that this component runs on the client side

import React, { useState } from "react"; // Importing React and useState hook

// Header component
export default function Header() {
  // State to manage the visibility of the tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white w-full shadow-sm border-b border-gray-100 px-4 py-2 flex justify-end items-center">
      {/* Right-aligned container for header content */}
      <div className="flex items-center space-x-2 relative">
        
        {/* Settings button with hover tooltip */}
        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
          onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when mouse leaves
        >
          {/* Settings button (SVG icon) */}
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>

          {/* Tooltip that appears when hovering over the settings button */}
          {showTooltip && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded-md shadow-lg">
              Settings
            </div>
          )}
        </div>

        {/* User profile avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
          {/* Profile image (placeholder) */}
          <img 
            src="/api/placeholder/32/32" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
