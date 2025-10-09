'use client';

import Image from 'next/image';

const Hero = () => {
  const handleVideoError = () => {
    console.warn('Video failed to load, using fallback background');
  };

  return (
    <div className="relative h-screen text-clean-white">
      <div className="absolute inset-0 bg-deep-black opacity-50"></div>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleVideoError}
      >
        {/* In a real implementation, you'd have a source tag here */}
        {/* e.g. <source src="/path/to/video.mp4" type="video/mp4" /> */}
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* Large faded shimmering logo background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/wett-main-logo1.png" 
            alt="WETT Logo" 
            width={800} 
            height={400}
            className="opacity-15 animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 80px rgba(212, 175, 55, 0.4)) drop-shadow(0 0 120px rgba(212, 175, 55, 0.3))'
            }}
            priority
          />
        </div>
        
        {/* Text content on top */}
        <div className="relative z-20">
          <h1 className="text-6xl font-bold text-wett-gold" style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(212, 175, 55, 0.5)'
          }}>WETT LIFESTYLE</h1>
          <p className="text-2xl mt-4" style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
          }}>The Doctrine</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
