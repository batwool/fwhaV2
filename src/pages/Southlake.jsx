import React, { useState } from "react";
import { Link } from "react-router-dom";
import cityscape from "../assets/cityscapes.png";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ServiceForm from "../components/ServiceForm";

const Southlake = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do Southlake's luxury homes impact HVAC system requirements?",
      answer: "Southlake's larger, custom-built homes often require more sophisticated HVAC solutions. We specialize in multi-zone systems, high-capacity units, and advanced humidity control to maintain optimal comfort in these expansive residences."
    },
    {
      question: "What HVAC considerations are unique to Southlake's upscale neighborhoods?",
      answer: "Southlake homes often feature high ceilings, extensive glass areas, and premium finishes that require specialized HVAC approaches. We consider factors like increased cooling loads from large windows and the need for discreet placement of equipment to maintain aesthetic appeal."
    },
    {
      question: "How can I ensure my HVAC system complements my Southlake home's value?",
      answer: "We recommend high-efficiency systems with premium features that match your home's quality. This includes variable-speed compressors, smart thermostats with zoning capabilities, and ultra-quiet operation—all of which maintain your property value while providing superior comfort."
    },
    {
      question: "Do you handle HVAC needs for Southlake's strict homeowner association guidelines?",
      answer: "Yes, we're familiar with Southlake's HOA requirements and can ensure your HVAC installation meets all aesthetic and noise regulations. We offer discreet placement options and premium equipment that blends seamlessly with your home's architecture."
    }
  ];

  const services = [
    {
      title: "AC Services",
      description: "Premium cooling solutions for Southlake's luxury homes",
      details: "From maintenance to emergency repairs, we handle all your cooling needs with equipment that matches Southlake's high standards.",
      localTip: "Essential for large Southlake homes with high ceilings and expansive windows that increase cooling demands"
    },
    {
      title: "Heating Services",
      description: "Efficient heating for Southlake's elegant residences",
      details: "Keep your home warm during our occasional cold snaps with heating solutions that provide consistent comfort throughout large spaces.",
      localTip: "Many Southlake homes benefit from high-efficiency systems with zoning for different wings or levels"
    },
    {
      title: "Indoor Air Quality",
      description: "Breathe easier in your Southlake home",
      details: "Our comprehensive air quality solutions reduce allergens, control humidity, and eliminate pollutants with premium whole-home systems.",
      localTip: "Particularly important for Southlake's spring allergy season and maintaining healthy indoor environments"
    },
    {
      title: "Maintenance Plans",
      description: "Protect your investment year-round",
      details: "Our premium maintenance programs keep your high-end systems running efficiently and extend their lifespan through our variable seasons.",
      localTip: "Regular maintenance is essential for complex systems in Southlake's larger homes to prevent costly repairs"
    }
  ];

  const localLandmarks = [
    {
      name: "Southlake Town Square",
      description: "The premier shopping and dining destination in North Texas"
    },
    {
      name: "Carroll Independent School District",
      description: "Nationally recognized school district serving Southlake residents"
    },
    {
      name: "The Marq Southlake",
      description: "State-of-the-art community recreation and sports complex"
    },
    {
      name: "Bob Jones Nature Center",
      description: "A 758-acre preserve with trails and educational programs"
    }
  ];

  // Unique Southlake fact section
  const southlakeFacts = [
    {
      icon: "🏆",
      title: "Top-Rated Schools",
      description: "Southlake is served by the Carroll ISD, consistently ranked among the best school districts in Texas and the nation."
    },
    {
      icon: "🏡",
      title: "Luxury Homes",
      description: "The average home value in Southlake is significantly higher than surrounding areas, requiring premium HVAC solutions."
    },
    {
      icon: "🌳",
      title: "Green Spaces",
      description: "Southlake maintains over 1,000 acres of parkland, contributing to the area's natural beauty and air quality."
    },
    {
      icon: "📈",
      title: "Growing Community",
      description: "Despite being an established community, Southlake continues to see thoughtful development and population growth."
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
                    / Southlake, TX
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                  Premium HVAC Services for Southlake, TX Homes
                </h1>

                {/* Description */}
                <p className="text-blue-100 relative z-10">
                  Expert heating, cooling, and indoor air quality solutions for Southlake's distinctive luxury homes
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <p className="text-gray-700 text-center mb-6">
                    For over 15 years, we've been providing premium HVAC services to Southlake's discerning homeowners.
                    As your local HVAC experts, we understand the specific requirements of maintaining comfort in Southlake's luxury residences—from
                    sophisticated climate control systems to whole-home air quality solutions that match your home's high standards.
                  </p>

                  {/* Local Climate Info */}
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 w-full">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      Southlake Climate Insight:
                    </h3>
                    <p className="text-sm text-gray-700">
                      With average summer highs around 95°F and humidity frequently above 65%, premium AC is essential for comfort in Southlake's larger homes.
                      Winters can dip below freezing, making reliable heating equally important for our upscale community.
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

      {/* UNIQUE SECTION: SOUTHLAKE COMMUNITY FACTS */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003049] mb-4">The Southlake Difference</h2>
            <p className="text-gray-600">
              Southlake stands out as one of North Texas's most distinctive communities, with unique characteristics that influence HVAC needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {southlakeFacts.map((fact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#003049] border-opacity-10 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold text-[#003049] mb-2">{fact.title}</h3>
                <p className="text-gray-700 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
            <h3 className="text-xl font-semibold text-[#003049] mb-4">HVAC Implications for Southlake Homes</h3>
            <p className="text-gray-700 mb-4">
              Southlake's distinctive community features translate to specific HVAC requirements. Larger homes need more powerful and often zoned systems.
              The community's emphasis on aesthetics means equipment placement and noise reduction are important considerations. And the high property values
              make quality HVAC installation and maintenance a smart investment in your home's comfort and value.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-[#003049] mb-2">Premium Solutions We Offer:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-zone climate control systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ultra-quiet premium equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Whole-home air purification systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#003049] mb-2">Southlake-Specific Expertise:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Knowledge of HOA requirements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Experience with luxury home systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Discreet equipment placement solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Serving the Southlake Community</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We're proud to serve Southlake's distinctive community and understand the unique aspects of homes in our area
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
                About Southlake, TX
              </h3>
              <p className="text-gray-700 mb-4">
                Southlake is renowned for its upscale living, excellent schools, and beautiful communities. As one of the most desirable suburbs in the Dallas-Fort Worth metroplex,
                Southlake offers residents luxury homes, top-rated schools, and exceptional amenities while maintaining convenient access to both DFW Airport and the cultural attractions of Dallas and Fort Worth.
              </p>
              <p className="text-gray-700">
                Southlake homes are typically larger custom builds with premium features and finishes. We specialize in working with these high-end residences,
                understanding their advanced HVAC requirements and the importance of systems that match the quality of the home while providing exceptional comfort and efficiency.
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
                <h3 className="text-xl font-semibold text-[#003049] mb-4">Southlake HVAC Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Larger homes often require multi-zone systems for optimal comfort</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Premium, ultra-quiet equipment maintains home tranquility</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">High-efficiency systems maximize comfort while minimizing energy costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#780000] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Knowledge of HOA requirements for equipment placement and appearance</span>
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
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Our HVAC Services for Southlake Homes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide premium heating, cooling, and air quality solutions tailored to Southlake's distinctive home requirements
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
                    <span className="font-medium">Southlake Insight:</span> {service.localTip}
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Complete HVAC Solutions for Southlake Homes</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our team of certified technicians provides premium HVAC services to keep your Southlake home comfortable through all North Texas seasons
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">AC Services</h3>
                <p className="text-gray-700 mb-4">
                  Southlake's hot, humid summers demand reliable, high-capacity cooling systems. We provide premium AC services to keep your home comfortable even during extended heat seasons.
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
                    <span className="font-medium">Southlake Tip:</span> For larger homes, consider multi-zone systems that provide customized comfort throughout different areas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Heating Services</h3>
                <p className="text-gray-700 mb-4">
                  When North Texas experiences its occasional cold snaps, you need a reliable heating system. We offer premium heating services to keep your Southlake home warm and comfortable.
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
                    <span className="font-medium">Southlake Tip:</span> High-efficiency systems provide better comfort and lower operating costs for larger homes.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Indoor Air Quality</h3>
                <p className="text-gray-700 mb-4">
                  Southlake's seasonal changes bring pollen, dust, and humidity that can affect indoor air quality. Our premium solutions help you breathe easier with cleaner, healthier air.
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
                    <span className="font-medium">Southlake Tip:</span> Whole-home air purification systems are particularly beneficial during allergy season.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Maintenance Plans</h3>
                <p className="text-gray-700 mb-4">
                  Regular maintenance extends the life of your HVAC system and improves efficiency. Our premium maintenance plans are designed to protect your investment in Southlake's luxury homes.
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
                    <span className="font-medium">Southlake Tip:</span> Our premium maintenance plans include comprehensive inspections tailored to larger, more complex systems.
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Why Southlake Homeowners Choose Us</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We've built our reputation on premium service, technical expertise, and deep knowledge of the Southlake community
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Luxury Home Expertise</h3>
                <p className="text-gray-700">
                  We understand Southlake's specific requirements for high-end homes, including multi-zone systems,
                  premium equipment selection, and discreet installation that maintains your home's aesthetic appeal.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Community Focused</h3>
                <p className="text-gray-700">
                  As neighbors serving neighbors, we take pride in supporting our local community. We understand the specific needs of Southlake homes,
                  which often feature custom designs and premium systems requiring specialized expertise.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Knowledge of Local Requirements</h3>
                <p className="text-gray-700">
                  We're familiar with Southlake's specific building codes and HOA guidelines. We ensure your HVAC installation meets all local regulations
                  while maintaining the aesthetic standards of your neighborhood.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Premium Response Times</h3>
                <p className="text-gray-700">
                  Located nearby, we can respond quickly to HVAC needs in Southlake. We understand that comfort is a priority in luxury homes,
                  which is why we prioritize calls from our Southlake community.
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
                  <p className="italic mb-2">"These folks truly understand Southlake homes. They installed a multi-zone system in our custom-built home that maintains perfect comfort throughout all 5,000 square feet. Their attention to detail and knowledge of premium equipment made all the difference."</p>
                  <p className="font-medium">- The Johnson Family, Southlake residents since 2015</p>
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
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Serving Southlake & Surrounding Areas</h2>
                <p className="text-gray-700 mb-4">
                  We're proud to be the trusted HVAC service provider for Southlake and the surrounding communities.
                  Located in the Dallas-Fort Worth metroplex, Southlake is known for its excellent schools, beautiful parks, and luxury homes,
                  and we understand the unique HVAC needs of homes in our distinctive community.
                </p>

                <p className="text-gray-700 mb-4">
                  Southlake maintains its reputation as one of the most desirable communities in North Texas, with continuous attention to quality development and maintenance of property values.
                  Our team responds quickly to service calls throughout the area and provides reliable, premium solutions tailored to luxury homes.
                </p>

                {/* Google Map Embed */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.0984223124!2d-97.26793369999999!3d32.629879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7af9a2e5f3e5%3A0x2a0c2d42a7b079b9!2sSouthlake%2C%20TX!5e0!3m2!1sen!2sus!4v1719523200000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Southlake Service Area"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003049] mb-3">We serve Southlake and surrounding communities including:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Keller", "Colleyville", "Grapevine", "Westlake", "Roanoke", "Trophy Club", "Bedford", "Euless"].map((area) => (
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
              We've compiled answers to common questions about HVAC services specific to the Southlake area
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
            Ready for Premium HVAC Service in Southlake?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't wait for the next heatwave or cold snap to discover your system isn't ready.
            Schedule your service today and enjoy premium comfort all year long.
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
            <span className="text-[#003049] font-medium">Priority Service for Southlake Residents</span>
          </div>

          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Are Here For You
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Premium HVAC Service Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            We aren't comfortable until you are. Our certified team provides expert service tailored to Southlake's unique luxury home requirements.
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
            alt="Southlake area landscape"
            className="w-full h-auto object-cover"
            style={{ minHeight: "150px", maxHeight: "400px" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#003049] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Southlake;