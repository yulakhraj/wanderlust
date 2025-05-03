import React from 'react';

const NorthEast = () => (
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
            🌟 North East States Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Guwahati ➡️ Shillong ➡️ Cherrapunji ➡️ Kaziranga ➡️ Kohima ➡️ Imphal ➡️ Guwahati</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Guwahati to Shillong</h2>
            <p className="text-gray-700 mb-2">📍 Base: Shillong</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Start from Guwahati (100 km | 3 hrs)</li>
              <li>🕙 <b>11:00 AM</b> – Check-in at Shillong</li>
              <li>🕑 <b>02:00 PM</b> – Visit Ward's Lake</li>
              <li>🕓 <b>04:00 PM</b> – Explore Police Bazaar</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌧️ Day 2: Shillong to Cherrapunji</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Cherrapunji</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Cherrapunji (50 km | 2 hrs)</li>
              <li>🕙 <b>10:00 AM</b> – Visit Nohkalikai Falls</li>
              <li>🕑 <b>02:00 PM</b> – Explore Mawsmai Cave</li>
              <li>🕓 <b>04:00 PM</b> – Visit Seven Sisters Falls</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🐘 Day 3: Cherrapunji to Kaziranga</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Kaziranga</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Kaziranga (300 km | 7 hrs)</li>
              <li>🕑 <b>03:00 PM</b> – Check-in at Kaziranga</li>
              <li>🕓 <b>04:00 PM</b> – Evening safari (if time permits)</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at resort 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🦏 Day 4: Kaziranga Safari</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Kaziranga</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕕 <b>06:00 AM</b> – Morning elephant safari</li>
              <li>🕗 <b>08:00 AM</b> – Breakfast at resort</li>
              <li>🕑 <b>02:00 PM</b> – Jeep safari in central range</li>
              <li>🕓 <b>04:00 PM</b> – Visit Kaziranga Orchid Park</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at resort 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 5: Kaziranga to Kohima</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Kohima</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Kohima (250 km | 6 hrs)</li>
              <li>🕑 <b>02:00 PM</b> – Check-in at Kohima</li>
              <li>🕓 <b>04:00 PM</b> – Visit War Cemetery</li>
              <li>🕕 <b>06:00 PM</b> – Explore local markets</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏰 Day 6: Kohima to Imphal</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Imphal</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Imphal (150 km | 4 hrs)</li>
              <li>🕙 <b>12:00 PM</b> – Check-in at Imphal</li>
              <li>🕑 <b>02:00 PM</b> – Visit Kangla Fort</li>
              <li>🕓 <b>04:00 PM</b> – Explore Loktak Lake</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Imphal to Guwahati</h2>
            <p className="text-gray-700 mb-2">📍 Return: Guwahati</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Guwahati (500 km | 10 hrs)</li>
              <li>🕕 <b>06:00 PM</b> – Reach Guwahati</li>
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
                <li>Inner Line Permit (ILP) required for some states</li>
                <li>Carry ID proof and permit documents</li>
                <li>Book hotels and safaris in advance</li>
                <li>Carry rain gear and comfortable shoes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Best time to visit: October to April</li>
                <li>Carry sufficient cash, limited ATMs in remote areas</li>
                <li>Mobile network is patchy in some areas</li>
                <li>Respect local customs and traditions</li>
                <li>Travel with a local guide for better experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Guwahati/Shillong/Cherrapunji/Kaziranga/Kohima/Imphal/Guwahati/@25.5788,93.7903,7z/data=!4m38!4m37!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.7500!2d26.1445!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.8800!2d25.5700!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.7200!2d25.3000!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d93.1700!2d26.5000!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d94.1100!2d25.6700!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d93.9400!2d24.8200!1m5!1m1!1s0x3740263b5d4da33f:0x2e2e2e2e2e2e2e2e!2m2!1d91.7500!2d26.1445?entry=ttu"
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

export default NorthEast; 