export default function Family() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">The Family</h1>
        <p className="text-xl mb-12">Join our community of like-minded individuals who thrive together.</p>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Community Benefits</h2>
            <ul className="space-y-3 text-lg">
              <li>✓ Exclusive access to events and workshops</li>
              <li>✓ Networking opportunities with entrepreneurs</li>
              <li>✓ Early access to new products and services</li>
              <li>✓ Member-only discounts and perks</li>
            </ul>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">We Thrive Together</h2>
            <p className="text-lg">Our family is built on the principle that collective success leads to individual growth. Join us in building something extraordinary.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
