import React, { useState, useEffect } from "react";
import cityscape from "../assets/cityscapes.png";
import teamPhoto from '../assets/groupphoto1.jpeg';
import technicianWorking from '../assets/checkingac.jpg';
import companyTruck from '../assets/hvac2.jpg';
import serviceCall from '../assets/hvac1.jpg';

const AboutUs = () => {
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
      question: "How long has Fort Worth Heat and Air been serving the Fort Worth metroplex?",
      answer: "We've been proudly serving Fort Worth and surrounding communities since 2013. Our deep roots in North Texas give us unique insight into the specific HVAC challenges homeowners face in our climate, from scorching summers to unexpected winter storms."
    },
    {
      question: "What makes Fort Worth Heat and Air different from other HVAC companies?",
      answer: "As a locally owned and operated Fort Worth business, we're your neighbors, not a corporate chain. We combine personalized service with factory-trained expertise, 24/7 emergency availability, and a genuine commitment to treating every home like it's our own. Our technicians live right here in Tarrant County and understand local building codes and climate challenges."
    },
    {
      question: "Are your HVAC technicians certified and insured?",
      answer: "Absolutely. All our Fort Worth HVAC technicians are NATE-certified, EPA certified, fully insured, and undergo continuous training on the latest technologies and installation techniques. We maintain full liability insurance and workers' compensation to protect your home and our team."
    },
    {
      question: "Do you offer emergency HVAC service in Fort Worth?",
      answer: "Yes! We provide 24/7 emergency HVAC repair service throughout the Fort Worth metroplex. When your AC fails during a Texas heatwave or your heater stops working in winter, we're here to help with rapid response times and reliable solutions."
    },
    {
      question: "What areas in the Fort Worth metroplex do you serve?",
      answer: "We serve all of Fort Worth and surrounding communities including Arlington, Mansfield, Keller, North Richland Hills, Grapevine, Burleson, Benbrook, Saginaw, and throughout Tarrant County. We're your local HVAC experts for the entire DFW area."
    },
    {
      question: "Do you offer financing for new HVAC systems?",
      answer: "Yes, we offer flexible financing options for qualified homeowners. We understand that replacing an HVAC system is a significant investment, so we work with leading lenders to provide affordable payment plans that fit your budget while keeping your Fort Worth home comfortable."
    }
  ];

  const reviewsData = [
    {
      name: "James & Sarah W.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "Outstanding service from start to finish! They installed our new AC system and explained everything clearly. As lifelong Fort Worth residents, we appreciate supporting a local business that truly cares about our community.",
      date: "March 2025"
    },
    {
      name: "Maria Rodriguez",
      location: "Arlington, TX",
      rating: 5,
      review: "When our AC failed during last summer's heatwave, Fort Worth Heat and Air had a technician at our home within an hour. Professional, honest, and fair pricing. We've recommended them to all our neighbors!",
      date: "February 2025"
    },
    {
      name: "The Thompson Family",
      location: "Keller, TX",
      rating: 5,
      review: "We've used them for annual maintenance for 5 years now. Their preventative maintenance plan caught a potential issue before it became a costly repair. Trustworthy and reliable - exactly what you want in an HVAC company.",
      date: "January 2025"
    },
    {
      name: "Robert Chen",
      location: "North Richland Hills, TX",
      rating: 5,
      review: "The team installed a complete new HVAC system in our older Fort Worth home. They were respectful of our property, cleaned up perfectly, and the system has been incredibly efficient. Our energy bills are noticeably lower.",
      date: "December 2024"
    },
    {
      name: "Lisa & Mark Johnson",
      location: "Mansfield, TX",
      rating: 5,
      review: "From the initial estimate to the final installation, everything was professional and transparent. No hidden fees, no pressure tactics. Just honest advice and quality workmanship from people who clearly know Fort Worth HVAC systems.",
      date: "November 2024"
    }
  ];

  const valuesData = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Integrity First",
      description: "We provide honest recommendations and transparent pricing. No hidden fees, no unnecessary upsells - just straightforward advice from your trusted Fort Worth HVAC experts."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Rapid Response",
      description: "24/7 emergency service because we know HVAC emergencies don't wait for business hours. Quick response times throughout the Fort Worth metroplex."
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "Quality Craftsmanship",
      description: "NATE-certified technicians using premium equipment and following manufacturer specifications for installations that last."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Community Focused",
      description: "We're not just another HVAC company - we're your neighbors. Supporting local schools, sports teams, and community events throughout Tarrant County."
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
      {/* ENHANCED HERO SECTION */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h1 className="text-xl font-bold text-white tracking-wide">
                      YOUR FORT WORTH HVAC EXPERTS
                    </h1>
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78caff] to-[#4da9ff]">Fort Worth HVAC</span> Company Serving Our Community Since 2013
                  </h2>
                  
                  <p className="text-xl mb-10 text-white opacity-95 leading-relaxed max-w-lg">
                    Family-owned and operated right here in Fort Worth, we've been keeping homes comfortable through Texas summers and winters with honest service, expert craftsmanship, and genuine care for our neighbors.
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
                        <div className="text-2xl font-bold text-white">100+</div>
                        <div className="text-sm text-white opacity-90">Happy Customers</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/25 p-3 rounded-xl mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-sm text-white opacity-90">Emergency Service</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-white/25 p-3 rounded-xl mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">12</div>
                        <div className="text-sm text-white opacity-90">Years in Business</div>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Schedule Service Today
                    </button>
                    
                    <a href="tel:8178000340" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 border border-white/30 flex items-center justify-center group">
                      <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="">Call (817) 800-0340</span>
                    </a>
                  </div>
                </div>
                
                {/* Right column - visual elements */}
                <div className="lg:w-1/2 relative">
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                    <img 
                      src={teamPhoto} 
                      alt="Fort Worth Heat and Air professional HVAC technicians team" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003049] via-transparent to-transparent opacity-70"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-bold text-[#003049]">LOCAL FORT WORTH COMPANY</span>
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
                  title: "NATE Certified",
                  desc: "Expert Technicians"
                },
                {
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  title: "Fully Insured",
                  desc: "Peace of Mind"
                },
                {
                  icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                  title: "24/7 Emergency",
                  desc: "Always Available"
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "A+ BBB Rating",
                  desc: "Trusted Reputation"
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

      {/* OUR STORY SECTION */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[70%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Fort Worth HVAC Story: Serving Our Community Since 2013
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Fort Worth Heat and Air was founded with a simple mission: to provide honest, reliable HVAC service to our Fort Worth neighbors. As a family-owned and operated business, we understand the importance of trust and relationships in our community.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">Why We're Different</h3>
                <p className="text-gray-700">
                  Unlike corporate chains, we're your neighbors. Our technicians live right here in Tarrant County, our kids go to local schools, and we're invested in the success of our community. This local connection means we treat every home like it's our own and every customer like family.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Experience the Fort Worth Heat and Air Difference!</h3>
                  <p className="mb-6">Join thousands of satisfied Fort Worth homeowners who trust us with their comfort. Call <span className="font-semibold">(817) 800-0340</span> today for honest pricing and expert service.</p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Schedule Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                Our Commitment to Fort Worth
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                We're more than just an HVAC company - we're active members of the Fort Worth community, supporting local schools, sports teams, and community events throughout Tarrant County.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise</h4>
                  <p className="text-gray-700">We understand Fort Worth's unique climate challenges and architectural styles, from historic homes to new constructions.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Community Investment</h4>
                  <p className="text-gray-700">We reinvest in our community through local sponsorships, job creation, and supporting Fort Worth businesses.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Honest Pricing</h4>
                  <p className="text-gray-700">No hidden fees or unnecessary upsells. We provide transparent quotes and stand by our work with strong warranties.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Rapid Response</h4>
                  <p className="text-gray-700">When you have an HVAC emergency in Fort Worth, we're here to help with quick response times and effective solutions.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Core Values
              </h3>
              
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Integrity in Every Job
                  </h4>
                  <p className="mt-2 text-gray-700">We do what's right, not what's easy. If we don't think you need a service, we'll tell you. If we make a mistake, we'll fix it.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Excellence as Standard
                  </h4>
                  <p className="mt-2 text-gray-700">From our NATE-certified technicians to our premium equipment, we maintain the highest standards in everything we do.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Community Partnership
                  </h4>
                  <p className="mt-2 text-gray-700">We're proud to be part of the Fort Worth community and committed to making it a better place to live and work.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Service Areas Throughout North Texas
              </h3>
              <p className="mt-4 text-gray-700">
                We proudly provide comprehensive HVAC services throughout the Fort Worth metroplex and surrounding areas:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  "Fort Worth",
                  "Arlington",
                  "Mansfield",
                  "Keller",
                  "North Richland Hills",
                  "Grapevine",
                  "Euless",
                  "Bedford",
                  "Haltom City",
                  "Burleson",
                  "Benbrook",
                  "Saginaw",
                  "Watauga",
                  "Richland Hills",
                  "White Settlement"
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

              {/* Community Involvement CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Proud Supporters of Fort Worth Community
                </h3>
                <p className="mb-4">
                  We're committed to giving back to the community that has supported us. From local school sponsorships to community events, we're invested in Fort Worth's success.
                </p>
                <a href="tel:8178000340" className="inline-block bg-white text-[#780000] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  SUPPORT LOCAL: (817) 800-0340
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:w-[30%] lg:sticky lg:top-6 self-start">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              The Fort Worth Heat and Air Difference
            </h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              What sets us apart from other HVAC companies in Fort Worth? It's our commitment to these core principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-[#003049] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-4">
            What Our Fort Worth Neighbors Say
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what homeowners throughout the Fort Worth metroplex have to say about their experience with us:
          </p>
          
          {/* Mobile view - stacked vertically */}
          <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
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
              About Fort Worth Heat and Air
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our Fort Worth HVAC company and services.
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
            <p className="text-gray-700 mb-6">Our Fort Worth HVAC experts are ready to help with any questions about our company or services.</p>
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
            Experience the Fort Worth Heat and Air Difference
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied Fort Worth homeowners who trust us for honest, reliable HVAC service from a company that truly cares about our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Schedule Service Online
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
            <span className="text-[#003049] font-medium">Local & Trusted</span>
          </div>
          
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            Your Fort Worth HVAC Experts Are Here
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your HVAC Service With a Company That Cares
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            As your local Fort Worth HVAC company, we're committed to your comfort and satisfaction. Experience the difference of working with neighbors who truly care.
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
                  <p className="text-sm text-gray-600">Call us directly at</p>
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
                  <p className="text-sm text-gray-600">Schedule online</p>
                  <p className="text-md font-medium text-[#003049]">24/7 Emergency Service</p>
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
              Book Online Now
            </button>
            <a href="tel:8178000340" className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

/** Service Form */
const ServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full"
    >
      <h3 className="text-2xl font-bold text-[#003049] mb-6 text-center">Request Service</h3>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
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
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]">
          <option value="">Select service</option>
          <option value="ac-repair">AC Repair</option>
          <option value="heating-repair">Heating Repair</option>
          <option value="maintenance">Maintenance</option>
          <option value="new-installation">New System Installation</option>
          <option value="emergency">Emergency Service</option>
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
          placeholder="Tell us about your HVAC needs"
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
              I consent to receive communications about my service request and promotional offers. Message and data rates may apply.
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2"
      >
        Request Service
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default AboutUs;