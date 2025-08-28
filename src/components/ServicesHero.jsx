import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('https://genzryan.com/wp-content/uploads/2024/10/twin-cities-ac-repair-scaled.jpeg')`,
          height: '100%'
        }}
      />
      {/* Color overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#003049',
          opacity: 0.5,
          height: '100%'
        }}
      />

      {/* Content */}
      <div className="relative px-4 sm:pl-6 sm:pr-8 lg:pl-12 lg:pr-16 py-16 lg:py-20">
        <div className="max-w-5xl">
          <div className="inline-block bg-white px-4 py-2 mb-4">
            <h1 className="text-base font-semibold" style={{color: '#003049'}}>
              AC Repair For Fort Worth Homes
            </h1>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Air Conditioning Repair Experts Backed by Experience
          </h2>

          <p className="text-base text-white mb-8 opacity-90 leading-relaxed">
            When your air conditioner starts making strange noises or fails to keep your home cool, it's more than an inconvenience—it's a sign you need professional AC repair. At Fort Worth Heat and Air, we've spent years serving homeowners with fast, accurate, and reliable air conditioning repairs across the Fort Worth area. Whether it's short-cycling, electrical issues, or weak airflow, our certified technicians use proven diagnostic tools to identify AC issues and fix it right the first time—so you can get back to comfort without missing a beat.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-white text-sm">Reliable & Timely Response</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-white text-sm">Rotating Monthly Deals</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="text-white text-sm">Energy Star Rated Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
