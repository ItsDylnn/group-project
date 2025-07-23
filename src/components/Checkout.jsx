import React, { useState } from 'react';
import { Car, CheckCircle } from 'lucide-react';
import Calendar from './Calendar';
import Timer from './Timer';

const Checkout = ({ onConfirm, totalCost, isLoading }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Cardholder Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength="3"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 disabled:opacity-50 font-semibold"
        >
          {isLoading ? 'Processing...' : `Confirm Booking - $${totalCost}`}
        </button>
      </div>
    </div>
  );
};
export default Checkout;