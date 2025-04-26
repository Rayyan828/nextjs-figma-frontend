"use client";
import React from "react";

export default function ProspectLeads() {
  const leads = [
    { id: 1, name: "Wade Warren", avatar: "/avatars/wade.jpg", stage: "Initial Inquiry", initial: "W" },
    { id: 2, name: "Ava Wright", avatar: "/avatars/ava.jpg", stage: "Initial Inquiry", initial: "A" },
    { id: 3, name: "Cody Fisher", avatar: "/avatars/cody.jpg", stage: "Initial Inquiry", initial: "C" }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm max-w-[380px] h-[180px]">
      <h2 className="text-[13px] font-semibold mb-2 text-gray-800">Prospect Leads</h2>

      <div className="space-y-1">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-gray-100 px-2 py-1.5 rounded flex items-center justify-between">
            {/* Profile and Lead Info */}
            <div className="flex items-center gap-2">
              {/* Profile Initial */}
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 text-gray-500 flex items-center justify-center">
                <span className="text-[10px] font-semibold">{lead.initial}</span>
              </div>

              {/* Lead Info */}
              <div className="flex flex-col">
                <h3 className="text-[11px] font-medium text-gray-800 leading-tight">{lead.name}</h3>
              </div>
            </div>

            {/* Stage Section */}
            <div className="flex items-center">
              <div className="bg-gray-200 text-[9px] px-2 py-0.5 rounded text-gray-600 whitespace-nowrap">
                {lead.stage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
