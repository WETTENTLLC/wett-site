export default function Events() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">Events</h1>
        <p className="text-xl mb-12">Join us for exclusive events, workshops, and networking opportunities.</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Upcoming Events</h2>
            
            {/* Nov 7th Event */}
            <div className="bg-gray-800 p-6 rounded-lg mb-6 border-2 border-wett-gold">
              <h3 className="text-2xl font-bold text-wett-gold mb-2">The Godfather's Harlem Ball</h3>
              <p className="text-lg text-gray-300 mb-4">A 91st Birthday Tribute to Fillmore Slim</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400">📅 Date</p>
                  <p className="font-bold">Saturday, November 7, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">🕐 Time</p>
                  <p className="font-bold">5:00 PM - 1:00 AM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">📍 Location</p>
                  <p className="font-bold">THE VENUE - 5925 S Virginia, Reno</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">👔 Dress Code</p>
                  <p className="font-bold">1940s-50s Harlem Attire</p>
                </div>
              </div>

              <p className="mb-4">Step into a time machine and experience a night of unparalleled style, soul, and celebration! Honor the "Godfather of the Game" himself, Fillmore Slim, on his monumental 91st birthday.</p>
              
              <div className="bg-gray-700 p-4 rounded mb-4">
                <h4 className="font-bold text-wett-gold mb-2">Featured Entertainment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>🎤 Host: Bay'Hef</li>
                  <li>🎸 Live Band: Full Blast Collective</li>
                  <li>🎵 Special Set: AI Slaps (40s/50s x Modern Rap Remakes)</li>
                  <li>💰 Vintage Dress Contest: $200 Cash & Prizes</li>
                  <li>🎲 Classic Gaming & Southern Cuisine</li>
                  <li>💨 Hookah Available</li>
                </ul>
              </div>

              <div className="bg-wett-gold text-black p-4 rounded font-bold mb-4">
                <p className="text-center">🎁 SPECIAL OFFER: Purchase $50 at The Green Door & Get FREE Entry!</p>
              </div>

              <a href="https://wettlifestyle.com" className="inline-block bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Get Tickets</a>
            </div>

            {/* Nov 21st Event */}
            <div className="bg-gray-800 p-6 rounded-lg border-2 border-wett-gold">
              <h3 className="text-2xl font-bold text-wett-gold mb-2">THE BLUEPRINT MIXER</h3>
              <p className="text-lg text-gray-300 mb-4">Building the Bay Area's Next Wave - A Collaborative Brunch for Entrepreneurs, Artists, and Visionaries</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400">📅 Date</p>
                  <p className="font-bold">Thursday, November 21st, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">🕐 Time</p>
                  <p className="font-bold">11:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">📍 Location</p>
                  <p className="font-bold">San Francisco (Venue TBA)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">👔 Attire</p>
                  <p className="font-bold">Business Casual | Creative & Confident</p>
                </div>
              </div>

              <p className="mb-4 italic">"Stop networking in isolation. It's time to build together."</p>
              
              <p className="mb-4">This isn't a lecture or a pitch fest. It's a curated gathering of doers—from tech founders and boutique owners to musicians and content creators—all focused on activating the power of group economics.</p>

              <div className="bg-gray-700 p-4 rounded mb-4">
                <h4 className="font-bold text-wett-gold mb-2">What To Expect:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✨ <strong>Authentic Connections:</strong> Meet and build with a curated group of local business owners and artists</li>
                  <li>🎤 <strong>Spotlight Sessions:</strong> Hear real stories and strategies from featured local entrepreneurs</li>
                  <li>🤝 <strong>Resource Sharing:</strong> Share your skills, find your next partner, discover new resources</li>
                  <li>💡 <strong>The WETT Vision:</strong> Learn about the "We Thrive Together" model</li>
                  <li>💨 <strong>Hookah Available</strong></li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 rounded mb-4">
                <h4 className="font-bold text-wett-gold mb-3 text-center">TICKET OPTIONS</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-600 p-4 rounded">
                    <p className="font-bold text-lg mb-2">General Admission: $25</p>
                    <p className="text-sm">Includes venue access & curated networking. Food & drink available for purchase.</p>
                  </div>
                  <div className="bg-wett-gold text-black p-4 rounded">
                    <p className="font-bold text-lg mb-2">Founder's Circle: $60</p>
                    <p className="text-sm">Includes GA benefits + reserved seating + special gift bag from local businesses & WETT.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4 italic">Space is intentionally limited to foster quality connections.</p>

              <a href="https://wettlifestyle.com" className="inline-block bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Reserve Your Spot</a>
            </div>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Stay Connected</h2>
            <p className="mb-4">Follow us on social media for event updates, behind-the-scenes content, and exclusive announcements.</p>
            <p className="text-sm text-gray-400">#BayAreaBlueprint #WeThriveTogether #SFNetworking #CollaborationOverCompetition</p>
          </section>
        </div>
      </div>
    </main>
  );
}
