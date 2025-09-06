import React from 'react';
import logo from "/src/assets/logo5.png";

const Footer = () => {
  const serviceAreas = [
    "Arlington", "Azle", "Bedford", "Benbrook", "Blue Mound",
    "Burleson", "Colleyville", "Crowley", "Dalworthington Gardens", "Edgecliff Village",
    "Euless", "Everman", "Flower Mound", "Forest Hill", "Fort Worth",
    "Grand Prairie", "Grapevine", "Haltom City", "Haslet", "Hurst",
    "Keller", "Kennedale", "Lakeside", "Lake Worth"
  ];

  // Navigation items to match the header
  const navItems = [
    {
      label: "Air Conditioning",
      links: [
        { name: "AC Repair", href: "/ac-repair" },
        { name: "AC Replacement", href: "/ac-replacement" },
        { name: "AC Installation", href: "/ac-installation" },
        { name: "Preventative Maintenance", href: "/ac-maintenance" },
      ],
    },
    {
      label: "Heating",
      links: [
        { name: "Heater Repair", href: "/heater-repair" },
        { name: "Heater Replacement", href: "/heater-replacement" },
        { name: "Preventative Maintenance", href: "/heater-maintenance" },
      ],
    },
    {
      label: "Indoor Air Quality",
      links: [
        { name: "Residential", href: "/iaq" },
        { name: "Commercial", href: "/commericial-iaq" },
      ],
    },
    {
      label: "Commercial",
      links: [
        { name: "AC Services", href: "/commercial-ac-services" },
        { name: "Heater Services", href: "/commercial-ac-services" },
        { name: "Preventative Maintenance", href: "/commercial-maintenance" },
        { name: "Indoor Air Quality", href: "/commercial-iaq" },
      ],
    },
  ];

  return (
    <footer className="bg-[#003049] text-white">
      {/* Gradient bar at top to match header */}
      <div className="h-1 bg-gradient-to-r from-[#780000] via-[#003049] to-[#78caff]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src={logo}
                alt="Fort Worth Heat & Air"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Heating & Air Conditioning in Fort Worth, TX
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="tel:8178000340" className="text-gray-300 hover:text-white transition-colors font-semibold">(817) 800-0340</a>
              </p>
              <p className="text-gray-300 text-sm">
                Mon-Fri: 7:00 AM - 3:30 PM
              </p>
              <p className="text-gray-300 text-sm">
                Sat-Sun: 7:00 AM - 3:30 PM (Overtime)
              </p>
            </div>
          </div>

          {/* Services - Matching Header */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white border-b border-[#780000] pb-2">Our Services</h3>
            <div className="grid grid-cols-2 gap-6">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-white mb-2">{item.label}</h4>
                  <ul className="space-y-1">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a 
                          href={link.href} 
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Resources & Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b border-[#780000] pb-2">Resources</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/specials" className="text-gray-300 hover:text-white transition-colors">Specials</a></li>
              <li><a href="/certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="/servicearea" className="text-gray-300 hover:text-white transition-colors">Service Area</a></li>
            </ul>
            
            <h3 className="text-xl font-bold mb-2 text-white border-b border-[#780000] pb-2">Service Areas</h3>
            <p className="text-gray-400 text-sm mb-2">Serving the Greater Fort Worth area</p>
            <a href="/servicearea" className="text-white hover:text-[#78caff] text-sm font-medium transition-colors inline-flex items-center">
              View All Areas
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-[#780000] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Fort Worth Heat & Air. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">License Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;