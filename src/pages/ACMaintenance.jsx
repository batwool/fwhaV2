import React, { useState } from "react";
import checkingAC from "../assets/checkingac.jpg";

const ACMaintenance = () => {
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
      question: "How often should I schedule AC maintenance in Fort Worth's climate?",
      answer:
        "With Fort Worth's long, hot summers, we recommend bi‑annual maintenance – once in spring before the cooling season and once in fall before heating. This keeps your system running reliably when you need it most.",
    },
    {
      question: "What does a comprehensive AC maintenance visit include?",
      answer:
        "Our 20‑point tune‑up covers: cleaning condenser and evaporator coils, checking refrigerant charge, testing electrical components, calibrating the thermostat, lubricating moving parts, inspecting ductwork, clearing condensate drains, and verifying system safety controls. We leave your unit in peak condition.",
    },
    {
      question: "Can regular maintenance lower my cooling costs?",
      answer:
        "Yes. A well‑maintained system can operate up to 30% more efficiently. Most Fort Worth homeowners notice a 15–25% reduction in summer energy bills after starting a consistent maintenance plan.",
    },
    {
      question: "How does maintenance extend my AC system's lifespan?",
      answer:
        "Preventive care catches minor issues before they cause major damage. Systems that receive regular professional tune‑ups typically last 5–7 years longer than neglected units, protecting your investment in our harsh Texas climate.",
    },
    {
      question: "Do you offer maintenance plans or service agreements?",
      answer:
        "Absolutely. Our Comfort Maintenance Plan includes annual tune‑ups, priority scheduling, discounts on repairs, and no overtime charges. It's designed to give Fort Worth homeowners peace of mind and lower total ownership costs.",
    },
    {
      question: "Will maintenance keep my manufacturer's warranty valid?",
      answer:
        "Many manufacturers require proof of annual professional maintenance to honor warranty claims. Our detailed service records ensure your warranty stays intact and can save you thousands on future repairs.",
    },
    // Added High‑Value Maintenance FAQs
    {
      question: "What is the cost of AC maintenance in Fort Worth?",
      answer:
        "A single tune‑up typically ranges from $89 to $179, depending on the scope. Our maintenance plan members enjoy discounted rates and additional benefits. We provide upfront pricing before any work begins.",
    },
    {
      question: "Can I do my own AC maintenance, or should I hire a pro?",
      answer:
        "Homeowners can handle simple tasks like changing filters and keeping the outdoor unit clear of debris. However, professional technicians have the tools and training to safely check refrigerant levels, test electrical components, and spot hidden issues that DIY efforts often miss.",
    },
    {
      question: "Why is spring AC maintenance especially important in Texas?",
      answer:
        "Spring is the ideal time to prepare your system for the brutal Texas summer. A pre‑season tune‑up ensures your AC is ready for months of near‑continuous operation, reducing the risk of a mid‑July breakdown when temperatures soar above 100°F.",
    },
    {
      question: "How quickly can you schedule a maintenance appointment in Fort Worth?",
      answer:
        "We offer same‑week and often next‑day appointments for routine maintenance. Plan members receive priority scheduling. Call (817) 800‑0340 or book online for fastest service.",
    },
    {
      question: "Does regular maintenance improve indoor air quality?",
      answer:
        "Definitely. Cleaning coils, replacing worn filters, and clearing drain lines reduces the circulation of dust, mold spores, and allergens throughout your home – a big benefit for allergy sufferers in North Texas.",
    },
  ];

  const reviewsData = [
    {
      name: "Robert D.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "Shawn did a thorough tune‑up and caught a failing capacitor before it caused a breakdown. He explained everything clearly and had my system running better than ever. I'm signing up for the maintenance plan!",
      date: "August 2025",
    },
    {
      name: "Jason M.",
      location: "Arlington, TX",
      rating: 5,
      review:
        "This company goes above and beyond. Their maintenance program has kept my old unit running reliably through some brutal summers. When it finally needed replacement, they made the transition seamless.",
      date: "July 2024",
    },
    {
      name: "Debbie N.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "Very pleased with the maintenance service. The technician arrived on time, was professional, and took the time to explain what he was doing. My AC has been cooling perfectly ever since.",
      date: "May 2024",
    },
    {
      name: "Bryan W.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "Canon performed a maintenance check and found a small refrigerant leak. He fixed it same day and my system is now running efficiently again. Great service, fair pricing.",
      date: "April 2025",
    },
    {
      name: "Terry W.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "I scheduled a maintenance appointment after years of neglect. The difference in performance was night and day. The owner even followed up to make sure everything was perfect. Highly recommend.",
      date: "June 2025",
    },
  ];

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
      <section className="relative bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-6"
          style={{ backgroundImage: `url(${checkingAC})` }}
        />
        <div className="absolute inset-0 bg-[#001f33] opacity-70" />
        <div className="relative px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white px-4 py-2 mb-6 rounded-lg shadow-md">
              <h1 className="text-lg font-bold text-[#003049]">
                AC MAINTENANCE FORT WORTH, TX
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Preventive AC Maintenance That Saves Money & Extends System Life
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stay cool through every Texas heatwave with proactive tune‑ups tailored to Fort Worth's extreme climate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold">Bi‑Annual Tune‑Ups</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">NATE‑Certified Techs</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <span className="font-semibold">Maintenance Plans Available</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">Warranty Protection</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                className="bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Schedule Maintenance Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-gray-50 relative">
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:w-[70%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Maximize Your AC Performance With Professional Maintenance
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                In Fort Worth's punishing climate, your AC works harder than almost anywhere else. Regular professional maintenance isn't a luxury – it's the smartest way to protect your comfort and your wallet.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">Why Texas Homes Need Specialized AC Care</h3>
                <p className="text-gray-700">
                  The combination of extreme heat, dust, and long run‑times creates unique wear on motors, coils, and controls. Our Fort Worth‑focused maintenance program targets these stress points to keep your system running like new.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your AC Tune‑Up Today!</h3>
                  <p className="mb-6">
                    Book your pre‑season maintenance now or call <span className="font-semibold">(817) 800-0340</span>. Same‑week appointments available.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Book Maintenance Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                The Fort Worth Heat and Air Maintenance Difference
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                While many companies offer a quick filter change and a glance at the unit, our comprehensive program goes deep – protecting your investment and ensuring reliable cooling all season.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Precision Performance Tuning</h4>
                  <p className="text-gray-700">We calibrate refrigerant charge, airflow, and electrical draw to manufacturer specs for maximum efficiency.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Component Longevity Protection</h4>
                  <p className="text-gray-700">Critical parts are cleaned, lubricated, and adjusted to prevent premature wear and costly breakdowns.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Efficiency Optimization</h4>
                  <p className="text-gray-700">We maximize your system's efficiency, directly lowering your cooling bills during our long, hot summers.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Problem Prevention</h4>
                  <p className="text-gray-700">Our techs catch small issues – loose connections, early refrigerant loss – before they become emergencies.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                What Regular Maintenance Means for You
              </h3>
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Significant Energy Savings
                  </h4>
                  <p className="mt-2 text-gray-700">A tuned system runs up to 30% more efficiently – that's real money back in your pocket each summer.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Extended Equipment Lifespan
                  </h4>
                  <p className="mt-2 text-gray-700">Routine care can add 5‑7 years to your system's life, delaying the significant cost of replacement.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Healthier Indoor Air
                  </h4>
                  <p className="mt-2 text-gray-700">Clean coils and clear drains mean less dust, mold, and allergens circulating in your home.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Maintenance Service Areas
              </h3>
              <p className="mt-4 text-gray-700">
                Fort Worth Heat and Air proudly provides comprehensive AC maintenance throughout North Texas, including:
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
                ].map((city) => (
                  <div key={city} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              {/* Maintenance Plan / Financing CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Join Our Comfort Maintenance Plan</h3>
                <p className="mb-4">
                  Enjoy priority scheduling, discounted repairs, and annual tune‑ups – all for one low monthly price. Keep your system in peak condition without surprise costs.
                </p>
                <a
                  href="tel:8178000340"
                  className="inline-block bg-white text-[#780000] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                >
                  LEARN MORE: (817) 800-0340
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN – CTA Panel */}
            <div className="lg:w-[30%] lg:sticky lg:top-6 self-start">
              <RightCTAPanel />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-[#003049] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-4">
            Trusted by Fort Worth Homeowners
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            See why your neighbors trust us for ongoing AC maintenance.
          </p>

          {/* Mobile */}
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
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-sm text-gray-700 italic">"{review.review}"</p>
              </div>
            ))}
          </div>

          {/* Desktop Carousel */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * (100 / 3)}%)` }}
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
                      <div className="flex mb-3">{renderStars(review.rating)}</div>
                      <p className="text-sm text-gray-700 italic">"{review.review}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {Array(Math.ceil(reviewsData.length / 3))
                .fill(0)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index * 3)}
                    className={`w-3 h-3 rounded-full ${
                      Math.floor(currentReview / 3) === index ? "bg-white" : "bg-[#00283e]"
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION – Structured Data Added */}
      <section
        className="w-full bg-white py-16 relative"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
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
              <span className="text-[#003049] font-medium">Maintenance FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-4">
              Your AC Maintenance Questions, Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about keeping your system in top shape.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full px-6 py-5 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-gradient-to-r from-[#003049] to-[#00283e] hover:from-[#00283e] hover:to-[#001f33] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4" itemProp="name">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-5 pt-4 text-gray-700 transition-all duration-300 ease-in-out bg-blue-50 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-[#003049] flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p itemProp="text">{faq.answer}</p>
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
            <p className="text-gray-700 mb-6">Our AC experts are ready to help you create the perfect maintenance plan.</p>
            <a
              href="tel:8178000340"
              className="inline-block bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors transform hover:scale-105"
            >
              Call: (817) 800-0340
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-[#003049] to-[#00283e] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Protect Your AC Investment?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for a breakdown. Schedule your maintenance service today and stay cool with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Schedule Online
            </button>
            <a
              href="tel:8178000340"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003049] transition-colors transform hover:scale-105"
            >
              Call: (817) 800-0340
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION – decorative circle removed */}
      <section className="w-full bg-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#003049] to-transparent opacity-20"></div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium">Maintenance Plan Available</span>
          </div>
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            Keep Your System Running Smoothly
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Maintenance Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Regular care prevents breakdowns, lowers bills, and extends your system's life. Let our certified team give you the peace of mind you deserve.
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
                  <p className="text-sm text-gray-600">Call us</p>
                  <a href="tel:8178000340" className="text-xl font-bold text-[#003049] hover:text-[#780000] transition-colors">
                    (817) 800-0340
                  </a>
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
                  <p className="text-md font-medium text-[#003049]">Same‑week availability</p>
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
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Online Now
            </button>
            <a
              href="tel:8178000340"
              className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
      {/* Cityscape completely removed */}
    </div>
  );
};

/** RIGHT COLUMN CTA PANEL */
const RightCTAPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
          <svg className="w-8 h-8 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#003049] mb-2">Keep Your AC Running Like New</h3>
        <p className="text-gray-600 mb-6">
          Same‑week tune‑ups. Join our maintenance plan for priority service & discounts.
        </p>

        <button
          type="button"
          onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
          className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors mb-3 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule Tune‑Up
        </button>

        <a
          href="tel:8178000340"
          className="w-full bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call (817) 800-0340
        </a>

        <p className="mt-4 text-xs text-gray-500">
          Ask about our Comfort Maintenance Plan.
        </p>
      </div>
    </div>
  );
};

export default ACMaintenance;