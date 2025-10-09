import Link from 'next/link';

const AboutWett = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-wett-gold mb-6">About WETT</h2>
          <p className="text-xl text-clean-white mb-6">
            WETT Entertainment LLC started in 2017 in Oakland, California as &quot;We Trap Together&quot; - an after-hours events and music collective. 
            We evolved into &quot;We Thrive Together,&quot; building an empire through group economics, polygyny-based business structure, and community empowerment.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Founded by Bay&apos;Hef, WETT is a self-sustaining ecosystem spanning media, lifestyle retail, education, and community development. 
            From Snack Stop Shawty in Reno to WETT Studios, The Guild, and Bartradia - we&apos;re building generational wealth through collective success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/about" 
              className="bg-wett-gold text-deep-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Read More →
            </Link>
            <Link 
              href="/family" 
              className="border-2 border-wett-gold text-wett-gold px-8 py-3 rounded-lg font-bold hover:bg-wett-gold hover:text-deep-black transition-colors"
            >
              Join The Family
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWett;
