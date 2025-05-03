import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onHomeClick }) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-full px-8">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={onHomeClick}>
              <span className="text-xl font-bold text-blue-600">Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8 ml-auto">
            <Link to="/trending" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Trending Locations
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Search
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 