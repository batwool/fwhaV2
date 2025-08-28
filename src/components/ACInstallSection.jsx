import React from 'react';

const ACInstallSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="src/assets/mikephoto1.jpeg"
              alt="Air Conditioning Installation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-left space-y-6">
            <h2 className="text-4xl font-bold text-[#003049] mb-6">
              Fixing Air Conditioners & Heaters in Fort Worth for 15 Years
            </h2>
             <div className="w-24 h-1 mt-2" style={{ backgroundColor: '#780000' }} ></div>

            <p className="text-gray-700">
              Looking for <span className="text-[#780000]">air conditioner installation</span> or <span className="text-[#780000]">heating system repair</span> in <span className="text-[#780000]">Fort Worth, TX</span>? You’re in the right place. <span className="text-[#780000]">Fort Worth Heat & Air</span>, a trusted local business, provides full-service <span className="text-[#780000]">HVAC solutions</span> for the <span className="text-[#780000]">DFW area</span>. Our licensed technicians assess your needs and recommend <span className="text-[#780000]">AC and furnace services</span> tailored to your comfort and budget. We specialize in <span className="text-[#780000]">AC repair, HVAC maintenance, duct cleaning, indoor air quality solutions,</span> and <span className="text-[#780000]">smart thermostat installation</span>.
            </p>

            <p className="text-gray-700">
              Installing or repairing a <span className="text-[#780000]">HVAC system</span> is a big investment, so we make sure it’s done right. We take time to understand the challenges with your current system and what you hope to achieve with <span className="text-[#780000]">heating and cooling solutions</span>. Whether your <span className="text-[#780000]">air conditioner struggles to cool certain rooms</span>, your <span className="text-[#780000]">furnace makes unusual noises</span>, or your system isn’t running efficiently, we provide personalized solutions. Following our motto, <span className="text-[#780000]">“Doing the job right, every time,”</span> every project is completed with professionalism and care.
            </p>

            <p className="text-gray-700">
              We’ve earned a reputation for top-quality <span className="text-[#780000]">HVAC service in Fort Worth</span>. From punctual arrivals to precise <span className="text-[#780000]">HVAC installations</span>, you’ll notice immediate improvements in comfort, efficiency, and performance. Don’t wait for extreme heat or cold—call <span className="text-[#780000]">Fort Worth Heat & Air</span> today! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACInstallSection;
