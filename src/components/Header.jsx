import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/logo5.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1340); // Updated to 1340px
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

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
    {
      label: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "About Us", href: "/about-us" },
        { name: "Specials", href: "/specials" },
        { name: "Certifications", href: "/certifications" },
        { name: "Service Area", href: "/servicearea" },
        { name: "Payment Plan Options", href: "/payment-plans" },
      ],
    },
  ];

  // Handle window resize to toggle between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1340; // Updated to 1340px
      setIsMobileView(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#003049] sticky top-0 z-50 w-full relative h-24">
      {/* Logo: hard left */}
      <Link to="/" className="absolute inset-y-0 left-0 flex items-center pl-4 z-50">
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
        
        {/* Desktop Nav - only show on large screens */}
        {!isMobileView && (
          <>
            <nav className="flex space-x-8 items-center mr-14">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnterDropdown(idx)}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <Link 
                    to={item.links[0].href} 
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
            <div className="flex items-center space-x-6 mr-8">
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
          </>
        )}

        {/* Mobile Hamburger Menu - show on screens below 1340px */}
        {isMobileView && (
          <button
            className="text-white absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Gradient separator bar at the bottom of the header */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#780000] via-[#003049] to-[#78caff] z-30"></div>

      {/* Mobile Menu - show on screens below 1340px when menu is open */}
      {isMenuOpen && isMobileView && (
        <div className="fixed top-24 left-0 right-0 bottom-0 bg-[#003049] z-40 overflow-y-auto">
          <div className="py-4 px-4">
            {navItems.map((item, idx) => (
              <div key={idx} className="mb-4">
                <div className="text-gray-200 font-semibold text-lg py-2 border-b border-gray-700">
                  {item.label}
                </div>
                <div className="ml-4 space-y-2 mt-2">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      className="block text-gray-300 hover:text-white text-base py-2"
                      onClick={handleMobileLinkClick}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a 
                href="tel:8178000340" 
                className="block text-gray-200 text-lg py-3 hover:text-white"
                onClick={handleMobileLinkClick}
              >
                (817) 800-0340
              </a>
              <button 
                onClick={() => {
                  if (window.HCPWidget) window.HCPWidget.openModal();
                  handleMobileLinkClick();
                }}
                className="bg-[#780000] text-white w-full py-3 rounded-md mt-3 text-lg"
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;