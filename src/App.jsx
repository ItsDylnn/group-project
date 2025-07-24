import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Car, CheckCircle } from 'lucide-react';
import Calendar from './components/Calendar';
import Timer from './components/Timer';
import Checkout from './components/Checkout';
import ChooseCar from './components/ChooseCar';

function App() {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const duration = calculateDuration();
  const totalCost = selectedCar ? duration * selectedCar.dailyRate : 0;

  const handleConfirmBooking = () => {
    setIsLoading(true);
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
    setSelectedCar(null);
  };

  const canProceed = startDate && endDate && duration > 0;

  const BookingPage = () => {
    if (!selectedCar) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Background decorations - more subtle */}
          <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-orange-200/15 to-slate-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-slate-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
          
          <div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-md w-full border border-slate-300 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h2 style={{fontSize: '1.5rem', fontWeight: '900', color: '#000000', marginBottom: '0.75rem'}}>No Car Selected</h2>
            <p style={{fontWeight: '900', color: '#000000', marginBottom: '1.5rem'}}>Please choose a car first to start your premium booking experience.</p>
            <Link
              to="/choose-car"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Choose Your Car
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-50 py-8 relative overflow-hidden">
        {/* Background decorations - more subtle */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-slate-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-slate-200/15 to-orange-200/15 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-200/12 to-slate-300/12 rounded-full blur-3xl translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 style={{fontSize: '2.25rem', fontWeight: '900', marginBottom: '1rem'}}>
              <span style={{color: '#000000'}}>Premium</span>
              <span style={{color: '#ea580c'}}>Wheels</span>
              <span style={{color: '#000000'}}> Booking</span>
            </h1>
            <p style={{fontWeight: '900', fontSize: '1.125rem', color: '#000000'}}>Experience luxury on every journey</p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-slate-300 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100/30 to-slate-100/30 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-xl font-black mb-6 text-black flex items-center justify-center relative z-10" style={{color: '#000000', fontWeight: '900'}}>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                <Car className="w-5 h-5 text-white" />
              </div>
              Selected Vehicle
              <div className="ml-4 px-3 py-1 bg-orange-200 rounded-full text-xs font-black border border-orange-400" style={{color: '#000000', fontWeight: '900'}}>
                Premium Selection
              </div>
            </h3>
            <div className="flex items-center justify-center space-x-6 relative z-10">
              <div className="w-32 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-xl flex items-center justify-center border border-orange-400 shadow-sm">
                <Car className="w-12 h-12 text-orange-700" />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-black mb-1" style={{color: '#000000', fontWeight: '900'}}>
                  {selectedCar.brand} {selectedCar.model}
                </h4>
                <p className="font-black mb-2" style={{color: '#000000', fontWeight: '900'}}>
                  {selectedCar.year} Model Year
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-black text-orange-700">
                    ${selectedCar.dailyRate}
                  </span>
                  <span className="font-black" style={{color: '#000000', fontWeight: '900'}}>/day</span>
                  <div className="px-2 py-1 bg-slate-300 rounded-full text-xs font-black border border-slate-400" style={{color: '#000000', fontWeight: '900'}}>
                    Luxury Class
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-black mb-4" style={{color: '#000000', fontWeight: '900'}}>
                    Select Your Dates
                  </h3>
                  <Calendar
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                  />
                </div>
              </div>
              {canProceed && step >= 2 && (
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-orange-500"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Payment Details
                    </h3>
                    <Checkout
                      onConfirm={handleConfirmBooking}
                      totalCost={totalCost}
                      isLoading={isLoading}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-8">
              {canProceed && (
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Booking Summary
                    </h3>
                    <Timer
                      startDate={startDate}
                      endDate={endDate}
                      dailyRate={selectedCar.dailyRate}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {step === 1 && canProceed && (
              <button
                onClick={() => setStep(2)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-12 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Continue to Payment
                  <span className="ml-2">→</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const SuccessPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-50 py-8 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations - more subtle */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-200/15 to-slate-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-slate-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-12 max-w-md w-full text-center border border-slate-300 relative z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        
        <h2 style={{fontSize: '1.875rem', fontWeight: '900', marginBottom: '1rem'}}>
          <span style={{color: '#000000'}}>Booking </span>
          <span style={{color: '#ea580c'}}>Confirmed!</span>
        </h2>
        
        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
        
        <p style={{color: '#000000', fontWeight: '900', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.7'}}>
          Your luxury car rental has been booked successfully. Get ready for an amazing experience!
        </p>
        
        <div className="bg-orange-200 rounded-xl p-4 mb-8 border border-orange-400">
          <p style={{color: '#000000', fontWeight: '900'}}>🎉 Confirmation details sent to your email</p>
        </div>
        
        <button
          onClick={handleNewBooking}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Make Another Booking
        </button>
      </div>
    </div>
  );

  return (
    <Router>
      <nav className="bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-300 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="group flex items-center space-x-2 text-slate-800 hover:text-orange-500 font-bold text-lg transition-all duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                <span className="text-white text-sm">🏠</span>
              </div>
              <span>Home</span>
            </Link>
            <Link 
              to="/choose-car" 
              className="group flex items-center space-x-2 text-slate-800 hover:text-orange-500 font-bold text-lg transition-all duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-200">
                <span className="text-white text-sm">🚗</span>
              </div>
              <span>Choose Car</span>
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={bookingConfirmed ? <SuccessPage /> : <BookingPage />}
        />
        <Route
          path="/choose-car"
          element={<ChooseCar setSelectedCar={setSelectedCar} />}
        />
      </Routes>
    </Router>
  );
}

export default App;