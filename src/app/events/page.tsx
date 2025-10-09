export default function Events() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">Events</h1>
        <p className="text-xl mb-12">Join us for exclusive events, workshops, and networking opportunities.</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Upcoming Events</h2>
            <p className="text-lg mb-6">Stay tuned for announcements about our upcoming events. Follow us on social media to be the first to know.</p>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Event Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-bold text-wett-gold mb-2">Networking Mixers</h3>
                <p>Connect with fellow entrepreneurs and creators.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold mb-2">Workshops</h3>
                <p>Learn new skills and strategies for success.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold mb-2">Product Launches</h3>
                <p>Be the first to experience new offerings.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold mb-2">Community Gatherings</h3>
                <p>Celebrate wins and build relationships.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
