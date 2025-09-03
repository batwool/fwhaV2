import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Import images
import hvacImage from '../assets/hvac2.jpg';
import heatingImage from '../assets/heating.jpg';

const Services = () => {
  const acServices = [
    { title: 'AC Repair', icon: '', path: '/ac-repair' },
    { title: 'AC Replacement', icon: '', path: '/ac-replacement' },
    { title: 'AC Maintenance', icon: '', path: '/ac-maintenance' }
  ];

  const heatingServices = [
    { title: 'Heater Repair', icon: '', path: '/heater-repair' },
    { title: 'Heater Replacement', icon: '', path: '/heater-replacement' },
    { title: 'Heater Maintenance', icon: '', path: '/heater-maintenance' }
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28">
      {/* Background with wave design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#003049]"></div>
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-40 md:h-56 lg:h-72"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C320,140 420,40 720,60 C1020,80 1120,140 1440,80 L1440,120 L0,120 Z"
            fill="#004366"
            opacity="0.3"
          />
          <path
            d="M0,100 C360,160 480,60 720,80 C960,100 1080,160 1440,100 L1440,120 L0,120 Z"
            fill="#004366"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[95%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold text-white mb-3">OUR SERVICES</h4>
          <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
            Fort Worth Heating & Air Conditioning
          </h2>
          <div className="w-24 h-1 mx-auto mb-3" style={{ backgroundColor: '#780000' }}></div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Looking for reliable HVAC services in Fort Worth? Our expert team handles heating repair, 
            air conditioning installation, and routine maintenance to keep your home comfortable all year round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Air Conditioning Column */}
          <div className="flex flex-col items-center w-full">
            <Link
              to="/ac-repair"
              className="relative w-full max-w-[calc(100%-1rem)] group rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:brightness-90"
            >
              <img
                src={hvacImage}
                alt="Air Conditioning"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="p-10 text-white">
                  <h3 className="text-4xl font-bold mb-3">Air Conditioning</h3>
                  <p className="text-xl">Expert AC services for Fort Worth homes</p>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 mt-4 w-full max-w-[calc(100%-1rem)]">
              {acServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-300 transition-colors duration-200 w-full"
                >
                  <span className="text-4xl mr-5">{service.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-2xl">{service.title}</h4>
                  </div>
                  <span className="ml-auto text-[#780000] text-2xl group-hover:text-[#600000]">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Heating Column */}
          <div className="flex flex-col items-center w-full">
            <Link
              to="/heating-repair"
              className="relative w-full max-w-[calc(100%-1rem)] group rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:brightness-90"
            >
              <img
                src={heatingImage}
                alt="Heating"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="p-10 text-white">
                  <h3 className="text-4xl font-bold mb-3">Heating</h3>
                  <p className="text-xl">Reliable heating solutions for Fort Worth winters</p>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 mt-4 w-full max-w-[calc(100%-1rem)]">
              {heatingServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-300 transition-colors duration-200 w-full"
                >
                  <span className="text-4xl mr-5">{service.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-2xl">{service.title}</h4>
                  </div>
                  <span className="ml-auto text-[#780000] text-2xl group-hover:text-[#600000]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12 space-y-5 sm:space-y-0 sm:space-x-5">
          <a
            href="tel:8178000340"
            className="inline-block px-12 py-6 bg-[#780000] text-white font-semibold rounded-lg shadow-md hover:bg-[#600000] transition-colors duration-200 text-xl"
          >
            Call (817) 800-0340
          </a>
          <button
            onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
            className="inline-block px-12 py-6 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#003049] transition-colors duration-200 text-xl"
          >
            Request Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
