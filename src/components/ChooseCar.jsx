import React, { useState } from "react";
import { Car, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CarApi from "./CarApi";

function ChooseCar({ setSelectedCar }) {
  const [selectedBrand, setSelectedBrand] = useState("ferrari");
  const navigate = useNavigate();

  const handleCarSelection = (car) => {
    setSelectedCar(car);
    // Automatically redirect to home page after selecting a car
    navigate('/');
  };

  const brands = [
    { value: "ferrari", label: "Ferrari", icon: "🏎️", description: "Italian Excellence" },
    { value: "lamborghini", label: "Lamborghini", icon: "⚡", description: "Pure Power" },
    { value: "porsche", label: "Porsche", icon: "🚗", description: "German Precision" },
    { value: "mclaren", label: "McLaren", icon: "🏁", description: "Racing Heritage" },
    { value: "bentley", label: "Bentley", icon: "👑", description: "British Luxury" },
    { value: "rollsroyce", label: "Rolls-Royce", icon: "💎", description: "Ultimate Luxury" },
    { value: "astonmartin", label: "Aston Martin", icon: "🎭", description: "British Elegance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-50 py-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-slate-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-slate-200/15 to-orange-200/15 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-200/12 to-slate-300/12 rounded-full blur-3xl translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 style={{fontSize: '3rem', fontWeight: '900', color: '#000000', marginBottom: '1rem'}}>
            <span style={{color: '#000000'}}>Choose Your </span>
            <span style={{color: '#ea580c'}}>Dream</span>
            <span style={{color: '#000000'}}> Car</span>
          </h1>
          <p style={{fontSize: '1.25rem', fontWeight: '900', color: '#000000'}}>Select from our premium collection of luxury vehicles</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Brand Filter Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-10 border border-slate-300 max-w-4xl mx-auto">
          <h3 style={{fontSize: '1.25rem', fontWeight: '900', color: '#000000', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Select Brand
          </h3>
          
          {/* Brand Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {brands.map((brand) => (
              <button
                key={brand.value}
                onClick={() => setSelectedBrand(brand.value)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                  selectedBrand === brand.value
                    ? 'border-orange-500 bg-gradient-to-br from-orange-100 to-orange-150 shadow-lg'
                    : 'border-slate-300 bg-white hover:border-slate-400 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{brand.icon}</div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '900',
                    color: selectedBrand === brand.value ? '#ea580c' : '#000000',
                    marginBottom: '0.25rem'
                  }}>
                    {brand.label}
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: '900',
                    color: selectedBrand === brand.value ? '#9a3412' : '#000000'
                  }}>
                    {brand.description}
                  </p>
                  {selectedBrand === brand.value && (
                    <div className="mt-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Brand Info */}
          <div className="mt-6 p-4 bg-gradient-to-r from-slate-100 to-slate-150 rounded-xl border border-slate-300">
            <div className="flex items-center justify-center space-x-2">
              <span style={{fontWeight: '900', color: '#000000'}}>
                Currently viewing: <span style={{color: '#ea580c'}}>{brands.find(b => b.value === selectedBrand)?.label}</span> models
              </span>
            </div>
          </div>
        </div>

        {/* Car API Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-300 overflow-hidden">
          <div className="p-8">
            <h3 style={{fontSize: '1.25rem', fontWeight: '900', color: '#000000', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <Car className="w-4 h-4 text-white" />
              </div>
              <span style={{color: '#000000', fontWeight: '900'}}>
                Available {brands.find(b => b.value === selectedBrand)?.label} Models
              </span>
            </h3>
            
            <CarApi brand={selectedBrand} onSelectCar={handleCarSelection} />
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-slate-300">
            <h4 style={{fontWeight: '900', color: '#000000', marginBottom: '0.5rem'}}>🏆 Premium Selection</h4>
            <p style={{fontWeight: '900', color: '#000000'}}>
              All vehicles undergo rigorous quality checks and come with comprehensive insurance coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCar;