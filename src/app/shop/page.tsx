export default function Shop() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">Shop</h1>
        <p className="text-xl mb-12">Official WETT Lifestyle merchandise and products.</p>
        
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-wett-gold mb-4">Coming Soon</h2>
          <p className="text-xl mb-8">Our shop is currently under construction. Stay tuned for exclusive merchandise and products.</p>
          <button className="bg-wett-gold text-deep-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Notify Me When Available
          </button>
        </div>
      </div>
    </main>
  );
}
