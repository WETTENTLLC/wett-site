const pressKits = [
  { name: 'WETT Lifestyle General Press Kit', url: '#' },
  { name: 'The WETT Collective Investor Kit', url: '#' },
];

const mediaCoverage = [
  { publication: 'Forbes', title: 'The Rise of Community-Centric Economics', url: '#' },
  { publication: 'TechCrunch', title: 'How WETT Lifestyle is Building a Tech-Infused Empire', url: '#' },
  { publication: 'Vogue Business', title: 'Beyond Apparel: The WETT Lifestyle Ecosystem', url: '#' },
];

export default function PressAndMediaPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Press & Media</h1>
        <p className="text-lg text-gray-400 text-center mb-12">
          Information and resources for journalists, content creators, and media partners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Downloads & Assets */}
          <div className="space-y-8">
            {/* Press Kit Downloads */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Press Kit Downloads</h2>
              <ul className="space-y-3">
                {pressKits.map(kit => (
                  <li key={kit.name}>
                    <a href={kit.url} className="text-wett-gold hover:underline font-semibold">
                      {kit.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Assets */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Brand Assets</h2>
              <p className="text-gray-300 mb-4">Access official logos, imagery, and brand guidelines. Please use in accordance with our terms.</p>
              <a href="#" className="inline-block bg-wett-gold text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                Download Asset Pack
              </a>
            </div>
          </div>

          {/* Right Column: Coverage & Requests */}
          <div className="space-y-8">
            {/* Media Coverage */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Media Coverage</h2>
              <ul className="space-y-4">
                {mediaCoverage.map(item => (
                  <li key={item.title}>
                    <a href={item.url} className="hover:underline">
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm text-wett-gold">{item.publication}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interview Requests */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Interview Requests</h2>
              <p className="text-gray-300 mb-4">For all media inquiries and interview requests, please contact our communications team.</p>
              <a href="mailto:press@wettlifestyle.com" className="inline-block bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
