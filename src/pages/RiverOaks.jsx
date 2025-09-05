import React, { useState } from "react";
import { Link } from "react-router-dom";
import cityscape from "../assets/cityscapes.png";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ServiceForm from "../components/ServiceForm";

const RiverOaks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do River Oaks' historic homes affect HVAC system selection?",
      answer: "Many River Oaks homes feature unique architectural details and construction methods from different eras. We specialize in custom solutions that preserve historical integrity while providing modern comfort, including discreet placement and specialized ductwork for historic properties."
    },
    {
      question: "What HVAC considerations are important for River Oaks' larger estates?",
      answer: "Larger River Oaks homes often require sophisticated zoning systems and higher capacity units. We design custom solutions with multiple zones, premium filtration for the abundant tree canopy, and humidity control systems tailored to our specific microclimate."
    },
    {
      question: "How can I maintain HVAC efficiency in River Oaks' mature tree environments?",
      answer: "The beautiful tree canopy can shade your home but also deposit debris in outdoor units. We recommend regular cleaning, elevated condenser pads to avoid flood risks, and specialized filters to handle the increased pollen from our abundant vegetation."
    },
    {
      question: "Do you handle HVAC permits for River Oaks' preservation requirements?",
      answer: "Yes, we're experienced with River Oaks' specific requirements, including historical preservation guidelines, noise ordinances for residential areas, and the unique permitting process for this established community."
    }
  ];

  const services = [
    {
      title: "AC Services",
      description: "Premium cooling solutions for River Oaks' elegant homes",
      details: "From maintenance to discreet installations, we handle all your cooling needs with systems designed for both performance and aesthetics.",
      localTip: "Essential for preserving comfort in historic homes while maintaining architectural integrity"
    },
    {
      title: "Heating Services",
      description: "Discreet and efficient heating for River Oaks estates",
      details: "Keep your home comfortably warm during our mild winters with systems designed to complement your home's design.",
      localTip: "Many historic homes benefit from specialized heating solutions that work with original features"
    },
    {
      title: "Indoor Air Quality",
      description: "Breathe easier in your River Oaks home",
      details: "Our comprehensive air quality solutions reduce allergens from the tree canopy, control humidity, and eliminate pollutants.",
      localTip: "Particularly important with River Oaks' abundant tree pollen and seasonal changes"
    },
    {
      title: "Maintenance Plans",
      description: "Protect your investment year-round",
      details: "Our premium maintenance programs keep your system running efficiently and extend its lifespan through our variable seasons.",
      localTip: "Regular maintenance preserves system efficiency in our humid climate"
    }
  ];

  const localLandmarks = [
    {
      name: "River Oaks Community Center",
      description: "A hub for community events and gatherings in the heart of River Oaks"
    },
    {
      name: "River Oaks Theatre",
      description: "Historic art deco cinema that has been operating since 1939"
    },
    {
      name: "River Oaks Shopping Center",
      description: "One of the first shopping centers in the United States, established in 1937"
    },
    {
      name: "River Oaks Country Club",
      description: "Prestigious private club founded in 1923, featuring championship golf courses"
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
                    / River Oaks, TX
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                  Premium HVAC Services in River Oaks, TX
                </h1>

                {/* Description */}
                <p className="text-blue-100 relative z-10">
                  Discreet, efficient heating and cooling solutions for River Oaks' distinctive homes
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <p className="text-gray-700 text-center mb-6">
                    For over 15 years, we've been providing premium HVAC services to River Oaks residents.
                    As your local HVAC experts, we understand the specific requirements of maintaining comfort in River Oaks' elegant homes—from
                    managing humidity in historic properties to providing discreet, high-performance systems that complement architectural beauty.
                  </p>

                  {/* Unique Cool Fact for SEO */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 w-full">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      River Oaks Historical Fact:
                    </h3>
                    <p className="text-sm text-gray-700">
                      River Oaks is home to one of the first planned communities in the United States, developed in the 1920s. 
                      Many homes feature unique architectural styles and require specialized HVAC solutions that preserve their 
                      historical integrity while providing modern comfort.
                    </p>
                  </div>

                  {/* Local Climate Info */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 w-full">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      River Oaks Climate Insight:
                    </h3>
                    <p className="text-sm text-gray-700">
                      With Houston's humid subtropical climate, River Oaks experiences hot, humid summers with average highs around 94°F 
                      and humidity frequently above 70%. Quality AC with enhanced dehumidification is essential for comfort in our 
                      historic homes, while mild winters require reliable but less intensive heating solutions.
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Serving the River Oaks Community</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We're proud to serve the River Oaks community and understand the unique aspects of homes in this historic area
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
                About River Oaks, TX
              </h3>
              <p className="text-gray-700 mb-4">
                River Oaks is one of Houston's most prestigious and historic neighborhoods, known for its beautiful homes, 
                tree-lined streets, and carefully planned community design. Developed in the 1920s, it represents one of the 
                earliest examples of a master-planned community in the United States.
              </p>
              <p className="text-gray-700">
                The area features homes in various architectural styles including Tudor Revival, Mediterranean Revival, 
                and Colonial Revival, many designed by prominent architects. These historic properties often require specialized 
                HVAC solutions that respect their architectural integrity while providing modern comfort. We specialize in working 
                with these distinctive homes, understanding their unique requirements and preservation considerations.
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
                <h3 className="text-xl font-semibold text-[#003049] mb-4">River Oaks HVAC Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Historic homes often require custom ductwork and discreet unit placement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">High humidity requires enhanced dehumidification systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Abundant tree canopy requires specialized filtration for pollen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Knowledge of historical preservation requirements for HVAC installations</span>
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
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Our HVAC Services for River Oaks Homes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide premium heating, cooling, and air quality solutions tailored to River Oaks' distinctive homes and climate needs
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Complete HVAC Solutions for River Oaks Homes</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our team of certified technicians provides premium HVAC services to keep your River Oaks home comfortable through all Houston seasons
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">AC Services</h3>
                <p className="text-gray-700 mb-4">
                  Houston's hot, humid summers demand premium cooling systems. We provide comprehensive AC services designed for River Oaks' historic and luxury homes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>AC Repair & Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#780000] rounded-full mr-3"></div>
                    <span>Discreet AC Installation</span>
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
                    <span className="font-medium">River Oaks Tip:</span> Enhanced dehumidification is crucial for comfort in our humid climate.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Heating Services</h3>
                <p className="text-gray-700 mb-4">
                  While Houston winters are mild, you still need reliable heating for occasional cold snaps. We offer premium heating solutions for River Oaks homes.
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
                    <span className="font-medium">River Oaks Tip:</span> Consider a heat pump system for efficient heating and cooling in our climate.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Indoor Air Quality</h3>
                <p className="text-gray-700 mb-4">
                  River Oaks' beautiful tree canopy brings pollen and allergens that can affect indoor air quality. Our solutions help you breathe easier with cleaner, healthier air.
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
                    <span className="font-medium">River Oaks Tip:</span> High-quality air filters are essential during spring when oak trees release pollen.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Maintenance Plans</h3>
                <p className="text-gray-700 mb-4">
                  Regular maintenance extends the life of your HVAC system and improves efficiency. Our premium maintenance plans are designed to protect your investment.
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
                    <span className="font-medium">River Oaks Tip:</span> Our maintenance plans include specialized cleaning for systems affected by our tree canopy.
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Why River Oaks Homeowners Choose Us</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We've built our reputation on premium service, technical expertise, and deep knowledge of the River Oaks community
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Historical Home Expertise</h3>
                <p className="text-gray-700">
                  We understand the unique challenges of HVAC systems in River Oaks' historic homes. Our solutions preserve architectural integrity while providing modern comfort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Community Focused</h3>
                <p className="text-gray-700">
                  As neighbors serving neighbors, we take pride in supporting our local community. We understand the specific needs of River Oaks homes, from historic estates to modern renovations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Knowledge of Local Regulations</h3>
                <p className="text-gray-700">
                  We're familiar with River Oaks' specific requirements, including historical preservation guidelines. We handle all necessary considerations to ensure your HVAC installation meets community standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Discreet, Premium Service</h3>
                <p className="text-gray-700">
                  We provide service that respects your home and neighborhood. Our technicians are professional, and our installations are designed to be as unobtrusive as possible.
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
                  <p className="italic mb-2">"These folks truly understand River Oaks homes. They helped us design an HVAC system that works perfectly with our historic home's architecture while providing exceptional comfort. Their knowledge of our neighborhood's specific needs is impressive!"</p>
                  <p className="font-medium">- The Williams Family, River Oaks residents since 1998</p>
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
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Serving River Oaks & Surrounding Areas</h2>
                <p className="text-gray-700 mb-4">
                  We're proud to be the trusted HVAC service provider for River Oaks and the surrounding communities.
                  Located in Houston, River Oaks is known for its beautiful homes, tree-lined streets, and historic significance as one of the first planned communities in the United States.
                </p>

                <p className="text-gray-700 mb-4">
                  River Oaks maintains its prestige through careful preservation and attention to detail. Our team understands the unique HVAC needs of homes in this distinctive community, from historic estates requiring specialized solutions to modern renovations needing high-performance systems.
                </p>

                {/* Google Map Embed */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27727.525386232337!2d-95.4439820240508!3d29.75072537130935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c06e419886b9%3A0x5cae5ef32c2e4e1b!2sRiver%20Oaks%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1719523200000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="River Oaks Service Area"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003049] mb-3">We serve River Oaks and surrounding communities including:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Montrose", "Upper Kirby", "Memorial", "West University", "Heights", "Museum District", "Medical Center", "Downtown Houston"].map((area) => (
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
              We've compiled answers to common questions about HVAC services specific to the River Oaks area
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
            Ready for Premium HVAC Service in River Oaks?
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
            <span className="text-[#003049] font-medium">Same-Day Availability for River Oaks Residents</span>
          </div>

          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Are Here For You
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your HVAC Service Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            We aren't comfortable until you are. Our certified team provides premium service tailored to River Oaks' unique climate and historic homes.
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
            alt="River Oaks area landscape"
            className="w-full h-auto object-cover"
            style={{ minHeight: "150px", maxHeight: "400px" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#003049] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default RiverOaks;