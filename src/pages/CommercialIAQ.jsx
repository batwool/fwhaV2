import React, { useState, useEffect } from "react";
import commercialBuilding from '../assets/tallbuildingppl.jpg';

const CommercialIAQ = () => {
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
      question: "Why is indoor air quality critical for Fort Worth commercial buildings?",
      answer:
        "Fort Worth's climate and urban environment create unique challenges for commercial properties. High pollen counts, industrial pollutants, and temperature fluctuations can significantly impact employee health, productivity, and HVAC efficiency. Proper IAQ management reduces sick days by up to 30% and improves cognitive function by 15-20% according to Harvard studies."
    },
    {
      question: "What are the most common commercial IAQ issues in Fort Worth?",
      answer:
        "Commercial buildings in Fort Worth frequently face issues with VOC off-gassing from building materials, inadequate ventilation in renovated spaces, mold growth due to humidity fluctuations, particulate matter from construction, and CO2 buildup in densely occupied areas. We specialize in diagnosing and resolving these commercial-specific challenges with advanced monitoring technology."
    },
    {
      question: "How does commercial air quality impact employee productivity?",
      answer:
        "Research shows that optimal indoor air quality can improve decision-making performance by 50-100% and increase productivity by 8-11%. Poor IAQ costs U.S. businesses over $150 billion annually in lost productivity. Our solutions help Fort Worth businesses create environments that support cognitive function, reduce absenteeism, and enhance overall workplace performance."
    },
    {
      question: "What commercial IAQ services do you offer in Fort Worth?",
      answer:
        "We provide comprehensive commercial IAQ solutions including HVAC system hygiene, advanced filtration systems, UV-C germicidal irradiation, bipolar ionization, CO2 monitoring, building pressure balancing, humidity control, mold remediation, and ongoing maintenance programs. Our solutions are tailored to office buildings, healthcare facilities, schools, retail spaces, and industrial properties throughout the Fort Worth metro."
    },
    {
      question: "Are there Fort Worth regulations for commercial indoor air quality?",
      answer:
        "While Texas follows national standards (ASHRAE 62.1), Fort Worth commercial properties must comply with local building codes and EPA guidelines. We help businesses exceed these standards with solutions that improve air quality while optimizing energy efficiency. Our team stays current with all regulatory requirements to ensure your property remains compliant."
    },
    {
      question: "How often should commercial HVAC systems be serviced in Fort Worth?",
      answer:
        "We recommend quarterly inspections for most commercial properties, with semi-annual deep cleaning for high-occupancy buildings. Facilities with special requirements (healthcare, laboratories, manufacturing) may need monthly monitoring. Our commercial maintenance plans are designed to prevent disruptions while maximizing system efficiency and air quality."
    }
  ];

  const reviewsData = [
    {
      name: "David R.",
      company: "Fort Worth Office Complex",
      rating: 5,
      review:
        "After implementing their IAQ solutions across our 200,000 sq ft office building, we've seen a 27% reduction in sick days and numerous tenant compliments. The air feels noticeably fresher, and our HVAC maintenance costs have decreased significantly.",
      date: "March 2025"
    },
    {
      name: "Jennifer T.",
      company: "Tarrant County School District",
      rating: 5,
      review:
        "We partnered with them to address air quality concerns in our schools. Their comprehensive assessment and targeted solutions have created healthier learning environments. Teacher feedback has been extremely positive, noting fewer allergy issues and improved focus in classrooms.",
      date: "January 2025"
    },
    {
      name: "Michael K.",
      company: "Fort Worth Medical Center",
      rating: 5,
      review:
        "As a healthcare facility, our air quality standards are extremely rigorous. Their team implemented a cutting-edge UV-C and filtration system that exceeded our infection control requirements while improving energy efficiency. Highly recommend for medical facilities.",
      date: "February 2025"
    },
    {
      name: "Sarah L.",
      company: "DFW Retail Group",
      rating: 5,
      review:
        "Our shopping center had persistent musty odors that standard maintenance couldn't resolve. Their commercial IAQ team identified and remediated hidden mold in our HVAC systems. The improvement was immediate, and customer complaints have completely stopped.",
      date: "December 2024"
    },
    {
      name: "Robert W.",
      company: "Manufacturing Facility",
      rating: 5,
      review:
        "They designed a custom industrial air filtration system that handles our specific particulate challenges while maintaining proper ventilation. Our OSHA compliance issues are resolved, and employees report better breathing during shifts.",
      date: "November 2024"
    }
  ];

  const servicesData = [
    {
      icon: "M12 6v6l4 2",
      title: "Commercial HVAC Hygiene",
      description: "Comprehensive cleaning and maintenance of commercial HVAC systems to optimize performance and indoor air quality."
    },
    {
      icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
      title: "Advanced Air Purification",
      description: "Hospital-grade air purification technologies including UV-C, bipolar ionization, and HEPA filtration systems."
    },
    {
      icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
      title: "IAQ Monitoring & Analytics",
      description: "Continuous monitoring of air quality parameters with real-time reporting and data-driven recommendations."
    },
    {
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      title: "Ventilation Optimization",
      description: "Balancing building pressure and ventilation rates to ensure optimal fresh air delivery and contaminant removal."
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
    <div className="bg-[#003049]">
      {/* ENHANCED HERO SECTION WITH SEPARATION */}
      <div className="relative overflow-hidden">
        {/* Background with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001c2c] via-[#00283e] to-[#003049] opacity-98"></div>
        <ParticleBackground />
        
        <div className="relative px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Content card with subtle background */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left column - text content */}
                <div className="lg:w-1/2 z-10">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-5 py-3 mb-8 rounded-2xl border border-white/30 shadow-lg">
                    <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m0 0H5m14 0V3M5 21h2m-2 0h-2m2 0V9m0 0h14M9 21h6M9 17h6" />
                    </svg>
                    <h1 className="text-xl font-bold text-white tracking-wide">
                      COMMERCIAL INDOOR AIR QUALITY SOLUTIONS
                    </h1>
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Elevate Workplace Health & Productivity With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78caff] to-[#4da9ff]">Fort Worth's Premier</span> Commercial IAQ Services
                  </h2>
                  
                  <p className="text-xl mb-10 text-white opacity-95 leading-relaxed max-w-lg">
                    Specialized air quality solutions for Fort Worth offices, healthcare facilities, schools, and commercial properties. Reduce sick days, improve cognitive function, and create healthier environments.
                  </p>
                  
                  {/* Modern stats with icons */}
                  <div className="flex gap-8 mb-10">
                    <div className="flex items-center">
                      <div className="bg-white/25 p-3 rounded-xl mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">27%</div>
                        <div className="text-sm text-white opacity-90">Reduced Absenteeism</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/25 p-3 rounded-xl mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">15%</div>
                        <div className="text-sm text-white opacity-90">Productivity Increase</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/25 p-3 rounded-xl mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-sm text-white opacity-90">Customer Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <button
                      type="button"
                      onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                      className="bg-gradient-to-r from-[#780000] to-[#a00000] hover:from-[#5a0000] hover:to-[#800000] text-white font-bold py-4 px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m0 0H5m14 0V3M5 21h2m-2 0h-2m2 0V9m0 0h14M9 21h6M9 17h6" />
                      </svg>
                      Schedule Commercial Assessment
                    </button>
                    
                    <a href="tel:8178000340" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 border border-white/30 flex items-center justify-center group">
                      <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="">Call For Business Quotes</span>
                    </a>
                  </div>
                </div>
                
                {/* Right column - visual elements */}
                <div className="lg:w-1/2 relative">
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                    <img 
                      src={commercialBuilding} 
                      alt="Commercial building air quality services in Fort Worth" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003049] via-transparent to-transparent opacity-70"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-bold text-[#003049]">SERVING FORT WORTH BUSINESSES SINCE 2013</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#78caff] rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#780000] rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators - modernized */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/20">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Commercial Certified",
                  desc: "NATE & EPA Certified"
                },
                {
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  title: "Advanced Analytics",
                  desc: "Data-Driven Solutions"
                },
                {
                  icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                  title: "24/7 Business Support",
                  desc: "Minimal Disruption"
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "A+ BBB Rating",
                  desc: "Commercial Excellence"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-white">{item.title}</h3>
                  <p className="text-sm text-white opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TWO COLUMN SECTION - FIXED TEXT COLORS */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[70%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Fort Worth Businesses Need Specialized Air Quality Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                The Fort Worth metro area faces unique commercial air quality challenges including industrial pollutants, high pollen counts, temperature extremes, and urban construction. These factors significantly impact employee health, productivity, and operational costs. Our specialized commercial solutions address these regional concerns with data-driven approaches.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">The Business Impact of Optimal Indoor Air Quality</h3>
                <p className="text-gray-700">
                  Superior indoor air quality directly impacts your bottom line. Studies show optimal IAQ can reduce sick days by 27%, improve cognitive function by 15-20%, and increase overall productivity by 8-11%. For a 100-person company, this translates to approximately $500,000 in annual savings and productivity gains. Additionally, proper IAQ management extends HVAC system life, reduces energy costs, and enhances tenant satisfaction in commercial properties.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your Commercial Air Quality Assessment Today!</h3>
                  <p className="mb-6">Create healthier, more productive environments. Book your commercial assessment or call <span className="font-semibold">(817) 800-0340</span>. We service all of Fort Worth and surrounding business districts.</p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Book Commercial IAQ Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                The Fort Worth Commercial Air Quality Advantage
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                While many companies offer basic filter changes, we provide comprehensive commercial solutions that address the root causes of poor indoor air quality in North Texas businesses, healthcare facilities, educational institutions, and industrial properties.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Advanced Commercial Air Testing</h4>
                  <p className="text-gray-700">We use industrial-grade monitoring equipment to identify specific pollutants in your facility, including VOCs, particulate matter, CO2 levels, and microbial contaminants.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Customized Commercial Solutions</h4>
                  <p className="text-gray-700">Based on your facility's specific usage patterns and test results, we design tailored approaches that address your unique air quality challenges and business objectives.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Commercial Maintenance</h4>
                  <p className="text-gray-700">We don't just install equipment—we provide comprehensive maintenance programs to ensure your air quality remains optimal with minimal business disruption.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">ROI-Focused Approach</h4>
                  <p className="text-gray-700">Our solutions prioritize your return on investment, with documented improvements in productivity, reduced absenteeism, and lower operational costs.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Benefits of Professional Commercial Air Quality Services
              </h3>
              
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Reduced Employee Absenteeism
                  </h4>
                  <p className="mt-2 text-gray-700">Our systems reduce airborne pathogens and allergens, leading to fewer sick days and lower healthcare costs for your organization.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhanced Cognitive Function
                  </h4>
                  <p className="mt-2 text-gray-700">Optimal CO2 levels and reduced VOCs improve decision-making performance and focus, leading to better business outcomes.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved HVAC Efficiency
                  </h4>
                  <p className="mt-2 text-gray-700">Clean air systems help your commercial HVAC run more efficiently, potentially lowering energy costs by 15-20% and extending equipment life.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Commercial Service Areas in North Texas
              </h3>
              <p className="mt-4 text-gray-700">
                We proudly provide comprehensive commercial indoor air quality services throughout the Fort Worth metroplex and surrounding business districts:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  "Downtown Fort Worth",
                  "Fort Worth Medical District",
                  "Alliance Corridor",
                  "West 7th District",
                  "Cultural District",
                  "Sundance Square",
                  "Arlington Entertainment District",
                  "DFW Airport Area",
                  "Las Colinas",
                  "Grapevine",
                  "Southlake",
                  "Keller",
                  "North Richland Hills",
                  "Hurst-Euless-Bedford",
                  "Mansfield"
                ].map((area) => (
                  <div key={area} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>

              {/* Industry Specialization */}
              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Industry-Specific Solutions
              </h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-xl font-semibold text-[#003049] mb-2">Office Buildings</h4>
                  <p className="text-gray-700">Boost productivity and reduce sick days with targeted IAQ solutions for high-occupancy spaces.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-xl font-semibold text-[#003049] mb-2">Healthcare Facilities</h4>
                  <p className="text-gray-700">Meet strict infection control standards with hospital-grade air purification and monitoring.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-xl font-semibold text-[#003049] mb-2">Educational Institutions</h4>
                  <p className="text-gray-700">Create optimal learning environments with improved air quality that enhances concentration and reduces illness transmission.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="text-xl font-semibold text-[#003049] mb-2">Retail & Hospitality</h4>
                  <p className="text-gray-700">Enhance customer experience and employee comfort with fresh, clean air throughout your facilities.</p>
                </div>
              </div>

              {/* Financing Options CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Invest in Your Workplace With Flexible Commercial Financing
                </h3>
                <p className="mb-4">
                  Improve air quality without capital expenditure. We offer convenient leasing and payment options for businesses of all sizes, with demonstrated ROI through improved productivity and reduced costs.
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

      {/* STATISTICS SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Why Commercial Indoor Air Quality Matters in Fort Worth
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              The Harvard Business Review estimates that optimal indoor air quality can return $6,500 per employee annually in productivity gains and reduced healthcare costs. In Fort Worth's competitive business environment, this advantage is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="text-4xl font-bold mb-2">27%</div>
              <p>reduction in sick days with optimized indoor air quality</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="text-4xl font-bold mb-2">15%</div>
              <p>improvement in cognitive function scores with better IAQ</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="text-4xl font-bold mb-2">20%</div>
              <p>energy savings potential with optimized ventilation strategies</p>
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
                    <p className="text-xs text-gray-600">{review.company}</p>
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
                          <p className="text-xs text-gray-600">{review.company}</p>
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
              Commercial Air Quality Questions Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've compiled clear answers to common commercial indoor air quality questions for Fort Worth businesses.
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
            <p className="text-gray-700 mb-6">Our commercial air quality experts are ready to help with any questions.</p>
            <a href="tel:8178000340" className="inline-block bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors transform hover:scale-105">
              Call Our Experts: (817) 800-0340
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
            Ready to Transform Your Workplace Air Quality?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Don't wait to improve your commercial indoor air quality. Schedule your assessment today and start creating a healthier, more productive environment tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Schedule Commercial Assessment
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
            <span className="text-[#003049] font-medium">Commercial-Grade Solutions</span>
          </div>
          
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Specialize in Commercial IAQ Solutions
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Commercial Air Quality Assessment Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Your employees' health and productivity are our priority. Our certified commercial team will assess your air quality and provide enterprise-grade solutions tailored to your Fort Worth business.
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
                  <p className="text-md font-medium text-[#003049]">After-Hours Available</p>
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
              Book Commercial Assessment
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

// Enhanced Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create initial particles with different types
    const initialParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.1 + 0.05,
      type: Math.random() > 0.7 ? 'circle' : 'blob'
    }));
    
    setParticles(initialParticles);
    
    // Animation loop
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX + 100) % 100,
        y: (p.y + p.speedY + 100) % 100,
      })));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map(p => (
        p.type === 'circle' ? (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              transition: 'all 0.5s ease',
            }}
          />
        ) : (
          <div
            key={p.id}
            className="absolute bg-white"
            style={{
              width: `${p.size}px`,
              height: `${p.size * 0.3}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              borderRadius: '50%',
              transform: 'rotate(45deg)',
              transition: 'all 0.5s ease',
            }}
          />
        )
      ))}
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
      <h3 className="text-2xl font-bold text-[#003049] mb-6 text-center">Request Commercial IAQ Assessment</h3>

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
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Your company"
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
          placeholder="Your business email"
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
          Property Type <span className="text-red-500">*</span>
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]">
          <option value="">Select property type</option>
          <option value="office">Office Building</option>
          <option value="medical">Medical Facility</option>
          <option value="education">School/University</option>
          <option value="retail">Retail Space</option>
          <option value="industrial">Industrial Facility</option>
          <option value="hospitality">Hotel/Restaurant</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Square Footage <span className="text-red-500">*</span>
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]">
          <option value="">Select range</option>
          <option value="5000">Under 5,000 sq ft</option>
          <option value="10000">5,000 - 10,000 sq ft</option>
          <option value="25000">10,001 - 25,000 sq ft</option>
          <option value="50000">25,001 - 50,000 sq ft</option>
          <option value="100000">50,001 - 100,000 sq ft</option>
          <option value="100000+">Over 100,000 sq ft</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Air Quality Concerns
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]">
          <option value="">Select primary concern</option>
          <option value="odors">Persistent Odors</option>
          <option value="mold">Mold Concerns</option>
          <option value="allergies">Employee Allergy Issues</option>
          <option value="sickbuilding">Sick Building Syndrome</option>
          <option value="humidity">Humidity Control</option>
          <option value="ventilation">Ventilation Issues</option>
          <option value="maintenance">Preventive Maintenance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          rows={3}
          maxLength={500}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Tell us about your commercial air quality needs"
        />
        <p className="text-xs text-gray-500 mt-1">0 of 500 max characters</p>
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
              I consent to receive communications about my commercial service request. Message and data rates may apply.
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2"
      >
        Request Commercial Assessment
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default CommercialIAQ;