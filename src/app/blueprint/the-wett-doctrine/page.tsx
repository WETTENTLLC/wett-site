export default function WettDoctrinePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">The WETT Doctrine</h1>
      <p className="text-lg text-gray-300 mb-12">&quot;We Thrive Together&quot; - The foundational philosophy that powers the WETT empire.</p>
      
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">1. Group Economics</h3>
            <p className="text-gray-300">Many hands make light work. Pool resources, share risks, multiply returns. The collective is stronger than the individual.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">2. Loyalty is Royalty</h3>
            <p className="text-gray-300">Trust and commitment to the family above all. Loyalty creates the foundation for generational wealth.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">3. Purse First, Ass Last</h3>
            <p className="text-gray-300">Value must be demonstrated upfront. What&apos;s paid for is valued. What&apos;s free is taken for granted.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">4. Polygyny as Structure</h3>
            <p className="text-gray-300">Multiple partners building together creates resilience, shared labor, and expanded capacity for wealth creation.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">5. The Village Approach</h3>
            <p className="text-gray-300">It takes a village to raise a child, build a business, and create legacy. Community over competition.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="text-xl font-bold text-wett-gold mb-3">6. Evolution Over Stagnation</h3>
            <p className="text-gray-300">From &quot;We Trap Together&quot; to &quot;We Thrive Together&quot; - constant growth and adaptation.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">The WETT Way</h2>
        <div className="space-y-4 text-gray-300">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Build Together</h3>
            <p className="text-sm">Every member contributes their unique skills and resources to the collective success.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Eat Together</h3>
            <p className="text-sm">When the family wins, everyone eats. Shared prosperity through group economics.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Grow Together</h3>
            <p className="text-sm">Invest in each other&apos;s development. Your success is my success.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-bold text-white mb-2">Protect Together</h3>
            <p className="text-sm">The family shields its members. We defend our own and our collective interests.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">From the Streets to the Suite</h2>
        <p className="text-gray-300 mb-4">Bay&apos;Hef&apos;s journey from Oakland streets to building a multi-venture empire demonstrates the power of the doctrine in action.</p>
        <div className="bg-gray-700 p-4 rounded">
          <p className="text-gray-300 italic">&quot;I saw the matrix and decided to build my own casino. The game taught me about loyalty, structure, and economics. Now we apply those lessons to legitimate business and family building. We don&apos;t just survive - we thrive together.&quot;</p>
          <p className="text-wett-gold text-sm mt-2">- Bay&apos;Hef, Founder</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">Apply the Doctrine</h2>
        <p className="text-gray-300 mb-4">Ready to implement these principles in your life and business?</p>
        <div className="flex gap-4">
          <a href="/blueprint/group-economics-mastery" className="bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Take the Course</a>
          <a href="/family" className="border-2 border-wett-gold text-wett-gold px-6 py-3 rounded-lg font-bold hover:bg-wett-gold hover:text-black transition">Join the Family</a>
        </div>
      </div>
    </div>
  );
}
