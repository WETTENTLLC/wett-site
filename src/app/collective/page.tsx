export default function Collective() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">The Collective</h1>
        <p className="text-xl mb-12">A network of creators, entrepreneurs, and visionaries.</p>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Join The Movement</h2>
            <p className="text-lg mb-6">The Collective is where collaboration meets opportunity. Connect with fellow members, share resources, and build together.</p>
            <button className="bg-wett-gold text-deep-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
              Apply Now
            </button>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-lg">
              <li>• Collaborative workspace access</li>
              <li>• Mentorship programs</li>
              <li>• Resource sharing</li>
              <li>• Networking events</li>
              <li>• Business development support</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
