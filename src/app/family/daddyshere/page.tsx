import PayWhatYouWant from '@/components/PayWhatYouWant'

export default function DaddysherePage() {

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-wett-gold mb-4 text-center">Daddy&apos;s Here</h1>
      <p className="text-2xl text-gray-300 mb-12 text-center">Changing the Narrative - Fathers Are Present</p>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-wett-gold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-300 mb-6">Daddy&apos;s Here is a non-profit initiative dedicated to supporting fathers during one of life&apos;s most important moments - the birth of their child. We provide essential comfort items and bring attention to the fact that fathers are still in their children&apos;s lives, actively working to change the &quot;deadbeat dad&quot; narrative.</p>
        
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="font-bold text-white mb-4 text-xl">We Believe:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Fathers deserve recognition and support</li>
            <li>• Being present at birth is just the beginning</li>
            <li>• Small acts of kindness create lasting impact</li>
            <li>• The narrative needs to change - fathers are here</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Phase 1: Hospital Support Program</h2>
        <p className="text-gray-300 mb-6">We provide essential comfort items to fathers at hospital delivery rooms and maternity floors in Reno and Oakland.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-3">🍔</div>
            <h3 className="font-bold text-white mb-2">Hot Meals</h3>
            <p className="text-sm text-gray-300">Food for fathers during long waits</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-3">🛌</div>
            <h3 className="font-bold text-white mb-2">Comfort Items</h3>
            <p className="text-sm text-gray-300">Blankets and pillows</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-3">🛋</div>
            <h3 className="font-bold text-white mb-2">Inflatable Beds</h3>
            <p className="text-sm text-gray-300">Small enough for hospital rooms</p>
          </div>
          <div className="bg-gray-700 p-6 rounded text-center">
            <div className="text-4xl mb-3">🎒</div>
            <h3 className="font-bold text-white mb-2">Care Packages</h3>
            <p className="text-sm text-gray-300">Essentials for the wait</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-6">Phase 2: Awareness Campaign</h2>
        <p className="text-gray-300 mb-6">Raising awareness and bringing attention to fathers who are still putting in work, showing up, and being present in their children&apos;s lives.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3">Social Media Campaign</h3>
            <p className="text-sm text-gray-300">Highlighting father stories and positive examples</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3">Community Events</h3>
            <p className="text-sm text-gray-300">Celebrating fatherhood and family</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-3">Father Recognition</h3>
            <p className="text-sm text-gray-300">Spotlighting dads making a difference</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg mb-8 border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-6 text-center">Support the Mission</h2>
        <p className="text-lg text-gray-300 mb-6 text-center">Your donation provides comfort and support to fathers during childbirth. Every dollar helps us serve more families.</p>
        
        <div className="text-center mb-6">
          <PayWhatYouWant 
            title="Support Daddy's Here"
            description="$25 feeds 1 father | $50 provides 1 comfort package | $100 provides 1 inflatable bed. Every dollar helps."
            suggestedAmounts={[25, 50, 100]}
            minAmount={5}
            onSuccess={() => alert('Thank you for supporting fathers! Your donation will provide comfort to dads at hospitals.')}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold text-2xl mb-1">$25</div>
            <div className="text-gray-300">Feeds 1 father</div>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold text-2xl mb-1">$50</div>
            <div className="text-gray-300">1 comfort package</div>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <div className="text-wett-gold font-bold text-2xl mb-1">$100</div>
            <div className="text-gray-300">1 inflatable bed</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-wett-gold mb-4">Target Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🏛 Reno, Nevada</h3>
            <p className="text-sm text-gray-300">Serving maternity wards and delivery rooms at local hospitals</p>
          </div>
          <div className="bg-gray-700 p-6 rounded">
            <h3 className="font-bold text-white mb-2">🏛 Oakland, California</h3>
            <p className="text-sm text-gray-300">Supporting fathers in Bay Area hospitals</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg text-center border-2 border-wett-gold">
        <h2 className="text-3xl font-bold text-wett-gold mb-4">Fathers Are Here. Fathers Are Present.</h2>
        <p className="text-xl text-gray-300 mb-6">Join us in changing the narrative and supporting dads who show up every day.</p>
        <p className="text-gray-400 italic">&quot;It takes a village - and fathers are the foundation&quot;</p>
      </div>
    </div>
  );
}
