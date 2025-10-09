export default function MusicMediaDivision() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Music & Media Division</h1>
      <p className="text-lg text-gray-300 mb-12">From artist development to full production - we build self-contained music ecosystems.</p>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">WETT Roster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="w-24 h-24 bg-wett-gold rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-2xl">BH</div>
            <h3 className="font-bold text-white mb-2">Bay&apos;Hef</h3>
            <p className="text-sm text-gray-400">Founder | Artist</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="w-24 h-24 bg-wett-gold rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-2xl">MW</div>
            <h3 className="font-bold text-white mb-2">Mac Wayne</h3>
            <p className="text-sm text-gray-400">Artist | 20+ year partnership</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="w-24 h-24 bg-wett-gold rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-2xl">T</div>
            <h3 className="font-bold text-white mb-2">Trubble</h3>
            <p className="text-sm text-gray-400">Artist</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="w-24 h-24 bg-wett-gold rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-2xl">RR</div>
            <h3 className="font-bold text-white mb-2">Revlon Rose</h3>
            <p className="text-sm text-gray-400">Artist</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Artist Services - Full Career Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">🎵</span> Production Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Professional mixing and mastering</li>
              <li>• Beat production and custom instrumentals</li>
              <li>• Recording studio sessions</li>
              <li>• Sound engineering and post-production</li>
            </ul>
          </div>
          
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">💼</span> Career Guidance
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Complete career setup and strategy</li>
              <li>• Artist counseling and mentorship</li>
              <li>• Brand development and positioning</li>
              <li>• Industry navigation and connections</li>
            </ul>
          </div>
          
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">🎭</span> Performance Development
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Show curation and planning</li>
              <li>• Performance etiquette training</li>
              <li>• Stage presence coaching</li>
              <li>• Event coordination and booking</li>
            </ul>
          </div>
          
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span> Digital Ecosystem
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Custom artist websites</li>
              <li>• Self-contained music platforms</li>
              <li>• Direct-to-fan sales systems</li>
              <li>• Digital marketing and distribution</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">Proven Track Record</h2>
        <p className="text-gray-300 mb-6">We&apos;ve built complete music ecosystems for established artists, allowing them to sell directly to their fanbase and maintain full ownership.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded text-center">
            <h3 className="font-bold text-wett-gold mb-2">Dru Down</h3>
            <p className="text-sm text-gray-400">Full website & ecosystem</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <h3 className="font-bold text-wett-gold mb-2">Red Lotus</h3>
            <p className="text-sm text-gray-400">Full website & ecosystem</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <h3 className="font-bold text-wett-gold mb-2">Tooch Magooch</h3>
            <p className="text-sm text-gray-400">Full website & ecosystem</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">🎧 Wet Talk Podcast</h2>
        <p className="text-lg text-gray-300 mb-4">Bay&apos;Hef&apos;s audio documentary series: <span className="text-wett-gold font-bold">&quot;Reflections of a Bay Area Pimp - From Pimping To Polygyny&quot;</span></p>
        <p className="text-gray-300 mb-6">Real talk about transformation, business, family structure, and building the WETT empire. Unfiltered wisdom from the streets to the suite.</p>
        <button className="bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Listen Now</button>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Ready to Build Your Music Career?</h2>
        <p className="text-xl text-gray-300 mb-6">Whether you need production, guidance, or a complete ecosystem - we&apos;ve got you covered.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:wettentertainmentllc@gmail.com" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Book a Consultation</a>
          <a href="/collective/partnership-opportunities" className="border-2 border-wett-gold text-wett-gold px-8 py-3 rounded-lg font-bold hover:bg-wett-gold hover:text-black transition">Partner With Us</a>
        </div>
      </div>
    </div>
  );
}
