import React, { useState, useEffect } from "react";
import indoorAirQuality from '../assets/newGroup.jpg';

const IndoorAirQuality = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextReview = () => {
    setCurrentReview((prev) =>
      prev + (window.innerWidth < 768 ? 1 : 3) >= reviewsData.length ? 0 : prev + (window.innerWidth < 768 ? 1 : 3)
    );
  };

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviewsData.length - (window.innerWidth < 768 ? 1 : 3) : prev - (window.innerWidth < 768 ? 1 : 3)
    );
  };

  const faqData = [
    {
      question: "Why is indoor air quality important in Fort Worth homes?",
      answer:
        "Fort Worth's climate leads to tightly sealed homes that trap pollutants. With high pollen counts, dust storms, and humidity, poor indoor air quality can exacerbate allergies, asthma, and other respiratory issues common in North Texas."
    },
    {
      question: "What are common indoor air pollutants in Fort Worth?",
      answer:
        "Our area faces specific challenges including high pollen levels, dust from construction and wind, mold spores due to humidity, VOCs from household products, and pet dander. We test for these and create customized solutions for your home."
    },
    {
      question: "How can better indoor air quality improve my health?",
      answer:
        "Cleaner air reduces allergy symptoms, asthma triggers, and respiratory issues. It can also improve sleep quality, increase energy levels, and reduce the spread of airborne illnesses—especially important for children, elderly, and those with compromised immune systems."
    },
    {
      question: "What services do you offer for indoor air quality?",
      answer:
        "We provide comprehensive IAQ solutions including air duct cleaning, UV light installation, whole-home air purifiers, humidity control systems, ventilator installations, mold testing and remediation, and regular maintenance plans to keep your air clean year-round."
    },
    {
      question: "How often should I have my air ducts cleaned in Fort Worth?",
      answer:
        "We recommend air duct cleaning every 3-5 years for most homes, but homes with pets, smokers, allergy sufferers, or after renovations may need more frequent cleaning. We offer free inspections to assess your specific needs."
    },
    {
      question: "Do you offer emergency mold remediation services?",
      answer:
        "Yes. We provide 24/7 emergency mold inspection and remediation services. Mold can spread quickly in our climate, and we're here to help Fort Worth residents address issues promptly to protect their health and home."
    }
  ];

  const reviewsData = [
    {
      name: "Sarah T.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "After installing their whole-home air purifier, my son's allergy symptoms have dramatically improved. We can finally enjoy our home without constant sneezing and congestion. Highly recommend their IAQ services!",
      date: "March 2025"
    },
    {
      name: "Michael R.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "The duct cleaning service was thorough and professional. I was shocked to see what came out of our ducts! Our home smells fresher, and my energy bills have decreased thanks to improved airflow.",
      date: "January 2025"
    },
    {
      name: "Jennifer L.",
      location: "Keller, TX",
      rating: 5,
      review:
        "We had a mold concern after a leak, and they responded immediately. Their team was knowledgeable, professional, and put our minds at ease. The air quality test results showed significant improvement after their remediation.",
      date: "February 2025"
    },
    {
      name: "Robert K.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "The UV light installation has made a noticeable difference in our home. We used to get musty smells from the AC, but now the air always smells fresh. Great service and reasonable pricing.",
      date: "December 2024"
    },
    {
      name: "Lisa M.",
      location: "North Richland Hills, TX",
      rating: 5,
      review:
        "I've suffered from asthma for years, and since getting their air quality system, I've noticed significantly fewer attacks. The investment in my home's air quality has been worth every penny for my health.",
      date: "November 2024"
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
    <div className="bg-[#003049] overflow-x-hidden">
      {/* ENHANCED HERO SECTION */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001c2c] via-[#00283e] to-[#003049] opacity-98"></div>
        <ParticleBackground />
        
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-12 border border-white/10 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left column - text content */}
                <div className="lg:w-1/2 z-10 w-full">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-2 lg:px-5 lg:py-3 mb-6 rounded-xl lg:rounded-2xl border border-white/30 shadow-lg w-full lg:w-auto">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h1 className="text-lg lg:text-xl font-bold text-white tracking-wide text-center lg:text-left">
                      PREMIUM INDOOR AIR QUALITY SERVICES
                    </h1>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                    Breathe The Difference With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78caff] to-[#4da9ff] block lg:inline">Fort Worth's Premier</span> Air Quality Solutions
                  </h2>
                  
                  <p className="text-base lg:text-xl mb-8 lg:mb-10 text-white opacity-95 leading-relaxed">
                    Experience up to 99.97% cleaner air with our advanced purification systems designed specifically for North Texas homes. Breathe easier, live healthier.
                  </p>
                  
                  {/* Modern stats with icons */}
                  <div className="flex flex-wrap gap-4 lg:gap-8 mb-8 lg:mb-10">
                    {[
                      { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", value: "99.97%", label: "Particles Removed" },
                      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", value: "24/7", label: "Emergency Service" },
                      { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", value: "15", label: "Years in Business" }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center flex-1 min-w-[120px]">
                        <div className="bg-white/25 p-2 lg:p-3 rounded-lg lg:rounded-xl mr-3">
                          <svg className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg lg:text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs lg:text-sm text-white opacity-90">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                      className="bg-gradient-to-r from-[#780000] to-[#a00000] hover:from-[#5a0000] hover:to-[#800000] text-white font-bold py-3 lg:py-4 px-6 lg:px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group text-sm lg:text-base"
                    >
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Schedule Air Quality Assessment
                    </button>
                    
                    <a href="tel:8178000340" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-xl shadow-lg transition-all duration-300 border border-white/30 flex items-center justify-center group text-sm lg:text-base">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Us!</span>
                    </a>
                  </div>
                </div>
                
                {/* Right column - visual elements */}
                <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
                  <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={indoorAirQuality} 
                      alt="Professional air quality technicians in Fort Worth" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003049] via-transparent to-transparent opacity-70"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-md py-2 px-3 lg:py-3 lg:px-5 rounded-xl lg:rounded-2xl shadow-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-xs lg:text-sm font-bold text-[#003049]">SERVING FORT WORTH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-white/20">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Certified", desc: "NATE & EPA" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Advanced", desc: "Testing" },
                { icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z", title: "24/7", desc: "Emergency" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "A+ BBB", desc: "Rating" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-md w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm lg:text-lg mb-1 text-white">{item.title}</h3>
                  <p className="text-xs lg:text-sm text-white opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TWO COLUMN SECTION - MOBILE OPTIMIZED */}
      <section className="py-12 lg:py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 lg:h-64 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[70%] w-full">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                Why Fort Worth Homes Need Specialized Air Quality Solutions
              </h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6">
                North Texas faces unique air quality challenges including high pollen counts, dust storms, humidity that promotes mold growth, and temperature extremes that keep homes sealed tight.
              </p>

              <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md mb-6 lg:mb-8 border border-gray-100">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#003049] mb-3 lg:mb-4">The Health Benefits of Clean Indoor Air</h3>
                <p className="text-gray-700 text-sm lg:text-base">
                  Improved indoor air quality can reduce allergy symptoms, asthma triggers, and respiratory issues. It also promotes better sleep, increases energy levels, and reduces the spread of airborne illnesses.
                </p>
              </div>

              <div className="my-6 lg:my-8">
                <div className="p-6 lg:p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Schedule Your Air Quality Assessment Today!</h3>
                  <p className="mb-4 lg:mb-6 text-sm lg:text-base">Breathe easier tomorrow. Book your assessment or call <span className="font-semibold">(817) 800-0340</span>.</p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors text-sm lg:text-base w-full lg:w-auto"
                  >
                    Book Air Quality Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-6 lg:mt-8"></div>
              </div>

              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 mt-8 lg:mt-12">
                The Fort Worth Air Quality Difference
              </h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6">
                While many companies offer basic filter changes, we provide comprehensive solutions that address the root causes of poor indoor air quality in North Texas homes.
              </p>

              <div className="grid grid-cols-1 gap-4 lg:gap-6 mb-8 lg:mb-12">
                {[
                  { title: "Advanced Air Testing", desc: "We use professional-grade equipment to identify specific pollutants in your home." },
                  { title: "Customized Solutions", desc: "Based on your test results, we design a tailored approach for your home." },
                  { title: "Ongoing Maintenance", desc: "We provide follow-up services to ensure your air quality remains optimal." },
                  { title: "Health-Focused Approach", desc: "Our solutions prioritize your family's health and wellbeing." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 lg:p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-700 text-sm lg:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                Our Service Areas in North Texas
              </h3>
              <p className="text-gray-700 mb-4 text-sm lg:text-base">
                We proudly provide comprehensive indoor air quality services throughout the Fort Worth metroplex:
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mb-8">
                {[
                  "Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "North Richland Hills",
                  "Euless", "Bedford", "Grapevine", "Haltom City", "Burleson", "Benbrook", "Saginaw",
                  "Keller", "Watauga", "Richland Hills"
                ].map((city) => (
                  <div key={city} className="flex items-center text-gray-700 text-sm">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 text-[#003049] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              {/* Financing CTA */}
              <div className="p-4 lg:p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Invest in Your Health With Flexible Financing
                </h3>
                <p className="mb-4 text-sm lg:text-base">
                  Breathe easier without financial stress. We offer convenient monthly payment options.
                </p>
                <a href="tel:8178000340" className="inline-block bg-white text-[#780000] font-semibold py-2 px-4 lg:px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors text-sm lg:text-base">
                  CALL FOR FINANCING: (817) 800-0340
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:w-[30%] w-full lg:sticky lg:top-6 self-start">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Why Indoor Air Quality Matters
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto text-sm lg:text-base">
              The EPA estimates that indoor air can be 2-5 times more polluted than outdoor air. In Fort Worth, clean air is essential for health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 text-center">
            {[
              { value: "50%+", desc: "of all illnesses are aggravated by polluted indoor air" },
              { value: "90%", desc: "reduction of airborne bacteria with UV light purification" },
              { value: "99.97%", desc: "of particles removed with HEPA filtration systems" }
            ].map((stat, index) => (
              <div key={index} className="p-4 lg:p-6 bg-white bg-opacity-10 rounded-xl">
                <div className="text-2xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm lg:text-base">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - MOBILE FRIENDLY */}
      <section className="w-full bg-[#003049] py-12 lg:py-16">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center mb-4">
            Trusted by Fort Worth Families
          </h2>
          <p className="text-blue-200 text-center mb-8 lg:mb-12 max-w-2xl mx-auto text-sm lg:text-base">
            Don't just take our word for it. Here's what our air quality customers have to say:
          </p>
          
          {/* Mobile & Desktop Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden px-2">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentReview * (100/(window.innerWidth < 768 ? 1 : 3))}%)` 
                }}
              >
                {reviewsData.map((review, index) => (
                  <div 
                    key={index} 
                    className={`${window.innerWidth < 768 ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2 lg:px-4`}
                  >
                    <div className="bg-white rounded-lg p-4 lg:p-6 shadow-md h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-sm lg:text-md font-semibold text-[#003049]">{review.name}</h3>
                          <p className="text-xs text-gray-600">{review.location}</p>
                        </div>
                        <div className="text-xs text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-xs lg:text-sm text-gray-700 italic">"{review.review}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 lg:translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Next review"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
              {Array(Math.ceil(reviewsData.length / (window.innerWidth < 768 ? 1 : 3))).fill(0).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * (window.innerWidth < 768 ? 1 : 3))}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${Math.floor(currentReview / (window.innerWidth < 768 ? 1 : 3)) === index ? 'bg-white' : 'bg-[#00283e]'}`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-white py-12 lg:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003049] to-[#780000] opacity-30"></div>
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center bg-blue-50 px-3 py-1 lg:px-4 lg:py-2 rounded-full mb-3 lg:mb-4">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-[#003049] font-medium text-sm lg:text-base">Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003049] mb-3 lg:mb-4">
              Indoor Air Quality Questions Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              We've compiled clear answers to common indoor air quality questions for Fort Worth homeowners.
            </p>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <button
                  className="w-full px-4 lg:px-6 py-3 lg:py-5 text-left text-white font-semibold text-base lg:text-lg flex justify-between items-center focus:outline-none bg-gradient-to-r from-[#003049] to-[#00283e] hover:from-[#00283e] hover:to-[#001f33] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4 text-sm lg:text-base text-left">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 lg:w-5 lg:h-5 transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-4 lg:px-6 pb-4 lg:pb-5 pt-3 lg:pt-4 text-gray-700 transition-all duration-300 ease-in-out bg-blue-50 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#003049] flex items-center justify-center">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm lg:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 lg:mt-12 text-center bg-blue-50 p-4 lg:p-8 rounded-xl border border-blue-100">
            <div className="inline-flex items-center justify-center bg-white px-3 py-1 lg:px-4 lg:py-2 rounded-full mb-3 lg:mb-4 shadow-sm">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[#003049] font-medium text-sm lg:text-base">Still have questions?</span>
            </div>
            <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">Our air quality experts are ready to help with any questions.</p>
            <a href="tel:8178000340" className="inline-block bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-2 lg:py-3 px-4 lg:px-8 rounded-lg shadow-md transition-colors transform hover:scale-105 text-sm lg:text-base">
              Call Our Experts: (817) 800-0340
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-[#003049] to-[#00283e] py-12 lg:py-16 relative overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">
            Ready to Breathe Cleaner Air?
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-6 lg:mb-8 max-w-3xl mx-auto">
            Don't wait to improve your indoor air quality. Schedule your assessment today and start breathing easier tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-white text-[#003049] font-semibold py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105 text-sm lg:text-base"
            >
              Schedule Assessment Online
            </button>
            <a href="tel:8178000340" className="bg-transparent border-2 border-white text-white font-semibold py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003049] transition-colors transform hover:scale-105 text-sm lg:text-base">
              Or Call: (817) 800-0340
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-white py-12 lg:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#003049] to-transparent opacity-20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-3 lg:mb-4 bg-blue-50 px-3 py-1 lg:px-4 lg:py-2 rounded-full">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium text-sm lg:text-base">Same-Day Availability</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#003049] mb-4 lg:mb-6">
            We Are Here For You
          </h2>
          <p className="text-lg lg:text-xl mb-2 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Air Quality Assessment Today
          </p>
          <p className="text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto text-gray-600">
            Your health is our priority. Our certified team will assess your air quality and provide solutions tailored to your Fort Worth home.
          </p>
          
          <div className="bg-blue-50 p-4 lg:p-6 rounded-xl mb-8 lg:mb-10 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
              <div className="flex items-center">
                <div className="bg-white p-2 lg:p-3 rounded-full shadow-md mr-3 lg:mr-4">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs lg:text-sm text-gray-600">Call us directly at</p>
                  <a href="tel:8178000340" className="text-lg lg:text-xl font-bold text-[#003049] hover:text-[#780000] transition-colors">(817) 800-0340</a>
                </div>
              </div>
              
              <div className="hidden md:block h-8 lg:h-12 w-px bg-blue-200"></div>
              
              <div className="flex items-center">
                <div className="bg-white p-2 lg:p-3 rounded-full shadow-md mr-3 lg:mr-4">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#780000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs lg:text-sm text-gray-600">Schedule online</p>
                  <p className="text-sm lg:text-md font-medium text-[#003049]">24/7 Availability</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center text-sm lg:text-base"
            >
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 mr-2"
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
              Book Online Now
            </button>
            <a href="tel:8178000340" className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-2 lg:py-3 px-6 lg:px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center text-sm lg:text-base">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
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
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
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

/** Service Form */
const ServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 w-full"
    >
      <h3 className="text-xl lg:text-2xl font-bold text-[#003049] mb-4 lg:mb-6 text-center">Request Air Quality Service</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] text-sm lg:text-base"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] text-sm lg:text-base"
          placeholder="Your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] text-sm lg:text-base"
          placeholder="(817) 000-0000"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What air quality concerns do you have? <span className="text-red-500">*</span>
        </label>
        <select className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] text-sm lg:text-base">
          <option value="">Select concern</option>
          <option value="allergies">Allergies/Asthma</option>
          <option value="mold">Mold Concerns</option>
          <option value="odors">Persistent Odors</option>
          <option value="dust">Excessive Dust</option>
          <option value="humidity">Humidity Issues</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          rows={3}
          maxLength={500}
          className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] text-sm lg:text-base"
          placeholder="Tell us about your air quality needs"
        />
        <p className="text-xs text-gray-500 mt-1">0 of 500 max characters</p>
      </div>

      <div className="mb-4 lg:mb-6">
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
            <label htmlFor="consent" className="text-gray-700 text-xs lg:text-sm">
              I consent to receive communications about my service request and promotional offers.
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-2 lg:py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2 text-sm lg:text-base"
      >
        Request Air Quality Assessment
      </button>
      
      <p className="text-xs text-gray-500 mt-3 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default IndoorAirQuality;