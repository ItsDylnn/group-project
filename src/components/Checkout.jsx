import React, { useState } from 'react';
import { CheckCircle, CreditCard, User, Lock, DollarSign } from 'lucide-react';

const Checkout = ({ onConfirm, totalCost, isLoading }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCvv(value);
  };

  const handleSubmit = () => {
    if (cardNumber && expiryDate && cvv && name) {
      onConfirm({
        cardNumber,
        expiryDate,
        cvv,
        name,
        amount: totalCost
      });
    }
  };

  const isFormValid = cardNumber && expiryDate && cvv && name;

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-300">
      <h3 style={{fontSize: '1.25rem', fontWeight: '900', color: '#000000', marginBottom: '1.5rem'}}>
        Payment Details
      </h3>
      
      {/* Total Cost Display */}
      <div className="mb-6 p-4 bg-gradient-to-r from-orange-100 to-orange-150 rounded-xl border border-orange-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <span style={{fontWeight: '900', color: '#000000'}}>Total Amount</span>
          </div>
          <span style={{fontSize: '1.5rem', fontWeight: '900', color: '#ea580c'}}>${totalCost}</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Cardholder Name */}
        <div className="space-y-2">
          <div style={{
            fontSize: '14px', 
            fontWeight: '900', 
            color: '#000000', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            marginBottom: '8px',
            display: 'block'
          }}>
            Cardholder Name
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name as on card"
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
        </div>

        {/* Card Number */}
        <div className="space-y-2">
          <div style={{
            fontSize: '14px', 
            fontWeight: '900', 
            color: '#000000', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            marginBottom: '8px',
            display: 'block'
          }}>
            Card Number
          </div>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            style={{
              width: '100%',
              padding: '16px',
              border: '2px solid #94a3b8',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '900',
              color: '#000000',
              backgroundColor: '#ffffff',
              outline: 'none',
              fontFamily: 'monospace'
            }}
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div style={{
              fontSize: '14px', 
              fontWeight: '900', 
              color: '#000000', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              marginBottom: '8px',
              display: 'block'
            }}>
              Expiry Date
            </div>
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              maxLength="5"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #94a3b8',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '900',
                color: '#000000',
                backgroundColor: '#ffffff',
                outline: 'none',
                fontFamily: 'monospace'
              }}
            />
          </div>
          <div className="space-y-2">
            <div style={{
              fontSize: '14px', 
              fontWeight: '900', 
              color: '#000000', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              marginBottom: '8px',
              display: 'block'
            }}>
              CVV
            </div>
            <input
              type="password"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="4"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #94a3b8',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '900',
                color: '#000000',
                backgroundColor: '#ffffff',
                outline: 'none',
                fontFamily: 'monospace'
              }}
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-3 bg-slate-100 rounded-lg border border-slate-300">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-slate-600" />
            <span style={{fontSize: '12px', color: '#000000', fontWeight: '900'}}>
              Your payment information is encrypted and secure
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading || !isFormValid}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform shadow-lg relative overflow-hidden ${
            isLoading || !isFormValid
              ? 'bg-slate-400 text-slate-700 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-105 hover:shadow-xl'
          }`}
        >
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing Payment...</span>
              </div>
            </div>
          )}
          {!isLoading && (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Confirm Booking - ${totalCost}</span>
            </div>
          )}
        </button>

        {!isFormValid && (
          <div className="text-center">
            <p style={{fontSize: '14px', color: '#000000', fontWeight: '900'}}>
              Please fill in all payment details to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;