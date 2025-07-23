import React, { useState } from 'react';
import { Car, CheckCircle } from 'lucide-react';
import Timer from './Timer';

const Calendar = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Select Rental Dates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            min={today}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            min={startDate || today}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;