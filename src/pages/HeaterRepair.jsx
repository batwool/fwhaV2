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
      answer: "We recommend having your heating system serviced at least once a year, ideally in the fall before cold weather sets in. Regular maintenance helps prevent breakdowns, improves efficiency, and ensures your family stays warm and safe during Texas winters."
    },
    {
      question: "What are the signs that my heater needs repair?",
      answer: "Common signs include cold air blowing from vents, unusual noises (banging, rattling, squealing), strange odors (especially burning smells), reduced airflow, frequent cycling on/off, higher than normal energy bills, and your system struggling to maintain temperature."
    },
    {
      question: "How long does an average heater repair take?",
      answer: "Most common heater repairs can be completed within 2-4 hours. However, more complex issues like heat exchanger replacement or gas valve repairs may take longer, typically 4-8 hours. We'll provide you with a timeframe after diagnosing the problem to get your heat restored quickly."
    },
    {
      question: "What's the average lifespan of a heating system?",
      answer: "A well-maintained heater typically lasts 15-20 years. Regular maintenance, proper installation, and usage patterns all affect lifespan. If your heater is over 15 years old and requiring frequent repairs, it might be more cost-effective to consider replacement with a more efficient model."
    },
    {
      question: "Do you offer emergency heater service after hours?",
      answer: "Yes! We offer 24/7 emergency heater repair service. Texas cold snaps don't keep business hours, and neither do we. Call us anytime at (817) 800-0340 for immediate assistance with your heating emergency. Remember the 2021 Texas freeze - don't risk being without heat!"
    },
    {
      question: "Are your technicians licensed and insured for heater repair?",
      answer: "Absolutely. All our technicians are fully licensed, certified, and insured for all types of heating systems. We carry comprehensive liability insurance and workers' compensation to protect your home and our team. We specialize in furnace repair, heat pumps, and all heating systems common in North Texas."
    }
  ];

  const reviewsData = [
    {
      name: "Sarah J.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "My furnace went out during a cold snap right before the holidays. Fort Worth Heat and Air responded within an hour and had it fixed quickly. Professional and fair pricing. Highly recommend!",
      date: "December 2023"
    },
    {
      name: "Michael T.",
      location: "Arlington, TX",
      rating: 5,
      review: "These folks are the real deal. Honest assessment of my aging furnace, didn't try to upsell me on anything I didn't need. Fixed my ignition issue at a reasonable price and got our heat back on.",
      date: "January 2024"
    },
    {
      name: "Jennifer L.",
      location: "North Richland Hills, TX",
      rating: 5,
      review: "24/7 service is no joke. Our heater died at 10pm when temperatures dropped below freezing and they had someone here by 11pm. Amazing service when you need it most!",
      date: "February 2023"
    },
    {
      name: "Robert K.",
      location: "Mansfield, TX",
      rating: 5,
      review: "I've used them for both heater repair and annual maintenance. Always punctual, professional, and thorough. My go-to heating company in the area, especially after seeing what happened in 2021.",
      date: "November 2023"
    },
    {
      name: "Amanda W.",
      location: "Euless, TX",
      rating: 5,
      review: "Quick response time and excellent service when our heat went out. They explained everything clearly and didn't charge an arm and a leg. Will definitely use them again for all our heating needs.",
      date: "October 2023"
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
                Heater Repair For Fort Worth Homes
              </h1>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Heater Repair Experts Serving Fort Worth, TX
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
                24-Hour Emergency Heating Service
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

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-white relative">
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT COLUMN: Long content */}
            <div className="lg:w-[65%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Professional Heater Repair Services to Keep Your Family Warm
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                For dependable heater repair service in Fort Worth, TX, call Fort Worth Heat and Air. Proudly serving Texas homeowners for over a decade, keeping families warm through cold Texas winters.
              </p>
              
              <p className="mt-4 text-lg text-gray-600">
                <strong>Remember the 2021 Texas Freeze?</strong> Millions of Texans experienced dangerous conditions when heating systems failed during unprecedented cold temperatures. Families suffered through freezing homes, burst pipes, and unsafe conditions. Don't let that happen to you this winter.
              </p>

              <p className="mt-4 text-lg text-gray-600">
                Texas winters can be unpredictable, and a broken heater can make your home dangerously cold. Space heaters only do so much when the temperature drops below freezing. That's why having a trusted, local heater repair team matters. At Fort Worth Heat and Air, we know how to handle Texas winter weather, and we'll get your heating system running so your family stays warm and safe all season long.
              </p>

              <p className="mt-4 text-lg text-gray-600">
                Fort Worth Heat and Air has been proudly serving Fort Worth and nearby communities for over 10 years. We may not be the biggest name in town, but our customers consistently rate us 5 stars for reliable, professional heating services. We focus on quality and care, making sure every repair and installation keeps your home comfortable and safe. If you want dependable service from a team that truly cares about keeping your family warm, give us a call today!
              </p>

              {/* SCHEDULE SERVICE BOX */}
              <div className="my-8 max-w-5xl">
                <div className="p-10 bg-[#003049] text-white rounded-xl text-left">
                  <h3 className="text-2xl font-bold mb-2">Schedule Your Heater Repair Service Today!</h3>
                  <p className="mb-4">Don't wait for the next cold snap! Ensure your heating system is ready for winter. Schedule your appointment online, or give us a call at <span className="font-semibold">(817) 800-0340</span>.</p>
                  <button className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-6 rounded-md transition-colors">
                    Schedule Service
                  </button>
                </div>
                <div className="h-1 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                24/7 Emergency Heater Repair Service
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We understand that your family's warmth and safety are non-negotiable. When your heater fails during cold weather, it creates dangerous conditions. That's why Fort Worth Heat and Air provides on-call technicians and customer support 24/7 to ensure your heating system is repaired promptly, no matter when disaster strikes.
              </p>

              <h3 className="mt-8 text-2xl font-semibold">
                Fort Worth Heat and Air proudly serves Fort Worth and surrounding areas, including:
              </h3>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-1">
                <li>Fort Worth, TX</li>
                <li>Arlington, TX</li>
                <li>Grand Prairie, TX</li>
                <li>Flower Mound, TX</li>
                <li>Mansfield, TX</li>
                <li>North Richland Hills, TX</li>
                <li>Euless, TX</li>
                <li>Burleson, TX</li>
                <li>Grapevine, TX</li>
                <li>Bedford, TX</li>
                <li>Haltom City, TX</li>
              </ul>

              <p className="mt-6 text-lg text-gray-600">
                Need immediate heating service? Call us at <span className="font-semibold">(817) 800-0340</span> or submit an online request. Fort Worth Heat and Air is here to keep your family warm!
              </p>

              <h3 className="mt-10 text-2xl font-semibold">
                Why does my heater need repair?
              </h3>
              <p className="mt-4 text-gray-600">
                Even with proper maintenance, heaters will eventually need repairs. Parts wear over time, and issues can arise due to age, dust accumulation, electrical problems, gas line issues, or faulty installation. Regular maintenance is your best defense against unexpected breakdowns during cold weather.
              </p>
              <p className="mt-4 text-gray-600">
                Some heating problems are simple, others more complex. Our certified technicians can evaluate your system and provide a clear solution to restore optimal heating and keep your home comfortable.
              </p>

              <h3 className="mt-10 text-2xl font-semibold">How soon can we get to you?</h3>
              <p className="mt-4 text-gray-600">
                No matter the time or temperature, Fort Worth Heat and Air is ready to respond. From early mornings to late nights, call us at <span className="font-semibold">(817) 800-0340</span> to dispatch a heating technician to your home quickly. We prioritize emergency calls during cold weather events.
              </p>
              <p className="mt-4 text-gray-600">
                We aim to fix most heating issues in one visit, with fully stocked trucks and certified techs prepared to restore your home's warmth and safety.
              </p>

              {/* COUPON */}
              <div className="mt-8 p-6 bg-white border-4 border-dotted border-[#780000] text-center w-full max-w-5xl mx-auto rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-[#780000] mb-2">
                  We Have Financing Options!
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Keep your family warm this winter. Call for details. 
                </p>
                <a href="tel:8178000340" className="inline-block bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-6 rounded-md transition-colors">
                  KEEP YOUR FAMILY WARM - CALL NOW
                </a>
              </div>

              <h3 className="mt-10 text-2xl font-semibold">
                Common Heater Repairs
              </h3>
              <p className="mt-4 text-gray-600">
                Some of the most frequent heating issues we handle include:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>
                  <strong>Ignition Problems:</strong> Pilot light or electronic ignition failures prevent your heater from starting. We diagnose and repair ignition systems quickly.
                </li>
                <li>
                  <strong>Thermostat Malfunctions:</strong> Your thermostat controls your heating system. When it fails, your heater won't turn on or maintain temperature properly.
                </li>
                <li>
                  <strong>Blower Motor Issues:</strong> The blower circulates warm air throughout your home. Motor or capacitor problems can reduce airflow or stop heating entirely.
                </li>
                <li>
                  <strong>Heat Exchanger Cracks:</strong> Dangerous cracks can develop in heat exchangers, potentially leaking carbon monoxide into your home. We perform safety inspections and replacements.
                </li>
                <li>
                  <strong>Gas Valve Problems:</strong> For gas furnaces, faulty gas valves prevent proper fuel delivery, leaving you without heat.
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-semibold">The Best Heater Repair in Fort Worth, TX</h3>
              <p className="mt-4 text-gray-600">
                Fort Worth Heat and Air has completed countless heating service calls throughout North Texas. When you work with us, you can expect:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Friendly, professional customer service focused on your comfort</li>
                <li>Certified and trained heating specialists</li>
                <li>Fully stocked service vehicles with common heating parts</li>
                <li>24/7 emergency heating service, year-round</li>
                <li>100% satisfaction guaranteed on all repairs</li>
                <li>Safety-first approach to all heating system work</li>
              </ul>
              <p className="mt-6 text-gray-600 font-semibold">
                Don't risk being without heat this winter! Call Fort Worth Heat and Air at (817) 800-0340 to get your heating system running reliably and keep your family warm.
              </p>
            </div>

            {/* RIGHT COLUMN: Fixed position form */}
            <div className="lg:w-[35%] lg:sticky lg:top-6 self-start">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-[#003049] py-12">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-8">
            Customer Reviews
          </h2>
          
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array(Math.ceil(reviewsData.length / 3)).fill(0).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * 3)}
                  className={`w-3 h-3 rounded-full ${Math.floor(currentReview / 3) === index ? 'bg-white' : 'bg-gray-400'}`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto">
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl text-center mb-8">
            Frequently Asked Questions About Heater Repair
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-[#003049]"
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
    </div>
  );
};

/** Service Form */
const ServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#003049] p-6 rounded-lg shadow-md w-full"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Request Heating Service</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">
          Full Name <span className="text-red-300">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">
          Email Address <span className="text-red-300">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">
          Phone Number <span className="text-red-300">*</span>
        </label>
        <input
          type="tel"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">
          How Can We Help? <span className="text-red-300">*</span>
        </label>
        <textarea
          rows={4}
          maxLength={600}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your heating issue... (0 of 600 max characters)"
        />
      </div>

      <p className="text-xs text-gray-300 mb-4">
        By clicking "Send Message", I am providing express written consent to
        receive autodialed and pre-recorded calls, texts, and SMS/MMS with
        marketing communications from Fort Worth Heat and Air regarding home
        services at the phone number provided above, even if the number is on a
        corporate, state, or national Do Not Call list. Consent is not a
        condition to purchase services or products.
      </p>

      <button
        type="submit"
        className="w-full bg-white text-[#003049] py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default HeaterRepair;