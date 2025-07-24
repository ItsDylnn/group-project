import React, { useState } from 'react';

const Timer = ({ startDate, endDate, dailyRate }) => {
  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not selected';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const duration = calculateDuration();
  const totalCost = duration * dailyRate;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black mb-6 text-black">
        Booking Summary
      </h3>

      <div className="space-y-4">
        {/* Date Range Display */}
        <div className="bg-slate-200 rounded-xl p-4 border border-slate-400">
          <div className="mb-3">
            <span className="font-black text-black">Rental Period</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-black font-black">Start:</span>
              <span className="font-black text-black">{formatDate(startDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black font-black">End:</span>
              <span className="font-black text-black">{formatDate(endDate)}</span>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center justify-between p-4 bg-orange-200 rounded-xl border border-orange-400">
          <span className="font-black text-black">Duration:</span>
          <span className="font-black text-orange-700 text-lg">
            {duration} {duration === 1 ? 'day' : 'days'}
          </span>
        </div>

        {/* Daily Rate */}
        <div className="flex items-center justify-between p-4 bg-slate-200 rounded-xl border border-slate-400">
          <span className="font-black text-black">Daily Rate:</span>
          <span className="font-black text-black text-lg">${dailyRate}</span>
        </div>

        {/* Calculation Breakdown */}
        {duration > 0 && (
          <div className="bg-slate-200 rounded-xl p-4 border border-slate-400">
            <div className="text-center text-sm text-black font-black mb-2">
              Calculation
            </div>
            <div className="text-center font-mono text-black font-black">
              {duration} days × ${dailyRate} = ${totalCost}
            </div>
          </div>
        )}

        {/* Total Cost */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/50 to-orange-300/50 rounded-xl blur-sm"></div>
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between text-white">
              <span className="font-black text-lg">Total Cost:</span>
              <span className="font-black text-2xl">${totalCost}</span>
            </div>
            {duration > 1 && (
              <div className="mt-2 text-white text-sm text-right font-black">
                Average: ${(totalCost / duration).toFixed(2)} per day
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        {duration > 0 && (
          <div className="bg-blue-200 rounded-xl p-4 border border-blue-400">
            <span className="text-sm font-black text-black">
              {duration >= 7 ? '🎉 Extended rental - Great choice!' : 
               duration >= 3 ? '✨ Multi-day rental' : 
               '⚡ Short-term rental'}
            </span>
          </div>
        )}
      </div>

      {/* Empty State */}
      {duration === 0 && (
        <div className="text-center py-8">
          <p className="text-black font-black text-lg">
            Select your rental dates to see pricing details
          </p>
        </div>
      )}
    </div>
  );
};


export default Timer;