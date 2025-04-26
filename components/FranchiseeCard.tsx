"use client"; // Tells Next.js that this component should run on the client side

import React from "react";

// Define a type for each stage's data
type StageData = {
  id: number;
  name: string;
  count: number;
  color: string;
};

// Main component
export default function FranchiseesOnboard() {
  // Static data for total franchisees and growth percentage
  const totalFranchisees = 14;
  const growthPercentage = 7.4;
  
  // Stages data: each stage has a name, count of franchisees, and color
  const stages: StageData[] = [
    { id: 1, name: "Stage 1 (Initial Inquiry)", count: 2, color: "#1E88C1" },
    { id: 2, name: "Stage 2 (Document Submission)", count: 7, color: "#38BDF8" },
    { id: 3, name: "Stage 3 (Training)", count: 5, color: "#BAE6FD" }
  ];
  
  // Calculate the total number of franchisees across all stages
  const totalCount = stages.reduce((sum, s) => sum + s.count, 0);

  return (
    // Card container
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm max-w-[370px] h-[200px]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-base">Total Franchisees Onboard</h2>
      </div>
      
      {/* Franchisees count and growth percentage */}
      <div className="flex items-center mb-3">
        {/* Total number */}
        <span className="text-2xl font-bold mr-2">{totalFranchisees}</span>

        {/* Growth badge */}
        <div className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full font-medium flex items-center">
          <svg className="w-3 h-3 mr-0.5" viewBox="0 0 12 12" fill="none">
            {/* Up arrow icon */}
            <path d="M6 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2.5 6L6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {growthPercentage}%
        </div>

        {/* Profile images (mocked placeholders) */}
        <div className="flex -space-x-1.5 ml-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
            >
              {/* Placeholder image */}
              <img
                src={`/api/placeholder/20/20`}
                alt={`F${i+1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* Extra franchisees count */}
          <div className="w-5 h-5 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-700">
            +7
          </div>
        </div>
      </div>
      
      {/* Progress bar representing stages */}
      <div className="mb-3">
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden flex">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              style={{
                width: `${(stage.count / totalCount) * 100}%`, // Width proportional to the number of franchisees
                backgroundColor: stage.color
              }}
              className={`${idx === 0 ? 'rounded-l-full' : ''} ${idx === stages.length - 1 ? 'rounded-r-full' : ''}`} // Round start and end if first/last
            />
          ))}
        </div>
      </div>
      
      {/* Stage labels and counts */}
      <div className="space-y-1">
        {stages.map((stage) => (
          <div key={stage.id} className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              {/* Colored dot for the stage */}
              <span
                className="w-2 h-2 rounded-full mr-1"
                style={{ backgroundColor: stage.color }}
              />
              {/* Stage name */}
              <span className="text-gray-700">{stage.name}</span>
            </div>

            {/* Stage count (zero-padded if less than 10) */}
            <span className="font-medium text-gray-800">
              {stage.count < 10 ? `0${stage.count}` : stage.count}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
