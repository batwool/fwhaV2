import React from 'react';
import fwhahero from '/src/assets/shorterfwha.mp4';
import fbreview from '../assets/fbreview.png';
import googlereview from '../assets/GoogleReview.png';
import yelpreview from '../assets/yelpreview.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video + Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/fwhaposter.webp" // 👈 loads instantly as LCP
        >
          <source src={fwhahero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
            />
            <img
              src={fbreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
            />
            <img
              src={yelpreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
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
