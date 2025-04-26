"use client";

import React from "react";

export default function FinancialWellbeing() {
  const totalFranchisees = 20;
  const growthPercentage = 2.1;
  const targetAmount = 500000;
  const currentAmount = 450000;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm max-w-[370px] h-[180px]">
      <div className="px-2 pb-2 border-b border-gray-100">
        <h2 className="text-[13px] font-semibold text-gray-800">Financial Wellbeing</h2>
      </div>

      <div className="p-2">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[18px] font-bold text-gray-900">{totalFranchisees}</span>
            <div className="flex items-center bg-green-50 text-green-800 rounded-full px-1.5 py-0.5 text-[10px]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-0.5"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span>{growthPercentage}%</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 leading-tight">Total Franchisees</p>
        </div>

        <div className="grid grid-cols-2 gap-1">
          <div className="bg-gray-100 rounded-md px-2 py-1 flex flex-col items-start">
            <span className="text-[10px] text-gray-600 mb-0.5">Target</span>
            <span className="text-[13px] font-semibold text-gray-800">
              {formatCurrency(targetAmount)}
            </span>
          </div>
          <div className="bg-gray-100 rounded-md px-2 py-1 flex flex-col items-start">
            <span className="text-[10px] text-gray-600 mb-0.5">Current</span>
            <span className="text-[13px] font-semibold text-gray-800">
              {formatCurrency(currentAmount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
