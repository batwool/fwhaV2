import React, { useState } from "react";
import commercialHero from "../assets/commercial-building.jpg";
import commercialBuilding from "../assets/commercial-building.jpg";

const CommercialACServices = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextReview = () => {
    setCurrentReview((prev) =>
      prev + 3 >= reviewsData.length ? 0 : prev + 3
    );
  };

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? Math.floor((reviewsData.length - 1) / 3) * 3 : prev - 3
    );
  };

  const faqData = [
    {
      question: "How often should commercial HVAC systems be serviced in Fort Worth?",
      answer:
        "For optimal performance in North Texas's demanding climate, we recommend quarterly maintenance for most commercial facilities. Restaurants, medical facilities, and buildings with 24/7 operations may need monthly check-ups to ensure reliability and efficiency."
    },
    {
      question: "What's included in your commercial HVAC maintenance plans?",
      answer:
        "Our comprehensive commercial maintenance includes system diagnostics, coil cleaning, filter replacement, electrical connection checks, refrigerant level verification, thermostat calibration, belt adjustments, lubrication of moving parts, and complete system performance reports for your records."
    },
    {
      question: "How long does a commercial HVAC installation typically take?",
      answer:
        "Timelines vary based on system size and complexity. Rooftop unit replacements can often be completed in 1-2 days, while larger VRF systems or complete building retrofits may take 2-4 weeks. We provide detailed project timelines upfront and work to minimize business disruption."
    },
    {
      question: "Do you offer 24/7 emergency service for commercial clients?",
      answer:
        "Absolutely. We understand that HVAC failures can impact your business operations, product integrity, and customer comfort. Our team provides 24/7 emergency response with priority service for commercial clients throughout the Fort Worth area."
    },
    {
      question: "Can you help with HVAC zoning for different areas of my building?",
      answer:
        "Yes, we specialize in designing and implementing zoning solutions that allow different temperature control in various building areas. This improves comfort while reducing energy costs by not conditioning unoccupied spaces."
    },
    {
      question: "What types of commercial HVAC systems do you service?",
      answer:
        "We service all major commercial systems including rooftop units (RTUs), split systems, VRF/VRV systems, chillers, boilers, make-up air units, heat pumps, and specialized equipment for restaurants, medical facilities, and data centers."
    }
  ];

  const reviewsData = [
    {
      name: "Michael T.",
      business: "Restaurant Owner",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "Our HVAC went down during a busy weekend. Fort Worth Heat and Air had a technician here within 90 minutes and got our cooling back online. Their commercial team really understands how critical temperature control is for our business.",
      date: "July 2024"
    },
    {
      name: "Sarah Jenkins",
      business: "Office Building Manager",
      location: "Arlington, TX",
      rating: 5,
      review:
        "We've been using their commercial maintenance plan for three years now. Our energy costs have decreased by 18% and we've avoided any major breakdowns. Their detailed reporting helps us budget for future upgrades.",
      date: "August 2024"
    },
    {
      name: "Robert Williams",
      business: "Retail Store Owner",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "The installation team replaced our outdated rooftop units with minimal disruption to our business. The new system is much quieter and our customers have commented on how comfortable the store feels even on the hottest days.",
      date: "June 2024"
    },
    {
      name: "Lisa Chen",
      business: "Medical Facility Administrator",
      location: "North Richland Hills, TX",
      rating: 5,
      review:
        "Their understanding of specialized HVAC needs for medical environments impressed us. They completed the installation ahead of schedule and helped us maintain strict temperature and humidity controls throughout the process.",
      date: "May 2024"
    },
    {
      name: "James Wilson",
      business: "Hotel General Manager",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "We partnered with Fort Worth Heat and Air for a complete HVAC overhaul across our property. Their project management was exceptional, coordinating work around guest comfort. Our guest satisfaction scores have improved significantly.",
      date: "April 2024"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="bg-white">
 {/* HERO SECTION */}
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#003049] to-[#00283e] text-white overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
    style={{ backgroundImage: `url(${commercialHero})` }}
  />
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#003049]/70 to-[#00283e]/80 clip-path-polygon" />
  
  <div className="relative px-4 sm:px-8 lg:px-16 py-16 lg:py-24 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="hero-text">
      <div className="inline-block bg-white px-4 py-2 mb-6 rounded-full shadow-md">
        <h1 className="text-sm font-bold text-[#003049] uppercase tracking-wide">
          COMMERCIAL HVAC SERVICES FORT WORTH, TX
        </h1>
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight relative">
        Expert Commercial HVAC Services in Fort Worth, Texas
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#780000] rounded-full"></span>
      </h2>
      
      <p className="text-xl mb-8 max-w-2xl">
        Keep your business comfortable, productive, and energy-efficient with professional commercial HVAC solutions designed for North Texas's extreme climate.
      </p>
      
      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: '24/7 Emergency Service' },
          { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Commercial-Certified Technicians' },
          { icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', text: 'Minimize Business Disruption' },
          { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Energy Efficiency Experts' }
        ].map((feature, index) => (
          <div key={index} className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-[#00283e] p-3 rounded-full mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
            </div>
            <span className="font-semibold">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
        className="bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
      >
        Schedule Commercial Service
      </button>
    </div>
    
    <div className="hero-visual">
      <div className="bg-white/95 p-8 rounded-2xl shadow-xl max-w-md mx-auto animate-float">
        <h3 className="text-2xl font-bold text-[#003049] mb-6 text-center">Why Choose Our Commercial Services?</h3>
        <ul className="space-y-4">
          {[
            "Customized HVAC solutions for your business type",
            "After-hours service to avoid business disruption",
            "Preventative maintenance programs",
            "Energy-efficient system recommendations"
          ].map((benefit, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-[#003049] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#00283e] font-medium">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* COMMERCIAL SERVICES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Comprehensive Commercial HVAC Services in Fort Worth
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              From routine maintenance to complete system installations, we provide expert commercial HVAC solutions tailored to your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial AC Repair */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial AC Repair</h3>
                <p className="text-gray-700 mb-4">
                  Fast, reliable repair services for all commercial HVAC systems with minimal disruption to your operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Emergency repair services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    All major brands supported
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority service for businesses
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial AC Installation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial AC Installation</h3>
                <p className="text-gray-700 mb-4">
                  Professional installation of energy-efficient commercial HVAC systems tailored to your specific building requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    New construction & retrofits
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rooftop unit specialists
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    VRF system experts
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial Maintenance */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Maintenance Plans</h3>
                <p className="text-gray-700 mb-4">
                  Preventative maintenance programs to maximize system efficiency, extend equipment life, and reduce unexpected repairs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customized service schedules
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority service scheduling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Detailed maintenance reports
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional services would continue here */}
            {/* Commercial AC Replacement */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Replacement</h3>
                <p className="text-gray-700 mb-4">
                  Energy-efficient system replacements that reduce operating costs and improve comfort for your commercial space.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energy efficiency analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rebate & incentive guidance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Financing options available
                  </li>
                </ul>
              </div>
            </div>

            {/* Indoor Air Quality */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Indoor Air Quality Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Improve your building's air quality with advanced filtration, ventilation, and purification systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    UV air purification systems
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced filtration systems
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ventilation & energy recovery
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial Refrigeration */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-[#003049] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Refrigeration</h3>
                <p className="text-gray-700 mb-4">
                  Expert service and maintenance for walk-in coolers, freezers, display cases, and other refrigeration equipment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Restaurant refrigeration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Retail display cases
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Walk-in cooler/freezer service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-white relative">
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[70%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Expert Commercial HVAC Services in Fort Worth
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                In North Texas's extreme climate, your commercial HVAC system works harder than anywhere else. Proper maintenance, timely repairs, and strategic upgrades protect your investment, ensure occupant comfort, and control operating costs.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">Why Fort Worth Businesses Choose Our Commercial Services</h3>
                <p className="text-gray-700">
                  With extensive experience serving commercial clients throughout the DFW metroplex, we understand the unique challenges faced by businesses in our region. From restaurants needing precise temperature and humidity control to office buildings requiring zoning solutions, we deliver customized HVAC services that meet your specific requirements.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your Commercial Service Today!</h3>
                  <p className="mb-6">Need immediate assistance? Contact our commercial HVAC specialists at <span className="font-semibold">(817) 800-0340</span>. We service all commercial brands and system types.</p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Request Commercial Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                The Fort Worth Heat and Air Commercial Advantage
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                While many HVAC companies serve both residential and commercial clients, we maintain a dedicated commercial division with specialists trained specifically for complex business environments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Commercial-Specialized Technicians</h4>
                  <p className="text-gray-700">Our commercial team receives ongoing training on complex rooftop units, VRF systems, building automation, and specialized equipment.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Minimized Business Disruption</h4>
                  <p className="text-gray-700">We schedule work during off-hours when possible and use containment systems to protect your operations during repairs and installations.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Reporting</h4>
                  <p className="text-gray-700">Receive detailed service reports with efficiency metrics, recommendations, and projected maintenance needs for better budgeting.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Energy Efficiency Expertise</h4>
                  <p className="text-gray-700">We identify opportunities to reduce energy consumption through system optimization, equipment upgrades, and control strategies.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Industries We Serve
              </h3>
              
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m-4 0h4m-4 0V5" />
                    </svg>
                    Office Buildings
                  </h4>
                  <p className="mt-2 text-gray-700">Zoning solutions, after-hours service, and energy management for office environments of all sizes.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                    Retail Spaces
                  </h4>
                  <p className="mt-2 text-gray-700">Storefront HVAC solutions, refrigeration services, and maintenance plans that work around business hours.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Restaurants & Hospitality
                  </h4>
                  <p className="mt-2 text-gray-700">Specialized kitchen ventilation, makeup air systems, and precise temperature control for dining areas.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Medical Facilities
                  </h4>
                  <p className="mt-2 text-gray-700">HVAC solutions that meet strict regulatory requirements for temperature, humidity, and air quality control.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Commercial Service Areas in North Texas
              </h3>
              <p className="mt-4 text-gray-700">
                Fort Worth Heat and Air proudly provides comprehensive commercial HVAC services throughout the DFW metroplex:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  "Fort Worth",
                  "Arlington",
                  "Grand Prairie",
                  "Mansfield",
                  "North Richland Hills",
                  "Euless",
                  "Bedford",
                  "Grapevine",
                  "Haltom City",
                  "Burleson",
                  "Benbrook",
                  "Saginaw",
                  "Keller",
                  "Southlake",
                  "Colleyville",
                  "Hurst",
                  "Watauga",
                  "Forest Hill"
                ].map((city) => (
                  <div key={city} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              {/* Commercial Financing Options */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Commercial HVAC Financing Options Available
                </h3>
                <p className="mb-4">
                  We offer flexible financing solutions for commercial HVAC projects, including installation, replacement, and major repairs. Preserve capital while improving your facility's comfort and efficiency.
                </p>
                <a href="tel:8178000340" className="inline-block bg-white text-[#780000] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  CALL FOR COMMERCIAL FINANCING: (817) 800-0340
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:w-[30%] lg:sticky lg:top-6 self-start">
              <CommercialServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL PROJECTS SHOWCASE */}
      <section className="py-16 bg-gray-100">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Recent Commercial Projects
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              We take pride in our commercial HVAC work throughout the Fort Worth area. Here are some of our recent projects:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m-4 0h4m-4 0V5" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Building Retrofit</h3>
                <p className="text-gray-700">Downtown Fort Worth office building with complete HVAC system replacement and zoning implementation.</p>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Fort Worth, TX
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail Center Maintenance</h3>
                <p className="text-gray-700">Scheduled maintenance program for a 20-unit retail center with varied HVAC system types.</p>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Arlington, TX
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M4 18h16M4 12h16M3 6h16v10H3V6z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurant HVAC Installation</h3>
                <p className="text-gray-700">Complete kitchen ventilation and dining area comfort system for a new restaurant location.</p>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  North Richland Hills, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-[#003049] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-4">
            Trusted by Fort Worth Businesses
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our commercial clients have to say:
          </p>
          
          {/* Mobile view - stacked vertically */}
          <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-md font-semibold text-[#003049]">{review.name}</h3>
                    <p className="text-xs text-gray-600">{review.business}</p>
                    <p className="text-xs text-gray-600">{review.location}</p>
                  </div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-gray-700 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
          
          {/* Desktop view - carousel */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * (100/3)}%)` }}
              >
                {reviewsData.map((review, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg p-6 shadow-md h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-md font-semibold text-[#003049]">{review.name}</h3>
                          <p className="text-xs text-gray-600">{review.business}</p>
                          <p className="text-xs text-gray-600">{review.location}</p>
                        </div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-sm text-gray-700 italic">"{review.review}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array(Math.ceil(reviewsData.length / 3)).fill(0).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * 3)}
                  className={`w-3 h-3 rounded-full ${Math.floor(currentReview / 3) === index ? 'bg-white' : 'bg-[#00283e]'}`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003049] to-[#780000] opacity-30"></div>
        <div className="absolute top-10 right-10 opacity-5">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#003049"/>
            <path d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" stroke="#780000" strokeWidth="2"/>
          </svg>
        </div>
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-[#003049] font-medium">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-4">
              Commercial HVAC Questions Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've compiled clear answers to common commercial HVAC questions for Fort Worth business owners and facility managers.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <button
                  className="w-full px-6 py-5 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-gradient-to-r from-[#003049] to-[#00283e] hover:from-[#00283e] hover:to-[#001f33] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 pb-5 pt-4 text-gray-700 transition-all duration-300 ease-in-out bg-blue-50 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-[#003049] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-blue-50 p-8 rounded-xl border border-blue-100">
            <div className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <svg className="w-5 h-5 mr-2 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[#003049] font-medium">Still have questions?</span>
            </div>
            <p className="text-gray-700 mb-6">Our commercial HVAC experts are ready to help with any question about your business's systems.</p>
            <a href="tel:8178000340" className="inline-block bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors transform hover:scale-105">
              Call Our Commercial Experts: (817) 800-0340
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-[#003049] to-[#00283e] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Optimize Your Commercial HVAC System?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for a system failure to disrupt your business. Schedule commercial service now and ensure uninterrupted comfort for your customers and employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Schedule Commercial Service
            </button>
            <a href="tel:8178000340" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003049] transition-colors transform hover:scale-105">
              Or Call: (817) 800-0340
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#003049] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mb-32 opacity-50"></div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium">24/7 Emergency Service</span>
          </div>
          
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Keep Fort Worth Businesses Comfortable
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Commercial HVAC Service Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Your comfort is our business. Our certified commercial team delivers expert service with minimal disruption to your operations.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-md mr-4">
                  <svg className="w-6 h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call our commercial team at</p>
                  <a href="tel:8178000340" className="text-xl font-bold text-[#003049] hover:text-[#780000] transition-colors">(817) 800-0340</a>
                </div>
              </div>
              
              <div className="hidden md:block h-12 w-px bg-blue-200"></div>
              
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-md mr-4">
                  <svg className="w-6 h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Schedule commercial service</p>
                  <p className="text-md font-medium text-[#003049]">24/7 Emergency Response</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Request Commercial Service
            </button>
            <a href="tel:8178000340" className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Commercial Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/** Commercial Service Form */
const CommercialServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full"
    >
      <h3 className="text-2xl font-bold text-[#003049] mb-6 text-center">Request Commercial Service</h3>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Your business name"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Your name"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Your email"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="(817) 000-0000"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          required
        >
          <option value="">Select a service</option>
          <option value="repair">AC Repair</option>
          <option value="maintenance">Preventative Maintenance</option>
          <option value="installation">New Installation</option>
          <option value="replacement">System Replacement</option>
          <option value="iaq">Indoor Air Quality</option>
          <option value="refrigeration">Commercial Refrigeration</option>
          <option value="emergency">Emergency Service</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How Can We Help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          maxLength={600}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Tell us about your commercial HVAC needs"
        />
        <p className="text-xs text-gray-500 mt-1">0 of 600 max characters</p>
      </div>

      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-[#003049] h-4 w-4 text-[#003049] border-gray-300 rounded"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="text-gray-700">
              I consent to receive communications from Fort Worth Heat and Air about my commercial service request. Message and data rates may apply.
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2"
      >
        Request Commercial Quote
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default CommercialACServices;