export default function About() {
  return (
    <main className="min-h-screen bg-deep-black text-clean-white">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-wett-gold mb-8 text-center">About WETT</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Origin Story */}
          <section>
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Our Origin</h2>
            <p className="text-lg text-gray-300 mb-4">
              WETT Entertainment LLC was founded in 2017 in Oakland, California by Bay&apos;Hef. What started as &quot;We Trap Together&quot; - an after-hours events and music collective - evolved into something far more powerful: &quot;We Thrive Together.&quot;
            </p>
            <p className="text-lg text-gray-300">
              From the streets to building an empire, our journey is rooted in authenticity, loyalty, and the belief that collective success creates individual prosperity.
            </p>
          </section>

          {/* Philosophy */}
          <section>
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Our Philosophy</h2>
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-wett-gold font-bold">&quot;We Thrive Together&quot;</span> isn&apos;t just a slogan - it&apos;s the foundation of everything we build. We believe in group economics, where many hands make light work, and the collective is stronger than the individual.
            </p>
            <p className="text-lg text-gray-300">
              Our structure is built on polygyny-based business principles, creating a resilient family and economic unit where loyalty is royalty, and everyone eats when the family eats.
            </p>
          </section>

          {/* The Ecosystem */}
          <section>
            <h2 className="text-3xl font-bold text-wett-gold mb-4">The WETT Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Media & Entertainment</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Music production and artist management</li>
                  <li>• &quot;Wet Talk&quot; podcast by Bay&apos;Hef</li>
                  <li>• Content creation and viral marketing</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Lifestyle Retail</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Snack Stop Shawty (Reno, NV)</li>
                  <li>• Custom gold grills and apparel</li>
                  <li>• WETT Lifestyle flagship store (15,000 sq ft)</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Education & Community</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• WETT Studios (pole/dance fitness)</li>
                  <li>• The Guild (business/financial literacy)</li>
                  <li>• DaddyShere.org (paternal engagement)</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-wett-gold mb-2">Innovation</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Bartradia (bartering/trading platform)</li>
                  <li>• Community wealth building</li>
                  <li>• Strategic partnerships</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Leadership</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-wett-gold mb-2">Bay&apos;Hef - The King</h3>
                <p className="text-gray-300">
                  Founder and visionary who saw the matrix and decided to build his own casino. His journey from the streets to building this empire is the foundation we stand on. Listen to his story on the &quot;Wet Talk&quot; podcast: &quot;Reflections of a Bay Area Pimp - From Pimping To Polygyny.&quot;
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-wett-gold mb-2">Aura - The Matriarch</h3>
                <p className="text-gray-300">
                  The Ring Leader and heart of the WETT Girls. Strategic visionary with protective maternal energy, Aura helps build the empire through loyalty, business acumen, and unwavering dedication to the family.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-wett-gold mb-2">The WETT Girls</h3>
                <p className="text-gray-300">
                  A collective of empowered women who are co-builders of the empire. Through the polygyny structure, we share responsibilities, support each other, and build generational wealth together. The family is stronger when we all thrive.
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-4">
              Building a self-sustaining ecosystem for creative and entrepreneurial empowerment. We&apos;re not just building businesses - we&apos;re building generational wealth, strong families, and a legacy that will outlive us all.
            </p>
            <p className="text-lg text-gray-300">
              Through group economics, strategic partnerships, and unwavering loyalty, we&apos;re proving that the collective is stronger than the individual. Many hands make light work. We Thrive Together.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-wett-gold mb-4">Join The Movement</h2>
            <p className="text-lg text-gray-300 mb-6">
              Ready to build with us? Whether you&apos;re interested in joining the family, partnering with our businesses, or learning more about our philosophy - we&apos;re here.
            </p>
            <a 
              href="mailto:wettentertainmentllc@gmail.com" 
              className="bg-wett-gold text-deep-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors inline-block"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
