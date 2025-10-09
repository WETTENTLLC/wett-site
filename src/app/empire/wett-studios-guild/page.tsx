import PayWhatYouWant from '@/components/PayWhatYouWant'

export default function WettStudiosGuild() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-wett-gold mb-8">WETT Studios & The Guild</h1>
      <p className="text-lg text-gray-300 mb-12">Build your body and your business - Fitness, dance, and financial literacy under one roof.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-wett-gold mb-6">💪 WETT Studios</h2>
          <p className="text-gray-300 mb-6">Pole fitness and dance classes designed to build strength, confidence, and performance skills.</p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Pole Fitness</h3>
              <p className="text-sm text-gray-300">Full-body workout combining strength training, flexibility, and dance</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Dance Classes</h3>
              <p className="text-sm text-gray-300">Hip-hop, heels, choreography, and freestyle sessions</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Performance Training</h3>
              <p className="text-sm text-gray-300">Stage presence, confidence building, and showmanship</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Private Sessions</h3>
              <p className="text-sm text-gray-300">One-on-one training tailored to your goals</p>
            </div>
          </div>
          
          <button className="bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition w-full">Book a Class</button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-wett-gold mb-6">📚 The Guild</h2>
          <p className="text-gray-300 mb-6">Business and financial literacy workshops to build your empire from the ground up.</p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Financial Literacy</h3>
              <p className="text-sm text-gray-300">Budgeting, credit repair, investment basics, and wealth building</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Business Fundamentals</h3>
              <p className="text-sm text-gray-300">Starting an LLC, business plans, marketing, and operations</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Group Economics</h3>
              <p className="text-sm text-gray-300">Pooling resources, co-ops, and collective wealth strategies</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-bold text-white mb-2">Entrepreneurship</h3>
              <p className="text-sm text-gray-300">From idea to launch, scaling, and building legacy</p>
            </div>
          </div>
          
          <button className="bg-wett-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition w-full">Enroll in Workshop</button>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Class Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Monday & Wednesday</div>
            <div className="text-white mb-1">Pole Fitness - Beginner</div>
            <div className="text-sm text-gray-400">6:00 PM - 7:30 PM</div>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Tuesday & Thursday</div>
            <div className="text-white mb-1">Dance Choreography</div>
            <div className="text-sm text-gray-400">7:00 PM - 8:30 PM</div>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Saturday</div>
            <div className="text-white mb-1">Financial Literacy Workshop</div>
            <div className="text-sm text-gray-400">10:00 AM - 12:00 PM</div>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Saturday</div>
            <div className="text-white mb-1">Business Fundamentals</div>
            <div className="text-sm text-gray-400">1:00 PM - 3:00 PM</div>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Sunday</div>
            <div className="text-white mb-1">Pole Fitness - Advanced</div>
            <div className="text-sm text-gray-400">11:00 AM - 1:00 PM</div>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <div className="text-wett-gold font-bold mb-2">Sunday</div>
            <div className="text-white mb-1">Group Economics Mastery</div>
            <div className="text-sm text-gray-400">2:00 PM - 4:00 PM</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Pay What You Want - Access for All</h2>
        <p className="text-gray-300 mb-6">We believe fitness and education should be accessible. Pay what you can afford for classes and workshops.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PayWhatYouWant 
            title="Single Class Drop-In"
            description="Suggested: $15-$25 per class. Pay what works for you."
            suggestedAmounts={[10, 20, 30]}
            minAmount={5}
            onSuccess={() => alert('Class booked! See you soon.')}
          />
          
          <PayWhatYouWant 
            title="Monthly Unlimited Access"
            description="Suggested: $100-$200/month for unlimited classes. All fitness and workshops included."
            suggestedAmounts={[75, 150, 250]}
            minAmount={50}
            onSuccess={() => alert('Monthly membership activated! Welcome to the family.')}
          />
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">Location</h2>
        <p className="text-gray-300 mb-4">Currently operating in Oakland and Reno. Full flagship location coming 2026.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🏛 Oakland, CA</h3>
            <p className="text-sm text-gray-300">Pop-up classes and workshops</p>
            <p className="text-xs text-gray-400 mt-2">Contact for current location</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🏛 Reno, NV</h3>
            <p className="text-sm text-gray-300">Pop-up classes and workshops</p>
            <p className="text-xs text-gray-400 mt-2">Contact for current location</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Build Your Body, Build Your Business</h2>
        <p className="text-xl text-gray-300 mb-6">WETT Studios & The Guild provide the tools to thrive physically, mentally, and financially.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:wettentertainmentllc@gmail.com?subject=Class Booking" className="bg-wett-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">Book a Class</a>
          <a href="/blueprint/group-economics-mastery" className="border-2 border-wett-gold text-wett-gold px-8 py-3 rounded-lg font-bold hover:bg-wett-gold hover:text-black transition">View Courses</a>
        </div>
      </div>
    </div>
  );
}
