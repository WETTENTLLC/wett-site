import Link from 'next/link';

export default function Family() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">The WETT Community</h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">Join our family of creators, entrepreneurs, and visionaries who thrive together.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* WETT Girls Collective */}
          <Link href="/family/wett-girls-collective" className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-lg hover:opacity-90 transition">
            <div className="text-4xl mb-4">👑</div>
            <h2 className="text-2xl font-bold mb-3">WETT Girls Collective</h2>
            <p className="text-white/90">The Sisterhood of Legacy Builders - Models, CEOs, artists building their empire together</p>
            <div className="mt-4 text-sm font-semibold">Apply Now →</div>
          </Link>

          {/* Family Members */}
          <Link href="/family/members" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition border-2 border-wett-gold">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">Meet The Family</h2>
            <p className="text-gray-300">Connect with Bay'Hef, Aura, DaddysHere, and other family members</p>
            <div className="mt-4 text-sm font-semibold text-wett-gold">View Members →</div>
          </Link>

          {/* Aura Chat */}
          <Link href="/family/aura" className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-lg hover:opacity-90 transition">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-3">Chat with Aura</h2>
            <p className="text-white/90">Get guidance from the WETT Matriarch - advice, support, and wisdom</p>
            <div className="mt-4 text-sm font-semibold">Start Chat →</div>
          </Link>

          {/* Community Forum */}
          <Link href="/collective/community-forum" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">💭</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">Community Forum</h2>
            <p className="text-gray-300">Join discussions, share ideas, and connect with other members</p>
            <div className="mt-4 text-sm font-semibold text-wett-gold">Join Discussion →</div>
          </Link>

          {/* Events */}
          <Link href="/events" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">Events & Meetups</h2>
            <p className="text-gray-300">Workshops, networking events, and community gatherings</p>
            <div className="mt-4 text-sm font-semibold text-wett-gold">View Events →</div>
          </Link>

          {/* Partnership Opportunities */}
          <Link href="/collective/partnership-opportunities" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-2xl font-bold text-wett-gold mb-3">Partnerships</h2>
            <p className="text-gray-300">Collaborate with WETT on business ventures and opportunities</p>
            <div className="mt-4 text-sm font-semibold text-wett-gold">Learn More →</div>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg border-2 border-wett-gold">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Community Benefits</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-wett-gold text-xl">✓</span>
                <span>Exclusive access to events and workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold text-xl">✓</span>
                <span>Networking opportunities with entrepreneurs and creators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold text-xl">✓</span>
                <span>Early access to new products and services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold text-xl">✓</span>
                <span>Member-only discounts and perks across the empire</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wett-gold text-xl">✓</span>
                <span>Group economics opportunities and collective wealth building</span>
              </li>
            </ul>
          </section>
          
          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">We Thrive Together</h2>
            <p className="text-lg mb-6">Our family is built on the principle that collective success leads to individual growth. Whether you're an entrepreneur, artist, creator, or visionary - there's a place for you in the WETT community.</p>
            <p className="text-gray-300 italic">&quot;Many hands make light work. The village approach to building generational wealth.&quot;</p>
          </section>
        </div>
      </div>
    </main>
  );
}
