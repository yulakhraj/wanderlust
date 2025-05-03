import React from 'react';

const Bhutan = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-yIkD6xtaUgk?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-blue-900 bg-opacity-40" />
      <div className="relative z-20 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
            🌟 Bhutan Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Phuentsholing ➡️ Thimphu ➡️ Punakha ➡️ Phobjikha ➡️ Paro ➡️ Haa Valley ➡️ Phuentsholing</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Phuentsholing to Thimphu</h2>
            <p className="text-gray-700 mb-2">📍 Base: Thimphu</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Enter Bhutan via Phuentsholing, complete immigration</li>
              <li>🕙 <b>10:00 AM</b> – Drive to Thimphu (150 km | 5 hrs)</li>
              <li>🕑 <b>03:00 PM</b> – Check-in at Thimphu</li>
              <li>🕓 <b>04:00 PM</b> – Explore Clock Tower Square</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏯 Day 2: Thimphu Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Thimphu</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Visit Buddha Dordenma Statue</li>
              <li>🕙 <b>11:00 AM</b> – Explore Memorial Chorten</li>
              <li>🕑 <b>02:00 PM</b> – Visit Tashichho Dzong</li>
              <li>🕓 <b>04:00 PM</b> – Folk Heritage Museum</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 3: Thimphu to Punakha</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Punakha</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Punakha via Dochula Pass (85 km | 3 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Visit Dochula Pass</li>
              <li>🕑 <b>02:00 PM</b> – Explore Punakha Dzong</li>
              <li>🕓 <b>04:00 PM</b> – Walk to Suspension Bridge</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌄 Day 4: Punakha to Phobjikha Valley</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Phobjikha</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Phobjikha (80 km | 3 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Visit Gangtey Monastery</li>
              <li>🕑 <b>02:00 PM</b> – Explore Phobjikha Valley</li>
              <li>🕓 <b>04:00 PM</b> – Nature walk</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏰 Day 5: Phobjikha to Paro</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Paro</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Paro (140 km | 5 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Paro</li>
              <li>🕓 <b>04:00 PM</b> – Visit Rinpung Dzong</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">⛰️ Day 6: Paro & Tiger's Nest Hike</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Paro</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>07:00 AM</b> – Hike to Tiger's Nest Monastery (Taktsang)</li>
              <li>🕑 <b>02:00 PM</b> – Lunch in Paro town</li>
              <li>🕓 <b>04:00 PM</b> – Explore Paro market</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Paro to Haa Valley & Return to Phuentsholing</h2>
            <p className="text-gray-700 mb-2">📍 Return: Phuentsholing</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Haa Valley (70 km | 2.5 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Explore Haa Valley</li>
              <li>🕑 <b>02:00 PM</b> – Return to Phuentsholing (200 km | 6 hrs)</li>
              <li>🕓 <b>08:00 PM</b> – Trip ends</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />

          {/* Travel Tips & Essentials */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Indian nationals need a permit to enter Bhutan (available at Phuentsholing)</li>
                <li>Carry valid ID proof (passport or voter ID)</li>
                <li>Book hotels in advance, especially in Paro and Thimphu</li>
                <li>Carry warm clothes, especially for higher altitudes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Best time to visit: March to May, September to November</li>
                <li>Bhutanese currency (Ngultrum) is at par with Indian Rupee</li>
                <li>Respect local customs, monasteries, and dress codes</li>
                <li>Mobile network is good in cities, patchy in valleys</li>
                <li>Travel with a local guide for best experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Phuentsholing/Thimphu/Punakha/Phobjikha/Paro/Haa+Valley/Phuentsholing/@27.0982,89.5361,9z/data=!4m38!4m37!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.3967!2d26.8601!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.6419!2d27.4728!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.8766!2d27.5916!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d90.2146!2d27.4986!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.4125!2d27.4305!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.2806!2d27.3846!1m5!1m1!1s0x39e194b6e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d89.3967!2d26.8601?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            📍 Click Here for Full Route Map
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Bhutan; 