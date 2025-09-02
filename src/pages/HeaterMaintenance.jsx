import React, { useState } from "react";

const ACReplacement = () => {
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
      answer: "With Fort Worth's extreme summer temperatures, we recommend bi-annual maintenance - once in spring before cooling season and once in fall before heating season. This ensures optimal performance year-round."
    },
    {
      question: "What does your comprehensive AC maintenance include?",
      answer: "Our 26-point inspection covers cleaning condenser coils, checking refrigerant levels, testing electrical components, calibrating thermostats, lubricating moving parts, inspecting ductwork, cleaning drain lines, and verifying system safety controls."
    },
    {
      question: "Can regular maintenance reduce my energy bills?",
      answer: "Absolutely. Well-maintained systems operate up to 30% more efficiently. Our clients typically see a 15-25% reduction in cooling costs after implementing our maintenance program, especially important during Texas summers."
    },
    {
      question: "How does maintenance extend my AC system's lifespan?",
      answer: "Regular care prevents minor issues from becoming major problems. Systems receiving professional maintenance typically last 5-7 years longer than neglected units, protecting your investment in our harsh climate."
    },
    {
      question: "Do you offer emergency services if something goes wrong?",
      answer: "Yes, we provide 24/7 emergency support. While maintenance drastically reduces breakdowns, we're always available if urgent issues arise, especially during Fort Worth's extreme weather conditions."
    },
    {
      question: "Are your technicians certified for my specific AC system?",
      answer: "All our technicians are NATE-certified and receive ongoing training on all major brands. We're specially trained in dealing with the unique challenges that North Texas heat places on HVAC systems."
    }
  ];

  const reviewsData = [
    {
      name: "James W.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "After Fort Worth Heat and Air's maintenance service, my 12-year-old AC runs like new. My energy bill dropped significantly during this brutal summer. Highly recommend their thorough approach!",
      date: "August 2023"
    },
    {
      name: "Maria L.",
      location: "Arlington, TX",
      rating: 5,
      review: "Their maintenance plan caught a refrigerant leak before it became catastrophic. The technician was knowledgeable and didn't try to upsell unnecessary services. Honest service is hard to find!",
      date: "July 2023"
    },
    {
      name: "Thomas R.",
      location: "North Richland Hills",
      rating: 5,
      review: "I've used three different companies over the years, but none were as detailed as Fort Worth Heat and Air. Their maintenance checklist is comprehensive and they actually explain what they're doing.",
      date: "June 2023"
    },
    {
      name: "Susan P.",
      location: "Mansfield, TX",
      rating: 5,
      review: "The technician arrived on time, was professional, and took the time to show me the before/after of my dirty coils. My AC is cooling better than it has in years. Worth every penny!",
      date: "May 2023"
    },
    {
      name: "Robert K.",
      location: "Euless, TX",
      rating: 5,
      review: "Signed up for their annual maintenance plan and couldn't be happier. They remember my system's history and know exactly what to check. My AC has never broken down unexpectedly.",
      date: "April 2023"
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="relative px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white px-4 py-2 mb-6 rounded-lg shadow-md">
              <h1 className="text-lg font-bold text-blue-800">
                AC MAINTENANCE FORT WORTH, TX
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Expert AC Maintenance Services in Fort Worth, Texas
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Keep your cooling system running efficiently through the hottest Texas summers with our comprehensive maintenance plans
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
              <div className="flex items-center gap-4 p-4 bg-blue-800 bg-opacity-50 rounded-lg">
                <div className="bg-blue-700 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold">Prompt Service</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-800 bg-opacity-50 rounded-lg">
                <div className="bg-blue-700 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">Certified Technicians</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-800 bg-opacity-50 rounded-lg">
                <div className="bg-blue-700 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <span className="font-semibold">24/7 Emergency Support</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-800 bg-opacity-50 rounded-lg">
                <div className="bg-blue-700 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">A+ BBB Rating</span>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Schedule Maintenance Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-gray-50 relative">
        <div className="relative px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT COLUMN: Content */}
            <div className="lg:w-[65%]">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Maximize Your AC Performance With Professional Maintenance
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                In Fort Worth's extreme climate, your air conditioning system works harder than almost anywhere else in the country. Regular professional maintenance isn't just recommended—it's essential for keeping your home comfortable and your energy bills manageable.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Texas Homes Need Specialized AC Care</h3>
                <p className="text-gray-700">
                  The combination of intense heat, dust, and long operating seasons places extraordinary demands on cooling systems. Our Fort Worth-specific maintenance program addresses these unique challenges with targeted services designed to extend equipment life and maintain peak efficiency.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your AC Tune-Up Today!</h3>
                  <p className="mb-6">Beat the heat before it arrives. Schedule your pre-season maintenance now or call us at <span className="font-semibold">(817) 800-0340</span>.</p>
                  <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                    Book Maintenance Service
                  </button>
                </div>
                <div className="h-2 w-full bg-red-600 rounded-full mt-8"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
                The Fort Worth Heat and Air Maintenance Difference
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                While many companies offer basic filter changes and visual inspections, our comprehensive 26-point maintenance program goes much further to protect your investment and ensure reliable cooling all season long.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Precision Performance Tuning</h4>
                  <p className="text-gray-700">We calibrate your system to manufacturer specifications, ensuring optimal airflow, refrigerant charge, and electrical performance.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Component Longevity Protection</h4>
                  <p className="text-gray-700">Critical components are cleaned, lubricated, and adjusted to prevent premature wear and extend system life.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Efficiency Optimization</h4>
                  <p className="text-gray-700">We maximize your system's efficiency, reducing energy consumption while maintaining superior comfort levels.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Problem Prevention</h4>
                  <p className="text-gray-700">Our technicians identify and address small issues before they become costly repairs or complete system failures.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Comprehensive Maintenance Benefits for Fort Worth Homeowners
              </h3>
              
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-blue-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Significant Energy Savings
                  </h4>
                  <p className="mt-2 text-gray-700">A well-maintained system operates up to 30% more efficiently, directly reducing your cooling costs during our long, hot summers.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-blue-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Extended Equipment Lifespan
                  </h4>
                  <p className="mt-2 text-gray-700">Regular maintenance can add 5-7 years to your system's life, delaying the substantial cost of premature replacement.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-blue-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved Indoor Air Quality
                  </h4>
                  <p className="mt-2 text-gray-700">Clean components mean cleaner air circulating through your home, reducing allergens and improving respiratory health.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our Maintenance Service Areas in North Texas
              </h3>
              <p className="mt-4 text-gray-700">
                Fort Worth Heat and Air proudly provides comprehensive AC maintenance services throughout the region, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {["Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "North Richland Hills", "Euless", "Bedford", "Grapevine", "Haltom City", "Burleson", "Benbrook", "Saginaw"].map((city) => (
                  <div key={city} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-700 to-red-800 text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  $50 Off Your First Maintenance Service
                </h3>
                <p className="mb-4">
                  New customers save on our comprehensive 26-point AC tune-up. Limited time offer.
                </p>
                <a href="tel:8178000340" className="inline-block bg-white text-red-700 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  CALL TO REDEEM: (817) 800-0340
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:w-[35%] lg:sticky lg:top-6 self-start">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="w-full bg-blue-800 py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-4">
            Trusted by Fort Worth Homeowners
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our maintenance customers have to say:
          </p>
          
          {/* Mobile view - stacked vertically */}
          <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-md font-semibold text-blue-800">{review.name}</h3>
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
                          <h3 className="text-md font-semibold text-blue-800">{review.name}</h3>
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
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              aria-label="Next review"
            >
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array(Math.ceil(reviewsData.length / 3)).fill(0).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * 3)}
                  className={`w-3 h-3 rounded-full ${Math.floor(currentReview / 3) === index ? 'bg-white' : 'bg-blue-400'}`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-800 sm:text-4xl text-center mb-4">
            AC Maintenance Questions Answered
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We've compiled answers to the most common questions about air conditioner maintenance in the Fort Worth area.
          </p>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden border border-blue-100 shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-blue-700 hover:bg-blue-800 transition-colors"
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
                <div className={`px-6 pb-4 pt-4 text-gray-700 transition-all duration-300 ease-in-out ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">Have more questions about AC maintenance?</p>
            <a href="tel:8178000340" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors">
              Call Our Experts: (817) 800-0340
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 py-12">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Ready to Protect Your AC Investment?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for the next heatwave to discover your AC isn't ready. Schedule your maintenance service today and enjoy peace of mind all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Schedule Maintenance Online
            </button>
            <a href="tel:8178000340" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-blue-800 transition-colors">
              Or Call: (817) 800-0340
            </a>
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
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 w-full"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Request Maintenance Service</h3>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="(817) 000-0000"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How Can We Help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          maxLength={600}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your AC maintenance needs"
        />
        <p className="text-xs text-gray-500 mt-1">0 of 600 max characters</p>
      </div>

      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="text-gray-700">
              I consent to receive communications from Fort Worth Heat and Air about my service request and promotional offers. Message and data rates may apply.
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Request Maintenance Quote
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default ACReplacement;