import React from 'react';

const Footer = () => {
  const serviceAreas = [
    "Arlington", "Azle", "Bedford", "Benbrook", "Blue Mound",
    "Burleson", "Colleyville", "Crowley", "Dalworthington Gardens", "Edgecliff Village",
    "Euless", "Everman", "Flower Mound", "Forest Hill", "Fort Worth",
    "Grand Prairie", "Grapevine", "Haltom City", "Haslet", "Hurst",
    "Keller", "Kennedale", "Lakeside", "Lake Worth"
  ];

  return (
    <footer className="bg-[#003049] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#780000]">Fort Worth Heat & Air</h3>
            <p className="text-gray-300 mb-4">
              Heating & Air Conditioning in Fort Worth, TX
            </p>
            <p className="text-gray-300">
              <a href="tel:8178000340" className="text-gray-300 hover:text-[#780000]">(817) 800-0340</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#780000]">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.slice(0, 10).map((area, index) => (
                <p key={index} className="text-gray-300 text-sm">{area}</p>
              ))}
            </div>
            <a href="#areas" className="text-[#780000] underline text-sm mt-2 inline-block">
              View All Areas →
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#780000]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-[#780000]">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#780000]">Services</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-[#780000]">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#780000]">Contact</a></li>
              <li><a href="#specials" className="text-gray-300 hover:text-[#780000]">Specials</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Fort Worth Heat & Air. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
