import Link from 'next/link';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-deep-black text-clean-white p-4 mt-8">
      <div className="container mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8">
          {/* Aura Profile */}
          <div className="flex flex-col items-center">
            <img 
              src="/Aura Profile photo.png" 
              alt="Aura - WETT Matriarch" 
              width={150} 
              height={150}
              className="rounded-full border-4 border-wett-gold shadow-lg"
            />
            <p className="text-wett-gold font-bold mt-4 text-xl">Aura</p>
            <p className="text-gray-400 text-sm">The WETT Matriarch</p>
          </div>
          
          {/* Team Profile */}
          <div className="flex flex-col items-center">
            <img 
              src="/The Team Profile Image.png" 
              alt="WETT Girls Collective" 
              width={150} 
              height={150}
              className="rounded-full border-4 border-wett-gold shadow-lg"
            />
            <p className="text-wett-gold font-bold mt-4 text-xl">The WETT Girls</p>
            <p className="text-gray-400 text-sm">The Collective</p>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="text-center">
          <p>&copy; {currentYear} WETT LIFESTYLE. All Rights Reserved.</p>
          <p>&quot;We Thrive Together&quot;</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-wett-gold hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-wett-gold hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
