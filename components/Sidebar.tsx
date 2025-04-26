"use client";

import React from "react";

export default function Sidebar() {
  const menuItems = [
    { name: "Home", active: true },
    { name: "Stages & Checklist", active: false },
    { name: "Upload Docs", active: false },
    { name: "Preferred Vendors", active: false },
    { name: "Tech Stack", active: false },
    { name: "Targets", active: false },
    { name: "Zee Sales Targets", active: false },
    { name: "MAI Settings", active: false },
    { name: "Pending Questions", active: false, count: 3 }
  ];

  return (
    <div className="h-screen bg-[#0A6C85] w-64 flex flex-col">
      {/* Main navigation menu */}
      <div className="flex-grow p-3 space-y-1">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between py-3 px-4 rounded-md cursor-pointer ${
              item.active ? "bg-[#09596F]" : "hover:bg-[#09596F]/50"
            }`}
          >
            <span className="text-sm text-white">{item.name}</span>
            {item.count && (
              <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-xs font-medium text-[#0A6C85]">{item.count}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Logout button */}
      <div className="p-4 border-t border-[#09596F]">
        <button className="text-sm text-white hover:text-blue-200 px-4 py-2">
          Logout
        </button>
      </div>
    </div>
  );
}
