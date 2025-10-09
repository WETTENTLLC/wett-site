export default function Empire() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">The Empire</h1>
        <p className="text-xl mb-12">Explore the diverse ventures that make up the WETT empire.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">WETT Lifestyle Flagship</h2>
            <p>The heart of our brand and philosophy.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">Snack Stop Shawty</h2>
            <p>Premium snacks and treats for the community.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">Bartradia</h2>
            <p>The ultimate trading and bartering platform.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">WETT Studios & The Guild</h2>
            <p>Creative production and collaboration space.</p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-wett-gold mb-4">Music & Media</h2>
            <p>Entertainment and content creation division.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
