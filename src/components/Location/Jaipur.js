import React from 'react';

const Jaipur = () => (
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
            🌟 Jaipur & Nearby Places Road Trip Itinerary (7 Days) 🌟
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Jaipur ➡️ Amber ➡️ Ajmer ➡️ Pushkar ➡️ Jaipur</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Arrival in Jaipur & Local Sightseeing</h2>
            <p className="text-gray-700 mb-2">📍 Base: Jaipur</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕑 <b>02:00 PM</b> – Arrive in Jaipur, check-in at hotel 🏨</li>
              <li>🕓 <b>04:00 PM</b> – Visit City Palace, Jantar Mantar, Hawa Mahal 🏰</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at Chokhi Dhani 🍽️</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏯 Day 2: Amber Fort & Nahargarh</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Jaipur</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Visit Amber Fort, Jaigarh Fort 🏰</li>
              <li>🕑 <b>02:00 PM</b> – Nahargarh Fort & stepwell</li>
              <li>🕓 <b>04:00 PM</b> – Jal Mahal (lake palace) visit</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at rooftop restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🕌 Day 3: Ajmer & Pushkar</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Pushkar</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>08:00 AM</b> – Drive to Ajmer (130 km | 2.5 hrs)</li>
              <li>🕙 <b>10:30 AM</b> – Visit Ajmer Sharif Dargah</li>
              <li>🕛 <b>12:00 PM</b> – Pushkar Lake & Brahma Temple</li>
              <li>🕓 <b>04:00 PM</b> – Explore Pushkar market 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at Pushkar café 🍽️</li>
            </ul>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌄 Day 4: Pushkar & Desert Activities</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Pushkar</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Camel safari in desert 🐪</li>
              <li>🕙 <b>11:00 AM</b> – Visit Savitri Temple (hilltop)</li>
              <li>🕛 <b>01:00 PM</b> – Lunch at local café</li>
              <li>🕓 <b>04:00 PM</b> – Sunset at Pushkar dunes</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/café 🍽️</li>
            </ul>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 5: Back to Jaipur & Museums</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Jaipur</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Drive to Jaipur</li>
              <li>🕙 <b>11:00 AM</b> – Albert Hall Museum</li>
              <li>🕛 <b>01:00 PM</b> – Birla Mandir</li>
              <li>🕓 <b>04:00 PM</b> – Shopping at Johari Bazaar 🛍️</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at local restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌸 Day 6: Jaipur Gardens & Leisure</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Jaipur</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕗 <b>09:00 AM</b> – Sisodia Rani Garden & Kanak Vrindavan</li>
              <li>🕙 <b>11:00 AM</b> – Galtaji Temple (Monkey Temple)</li>
              <li>🕛 <b>01:00 PM</b> – Lunch at garden café</li>
              <li>🕓 <b>04:00 PM</b> – Leisure time or spa</li>
              <li>🕗 <b>08:00 PM</b> – Dinner at hotel/restaurant 🍽️</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Departure from Jaipur</h2>
            <p className="text-gray-700 mb-2">🕐 Flight/Train: Jaipur to Home City</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕢 <b>08:00 AM</b> – Breakfast and check-out 🧳</li>
              <li>🕣 <b>09:00 AM</b> – Last-minute shopping/sightseeing</li>
              <li>🕐 <b>12:00 PM</b> – Reach airport/station ✈️</li>
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
                <li>Book hotels and activities in advance during peak season</li>
                <li>Respect local customs at temples and forts</li>
                <li>Stay hydrated, especially in summer</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Pack light, cotton clothes, and sunscreen 🧴</li>
                <li>Carry cash, limited ATMs in some areas 💵</li>
                <li>Mobile network is good in cities, patchy in rural areas 📵</li>
                <li>Try Rajasthani cuisine and sweets</li>
                <li>Travel with a local guide for forts and palaces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Route */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
          <a 
            href="https://www.google.com/maps/dir/Jaipur/Amber/Ajmer/Pushkar/Jaipur/@26.9124,75.7873,9z/data=!4m38!4m37!1m5!1m1!1s0x396db4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d75.7873!2d26.9124!1m5!1m1!1s0x396db4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d75.8513!2d26.9855!1m5!1m1!1s0x396db4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d74.6399!2d26.4499!1m5!1m1!1s0x396db4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d74.5542!2d26.4897!1m5!1m1!1s0x396db4e2e2e2e2e2:0x2e2e2e2e2e2e2e2e!2m2!1d75.7873!2d26.9124?entry=ttu"
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

export default Jaipur;