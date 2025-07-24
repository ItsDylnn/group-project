import React, { useEffect, useState } from "react";

function CarApi({ brand, onSelectCar }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Enhanced car database with more brands and realistic data
  const carDatabase = {
    ferrari: [
      {
        make: "Ferrari",
        model: "488 GTB",
        year: 2023,
        class: "Sports Car",
        dailyRate: 1200,
        image: "https://images.unsplash.com/photo-1709559593427-4b7ac31080d2?q=80&w=1632&auto=format&fit=crop",
        features: ["V8 Engine", "Carbon Fiber", "Launch Control"]
      },
      {
        make: "Ferrari",
        model: "F8 Tributo",
        year: 2023,
        class: "Supercar",
        dailyRate: 1500,
        image: "https://images.unsplash.com/photo-1730110206447-cc9966cffd7e?q=80&w=687&auto=format&fit=crop",
        features: ["Twin Turbo V8", "Aerodynamic Design", "Advanced Electronics"]
      },
      {
        make: "Ferrari",
        model: "Roma",
        year: 2023,
        class: "Grand Tourer",
        dailyRate: 1100,
        image: "https://images.unsplash.com/photo-1645028875875-d3611dc96fe0?q=80&w=1209&auto=format&fit=crop",
        features: ["Elegant Design", "Comfort Interior", "V8 Turbo"]
      },
      {
        make: "Ferrari",
        model: "SF90 Stradale",
        year: 2023,
        class: "Hybrid Supercar",
        dailyRate: 2000,
        image: "https://images.unsplash.com/photo-1702564971402-1a67668685f2?q=80&w=687&auto=format&fit=crop",
        features: ["Hybrid Technology", "1000HP", "All-Wheel Drive"]
      }
    ],
    lamborghini: [
      {
        make: "Lamborghini",
        model: "Huracán EVO",
        year: 2023,
        class: "Supercar",
        dailyRate: 1300,
        image: "https://images.unsplash.com/photo-1672197341631-de26580def5f?q=80&w=687&auto=format&fit=crop",
        features: ["V10 Engine", "All-Wheel Drive", "Dynamic Steering"]
      },
      {
        make: "Lamborghini",
        model: "Aventador SVJ",
        year: 2023,
        class: "Hypercar",
        dailyRate: 1800,
        image: "https://images.unsplash.com/photo-1694575341005-10a3e9400a58?q=80&w=1170&auto=format&fit=crop",
        features: ["V12 Engine", "Aerodynamic Package", "Track Performance"]
      },
      {
        make: "Lamborghini",
        model: "Urus",
        year: 2023,
        class: "Luxury SUV",
        dailyRate: 1000,
        image: "https://images.unsplash.com/photo-1746151890879-5a1f648855e9?q=80&w=1170&auto=format&fit=crop",
        features: ["SUV Versatility", "V8 Twin Turbo", "Off-Road Capable"]
      }
    ],
    porsche: [
      {
        make: "Porsche",
        model: "911 Turbo S",
        year: 2023,
        class: "Sports Car",
        dailyRate: 900,
        image: "https://images.unsplash.com/photo-1679478878845-af7294f28b27?q=80&w=1170&auto=format&fit=crop",
        features: ["Twin Turbo", "AWD", "Sport Chrono"]
      },
      {
        make: "Porsche",
        model: "Cayenne Turbo",
        year: 2023,
        class: "Luxury SUV",
        dailyRate: 800,
        image: "https://images.unsplash.com/photo-1699325974549-fd06639650aa?q=80&w=1170&auto=format&fit=crop",
        features: ["V8 Engine", "Air Suspension", "Premium Interior"]
      },
      {
        make: "Porsche",
        model: "911 Gt3 rs",
        year: 2022,
        class: "Track Car",
        dailyRate: 1750,
        image: "https://images.unsplash.com/photo-1701806038465-027f731f9423?q=80&w=764&auto=format&fit=crop",
        features: ["2-Door Coupe", "Flat-6 Turbo", "Weissach Package"]
      }
    ],
    mclaren: [
      {
        make: "McLaren",
        model: "720S",
        year: 2023,
        class: "Supercar",
        dailyRate: 1400,
        image: "https://images.unsplash.com/photo-1630227476220-f57efc67237e?q=80&w=1631&auto=format&fit=crop",
        features: ["V8 Twin Turbo", "Carbon Fiber", "Active Aerodynamics"]
      },
      {
        make: "McLaren",
        model: "P1",
        year: 2013,
        class: "Hypercar",
        dailyRate: 7200,
        image: "https://images.unsplash.com/photo-1677059913057-fc904d468f10?q=80&w=1685&auto=format&fit=crop",
        features: ["Touring Comfort", "V8 Engine", "Panoramic Roof"]
      }
    ],

    bentley: [
      {
        make: "Bentley",
        model: "Continental GT",
        year: 2023,
        class: "Luxury Coupe",
        dailyRate: 850,
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
        features: ["W12 Engine", "Handcrafted Interior", "All-Wheel Drive"]
      },
      {
        make: "Bentley",
        model: "Bentayga",
        year: 2023,
        class: "Luxury SUV",
        dailyRate: 950,
        image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=400&h=300&fit=crop",
        features: ["V8 Engine", "Off-Road Package", "Premium Luxury"]
      }
    ],
    rollsroyce: [
      {
        make: "Rolls-Royce",
        model: "Ghost",
        year: 2023,
        class: "Ultra Luxury",
        dailyRate: 1600,
        image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
        features: ["V12 Engine", "Magic Carpet Ride", "Starlight Headliner"]
      },
      {
        make: "Rolls-Royce",
        model: "Cullinan",
        year: 2023,
        class: "Ultra Luxury SUV",
        dailyRate: 1800,
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
        features: ["Twin Turbo V12", "Viewing Suite", "Off-Road Capability"]
      }
    ],
    astonmartin: [
      {
        make: "Aston Martin",
        model: "DB11",
        year: 2023,
        class: "Grand Tourer",
        dailyRate: 1100,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        features: ["V8 Twin Turbo", "British Craftsmanship", "Sport Plus"]
      },
      {
        make: "Aston Martin",
        model: "Vantage",
        year: 2023,
        class: "Sports Car",
        dailyRate: 1000,
        image: "https://images.unsplash.com/photo-1606016159991-8510112a6cb4?w=400&h=300&fit=crop",
        features: ["AMG V8", "Lightweight Design", "Track Focused"]
      }
    ]
  };

  useEffect(() => {
    const loadCars = () => {
      setLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const brandCars = carDatabase[brand] || [];
        setCars(brandCars);
        setLoading(false);
      }, 1000);
    };

    loadCars();
  }, [brand]);

  if (loading) return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mr-3"></div>
      <p style={{color: '#000000', fontWeight: '900', fontSize: '1.125rem'}}>
        Loading {brand} models...
      </p>
    </div>
  );

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p style={{color: '#000000', fontWeight: '900', fontSize: '1.125rem'}}>
          No {brand} models available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border-2 border-orange-300 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          onClick={() => onSelectCar({ ...car, dailyRate: car.dailyRate })}
        >
          {/* Car Image */}
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/400x300/f97316/ffffff?text=${car.make}+${car.model}`;
              }}
            />
            <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {car.year}
            </div>
          </div>

          {/* Car Details */}
          <div className="p-6">
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '900',
              color: '#000000',
              marginBottom: '0.5rem'
            }}>
              {car.make} {car.model}
            </h3>
            
            <p style={{
              color: '#666666',
              fontWeight: '600',
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              {car.class}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {car.features.slice(0, 2).map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#ea580c'
                }}>
                  ${car.dailyRate}
                </span>
                <span style={{
                  color: '#666666',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  /day
                </span>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-200">
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarApi;