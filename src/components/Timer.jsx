import React, { useState } from 'react'

const Timer = ({ startDate, endDate, dailyRate }) => {
  const calculateDuration = () => {
    if (!startDate || !endDate) return 0
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end - start)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Not selected'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const duration = calculateDuration()
  const totalCost = duration * dailyRate

 
  const blackTextStyle = { 
    color: '#0f172a', 
    fontWeight: '900' 
  }
  
  const whiteTextStyle = { 
    color: '#ffffff', 
    fontWeight: '900' 
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '900', 
        marginBottom: '1.5rem', 
        color: '#0f172a' 
      }}>
        Booking Summary
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
     
        <div style={{ 
          backgroundColor: '#e2e8f0', 
          borderRadius: '0.75rem', 
          padding: '1rem', 
          border: '1px solid #94a3b8' 
        }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={blackTextStyle}>Rental Period</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={blackTextStyle}>Start:</span>
              <span style={blackTextStyle}>{formatDate(startDate)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={blackTextStyle}>End:</span>
              <span style={blackTextStyle}>{formatDate(endDate)}</span>
            </div>
          </div>
        </div>

      
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '1rem', 
          backgroundColor: '#fed7aa', 
          borderRadius: '0.75rem', 
          border: '1px solid #fb923c' 
        }}>
          <span style={blackTextStyle}>Duration:</span>
          <span style={{ 
            fontWeight: '900', 
            color: '#c2410c', 
            fontSize: '1.125rem' 
          }}>
            {duration} {duration === 1 ? 'day' : 'days'}
          </span>
        </div>

       
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '1rem', 
          backgroundColor: '#e2e8f0', 
          borderRadius: '0.75rem', 
          border: '1px solid #94a3b8' 
        }}>
          <span style={blackTextStyle}>Daily Rate:</span>
          <span style={{ ...blackTextStyle, fontSize: '1.125rem' }}>${dailyRate}</span>
        </div>

      
        {duration > 0 && (
          <div style={{ 
            backgroundColor: '#e2e8f0', 
            borderRadius: '0.75rem', 
            padding: '1rem', 
            border: '1px solid #94a3b8' 
          }}>
            <div style={{ 
              textAlign: 'center', 
              fontSize: '0.875rem', 
              ...blackTextStyle, 
              marginBottom: '0.5rem' 
            }}>
              Calculation
            </div>
            <div style={{ 
              textAlign: 'center', 
              fontFamily: 'monospace', 
              ...blackTextStyle 
            }}>
              {duration} days × ${dailyRate} = ${totalCost.toLocaleString()}
            </div>
          </div>
        )}

       
        <div style={{ position: 'relative' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)', 
            padding: '1.5rem', 
            borderRadius: '0.75rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}>
              <span style={{ ...whiteTextStyle, fontSize: '1.125rem' }}>Total Cost:</span>
              <span style={{ ...whiteTextStyle, fontSize: '1.5rem' }}>${totalCost.toLocaleString()}</span>
            </div>
            {duration > 1 && (
              <div style={{ 
                marginTop: '0.5rem', 
                color: '#ffffff', 
                fontSize: '0.875rem', 
                textAlign: 'right', 
                fontWeight: '900' 
              }}>
                Average: ${(totalCost / duration).toFixed(2)} per day
              </div>
            )}
          </div>
        </div>

       
        {duration > 0 && (
          <div style={{ 
            backgroundColor: '#bfdbfe', 
            borderRadius: '0.75rem', 
            padding: '1rem', 
            border: '1px solid #60a5fa' 
          }}>
            <span style={{ fontSize: '0.875rem', ...blackTextStyle }}>
              {duration >= 7 ? '🎉 Extended rental - Great choice!' : 
               duration >= 3 ? '✨ Multi-day rental' : 
               '⚡ Short-term rental'}
            </span>
          </div>
        )}
      </div>

   
      {duration === 0 && (
        <div style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <p style={{ ...blackTextStyle, fontSize: '1.125rem' }}>
            Select your rental dates to see pricing details
          </p>
        </div>
      )}
    </div>
  )
}


export default function App() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <Timer 
        startDate="2025-07-26" 
        endDate="2025-07-29" 
        dailyRate={1500}
      />
    </div>
  )
}