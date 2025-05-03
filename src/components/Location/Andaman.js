import React from 'react';

const Andaman = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582972236019-e3d10d405e1a?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-blue-900 bg-opacity-40" />
      <div className="relative z-20 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
            🌟 Andaman Islands Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Port Blair ➡️ Havelock ➡️ Neil Island ➡️ Ross Island ➡️ Port Blair</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Arrival in Port Blair & Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Base: Port Blair</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕑 <b>02:00 PM</b> – Arrive in Port Blair, check-in at hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Cellular Jail visit & Light & Sound Show 🏛️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏝️ Day 2: Port Blair → Havelock Island</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Havelock</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Ferry to Havelock Island ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at resort</li>
              <li>🕛 <b>12:00 PM</b> – Radhanagar Beach visit 🏖️</li>
              <li>🕓 <b>04:00 PM</b> – Water sports: Snorkeling, Scuba (optional)</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at beachside café 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌊 Day 3: Havelock Island Adventures</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Havelock</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Elephant Beach for water activities 🏄‍♂️</li>
              <li>🕙 <b>11:00 AM</b> – Kalapathar Beach visit</li>
              <li>🕛 <b>01:00 PM</b> – Lunch at local café</li>
              <li>🕓 <b>04:00 PM</b> – Leisure time, relax at resort</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/resort 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏝️ Day 4: Havelock → Neil Island</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Neil Island</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Ferry to Neil Island ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at hotel</li>
              <li>🕛 <b>12:00 PM</b> – Laxmanpur & Bharatpur Beaches 🏖️</li>
              <li>🕓 <b>04:00 PM</b> – Natural Bridge visit 🌉</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌅 Day 5: Neil Island → Port Blair</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Port Blair</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Ferry to Port Blair ⛴️</li>
              <li>🕙 <b>10:00 AM</b> – Chidiya Tapu sunset point 🌅</li>
              <li>🕛 <b>12:00 PM</b> – Samudrika Marine Museum</li>
              <li>🕓 <b>04:00 PM</b> – Shopping at Aberdeen Bazaar 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏝️ Day 6: Ross Island & North Bay</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Port Blair</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Ferry to Ross Island & North Bay ⛴️</li>
              <li>🕙 <b>11:00 AM</b> – Explore Ross Island ruins</li>
              <li>🕛 <b>01:00 PM</b> – Water sports at North Bay</li>
              <li>🕓 <b>04:00 PM</b> – Return to Port Blair</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Departure from Port Blair</h2>
            <p className="text-gray-700 mb-2">🕐 Flight: Port Blair to Home City</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />

          {/* Travel Tips & Essentials */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Carry ID proof for all travelers</li>
                <li>Book ferries and hotels in advance during peak season</li>
                <li>Respect local customs and marine life</li>
                <li>Follow beach and water safety guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Pack light, beachwear, and sunscreen 🧴</li>
                <li>Carry cash, limited ATMs on islands 💵</li>
                <li>Mobile network is patchy on remote islands 📵</li>
                <li>Try Andaman seafood and local cuisine</li>
                <li>Travel with a local guide for water activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            📍 Click Here for Full Route Map (Not available for all islands)
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Andaman;