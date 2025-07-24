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
      <h3 className="text-xl font-bold mb-6 text-slate-900">
        Payment Details
      </h3>
      
      {/* Total Cost Display */}
      <div className="mb-6 p-4 bg-gradient-to-r from-orange-100 to-orange-150 rounded-xl border border-orange-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <span className="font-bold text-slate-900">Total Amount</span>
          </div>
          <span className="text-2xl font-black text-orange-600">${totalCost}</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Cardholder Name */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide">
            Cardholder Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name as on card"
            className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-3 focus:ring-orange-400/20 focus:border-orange-500 transition-all duration-200 text-slate-900 font-bold bg-white hover:border-slate-400 shadow-sm"
          />
        </div>

        {/* Card Number */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-3 focus:ring-orange-400/20 focus:border-orange-500 transition-all duration-200 text-slate-900 font-bold bg-white hover:border-slate-400 shadow-sm font-mono"
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide">
              Expiry Date
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              maxLength="5"
              className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-3 focus:ring-orange-400/20 focus:border-orange-500 transition-all duration-200 text-slate-900 font-bold bg-white hover:border-slate-400 shadow-sm font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wide">
              CVV
            </label>
            <input
              type="password"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="4"
              className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-3 focus:ring-orange-400/20 focus:border-orange-500 transition-all duration-200 text-slate-900 font-bold bg-white hover:border-slate-400 shadow-sm font-mono"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-3 bg-slate-100 rounded-lg border border-slate-300">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-slate-600" />
            <span className="text-xs text-slate-800 font-bold">
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
            <p className="text-sm text-slate-800 font-semibold">
              Please fill in all payment details to continue
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;