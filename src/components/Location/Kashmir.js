import React from 'react';

const Kashmir = () => (
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
            🌟 Kashmir Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Srinagar ➡️ Gulmarg ➡️ Pahalgam ➡️ Sonmarg ➡️ Srinagar</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Arrival in Srinagar & Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Base: Srinagar</p>
            <p className="text-gray-700 mb-2">🕐 Flight: Arrive at Srinagar Airport</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕑 <b>02:00 PM</b> – Arrive in Srinagar, check-in at houseboat/hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Shikara ride on Dal Lake 🚣‍♂️</li>
              <li>🕕 <b>06:00 PM</b> – Visit Mughal Gardens (Shalimar, Nishat, Chashme Shahi) 🌸</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-600">🍽️ Meals:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Lunch: Srinagar café</li>
                <li>Dinner: Local restaurant</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">❄️ Day 2: Srinagar → Gulmarg</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Gulmarg</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Gulmarg (50 km | 2 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at hotel</li>
              <li>🕛 <b>12:00 PM</b> – Gondola ride to Apharwat Peak 🚡</li>
              <li>🕑 <b>02:00 PM</b> – Snow activities: Skiing, snowboarding, snowman ⛄</li>
              <li>🕓 <b>04:00 PM</b> – Walk in meadows, photography</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 3: Gulmarg → Pahalgam</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Pahalgam</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Pahalgam (140 km | 4 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – En route: Visit Avantipur Ruins 🏛️</li>
              <li>🕛 <b>12:00 PM</b> – Check-in at hotel</li>
              <li>🕑 <b>02:00 PM</b> – Visit Betaab Valley, Aru Valley, Chandanwari 🌄</li>
              <li>🕓 <b>04:00 PM</b> – Horse riding, river walk</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌄 Day 4: Pahalgam Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Pahalgam</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Visit Baisaran Valley (Mini Switzerland) 🌲</li>
              <li>🕙 <b>11:00 AM</b> – Mamleshwar Temple 🛕</li>
              <li>🕛 <b>01:00 PM</b> – Picnic by Lidder River 🏞️</li>
              <li>🕑 <b>03:00 PM</b> – Shopping in Pahalgam market 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏔️ Day 5: Pahalgam → Sonmarg</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Sonmarg</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Sonmarg (170 km | 5 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Check-in at hotel</li>
              <li>🕛 <b>12:00 PM</b> – Thajiwas Glacier trek/hike 🥾</li>
              <li>🕑 <b>02:00 PM</b> – Pony ride, snow activities</li>
              <li>🕓 <b>04:00 PM</b> – Sindh River picnic</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌲 Day 6: Sonmarg → Srinagar</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Srinagar</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Drive to Srinagar (80 km | 2.5 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Shankaracharya Temple 🛕</li>
              <li>🕛 <b>01:00 PM</b> – Shopping at Lal Chowk 🛍️</li>
              <li>🕑 <b>03:00 PM</b> – Visit Hazratbal Shrine 🕌</li>
              <li>🕓 <b>05:00 PM</b> – Stroll in Tulip Garden (seasonal)</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/houseboat 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Departure from Srinagar</h2>
            <p className="text-gray-700 mb-2">🕐 Flight: Srinagar to Home City</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Travel Tips & Permits</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">🛂 Permits & Essentials:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Carry ID proof for all travelers</li>
                <li>Check weather and road status, especially in hills</li>
                <li>Book hotels and activities in advance during peak season</li>
                <li>Respect local customs at religious sites</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Pack warm clothes, especially for Gulmarg, Sonmarg & Pahalgam ❄️🧣</li>
                <li>Carry cash, limited ATMs in hills 💵</li>
                <li>Mobile network is good in cities, patchy in hills 📵</li>
                <li>Try local food and street snacks</li>
                <li>Travel with a local guide for treks/adventures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Srinagar/Gulmarg/Pahalgam/Sonmarg/Srinagar/@34.0837,74.7973,9z/data=!4m38!4m37!1m5!1m1!1s0x38e1856e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.7973!2d34.0837!1m5!1m1!1s0x38e1856e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.3805!2d34.0484!1m5!1m1!1s0x38e1856e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d75.3208!2d34.0100!1m5!1m1!1s0x38e1856e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d75.2881!2d34.3030!1m5!1m1!1s0x38e1856e2e2e2e2e:0x2e2e2e2e2e2e2e2e!2m2!1d74.7973!2d34.0837?entry=ttu"
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

export default Kashmir; 