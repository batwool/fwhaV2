import React, { useState } from "react";

const HeaterRepair = () => {
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
      question: "How often should I have my heating system serviced?",
      answer:
        "We recommend an annual tune‑up every fall before the heating season begins. In North Texas, where heaters sit idle for months, a preseason check prevents surprise breakdowns during cold snaps and keeps your system running safely and efficiently.",
    },
    {
      question: "What are the signs that my heater needs repair?",
      answer:
        "Look for cold air blowing from vents, unusual noises (banging, rattling, squealing), burning smells, frequent cycling on/off, weak airflow, or a sudden spike in your energy bills. If your system struggles to maintain the set temperature, call us immediately.",
    },
    {
      question: "How long does an average heater repair take?",
      answer:
        "Most common repairs—like ignitor, flame sensor, or thermostat fixes—are completed in 1–2 hours. More involved jobs, such as heat exchanger or gas valve replacement, may take 3–6 hours. We’ll give you a clear time estimate after our diagnosis.",
    },
    {
      question: "What is the average lifespan of a heating system?",
      answer:
        "With proper maintenance, a furnace or heat pump typically lasts 15–20 years. Regular tune‑ups and prompt repairs help you get the most years from your investment. If your unit is over 15 years old and needs major work, we’ll help you weigh repair vs. replacement.",
    },
    {
      question: "Do you offer 24/7 emergency heater repair?",
      answer:
        "Yes—Fort Worth Heat and Air provides round‑the‑clock emergency service. When a cold front hits and your heat goes out, call (817) 800‑0340. We’ll dispatch a technician quickly to restore your warmth and safety.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer:
        "Absolutely. All our techs are NATE‑certified, fully licensed, and insured. We carry liability insurance and workers’ comp to protect your home and our team. We specialize in furnaces, heat pumps, and all heating systems common in North Texas.",
    },
    // HIGH‑VALUE FAQS ADDED
    {
      question: "What are the most common heater problems in Fort Worth?",
      answer:
        "In North Texas, we frequently see dirty flame sensors, failed ignitors, tripped limit switches, and clogged filters from dust. Older gas valves and heat exchangers can also fail after extended idle periods. Our techs carry common parts to fix most issues on the spot.",
    },
    {
      question: "How much does heater repair cost in Fort Worth, TX?",
      answer:
        "Minor repairs typically range from $150–$400, while major component replacements (blower motors, gas valves, heat exchangers) can run $600–$1,500+. We provide upfront, transparent pricing before any work begins, and we offer financing options for larger repairs.",
    },
    {
      question: "Is a cracked heat exchanger dangerous?",
      answer:
        "Yes, it’s extremely dangerous. A cracked heat exchanger can leak carbon monoxide into your home. If you smell a strong odor, notice soot around the furnace, or experience flu‑like symptoms, leave the house immediately and call us for an emergency inspection.",
    },
    {
      question: "Why did my heater work fine last winter but won’t start now?",
      answer:
        "Sitting idle for months can cause dust buildup, spider webs in burner tubes, stuck gas valves, or electrical contact corrosion. A preseason tune‑up catches these issues before you need heat. Our fall maintenance package is designed exactly for this.",
    },
    {
      question: "Can you repair all types of heating systems?",
      answer:
        "Yes—we service natural gas furnaces, electric furnaces, heat pumps, and dual‑fuel systems. Our techs are factory‑trained on major brands including Trane, Carrier, Lennox, and Rheem, with specific experience handling the start‑stop demands of Texas winters.",
    },
  ];

  const reviewsData = [
    {
      name: "Sarah J.",
      location: "Fort Worth, TX",
      rating: 5,
      review:
        "My furnace went out during a cold snap right before the holidays. Fort Worth Heat and Air responded within an hour and had it fixed quickly. Professional and fair pricing. Highly recommend!",
      date: "December 2023",
    },
    {
      name: "Michael T.",
      location: "Arlington, TX",
      rating: 5,
      review:
        "These folks are the real deal. Honest assessment of my aging furnace, didn't try to upsell me on anything I didn't need. Fixed my ignition issue at a reasonable price and got our heat back on.",
      date: "January 2024",
    },
    {
      name: "Jennifer L.",
      location: "North Richland Hills, TX",
      rating: 5,
      review:
        "24/7 service is no joke. Our heater died at 10pm when temperatures dropped below freezing and they had someone here by 11pm. Amazing service when you need it most!",
      date: "February 2023",
    },
    {
      name: "Robert K.",
      location: "Mansfield, TX",
      rating: 5,
      review:
        "I've used them for both heater repair and annual maintenance. Always punctual, professional, and thorough. My go‑to heating company in the area, especially after seeing what happened in 2021.",
      date: "November 2023",
    },
    {
      name: "Amanda W.",
      location: "Euless, TX",
      rating: 5,
      review:
        "Quick response time and excellent service when our heat went out. They explained everything clearly and didn't charge an arm and a leg. Will definitely use them again for all our heating needs.",
      date: "October 2023",
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
                HEATER REPAIR FORT WORTH, TX
              </h1>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Fast, Reliable Heater Repair in Fort Worth & North Texas
            </h2>
            <p className="text-xl mb-6 max-w-2xl">
              When the temperature drops, your family’s comfort and safety can’t wait. Our certified techs are available 24/7 for emergency furnace and heat pump repair.
            </p>

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
                  <p className="text-white mt-1">Don't let your family suffer through another winter without reliable heat. Get your system inspected and repaired before the next cold snap.</p>
                </div>
              </div>
            </div>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                type="button"
                onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                className="bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Schedule Heater Repair
              </button>
              <a
                href="tel:8178000340"
                className="bg-white text-[#003049] font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-100"
              >
                Call (817) 800-0340
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-gray-50 relative">
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[70%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Professional Heater Repair Services in Fort Worth, TX
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                For fast, reliable heater repair, Fort Worth Heat and Air is the name your neighbors trust. We’ve kept North Texas families warm for over a decade, responding 24/7 to furnace, heat pump, and gas heating emergencies.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">Why Texas Winters Demand a Ready Heating System</h3>
                <p className="text-gray-700">
                  Long idle periods, dust accumulation, and sudden cold snaps create unique stress on heating equipment. Our Fort Worth‑based technicians know exactly what to look for and carry the parts to fix most problems on the spot.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your Heater Repair Today!</h3>
                  <p className="mb-6">
                    Don’t wait for the next freeze. Call <span className="font-semibold">(817) 800‑0340</span> or book online for same‑day emergency service.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
                    className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                  >
                    Schedule Repair Now
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                24/7 Emergency Heater Repair
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                When your heat fails during a cold night, minutes matter. Our on‑call technicians are ready to respond anytime, day or night, to restore warmth and safety to your home.
              </p>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Common Heater Repairs We Handle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Ignition & Pilot Problems</h4>
                  <p className="text-gray-700">Failed ignitors, dirty flame sensors, or pilot light issues that prevent the burner from lighting.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Blower Motor & Airflow</h4>
                  <p className="text-gray-700">Weak or no airflow due to failed capacitors, worn belts, or motor failure – we restore proper circulation.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Thermostat & Controls</h4>
                  <p className="text-gray-700">Miscalibrated or faulty thermostats, control boards, and safety switches that keep the system from operating.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Heat Exchanger & Gas Valve</h4>
                  <p className="text-gray-700">Cracked heat exchangers pose a serious CO risk; faulty gas valves prevent fuel delivery. We perform thorough safety checks.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                What to Expect From Our Repair Service
              </h3>
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fast, Same‑Day Service
                  </h4>
                  <p className="mt-2 text-gray-700">We prioritize heating emergencies and aim to have a tech at your door within hours.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Upfront, Transparent Pricing
                  </h4>
                  <p className="mt-2 text-gray-700">You’ll get a clear quote before any work begins—no surprises, no hidden fees.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Safety‑First Approach
                  </h4>
                  <p className="mt-2 text-gray-700">Every repair includes a comprehensive safety check—CO testing, gas leak detection, and system verification.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Heater Repair Service Areas
              </h3>
              <p className="mt-4 text-gray-700">
                Fort Worth Heat and Air proudly serves all of Tarrant County and surrounding areas:
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
                  "Flower Mound",
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

              {/* Financing CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">We Have Financing Options</h3>
                <p className="mb-4">
                  Manage repair costs with convenient monthly payments. Ask about current plans and quick approvals.
                </p>
                <a
                  href="tel:8178000340"
                  className="inline-block bg-white text-[#780000] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors"
                >
                  CALL FOR FINANCING: (817) 800-0340
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
            Here’s what your neighbors say about our heater repair service.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

      {/* FAQ SECTION – Structured Data for AI Search */}
      <section
        className="w-full bg-white py-16 relative"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003049] to-[#780000] opacity-30"></div>
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-[#003049] font-medium">Heater Repair FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-4">
              Your Heater Repair Questions, Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Straightforward answers to the most common heating concerns in Fort Worth.
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
            <p className="text-gray-700 mb-6">Our heating experts are ready to help with any furnace or heat pump concern.</p>
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
            Don’t Wait Until the Next Freeze
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Schedule your heater repair or preseason tune‑up now and stay warm when it matters most.
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

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-white py-16 relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#003049] to-transparent opacity-20"></div>
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
          <div className="inline-flex items-center justify-center mb-4 bg-blue-50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span className="text-[#003049] font-medium">24/7 Emergency Service</span>
          </div>
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We’re Here When You Need Heat
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your Heater Repair Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            Our certified technicians are ready to restore warmth to your home—day or night, weekends and holidays included.
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
                  <p className="text-sm text-gray-600">Call us directly</p>
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
                  <p className="text-md font-medium text-[#003049]">Immediate availability</p>
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
    </div>
  );
};

/** RIGHT COLUMN CTA PANEL – Heater Repair Focused */
const RightCTAPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
          <svg className="w-8 h-8 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#003049] mb-2">Heater Not Working?</h3>
        <p className="text-gray-600 mb-6">
          We’ll get your heat back on fast. Same‑day appointments and 24/7 emergency service available.
        </p>

        <button
          type="button"
          onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
          className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors mb-3 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule Repair
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
          Emergency service available now.
        </p>
      </div>
    </div>
  );
};

export default HeaterRepair;