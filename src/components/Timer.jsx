import React, { useState } from 'react';


const Timer = ({ startDate, endDate, dailyRate }) => {
  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const duration = calculateDuration();
  const totalCost = duration * dailyRate;

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Rental Duration</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Duration:</span>
          <span className="font-semibold">{duration} days</span>
        </div>
        <div className="flex justify-between">
          <span>Daily Rate:</span>
          <span className="font-semibold">${dailyRate}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total Cost:</span>
          <span className="text-blue-600">${totalCost}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;