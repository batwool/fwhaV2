import React, { useState } from "react";
import { Link } from "react-router-dom";
import cityscape from "../assets/cityscapes.png";
import emailjs from "emailjs-com";
import { useRef } from "react";
import ServiceForm from "../components/ServiceForm";

const Westlake = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do Westlake's luxury homes impact HVAC system requirements?",
      answer: "Westlake's upscale residences often feature larger square footage, high ceilings, and premium finishes that require specialized HVAC solutions. We recommend and install premium systems with advanced zoning capabilities to ensure even comfort throughout these expansive homes while maintaining energy efficiency."
    },
    {
      question: "What HVAC considerations are important for Westlake's stringent building codes?",
      answer: "Westlake maintains some of the most rigorous building standards in North Texas. Our team is well-versed in these requirements, ensuring all installations meet or exceed local codes. We focus on ultra-quiet operation systems that comply with noise ordinances and high-efficiency units that align with the town's environmental standards."
    },
    {
      question: "How can I optimize my HVAC system for Westlake's unique microclimate?",
      answer: "Nestled between several lakes and with significant elevation changes, Westlake experiences unique weather patterns. We recommend systems with enhanced humidity control for the lake-effect moisture and variable-speed compressors that adjust to the subtle temperature variations throughout the day."
    },
    {
      question: "Do you handle HVAC needs for Westlake's commercial properties and estates?",
      answer: "Absolutely. We have extensive experience serving both the luxury residential market and commercial properties in Westlake, including the renowned Vaquero and Trophy Club communities. We understand the specific requirements for large estates and commercial spaces, from whole-home humidification to advanced air purification systems."
    }
  ];

  const services = [
    {
      title: "AC Services",
      description: "Premium cooling solutions for Westlake's discerning homeowners",
      details: "From maintenance to emergency repairs, we handle all your cooling needs with the precision and discretion expected in Westlake homes.",
      localTip: "Essential for large estates in communities like Vaquero and Carlton Woods with extensive glass features that increase cooling demands"
    },
    {
      title: "Heating Services",
      description: "Discreet and efficient heating for luxury homes",
      details: "Keep your expansive home perfectly warm during our occasional cold snaps with our whisper-quiet, high-efficiency heating solutions.",
      localTip: "Many Westlake homes feature radiant floor heating that requires specialized maintenance expertise"
    },
    {
      title: "Indoor Air Quality",
      description: "Breathe easier in your Westlake estate",
      details: "Our comprehensive air quality solutions reduce allergens, control humidity, and eliminate pollutants with systems designed for large, luxury homes.",
      localTip: "Particularly important for homes near water features that can increase humidity levels"
    },
    {
      title: "Maintenance Plans",
      description: "Protect your premium investment year-round",
      details: "Our concierge maintenance programs ensure your high-end systems operate at peak efficiency with minimal disruption to your lifestyle.",
      localTip: "We offer flexible scheduling to accommodate the busy lifestyles of Westlake professionals"
    }
  ];

  const localLandmarks = [
    {
      name: "The Dallas Cowboys World Headquarters",
      description: "The state-of-the-art training facility located right in Westlake"
    },
    {
      name: "Vaquero Golf Club",
      description: "An exclusive private golf community known for its championship course"
    },
    {
      name: "Trophy Club Country Club",
      description: "Premier golf and country club serving the Westlake area"
    },
    {
      name: "Westlake Academy",
      description: "An internationally recognized IB World School serving the community"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - Enhanced with luxury design elements */}
      <section className="relative py-16 bg-gradient-to-br from-[#f8f5f0] to-[#eae6df]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Card Container with Luxury Design */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#003049] border-opacity-20 relative">
              {/* Premium Badge */}
              <div className="absolute -top-3 -right-3 bg-gold-500 text-[#003049] font-bold py-1 px-3 rounded-full text-sm transform rotate-12 shadow-md z-20">
                PREMIUM SERVICE
              </div>
              
              {/* Card Header with Background */}
              <div className="bg-[#003049] text-white py-8 px-6 text-center relative overflow-hidden">
                {/* Subtle Cowboys Star Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute text-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        fontSize: '24px'
                      }}
                    >
                      ⭐
                    </div>
                  ))}
                </div>

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
                    / Westlake, TX
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
                  Luxury HVAC Services in Westlake, TX
                </h1>

                {/* Description */}
                <p className="text-blue-100 relative z-10">
                  Premium heating, cooling, and indoor air quality solutions for Westlake homeowners.
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <p className="text-gray-700 text-center mb-6">
                    For over 15 years, we've been providing reliable, premium HVAC services to Westlake's most discerning residents.
                    As your local HVAC experts, we understand the specific requirements of maintaining perfection in Westlake's homes—from
                    managing complex multi-zone systems to ensuring whisper-quiet operation expected in upscale residences.
                  </p>

                  {/* Local Climate Info */}
                  <div className="bg-[#f8f5f0] p-4 rounded-lg mb-6 w-full border-l-4 border-gold-500">
                    <h3 className="font-semibold text-[#003049] mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      Westlake Exclusive Insight:
                    </h3>
                    <p className="text-sm text-gray-700">
                      Westlake is home to the Dallas Cowboys headquarters and some of the most exclusive residential communities in Texas.
                      Our HVAC solutions are tailored to meet the elevated standards of these properties, with attention to details,
                      ultra-quiet operation, and seamless integration with smart home systems.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 w-full">
                    <div className="bg-[#f8f5f0] p-4 rounded-lg text-center border border-gold-200">
                      <div className="text-xl font-bold text-[#003049]">15+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-[#f8f5f0] p-4 rounded-lg text-center border border-gold-200">
                      <div className="text-xl font-bold text-[#003049]">24/7</div>
                      <div className="text-xs text-gray-600">Concierge Service</div>
                    </div>
                    <div className="bg-[#f8f5f0] p-4 rounded-lg text-center border border-gold-200">
                      <div className="text-xl font-bold text-[#003049]">A+</div>
                      <div className="text-xs text-gray-600">BBB Rating</div>
                    </div>
                    <div className="bg-[#f8f5f0] p-4 rounded-lg text-center border border-gold-200">
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Serving the Westlake Community</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We're proud to provide premium HVAC services to one of Texas' most exclusive communities
            </p>

            <div className="bg-[#f8f5f0] p-6 rounded-lg mb-12 border-l-4 border-gold-500">
              <h3 className="text-xl font-semibold text-[#003049] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                About Westlake, TX
              </h3>
              <p className="text-gray-700 mb-4">
                Westlake is renowned for its exceptional quality of life, top-rated schools, and exclusive residential communities.
                As home to the Dallas Cowboys world headquarters and numerous corporate campuses, Westlake combines small-town charm with world-class amenities.
                The town maintains rigorous development standards, resulting in meticulously planned communities with extensive green spaces and architectural consistency.
              </p>
              <p className="text-gray-700">
                Westlake homes are among the most luxurious in North Texas, often featuring custom architecture, premium finishes, and advanced smart home systems.
                We specialize in working with these high-end properties, understanding their complex HVAC requirements and the need for reliable, professional service.
              </p>
              
              {/* Cool Fact about Westlake */}
              <div className="mt-4 p-4 bg-white rounded-md border border-gold-200">
                <h4 className="font-semibold text-[#003049] mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Westlake Cool Fact:
                </h4>
                <p className="text-sm text-gray-700">
                  Westlake is home to the Dallas Cowboys World Headquarters, known as "The Star." 
                  This 91-acre campus features not only the team's training facilities but also a luxury hotel, 
                  fine dining restaurants, and high-end retail—all requiring sophisticated climate control systems 
                  that we're expertly equipped to service.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#003049] mb-4">Local Landmarks & Areas We Serve</h3>
                <div className="space-y-4">
                  {localLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-[#003049]">{landmark.name}</h4>
                        <p className="text-sm text-gray-600">{landmark.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#003049] mb-4">Westlake HVAC Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Luxury homes often require advanced multi-zone systems for optimal comfort</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Ultra-quiet operation is essential for maintaining the serene atmosphere of luxury homes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Seamless integration with smart home systems is expected in premium residences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Efficient installation and maintenance that respects homeowners' privacy and time</span>
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
            <h2 className="text-3xl font-bold text-[#003049] mb-4">Our HVAC Services for Westlake Homes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide premium heating, cooling, and air quality solutions tailored to Westlake's luxury homes and estates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#003049] border-opacity-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#003049] mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{service.details}</p>
                <div className="bg-gold-50 p-3 rounded-md mt-4 border border-gold-100">
                  <p className="text-sm text-[#003049] flex items-start">
                    <svg className="w-4 h-4 mr-2 text-gold-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Westlake Insight:</span> {service.localTip}
                  </p>
                </div>
                <a href="#schedule" className="inline-block mt-4 text-gold-600 font-medium hover:underline">
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
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Premium HVAC Solutions for Westlake Estates</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our team of certified technicians provides luxury HVAC services to keep your Westlake residence perfectly comfortable through all seasons
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">AC Services</h3>
                <p className="text-gray-700 mb-4">
                  Westlake's luxury homes demand flawless cooling performance. We provide premium AC services designed for large, high-end residences with multiple zones and advanced control systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Premium AC Repair & Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>High-Efficiency AC Installation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Multi-Zone System Replacement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Concierge Maintenance Programs</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gold-50 rounded-md border border-gold-100">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">Westlake Tip:</span> Consider ultra-quiet systems with SEER ratings above 20 for optimal efficiency and noise reduction.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Heating Services</h3>
                <p className="text-gray-700 mb-4">
                  When temperatures drop, your Westlake home deserves heating solutions that match its premium quality. We offer sophisticated heating services designed for luxury residences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>High-Efficiency Heater Repair</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Premium Heater Installation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Radiant Floor Heating Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Hybrid Heating Solutions</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gold-50 rounded-md border border-gold-100">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">Westlake Tip:</span> Consider a modulating furnace for precise temperature control in your luxury home.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Indoor Air Quality</h3>
                <p className="text-gray-700 mb-4">
                  Westlake's exclusive homes deserve nothing less than pristine air quality. Our premium solutions ensure your indoor environment matches the excellence of your residence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Whole-Home Air Purification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Precision Humidity Control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>UV Germicidal Lights</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Hospital-Grade Filtration</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gold-50 rounded-md border border-gold-100">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">Westlake Tip:</span> HEPA filtration systems are ideal for large homes with high ceilings and open floor plans.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-4 border-b border-[#003049] border-opacity-20 pb-2">Maintenance Plans</h3>
                <p className="text-gray-700 mb-4">
                  Protect your premium HVAC investment with our concierge maintenance programs designed specifically for Westlake's luxury homeowners.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Biannual Precision Tune-ups</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Fast Scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Discounted Repairs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span>Extended Warranty Options</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gold-50 rounded-md border border-gold-100">
                  <p className="text-sm text-[#003049]">
                    <span className="font-medium">Westlake Tip:</span> Our Platinum Maintenance Plan includes after-hours service options for minimal disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Enhanced with luxury focus */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003049] mb-2 text-center">Why Westlake Homeowners Choose Us</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We've built our reputation on discretion, technical excellence, and deep understanding of Westlake's luxury market
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Luxury Home Expertise</h3>
                <p className="text-gray-700">
                  We understand the specific requirements of Westlake's high-end properties, from multi-zone systems to integration with smart home automation.
                  Our solutions are designed for the discerning homeowner who expects nothing less than perfection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Discretion & Professionalism</h3>
                <p className="text-gray-700">
                  We respect the privacy of Westlake residents and provide service with the utmost discretion. Our technicians are background-checked,
                  uniformed professionals who treat your home with the respect it deserves.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Knowledge of Local Standards</h3>
                <p className="text-gray-700">
                  We're thoroughly familiar with Westlake's exacting building codes and architectural standards. We ensure all work meets
                  the town's rigorous requirements while maintaining the aesthetic integrity of your luxury home.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#003049] border-opacity-10">
                <h3 className="text-xl font-semibold text-[#003049] mb-3">Concierge Response Times</h3>
                <p className="text-gray-700">
                 Because we’re close by, we can respond quickly to HVAC needs in Westlake. We know how important fast service is, so we make sure our Westlake neighbors get help right when they need it
                </p>
              </div>
            </div>

            {/* Local Testimonial */}
            <div className="mt-12 bg-[#003049] text-white p-6 rounded-lg">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-gold-500 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="italic mb-2">"These technicians truly understand luxury homes. They installed a multi-zone system in our Vaquero estate that maintains perfect comfort throughout all 8,000 square feet. Their discretion and professionalism were exactly what we expect from service providers in Westlake."</p>
                  <p className="font-medium">- The Reynolds Family, Westlake residents since 2015</p>
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
                <h2 className="text-2xl font-bold text-[#003049] mb-4">Serving Westlake & Surrounding Areas</h2>
                <p className="text-gray-700 mb-4">
                  We're proud to be the preferred HVAC service provider for Westlake and the surrounding exclusive communities.
                  Located in northern Tarrant and southern Denton counties, Westlake represents the pinnacle of luxury living in North Texas,
                  and we understand the specialized HVAC needs of homes in this prestigious area.
                </p>

                <p className="text-gray-700 mb-4">
                  Westlake is known for its exceptional quality of life, top-rated schools, and meticulously planned communities.
                  Our team provides timely, professional service throughout the area, with expertise in handling the complex systems found in luxury estates.
                </p>

                {/* Google Map Embed */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.0984223124!2d-97.26793369999999!3d32.629879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7af9a2e5f3e5%3A0x2a0c2d42a7b079b9!2sHaslet%2C%20TX!5e0!3m2!1sen!2sus!4v1719523200000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Westlake Service Area"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003049] mb-3">We serve Westlake and surrounding communities including:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Southlake", "Keller", "Roanoke", "Trophy Club", "Bartonville", "Argyle", "Coppell", "Flower Mound"].map((area) => (
                      <div key={area} className="flex items-center">
                        <svg className="w-3 h-3 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
              We've compiled answers to common questions about HVAC services specific to the Westlake area
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
            Ready for Premium HVAC Service in Westlake?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't compromise on comfort in your home. Schedule your concierge service today and experience the difference of working with Westlake's preferred HVAC specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-50 rounded-full -mr-32 -mb-32 opacity-50"></div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-4 bg-gold-50 px-4 py-2 rounded-full border border-gold-200">
            <svg className="w-5 h-5 mr-2 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium">Fast Scheduling for Westlake Residents</span>
          </div>

          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Are Here For You
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Premium HVAC Service Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            We aren't comfortable until you are. Our certified team provides expert service tailored to Westlake's luxury homes and exacting standards.
          </p>

          <div className="bg-gold-50 p-6 rounded-xl mb-10 border border-gold-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4 border border-gold-200">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call us directly at</p>
                  <a href="tel:8178000340" className="text-xl font-bold text-[#003049] hover:text-gold-600 transition-colors">(817) 800-0340</a>
                </div>
              </div>

              <div className="hidden md:block h-12 w-px bg-gold-200"></div>

              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4 border border-gold-200">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Schedule online</p>
                  <p className="text-md font-medium text-[#003049]">Concierge Service Available</p>
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

            <a href="tel:8178000340" className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 flex items-center justify-center">
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
            alt="Westlake area landscape"
            className="w-full h-auto object-cover"
            style={{ minHeight: "150px", maxHeight: "400px" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#003049] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Westlake;