export default function SnackStopShawty() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">Snack Stop Shawty</h1>
      <p className="text-lg text-gray-300 mb-12">Premium snacks and treats for the community - Coming Soon to 50 S. Virginia St, Reno, NV</p>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-8 text-center">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Currently Mobile!</h2>
        <p className="text-xl text-gray-300 mb-6">Rose is bringing the sweetness to you at various locations and events throughout Reno.</p>
        <div className="bg-gray-700 p-6 rounded-lg inline-block">
          <p className="text-gray-300 mb-2">Catch us at:</p>
          <ul className="text-left text-gray-300 space-y-2">
            <li>• Local events and festivals</li>
            <li>• Community gatherings</li>
            <li>• Pop-up locations (follow us for updates)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-4xl mb-2">🍬</div>
            <h3 className="font-bold text-white mb-2">Premium Candy</h3>
            <p className="text-sm text-gray-300">Curated selection of treats</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-4xl mb-2">🍫</div>
            <h3 className="font-bold text-white mb-2">Specialty Snacks</h3>
            <p className="text-sm text-gray-300">Unique flavors and brands</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="font-bold text-white mb-2">Event Catering</h3>
            <p className="text-sm text-gray-300">Sweet tables for your events</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Brick & Mortar Coming Soon</h2>
        <p className="text-xl text-gray-300 mb-6">50 S. Virginia St, Reno, NV</p>
        <p className="text-gray-400 mb-6">We&apos;re working hard to bring you a permanent location. Stay tuned for updates!</p>
        <a href="mailto:wettentertainmentllc@gmail.com" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition inline-block">
          Book Rose for Your Event
        </a>
      </div>
    </div>
  );
}
