import React, { useState } from "react";
import { Link } from "react-router-dom";
import cityscape from "../assets/cityscapes.png";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ServiceForm from "../components/ServiceForm";

const NorthRichlandHills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does North Richland Hills' urban environment affect HVAC system selection?",
      answer: "With NRH's mix of established neighborhoods and newer developments, we recommend systems that balance efficiency with durability. We consider factors like proximity to urban heat islands and can help select systems with optimal SEER ratings for maximum efficiency."
    },
    {
      question: "What HVAC considerations are important for North Richland Hills' diverse housing styles?",
      answer: "NRH features everything from mid-century homes to modern constructions, each with unique HVAC needs. We specialize in designing systems that provide optimal comfort for varied architectural styles, including solutions for older homes that may need ductwork modifications."
    },
    {
      question: "How can I improve HVAC efficiency in North Richland Hills' humid climate?",
      answer: "NRH's humidity can make temperatures feel hotter than they are. We recommend systems with enhanced dehumidification capabilities, proper sizing to manage humidity control, and regular maintenance to ensure your system effectively removes excess moisture."
    },
    {
      question: "Do you handle HVAC permits for North Richland Hills' specific requirements?",
      answer: "Yes, we manage all necessary permits with the City of North Richland Hills and ensure compliance with local codes, including efficiency standards and noise ordinances for both residential and commercial properties."
    }
  ];

  const services = [
    {
      title: "AC Services",
      description: "Expert cooling solutions for NRH's hot summers",
      details: "From maintenance to emergency repairs, we handle all your cooling needs. We specifically recommend systems with enhanced humidity control for NRH's climate.",
      localTip: "Essential for homes near popular destinations like NRH2O Water Park where residents need reliable cooling after sunny days"
    },
    {
      title: "Heating Services",
      description: "Reliable heating for North Texas winters",
      details: "Keep your home warm during our occasional cold snaps. We specialize in efficient furnace solutions and heat pumps that work well in NRH's climate.",
      localTip: "Many NRH homes benefit from zone heating systems that complement the city's varied home layouts"
    },
    {
      title: "Indoor Air Quality",
      description: "Breathe easier in your NRH home",
      details: "Our comprehensive air quality solutions reduce allergens, control humidity, and eliminate pollutants common in our area.",
      localTip: "Particularly important for families enjoying outdoor activities at the Iron Horse Golf Course and nearby parks"
    },
    {
      title: "Maintenance Plans",
      description: "Protect your investment year-round",
      details: "Our preventative maintenance programs keep your system running efficiently and extend its lifespan through our variable seasons.",
      localTip: "Schedule maintenance before summer to ensure systems are ready for peak cooling demand during NRH2O season"
    }
  ];

  const localLandmarks = [
    {
      name: "NRH2O Family Water Park",
      description: "One of North Texas' premier water parks featuring slides, lazy river, and wave pool"
    },
    {
      name: "Iron Horse Golf Course",
      description: "A championship 18-hole golf course known for its challenging layout and beautiful scenery"
    },
    {
      name: "North Richland Hills Library",
      description: "A modern facility offering extensive resources, technology access, and community programs"
    },
    {
      name: "The Centre",
      description: "NRH's premier fitness and aquatic complex with state-of-the-art facilities"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - Enhanced with local imagery */}
      <section className="relative py-16 bg-gradient-to-br from-[#f0f6fa] to-[#e0ecf4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Card Container */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#003049] border-opacity-20">
              {/* Card Header with Background */}
              <div className="bg-[#003049] text-white py-8 px-6 text-center relative">
                <div
                  className="absolute inset-0 opacity-10 bg-local"
                ></div>

                {/* Location Breadcrumb */}
                <div className="flex items-center justify-center mb-4 text-blue-100 relative z-10">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    <Link to="/cities-served" className="text-blue-200 hover:text-white transition-colors">
                      Cities Served
                    </Link>{" "}
                    / North Richland Hills, TX
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                  Professional HVAC Services in North Richland Hills, TX
                </h1>

                {/* Description */}
                <p className="text-blue-100 relative z-10">
                  Expert heating, cooling, and indoor air quality solutions tailored to NRH's unique climate
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <p className="text-gray-700 text-center mb-6">
                    For over 15 years, we've been providing reliable HVAC services to North Richland Hills residents and businesses.
                    As your local HVAC experts, we understand the specific challenges of maintaining comfort in NRH's climate—from
                    humid summers that strain AC systems to occasional winter cold snaps that test heating systems.
                  </p>

                  {/* Local Climate Info */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 w-full">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      North Richland Hills Climate Insight:
                    </h3>
                    <p className="text-sm text-gray-700">
                      With average summer highs around 95°F and humidity frequently above 65%, quality AC is essential for comfort.
                      Winters can dip below freezing, making reliable heating equally important for our community.
                    </p>
                  </div>

                  {/* Cool Fact about NRH */}
                  <div className="bg-[#f0f6fa] p-4 rounded-lg mb-6 w-full border-l-4 border-[#780000]">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#780000]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Cool NRH Fact:
                    </h3>
                    <p className="text-sm text-gray-700">
                      North Richland Hills is home to NRH2O Family Water Park, one of the largest water parks in North Texas! 
                      After a day of fun in the sun, residents need reliable AC to come home to—and we're here to ensure that comfort.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 w-full">
                    <div className="bg-[#f0f6fa] p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#003049]">15+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-[#f0f6fa] p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#003049]">24/7</div>
                      <div className="text-xs text-gray-600">Emergency Service</div>
                    </div>
                    <div className="bg-[#f0f6fa] p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#003049]">A+</div>
                      <div className="text-xs text-gray-600">BBB Rating</div>
                    </div>
                    <div className="bg-[#f0f6fa] p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#003049]">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction Guarantee</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                      className="flex-1 bg-[#780000] hover:bg-[#600000] text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
                    >
                      Request Service
                    </button>
                    <a
                      href="tel:8178000340"
                      className="flex-1 border border-[#003049] text-[#003049] font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#003049] hover:text-white transition-colors"
                    >
                      Call Now: (817) 800-0340
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Serving the North Richland Hills Community</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We're proud to be part of the NRH community and understand the unique aspects of homes in our area
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-[#003049] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#780000]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                About North Richland Hills, TX
              </h3>
              <p className="text-gray-700 mb-4">
                North Richland Hills, often called NRH, is a thriving city in the northeastern part of Tarrant County that perfectly blends suburban comfort with urban convenience.
                Incorporated in 1953, NRH has grown into a community of over 70,000 residents who enjoy excellent parks, recreational facilities, and community events.
              </p>
              <p className="text-gray-700">
                The city features diverse housing options from established neighborhoods with mature trees to newer developments with modern amenities.
                We specialize in working with these varied home types, understanding their different HVAC requirements and opportunities for energy efficiency improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#003049] mb-4">Local Landmarks & Areas We Serve</h3>
                <div className="space-y-4">
                  {localLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#780000] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-[#003049]">{landmark.name}</h4>
                        <p className="text-sm text-gray-600">{landmark.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003049] mb-4">NRH HVAC Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Homes near NRH2O may need enhanced humidity control systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Older homes may need ductwork updates while newer homes benefit from zoning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Energy-efficient systems maximize savings in NRH's varied housing stock</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Knowledge of local permitting requirements for both renovations and new construction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Our HVAC Services for NRH Homes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive heating, cooling, and air quality solutions tailored to North Richland Hills' unique climate needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#003049] border-opacity-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#003049] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003049] mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{service.details}</p>
                <div className="bg-blue-50 p-3 rounded-md mt-4">
                  <p className="text-sm text-[#003049] flex items-start">
                    <svg className="w-4 h-4 mr-2 text-[#780000] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Local Insight:</span> {service.localTip}
                  </p>
                </div>
                <a href="#schedule" className="inline-block mt-4 text-[#780000] font-medium hover:underline">
                  Learn more about our {service.title.toLowerCase()} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Complete HVAC Solutions for NRH Homes</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our team of certified technicians provides comprehensive HVAC services to keep your North Richland Hills home comfortable through all North Texas seasons
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">AC Services</h3>
                <p className="text-gray-700 mb-4">
                  NRH's hot, humid summers demand reliable cooling systems. We provide comprehensive AC services to keep your home comfortable even during our extended heat seasons.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>AC Repair & Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>AC Installation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>AC Replacement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Preventative Maintenance</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">NRH Tip:</span> Schedule AC maintenance in early spring before temperatures consistently reach the 90s, especially if you plan to visit NRH2O.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Heating Services</h3>
                <p className="text-gray-700 mb-4">
                  When North Texas experiences its occasional cold snaps, you need a reliable heating system. We offer comprehensive heating services to keep your NRH home warm and comfortable.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Heater Repair</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Heater Installation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Heater Replacement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Furnace Maintenance</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">NRH Tip:</span> Consider a heat pump system for efficient heating and cooling in our climate, perfect for NRH's varied temperature swings.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Indoor Air Quality</h3>
                <p className="text-gray-700 mb-4">
                  NRH's seasonal changes bring pollen, dust, and humidity that can affect indoor air quality. Our solutions help you breathe easier with cleaner, healthier air.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Air Purification Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Humidifiers & Dehumidifiers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>UV Germicidal Lights</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Advanced Filtration</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">NRH Tip:</span> High-quality air filters are essential during spring when pollen counts rise around parks and recreational areas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Maintenance Plans</h3>
                <p className="text-gray-700 mb-4">
                  Regular maintenance extends the life of your HVAC system and improves efficiency. Our maintenance plans are designed to save you money in the long run.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Seasonal Tune-ups</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Priority Service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Discounts on Repairs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Extended Warranty Options</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">NRH Tip:</span> Our maintenance plans include inspections tailored to our local climate challenges and NRH's specific environmental factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Enhanced with local focus */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Why NRH Homeowners Choose Us</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We've built our reputation on quality service, technical expertise, and deep knowledge of the North Richland Hills community
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  We understand NRH's specific climate challenges, urban environment, and housing diversity.
                  Our solutions are tailored to handle both intense summer heat and occasional winter chills unique to our area.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Community Focused</h3>
                <p className="text-gray-700">
                  As neighbors serving neighbors, we take pride in supporting our local community. We understand the specific needs of NRH homes,
                  from older established neighborhoods to newer developments with modern HVAC requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Knowledge of Local Regulations</h3>
                <p className="text-gray-700">
                  We're familiar with North Richland Hills' building codes and permit requirements. We handle all necessary paperwork with the city,
                  ensuring your HVAC installation meets all local regulations and ordinances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Fast Response Times</h3>
                <p className="text-gray-700">
                  Located nearby, we can respond quickly to HVAC emergencies in NRH. We know HVAC problems can't wait,
                  especially during extreme weather, which is why we prioritize calls from our local community.
                </p>
              </div>
            </div>

            {/* Local Testimonial */}
            <div className="mt-12 bg-[#003049] text-white p-6 rounded-lg">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-[#780000] mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="italic mb-2">"These folks really understand NRH homes. They helped us update the HVAC system in our 1980s ranch-style home near Iron Horse Golf Course. The new system handles our humidity perfectly and we're seeing significant energy savings!"</p>
                  <p className="font-medium">- The Johnson Family, NRH residents since 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN CONTENT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-[#003049] border-opacity-10">
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Serving North Richland Hills & Surrounding Areas</h2>
                <p className="text-gray-700 mb-4">
                  We're proud to be the trusted HVAC service provider for North Richland Hills and the surrounding communities.
                  Located in northeastern Tarrant County, NRH offers a perfect blend of suburban living with urban convenience, and we understand the unique HVAC needs of homes in our diverse community.
                </p>

                <p className="text-gray-700 mb-4">
                  North Richland Hills has grown from a small community to a thriving city while maintaining its family-friendly atmosphere.
                  Our team responds quickly to service calls throughout the area and provides reliable, long-lasting solutions tailored to both older and newer homes.
                </p>

                {/* Google Map Embed */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.0984223124!2d-97.26793369999999!3d32.629879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7af9a2e5f3e5%3A0x2a0c2d42a7b079b9!2sNorth%20Richland%20Hills%2C%20TX!5e0!3m2!1sen!2sus!4v1719523200000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="North Richland Hills Service Area"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003049] mb-3">We serve North Richland Hills and surrounding communities including:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Fort Worth", "Keller", "Richland Hills", "Watauga", "Haltom City", "Hurst", "Euless", "Bedford"].map((area) => (
                      <div key={area} className="flex items-center">
                        <svg className="w-3 h-3 text-[#780000] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-1">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-[#f8fafc] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've compiled answers to common questions about HVAC services specific to the North Richland Hills area
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                <button
                  className="w-full px-5 py-4 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-[#003049] hover:bg-[#00253d] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-5 pb-4 pt-3 text-gray-700 transition-all duration-300 ease-in-out bg-white ${openIndex === index ? "block" : "hidden"}`}>
                  <p className="text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#003049] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">
            Ready for Reliable HVAC Service in North Richland Hills?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't wait for the next heatwave or cold snap to discover your system isn't ready.
            Schedule your service today and enjoy comfort all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#780000] hover:bg-[#600000] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule Service Online
            </button>

            <a href="tel:8178000340" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-[#003049] transition-colors">
              Call: (817) 800-0340
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-16"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mb-32 opacity-50"></div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium">Same-Day Availability for NRH Residents</span>
          </div>

          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Are Here For You
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your HVAC Service Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            We aren't comfortable until you are. Our certified team provides expert service tailored to North Richland Hills' unique climate and housing needs.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call us directly at</p>
                  <a href="tel:8178000340" className="text-xl font-bold text-[#003049] hover:text-[#780000] transition-colors">(817) 800-0340</a>
                </div>
              </div>

              <div className="hidden md:block h-12 w-px bg-blue-200"></div>

              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Schedule online</p>
                  <p className="text-md font-medium text-[#003049]">24/7 Availability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Online Now
            </button>

            <a href="tel:8178000340" className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* CITYSCAPE WITH GRADIENT BLEND */}
      <div className="w-full relative overflow-hidden">
        <div className="relative">
          <img
            src={cityscape}
            alt="North Richland Hills area landscape"
            className="w-full h-auto object-cover"
            style={{ minHeight: "150px", maxHeight: "400px" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#003049] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default NorthRichlandHills;