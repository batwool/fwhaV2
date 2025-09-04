import React, { useRef, useEffect, useState } from 'react';
import fwhahero from '/src/assets/fwhahero.mp4';
import fbreview from '../assets/fbreview.png';
import googlereview from '../assets/GoogleReview.png';
import yelpreview from '../assets/yelpreview.png';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    const handleError = () => {
      console.error("Video failed to load");
      setShowFallback(true);
      setIsVideoLoaded(true);
    };

    // Check if video is already loaded (cached)
    if (video.readyState > 2) {
      setIsVideoLoaded(true);
      return;
    }
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('error', handleError);

    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video + Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={fwhahero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-20">
            <div className="text-white flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
              <p>Loading video...</p>
            </div>
          </div>
        )}

        {/* Fallback image if video fails to load */}
        {showFallback && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23003049'/%3E%3C/svg%3E")`,
              backgroundColor: '#003049'
            }}
          ></div>
        )}

        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,48,73,0.5)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
        <div className="flex flex-col justify-center min-h-screen">
          <div className="flex flex-wrap sm:flex-nowrap justify-start gap-3 mb-6">
            <img
              src={googlereview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
              loading="lazy"
            />
            <img
              src={fbreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
              loading="lazy"
            />
            <img
              src={yelpreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
              loading="lazy"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Celebrating 15 Years of Excellence
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8">
            Proudly Serving Fort Worth Since 2013
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
            {/* Request Service button triggers HCP modal */}
            <button
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#780000] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#650000] transition-colors"
            >
              Request Service
            </button>

            {/* Call button */}
            <a
              href="tel:8178000340"
              className="bg-white text-[#780000] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Call (817) 800-0340
            </a>
          </div>

          {/* Stats: hidden on small screens */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">A+</div>
              <p className="text-gray-200">Rated by BBB</p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-gray-200">Areas Serviced</p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">30</div>
              <p className="text-gray-200">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;