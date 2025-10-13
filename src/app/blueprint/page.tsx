import Link from 'next/link';

export default function Blueprint() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8">The Blueprint</h1>
        <p className="text-xl mb-12">Our roadmap to success and the principles that guide us.</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-gray-900 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-wett-gold mb-6">Courses & Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blueprint/etiquette-school" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                <h3 className="text-xl font-bold text-wett-gold mb-2">WETT Etiquette School</h3>
                <p className="text-gray-300">The Bag Builder: A Masterclass in Modern Etiquette</p>
              </Link>
              <Link href="/blueprint/group-economics-mastery" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Group Economics Mastery</h3>
                <p className="text-gray-300">Learn to pool resources and build collective wealth</p>
              </Link>
              <Link href="/blueprint/the-wett-doctrine" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                <h3 className="text-xl font-bold text-wett-gold mb-2">The WETT Doctrine</h3>
                <p className="text-gray-300">Core principles and philosophy</p>
              </Link>
              <Link href="/blueprint/community-wisdom" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Community Wisdom</h3>
                <p className="text-gray-300">Knowledge library and mentorship</p>
              </Link>
            </div>
          </section>

          <section className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Core Principles</h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="text-xl font-bold text-wett-gold">1. Community First</h3>
                <p>We prioritize the collective over the individual.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">2. Innovation</h3>
                <p>Constantly evolving and adapting to new opportunities.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">3. Authenticity</h3>
                <p>Staying true to our values and mission.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-wett-gold">4. Excellence</h3>
                <p>Delivering quality in everything we do.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
