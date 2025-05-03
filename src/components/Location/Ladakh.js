import React from "react";

const Ladakh = () => (
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
            🏔️ Ladakh Road Trip Itinerary (7 Days) 🏔️
          </h1>
          <p className="text-center text-lg mb-2 font-semibold">Route: Leh ➡️ Nubra ➡️ Turtuk ➡️ Pangong ➡️ Tso Moriri ➡️ Leh</p>
          <hr className="my-6 border-blue-300" />

          {/* Day 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🚗 Day 1: Arrival in Leh (11,500 ft) — Acclimatization & Local Sights</h2>
            <p className="text-gray-700 mb-2">📍 Base: Leh</p>
            <p className="text-gray-700 mb-2">🕐 Important: Acclimatization day - avoid heavy activity</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🕘 <b>09:00 AM</b> – Land in Leh / Arrive by road ✈️</li>
              <li>🛌 <b>10:00 AM</b> – Hotel check-in and rest (important for acclimatization)</li>
              <li>🍽️ <b>01:00 PM</b> – Lunch at Gesmo Restaurant 🍜</li>
              <li>🏛️ <b>03:00 PM</b> – Visit:
                <ul className="list-disc ml-8">
                  <li>Shanti Stupa 🕊️</li>
                  <li>Leh Palace 🏯</li>
                  <li>Local Market 🛍️</li>
                </ul>
              </li>
              <li>🍽️ <b>07:30 PM</b> – Dinner at The Tibetan Kitchen 🍲</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-600">💡 Important Notes:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>🚫 Avoid heavy activity on Day 1 due to altitude</li>
                <li>💧 Drink lots of water!</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏜️ Day 2: Leh → Khardung La → Nubra Valley (Diskit, Hunder)</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Hunder</p>
            <p className="text-gray-700 mb-2">🕐 Drive: ~5 hrs / 160 km</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🍳 <b>07:00 AM</b> – Breakfast</li>
              <li>🚗 <b>08:00 AM</b> – Depart for Nubra via Khardung La (17,982 ft) 🏔️❄️</li>
              <li>📸 <b>10:30 AM</b> – Photo stop at Khardung La top 🏁</li>
              <li>🍽️ <b>01:30 PM</b> – Lunch en route in Khalsar</li>
              <li>🕌 <b>03:00 PM</b> – Visit Diskit Monastery & Giant Buddha Statue</li>
              <li>🏜️ <b>04:30 PM</b> – Arrive in Hunder, check-in</li>
              <li>🐫 <b>05:00 PM</b> – Double-hump camel safari in sand dunes 🌅</li>
              <li>🍛 <b>08:00 PM</b> – Dinner at camp/homestay</li>
            </ul>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏘️ Day 3: Nubra → Turtuk → Nubra</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Hunder</p>
            <p className="text-gray-700 mb-2">🕐 Drive: ~6 hrs round trip / 180 km</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🍳 <b>06:30 AM</b> – Early breakfast</li>
              <li>🚗 <b>07:30 AM</b> – Depart for Turtuk (India's last village before Pakistan 🇮🇳🇵🇰)</li>
              <li>🌻 <b>11:30 AM</b> – Explore:
                <ul className="list-disc ml-8">
                  <li>Balti culture</li>
                  <li>Apricot farms 🍑</li>
                  <li>Turtuk village walk 🚶</li>
                </ul>
              </li>
              <li>🍽️ <b>01:00 PM</b> – Lunch in a local café</li>
              <li>🚗 <b>02:30 PM</b> – Return to Hunder</li>
              <li>🍲 <b>07:30 PM</b> – Dinner & overnight stay</li>
            </ul>
            <p className="text-sm italic mt-2">📝 TIP: Carry ID proof for military checkpoints</p>
          </div>

          {/* Day 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🌊 Day 4: Nubra → Pangong Lake via Shyok River</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Pangong Lake</p>
            <p className="text-gray-700 mb-2">🕐 Drive: ~6–7 hrs / 200 km</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🍳 <b>06:30 AM</b> – Breakfast</li>
              <li>🚗 <b>07:30 AM</b> – Start for Pangong Lake via scenic Shyok route</li>
              <li>🏞️ <b>01:30 PM</b> – Reach Pangong, check-in at lakeside camps</li>
              <li>🍽️ <b>02:00 PM</b> – Lunch with a lake view</li>
              <li>📸 <b>04:00 PM</b> – Explore:
                <ul className="list-disc ml-8">
                  <li>3 Idiots Shooting Point 🎬</li>
                  <li>Birdwatching 🐦</li>
                </ul>
              </li>
              <li>🌌 <b>08:00 PM</b> – Bonfire (if weather permits) & stargazing 🌠</li>
              <li>🍛 <b>08:30 PM</b> – Dinner at camp</li>
            </ul>
            <p className="text-sm italic mt-2">🧤 Nights are cold – carry warm layers!</p>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏞️ Day 5: Pangong → Tso Moriri via Chushul & Hanle</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Tso Moriri</p>
            <p className="text-gray-700 mb-2">🕐 Drive: ~8–9 hrs / 320 km (long & scenic)</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>☕ <b>05:30 AM</b> – Sunrise at Pangong 🌅</li>
              <li>🍳 <b>06:30 AM</b> – Breakfast & depart</li>
              <li>🚗 <b>07:00 AM</b> – Begin long drive via Chushul, Tsaga La, Nyoma</li>
              <li>🛑 <b>01:00 PM</b> – Stop at Hanle (optional), visit Indian Astronomical Observatory 🔭</li>
              <li>🍽️ <b>02:00 PM</b> – Lunch en route (packed or local dhaba)</li>
              <li>🌊 <b>05:30 PM</b> – Reach Tso Moriri (14,836 ft), check-in</li>
              <li>📸 <b>06:30 PM</b> – Sunset by the lake 🦢</li>
              <li>🍛 <b>08:00 PM</b> – Dinner at homestay/camp</li>
            </ul>
            <p className="text-sm italic mt-2">⚠️ Remote route – ensure full tank and snacks/water packed</p>
          </div>

          {/* Day 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🏔️ Day 6: Tso Moriri → Leh via Tso Kar & Tanglang La</h2>
            <p className="text-gray-700 mb-2">📍 Stay: Leh</p>
            <p className="text-gray-700 mb-2">🕐 Drive: ~7 hrs / 230 km</p>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🍳 <b>07:00 AM</b> – Breakfast</li>
              <li>🚗 <b>08:00 AM</b> – Drive via Tso Kar, visit salt lake 🧂</li>
              <li>🏔️ <b>01:00 PM</b> – Cross Tanglang La (17,480 ft)</li>
              <li>🍽️ <b>02:30 PM</b> – Lunch in Upshi</li>
              <li>🏙️ <b>04:30 PM</b> – Arrive in Leh, hotel check-in</li>
              <li>🛍️ <b>06:00 PM</b> – Souvenir shopping & café hopping 🛒☕</li>
              <li>🍛 <b>08:00 PM</b> – Dinner at Bon Appétit Restaurant</li>
            </ul>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">👋 Day 7: Leh – Departure Day</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li>🍳 <b>08:00 AM</b> – Leisurely breakfast</li>
              <li>📦 <b>09:30 AM</b> – Final packing, hotel check-out</li>
              <li>🛫 <b>11:00 AM</b> – Head to Leh airport ✈️</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />

          {/* Travel Tips & Permits */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">✅ Permits & Travel Tips</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">🛂 Permit Requirements:</h3>
              <p className="text-gray-700 mb-2">Inner Line Permits (ILP) Required for:</p>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Nubra Valley</li>
                <li>Pangong Lake</li>
                <li>Tso Moriri</li>
              </ul>
              <p className="mt-2">Apply online: <a href="https://www.lahdclehpermit.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Ladakh Permits Portal</a></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">💡 Tips:</h3>
              <ul className="list-disc ml-6 text-gray-800">
                <li>Carry 2+ photocopies of permits & ID at all times</li>
                <li>Fill fuel in Leh before remote stretches</li>
                <li>Mobile networks: Only BSNL, Airtel (postpaid) work in most remote areas</li>
                <li>Carry power banks, cash (ATMs are rare), and basic meds</li>
              </ul>
            </div>
          </div>

          {/* Google Maps Route */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🗺️ Google Maps Route (Visualize Your Journey)</h2>
            <a 
              href="https://www.google.com/maps/dir/Leh/Nubra+Valley/Turtuk/Pangong+Lake/Tso+Moriri/Leh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              📍 Click Here for Full Route Map
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Ladakh;
