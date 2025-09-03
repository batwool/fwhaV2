import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo5.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const navItems = [
    {
      label: "Air Conditioning",
      links: [
        { name: "AC Repair", href: "/ac-repair" },
        { name: "AC Replacement", href: "/ac-replacement" },
         { name: "AC Installation", href: "/ac-installation" },
        { name: "AC Maintenance", href: "/ac-maintenance" },
      ],
    },
    {
      label: "Heating",
      links: [
        { name: "Heater Repair", href: "/heater-repair" },
        { name: "Heater Installation", href: "/heater-replacement" },
        { name: "Heater Maintenance", href: "/heater-maintenance" },
      ],
    },
    {
      label: "Indoor Air Quality",
      links: [
         { name: "Testing", href: "/iaq" },
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
    {
      label: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Specials", href: "/specials" },
        { name: "Certifications", href: "/certifications" },
      ],
    },
  ];

  const handleMouseEnterDropdown = (idx) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(idx);
  };

  const handleMouseLeaveDropdown = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <header className="bg-[#003049] sticky top-0 z-50 w-full relative h-24">
      {/* Logo: hard left */}
      <Link to="/" className="absolute inset-y-0 left-0 flex items-center pl-4">
        <img
  src={logo}
  alt="Fort Worth Heat & Air"
  className="h-16 md:h-20 w-auto object-contain transform -translate-y-0.5"
  style={{ maxWidth: "220px" }}
/>
      </Link>

      {/* Main content area with more flexible layout */}
      <div className="flex justify-end h-full w-full">
        <div className="flex-grow"></div> {/* This pushes content to the right */}
        
        {/* Desktop Nav - pushed further right */}
        <nav className="hidden md:flex space-x-8 items-center mr-14">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnterDropdown(idx)}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <Link 
                to={item.label === "Air Conditioning" ? "/ac-repair" : "#"} 
                className="text-lg text-gray-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {activeDropdown === idx && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 z-40"
                  onMouseEnter={() => handleMouseEnterDropdown(idx)}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone + CTA - pushed to the far right */}
        <div className="hidden md:flex items-center space-x-6 mr-8">
          <a
            href="tel:8178000340"
            className="text-lg text-gray-200 hover:text-white transition-colors whitespace-nowrap"
          >
            (817) 800-0340
          </a>
          <button onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
          className="bg-[#780000] text-white px-5 py-3 rounded-md hover:bg-[#8B0000] transition-colors text-lg whitespace-nowrap mr-4"
          >
  Request Service
</button>

        </div>

        {/* Mobile Hamburger - positioned absolutely on the right */}
        <button
          className="md:hidden text-white absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 absolute top-full left-0 right-0 bg-[#003049] z-50">
          {navItems.map((item, idx) => (
            <div key={idx} className="mb-3 px-4">
              <Link 
                to={item.label === "Air Conditioning" ? "/ac-repair" : "#"} 
                className="text-gray-200 font-semibold text-base"
              >
                {item.label}
              </Link>
              <div className="ml-4 space-y-2 mt-2">
                {item.links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="block text-gray-300 hover:text-white text-base py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <a href="tel:8178000340" className="block text-gray-200 mt-3 px-4 text-base py-2">
            (817) 800-0340
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;