import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Car, CheckCircle } from 'lucide-react';
import Calendar from './components/Calendar';
import Timer from './components/Timer';
import Checkout from './components/Checkout';

function App() {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Mock car data
  const selectedCar = {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2023,
    dailyRate: 1200
  };

  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const duration = calculateDuration();
  const totalCost = duration * selectedCar.dailyRate;

  const handleConfirmBooking = async (paymentDetails) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setBookingConfirmed(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleNewBooking = () => {
    setStep(1);
    setStartDate('');
    setEndDate('');
    setBookingConfirmed(false);
  };

  const canProceed = startDate && endDate && duration > 0;

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">Your luxury car rental has been booked successfully.</p>
            <button
              onClick={handleNewBooking}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">PremiumWheels Booking</h1>
          <p className="text-gray-600">Book your luxury car rental experience</p>
        </div>

        {/* Selected Car Display */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">Selected Vehicle</h3>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-16 bg-gray-200 rounded-md flex items-center justify-center">
              <Car className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h4 className="font-semibold">{selectedCar.brand} {selectedCar.model}</h4>
              <p className="text-gray-600">{selectedCar.year} • ${selectedCar.dailyRate}/day</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Calendar */}
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />

            {/* Step 2: Checkout (only show when dates are selected) */}
            {canProceed && step >= 2 && (
              <Checkout
                onConfirm={handleConfirmBooking}
                totalCost={totalCost}
                isLoading={isLoading}
              />
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {canProceed && (
              <Timer
                startDate={startDate}
                endDate={endDate}
                dailyRate={selectedCar.dailyRate}
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8">
          {step === 1 && canProceed && (
            <button
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 font-semibold"
            >
              Continue to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;