import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { locations } from './data/locations';
import LocationPage from './components/LocationPage';
import './styles/main.css';

// Move this outside the App component
const travelQuotes = [
  "The world is a book, and those who do not travel read only one page. – Saint Augustine",
  "Travel is the only thing you buy that makes you richer.",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "To travel is to live. – Hans Christian Andersen",
  "Jobs fill your pocket, but adventures fill your soul.",
  "Life is short and the world is wide.",
  "Take only memories, leave only footprints. – Chief Seattle",
  "Wherever you go becomes a part of you somehow. – Anita Desai",
  "Travel far enough, you meet yourself. – David Mitchell",
  "Adventure may hurt you but monotony will kill you."
];

function App() {
  const navigate = useNavigate();

  const [quote, setQuote] = useState(travelQuotes[0]);

  useEffect(() => {
    setQuote(travelQuotes[Math.floor(Math.random() * travelQuotes.length)]);
  }, []);

  const handleTileClick = (location) => {
    navigate(`/location/${location}`);
  };

  const resetItinerary = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onHomeClick={resetItinerary} />
      <main className="flex-grow relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1500&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div className="absolute inset-0 z-10 animate-gradient bg-gradient-to-br from-blue-900/60 via-purple-700/40 to-yellow-400/30" />
                <div className="absolute inset-0 z-20 bg-blue-900 bg-opacity-30" />
                <div className="relative z-30 container mx-auto px-4 py-16">
                  <h1 className="text-4xl font-bold text-center mb-4 text-blue-100 drop-shadow-lg">
                    Wanderlust - Travel Itinerary Generator
                  </h1>
                  <div className="text-center mb-8">
                    <p className="text-xl italic text-white font-semibold drop-shadow-md animate-fade-in">
                      {quote}
                    </p>
                  </div>
                  <p className="text-center text-gray-200 mb-8 text-lg">
                    Choose a destination to explore its itinerary
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => handleTileClick(location)}
                        className="bg-white bg-opacity-80 hover:bg-blue-100 transition rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-blue-700 font-semibold text-xl cursor-pointer border-2 border-transparent hover:border-blue-400 focus:outline-none transform hover:scale-105 duration-300 group relative overflow-hidden"
                        style={{ minHeight: '120px' }}
                      >
                        <span className="transition-colors duration-300 group-hover:text-blue-900">
                          {location}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            }
          />
          <Route 
            path="/location/:location" 
            element={<LocationPage />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 