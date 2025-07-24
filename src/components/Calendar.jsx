import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Timer from './Timer';

const Calendar = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label style={{
            display: 'block', 
            fontSize: '14px', 
            fontWeight: '900', 
            color: '#000000', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            marginBottom: '8px'
          }}>
            START DATE
          </label>
          <input
            type="date"
            value={startDate}
            min={today}
            onChange={(e) => onStartDateChange(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              border: '2px solid #94a3b8',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '900',
              color: '#000000',
              backgroundColor: '#ffffff',
              outline: 'none'
            }}
          />
          {startDate && (
            <p style={{
              fontSize: '12px',
              color: '#000000',
              backgroundColor: '#e2e8f0',
              padding: '4px 12px',
              borderRadius: '20px',
              display: 'inline-block',
              fontWeight: '900'
            }}>
              ✓ Start date selected
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          <label style={{
            display: 'block', 
            fontSize: '14px', 
            fontWeight: '900', 
            color: '#000000', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            marginBottom: '8px'
          }}>
            END DATE
          </label>
          <input
            type="date"
            value={endDate}
            min={startDate || today}
            onChange={(e) => onEndDateChange(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              border: '2px solid #94a3b8',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '900',
              color: '#000000',
              backgroundColor: '#ffffff',
              outline: 'none'
            }}
          />
          {endDate && (
            <p style={{
              fontSize: '12px',
              color: '#000000',
              backgroundColor: '#e2e8f0',
              padding: '4px 12px',
              borderRadius: '20px',
              display: 'inline-block',
              fontWeight: '900'
            }}>
              ✓ End date selected
            </p>
          )}
        </div>
      </div>
      
      {startDate && endDate && (
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-200 to-orange-250 rounded-xl border border-orange-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orange-700" />
              <span style={{fontWeight: '900', color: '#000000'}}>Dates Confirmed</span>
            </div>
            <div className="text-right">
              <p style={{fontSize: '14px', fontWeight: '900', color: '#000000'}}>
                Duration: <span style={{fontWeight: '900', color: '#c2410c'}}>
                  {Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} days
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      
      {startDate && !endDate && (
        <div className="mt-6 p-4 bg-blue-200 rounded-xl border border-blue-400">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
            <span style={{fontWeight: '900', color: '#000000'}}>Please select an end date</span>
          </div>
        </div>
      )}
      
      {!startDate && (
        <div className="mt-6 p-4 bg-slate-200 rounded-xl border border-slate-400">
          <span style={{fontWeight: '900', color: '#000000'}}>Choose your rental period to continue</span>
        </div>
      )}
    </div>
  );
};


export default Calendar;