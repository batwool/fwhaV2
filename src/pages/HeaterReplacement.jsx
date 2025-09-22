import React, { useState } from "react";

const HeaterReplacement = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [activeTab, setActiveTab] = useState("signs");

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
      question: "When is the best time to replace my heater in North Texas?",
      answer: "The ideal time is during spring or early fall when HVAC companies are less busy. This ensures you get the best pricing and installation timeline. However, if your heater is showing serious issues heading into winter, don't wait - the 2021 Texas freeze taught us that preparedness matters more than perfect timing."
    },
    {
      question: "What's the difference between repairing and replacing my heater?",
      answer: "Repair makes sense for minor issues in systems under 10 years old. Replacement is better when repair costs exceed 50% of a new system's price, your heater is over 15 years old, or you're experiencing frequent breakdowns. We provide honest assessments to help you make the right financial decision."
    },
    {
      question: "How long does a typical heater replacement take?",
      answer: "Most standard furnace replacements take 6-8 hours. Complex installations or system upgrades may require 1-2 days. We work efficiently to minimize disruption to your home, and we'll give you a precise timeline after assessing your specific situation."
    },
    {
      question: "What efficiency rating should I look for in a new heater?",
      answer: "For North Texas climates, we recommend AFUE ratings of 90% or higher for gas furnaces. Higher efficiency models (95%+ AFUE) save significantly on winter energy bills. The right choice depends on your budget, home size, and how long you plan to stay in your home."
    },
    {
      question: "Do you offer financing options for heater replacement?",
      answer: "Yes! We offer flexible financing plans to make heater replacement affordable. Many homeowners choose to spread payments over 12-60 months. We'll help you find a plan that fits your budget while keeping your family warm and safe."
    },
    {
      question: "What brands of heating systems do you install?",
      answer: "We install top-rated brands including Trane, Lennox, Carrier, and Rheem. Each brand offers different features and price points. We'll recommend the best option based on your home's needs, budget, and efficiency goals rather than pushing one specific brand."
    }
  ];

  const reviewsData = [
    {
      name: "James and Maria R.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "After the 2021 freeze scared us, we decided to replace our 20-year-old furnace. The team was professional, cleaned up perfectly, and our new system is so much quieter and efficient. Worth every penny for the peace of mind.",
      date: "January 2024"
    },
    {
      name: "Thomas K.",
      location: "Arlington, TX",
      rating: 5,
      review: "They helped me understand the different efficiency ratings and found a system that fit my budget. The installation was smooth, and my energy bills are noticeably lower this winter. Highly recommend their expertise.",
      date: "November 2023"
    },
    {
      name: "The Williams Family",
      location: "Mansfield, TX",
      rating: 5,
      review: "We had a scary carbon monoxide scare with our old furnace. Fort Worth Heat and Air responded immediately, condemned our old unit, and had a new one installed within 48 hours. Potentially life-saving service.",
      date: "February 2024"
    },
    {
      name: "Susan P.",
      location: "North Richland Hills, TX",
      rating: 5,
      review: "The financing options made replacing our heater possible when we needed it most. The technicians were respectful of our home and explained everything in terms we could understand. Excellent service from start to finish.",
      date: "December 2023"
    },
    {
      name: "David L.",
      location: "Burleson, TX",
      rating: 5,
      review: "I appreciated that they didn't try to upsell me on a bigger system than I needed. Their load calculation ensured we got the right size heater for our home. Professional, honest, and fair pricing.",
      date: "October 2023"
    }
  ];

  const replacementSigns = [
    { icon: "💰", text: "Rising energy bills despite similar usage" },
    { icon: "🔧", text: "Frequent repairs costing more each year" },
    { icon: "🎛️", text: "Inconsistent temperatures throughout your home" },
    { icon: "👴", text: "System is 15+ years old" },
    { icon: "🌡️", text: "Struggles to maintain temperature during cold snaps" },
    { icon: "🔥", text: "Yellow burner flame instead of blue" },
    { icon: "💨", text: "Excessive dust or soot around registers" },
    { icon: "🚨", text: "Strange smells or loud noises during operation" }
  ];

  const benefits = [
    {
      title: "Lower Energy Bills",
      description: "Modern heaters are 30-50% more efficient than units from 15 years ago",
      savings: "$200-500/year"
    },
    {
      title: "Improved Safety",
      description: "New systems eliminate carbon monoxide risks from cracked heat exchangers",
      savings: "Priceless peace of mind"
    },
    {
      title: "Better Comfort",
      description: "Variable-speed technology maintains consistent temperatures",
      savings: "No more cold spots"
    },
    {
      title: "Quieter Operation",
      description: "Advanced sound-dampening technology for peaceful heating",
      savings: "Better sleep quality"
    },
    {
      title: "Smart Home Integration",
      description: "Wi-Fi thermostats and zoning capabilities",
      savings: "Ultimate control"
    },
    {
      title: "Increased Home Value",
      description: "New HVAC systems add significant value to your property",
      savings: "3-5% home value increase"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "Local Experience",
      description: "We've served North Texas families through countless winters and know exactly what works in our climate."
    },
    {
      icon: "⚡",
      title: "24/7 Emergency Service",
      description: "When your heat goes out in freezing weather, we're here for you - days, nights, weekends, and holidays."
    },
    {
      icon: "🔒",
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed, background-checked, and insured for your complete peace of mind."
    },
    {
      icon: "💰",
      title: "Honest Pricing",
      description: "No hidden fees or surprise charges. We provide upfront pricing before any work begins."
    },
    {
      icon: "🛠️",
      title: "Quality Workmanship",
      description: "We take pride in every installation, ensuring clean, professional work that lasts for years."
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      description: "Join hundreds of satisfied North Texas homeowners who trust us with their heating needs."
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION - Back to original style */}
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#003049] opacity-50" />
        <div className="relative px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="max-w-5xl">
            <div className="inline-block bg-white px-4 py-2 mb-4">
              <h1 className="text-base font-semibold text-[#003049]">
                Heater Replacement For Fort Worth Homes
              </h1>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Heater Replacement Experts Serving Fort Worth, TX
            </h2>

            {/* TEXAS FREEZE WARNING */}
            <div className="bg-red-600 border-l-4 border-yellow-400 p-4 mb-6 rounded">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-white font-bold">Remember the 2021 Texas Freeze?</p>
                  <p className="text-white mt-1">Don't let your family suffer through another winter without reliable heat. Ensure your heating system is ready for whatever winter brings.</p>
                </div>
              </div>
            </div>

            {/* STACKED FEATURE SVG ITEMS */}
            <div className="mt-8 flex flex-col gap-4 max-w-md">
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Reliable & Timely Response
              </div>
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Rotating Monthly Deals
              </div>
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                24-Hour Emergency Service Available
              </div>
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="12,2 15,11 24,11 17,17 19,26 12,20 5,26 7,17 0,11 9,11" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                A+ Rated on BBB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION GUIDE SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-12">
            The North Texas Heater Replacement Guide
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("signs")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "signs" 
                  ? "bg-[#003049] text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              ⚠️ Warning Signs
            </button>
            <button
              onClick={() => setActiveTab("repairvsreplace")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "repairvsreplace" 
                  ? "bg-[#003049] text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              🔧 Repair vs Replace
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "benefits" 
                  ? "bg-[#003049] text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              💰 Benefits & Savings
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "process" 
                  ? "bg-[#003049] text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              ⏱️ Our Process
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === "signs" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">8 Signs You Need Heater Replacement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {replacementSigns.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Pro Tip:</h4>
                  <p className="text-blue-800">If your heater shows 3 or more of these signs, replacement is likely more cost-effective than continued repairs.</p>
                </div>
              </div>
            )}

            {activeTab === "repairvsreplace" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When to Repair vs. Replace Your Heater</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 text-lg mb-4">✅ Consider Repair If:</h4>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        System is under 10 years old
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Repair cost is less than 50% of replacement
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        No safety concerns present
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-800 text-lg mb-4">🚨 Consider Replacement If:</h4>
                    <ul className="space-y-3 text-orange-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        System is 15+ years old
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Frequent breakdowns and repairs
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Rising energy bills year after year
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Modern Heater Replacement</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                      <div className="bg-[#003049] text-white py-1 px-3 rounded-full text-sm font-semibold">
                        {benefit.savings}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our 5-Step Replacement Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Comprehensive Assessment", desc: "We evaluate your current system, home layout, and heating needs" },
                    { step: "2", title: "Customized Recommendations", desc: "We present 2-3 options with clear pricing and benefits" },
                    { step: "3", title: "Professional Installation", desc: "Our certified technicians install with minimal disruption" },
                    { step: "4", title: "System Testing & Training", desc: "We test everything and show you how to use your new system" },
                    { step: "5", title: "Follow-up Maintenance", desc: "We schedule your first maintenance visit to ensure optimal performance" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="bg-[#003049] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Replaces Cost Calculator */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Why Choose Fort Worth Heat and Air?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're not just another HVAC company. We're your neighbors, and we understand what North Texas 
              families need to stay warm and safe during our unpredictable winters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by North Texas Families</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#780000]">15</div>
                <div className="text-gray-600">Years In Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#780000]">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#780000]">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#780000]">4.9★</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA & CTA */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Serving All of North Texas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're proud to be the trusted heater replacement experts for communities throughout the Dallas-Fort Worth metroplex. Whether you're in a historic Fort Worth neighborhood or a new development in Mansfield, we have the local expertise to handle your heating needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {["Fort Worth", "Arlington", "Mansfield", "Burleson", "North Richland Hills", "Euless", "Bedford", "Grapevine"].map((city) => (
                  <div key={city} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-[#780000] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#780000] shadow-sm">
                <p className="text-gray-700 font-semibold">
                  📞 Ready to discuss your heater replacement? Call us at <span className="text-[#780000]">(817) 800-0340</span> for an assessment.
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-6">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-12">
            What Our Replacement Customers Say
          </h2>
          
          <div className="hidden lg:block relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * (100/3)}%)` }}
              >
                {reviewsData.map((review, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-lg p-6 shadow-lg h-full border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-md font-semibold text-[#003049]">{review.name}</h3>
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
            
            <button 
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none border border-gray-200"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none border border-gray-200"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile reviews */}
          <div className="lg:hidden space-y-6">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-md font-semibold text-[#003049]">{review.name}</h3>
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
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-gray-50 py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl text-center mb-12">
            Heater Replacement FAQs
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <button
                  className="w-full px-6 py-4 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-[#003049] hover:bg-[#002239] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 pb-4 pt-4 text-gray-800 transition-all duration-300 ease-in-out ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#003049] to-[#780000] text-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Ready for a Warmer, Safer Home?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait until the next cold snap to think about your heating system. Get peace of mind with a reliable, efficient heater replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#780000] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              📞 Call (817) 800-0340
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              💻 Schedule Online
            </button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            ⚡ Same-day assessments available • Financing options • 10-year warranty on select systems
          </p>
        </div>
      </section>
    </div>
  );
};

/** Service Form */
const ServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-[#003049] p-8 rounded-2xl shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-2 text-[#003049]">Free Replacement Assessment</h3>
      <p className="text-gray-600 mb-6">Get expert advice on whether repair or replacement is right for you</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="(817) 555-0123"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Square Footage
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent">
            <option>Select approximate size</option>
            <option>Under 1,500 sq ft</option>
            <option>1,500 - 2,500 sq ft</option>
            <option>2,500 - 3,500 sq ft</option>
            <option>Over 3,500 sq ft</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current System Age
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent">
            <option>Select age range</option>
            <option>Under 10 years</option>
            <option>10-15 years</option>
            <option>15-20 years</option>
            <option>20+ years</option>
            <option>Not sure</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-4 px-6 rounded-lg transition-colors"
        >
          Get Free Assessment
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to our privacy policy. We'll contact you to schedule your free assessment.
        </p>
      </div>
    </form>
  );
};

export default HeaterReplacement;