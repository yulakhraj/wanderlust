import React from 'react';

const ArunachalPradesh = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-Bkci_8qcdvQ?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-10 bg-blue-900 bg-opacity-40" />
      <div className="relative z-20 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
            🌟 Arunachal Pradesh Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Guwahati ➡️ Bhalukpong ➡️ Dirang ➡️ Tawang ➡️ Bomdila ➡️ Itanagar ➡️ Ziro ➡️ Guwahati</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Guwahati to Bhalukpong</h2>
            <p className="text-gray-700 mb-2">📍 Base: Bhalukpong</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Start from Guwahati (250 km | 6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Bhalukpong</li>
              <li>🕓 <b>04:00 PM</b> – Visit Tipi Orchidarium</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏔️ Day 2: Bhalukpong to Dirang</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Dirang</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Dirang (140 km | 4 hrs)</li>
              <li>🕙 <b>12:00 PM</b> – Visit Dirang Dzong & Hot Springs</li>
              <li>🕑 <b>02:00 PM</b> – Explore Sangti Valley</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏯 Day 3: Dirang to Tawang</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Tawang</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Tawang (120 km | 4 hrs)</li>
              <li>🕙 <b>12:00 PM</b> – Visit Sela Pass & Jaswant Garh</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Tawang</li>
              <li>🕓 <b>04:00 PM</b> – Visit Tawang Monastery</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 4: Tawang Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Tawang</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Visit Urgelling Monastery</li>
              <li>🕙 <b>11:00 AM</b> – Explore Tawang War Memorial</li>
              <li>🕑 <b>02:00 PM</b> – Visit Bumla Pass (with permit)</li>
              <li>🕓 <b>04:00 PM</b> – Madhuri Lake visit</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏰 Day 5: Tawang to Bomdila</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Bomdila</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Bomdila (180 km | 6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Bomdila</li>
              <li>🕓 <b>04:00 PM</b> – Visit Bomdila Monastery</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌄 Day 6: Bomdila to Itanagar</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Itanagar</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Itanagar (200 km | 6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Itanagar</li>
              <li>🕓 <b>04:00 PM</b> – Visit Ita Fort & Ganga Lake</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Itanagar to Guwahati</h2>
            <p className="text-gray-700 mb-2">📍 Return: Guwahati</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Guwahati (320 km | 7 hrs)</li>
              <li>🕑 <b>03:00 PM</b> – Reach Guwahati</li>
              <li>🕓 <b>04:00 PM</b> – Last-minute shopping</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />

          {/* Travel Tips & Essentials */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Travel Tips & Essentials</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">🛂 Essentials:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Inner Line Permit (ILP) required for Arunachal Pradesh</li>
                <li>Carry ID proof and permit documents</li>
                <li>Book hotels in advance, especially in Tawang</li>
                <li>Carry warm clothes, rain gear, and comfortable shoes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Best time to visit: March to October</li>
                <li>Carry sufficient cash, limited ATMs available</li>
                <li>Mobile network is patchy in remote areas</li>
                <li>Respect local customs and monasteries</li>
                <li>Travel with a local guide for better experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Guwahati/Bhalukpong/Dirang/Tawang/Bomdila/Itanagar/Guwahati/@26.1445,92.9376,8z/data=!4m38!4m37!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.7500!2d26.1445!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d92.6500!2d27.0000!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d92.2700!2d27.3500!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.8700!2d27.5900!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d92.4200!2d27.2600!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d93.6100!2d27.1000!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.7500!2d26.1445?entry=ttu"
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

export default ArunachalPradesh; 