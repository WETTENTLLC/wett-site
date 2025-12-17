import Link from 'next/link';

export default function Dashboard() {

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-4">Member Dashboard</h1>
      <p className="text-xl text-gray-300 mb-12">Your WETT Member Dashboard</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-wett-gold mb-2">My Courses</h2>
          <p className="text-gray-300">Access your enrolled courses</p>
        </div>

        <Link href="/collective/community-forum" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <h2 className="text-2xl font-bold text-wett-gold mb-2">Community</h2>
          <p className="text-gray-300">Connect with sisters</p>
        </Link>

        <Link href="/family/wett-girls-collective" className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <h2 className="text-2xl font-bold text-wett-gold mb-2">WETT TIDES</h2>
          <p className="text-gray-300">Make your contribution</p>
        </Link>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">WETT Etiquette School</h3>
            <p className="text-gray-300 mb-4">The Bag Builder Masterclass</p>
            <Link href="/blueprint/etiquette-school" className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition inline-block">
              Start Course
            </Link>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Group Economics Mastery</h3>
            <p className="text-gray-300 mb-4">Build collective wealth</p>
            <Link href="/blueprint/group-economics-mastery" className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition inline-block">
              Start Course
            </Link>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">The WETT Doctrine</h3>
            <p className="text-gray-300 mb-4">Core principles</p>
            <Link href="/blueprint/the-wett-doctrine" className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition inline-block">
              Start Course
            </Link>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Community Wisdom</h3>
            <p className="text-gray-300 mb-4">Knowledge library</p>
            <Link href="/blueprint/community-wisdom" className="bg-wett-gold text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition inline-block">
              Start Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
