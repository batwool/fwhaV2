import React, { useState } from "react";
import cityscape from "../assets/cityscapes.png";

const ACInstallation = () => {
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
      question: "How do I know if I need AC replacement instead of repair?",
      answer: "Generally, if your AC is over 10 years old, requires frequent repairs, or isn't cooling efficiently despite repairs, replacement is often more cost-effective. We'll perform a thorough assessment to determine the best solution for your Fort Worth home."
    },
    {
      question: "What size AC unit does my Fort Worth home need?",
      answer: "Proper sizing is critical for Texas heat. Our technicians perform detailed load calculations considering your home's square footage, insulation, window placement, and other factors to recommend the perfect size unit for optimal efficiency and comfort."
    },
    {
      question: "How long does a full AC replacement take?",
      answer: "Most standard AC replacements are completed in 6-8 hours. More complex installations or those requiring ductwork modifications may take longer. We work efficiently to minimize disruption to your household."
    },
    {
      question: "Will a new AC system really lower my energy bills?",
      answer: "Absolutely. Modern AC systems are significantly more efficient than those from 10+ years ago. Fort Worth homeowners typically see 20-40% reduction in cooling costs after upgrading to a new, properly sized system."
    },
    {
      question: "Do you offer financing options for AC replacement?",
      answer: "Yes, we offer flexible financing options with approved credit to make your new AC system affordable. Our team can discuss various payment plans that fit your budget."
    },
    {
      question: "What brands of AC systems do you install?",
      answer: "We install top-quality, reliable brands that are proven to perform well in the demanding North Texas climate. We'll recommend options that offer the best value, efficiency, and reliability for your specific needs."
    }
  ];

  const reviewsData = [
    {
      name: "Robert D.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "The team at Fort Worth Heat and Air replaced my aging AC unit with a new efficient system. They showed up on time, explained all my options, and completed the installation professionally. My energy bills have dropped significantly!",
      date: "August 2025"
    },
    {
      name: "Jason M.",
      location: "Arlington, TX",
      rating: 5,
      review: "After getting multiple quotes, I chose Fort Worth Heat and Air for my AC replacement. Their knowledge of what works best in our Texas heat was impressive. The installation was smooth and my home has never been more comfortable.",
      date: "July 2024"
    },
    {
      name: "Debbie N.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "We're very pleased with our new AC system installation. The technicians were professional, clean, and efficient. They took the time to explain how to use our new smart thermostat too. Highly recommend!",
      date: "May 2024"
    },
    {
      name: "Bryan W.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "Worked with Canon on a complete AC replacement. Not only could they come help me out within a few hours, he was great to work with & explained everything. Everything was completed by that same afternoon!",
      date: "April 2025"
    },
    {
      name: "Terry W.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "Very impressed with F.W. Heat and Air. They arrived on time, diagnosed that my old unit needed replacement, and we scheduled the installation. The owner came and checked out the work. Only positive words for their work.",
      date: "June 2025"
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
      <section className="relative bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-6"
          style={{
            backgroundImage: `url('src/assets/acinstallation.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-[#001f33] opacity-70" />
        <div className="relative px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white px-4 py-2 mb-6 rounded-lg shadow-md">
              <h1 className="text-lg font-bold text-[#003049]">
                AC INSTALLATION FORT WORTH, TX
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Professional AC Installation Services in Fort Worth
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              For professional AC installation services in Fort Worth, TX, call North Texas's most trusted HVAC company: Fort Worth Heat and Air.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold">80+ Years of Experience</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">Certified Technicians</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <span className="font-semibold">24/7 Emergency Support</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#003049] bg-opacity-50 rounded-lg">
                <div className="bg-[#00283e] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-semibold">A+ BBB Rating</span>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Schedule Installation Now
              </button>
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
                Expert AC Installation Services in Fort Worth, TX
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                So your AC is ready to be installed – now you need to find the right contractor. You can stop your searching right here. Fort Worth Heat and Air is the BEST AC installation team in North Texas. How do we know? We're recognized by both customers and industry organizations for our superior air conditioning services.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-[#003049] mb-4">Our Top Rated AC Installation Service</h3>
                <p className="text-gray-700">
                  Investing in a new air conditioner can be nerve-wracking. Your air conditioner will serve your home for the next ten years or longer. At Fort Worth Heat and Air, our goal is to educate our customers. We want to make sure you feel completely confident in choosing the perfect air conditioner for your home.
                </p>
              </div>

              <div className="my-8">
                <div className="p-8 bg-gradient-to-r from-[#003049] to-[#00283e] text-white rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Schedule Your AC Installation Today!</h3>
                  <p className="mb-6">Beat the heat with a new efficient system. Schedule your AC Installation now or call us at <span className="font-semibold">(817) 800-0340</span>.</p>
                  <button className="bg-white text-[#003049] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                    Book Installation Service
                  </button>
                </div>
                <div className="h-2 w-full bg-[#780000] rounded-full mt-8"></div>
              </div>

             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-12">
  Signs That You May Need a New AC Installation
</h2>
<p className="mt-4 text-lg text-gray-700">
  If your home is struggling to stay cool or your current system is outdated, it may be time to consider a new AC installation. A properly installed system not only improves comfort but also boosts efficiency and reduces long-term energy costs. Here are some common indicators that you may benefit from installing a new air conditioner:
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
    <h4 className="text-xl font-semibold text-gray-800 mb-2">Inconsistent Cooling</h4>
    <p className="text-gray-700">Hot and cold spots around your home often mean your system can’t keep up and a new installation may be needed.</p>
  </div>
  <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
    <h4 className="text-xl font-semibold text-gray-800 mb-2">Frequent Repairs</h4>
    <p className="text-gray-700">If you’re constantly calling for service, investing in a new AC installation may be more cost-effective than repeated repairs.</p>
  </div>
  <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
    <h4 className="text-xl font-semibold text-gray-800 mb-2">Outdated System</h4>
    <p className="text-gray-700">Systems over 10–15 years old may no longer operate efficiently and could benefit from a modern installation.</p>
  </div>
  <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#003049]">
    <h4 className="text-xl font-semibold text-gray-800 mb-2">Rising Energy Bills</h4>
    <p className="text-gray-700">An older or undersized unit can drive up cooling costs — a new installation ensures efficiency and savings.</p>
  </div>
</div>


              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Benefits of Installing An Air Conditioner
              </h3>
              
              <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Reduced Energy Costs
                  </h4>
                  <p className="mt-2 text-gray-700">New AC systems are significantly more efficient, with many Fort Worth homeowners seeing 20-40% reduction in cooling costs.</p>
                </div>
                <div className="p-6 border-b">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved Home Comfort
                  </h4>
                  <p className="mt-2 text-gray-700">Modern systems provide more consistent temperatures and better humidity control throughout your home.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#003049] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhanced Home Value
                  </h4>
                  <p className="mt-2 text-gray-700">A new, efficient AC system increases your property value and appeal to potential buyers.</p>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                What's Included in an Installation?
              </h3>
              <p className="mt-4 text-gray-700">
                Understanding AC components helps you make informed decisions about your installation:
              </p>
              <div className="grid grid-cols-1 gap-3 mt-4">
                <div className="flex items-start text-gray-700 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 mr-2 text-[#003049] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Evaporator Coil</span> - The indoor component where refrigerant absorbs heat from your home's air
                  </div>
                </div>
                <div className="flex items-start text-gray-700 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 mr-2 text-[#003049] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Condensing Unit</span> - The outdoor unit that releases heat from your home to the outside air
                  </div>
                </div>
                <div className="flex items-start text-gray-700 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 mr-2 text-[#003049] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Refrigerant Lines</span> - Copper piping that carries refrigerant between indoor and outdoor units
                  </div>
                </div>
                <div className="flex items-start text-gray-700 p-3 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 mr-2 text-[#003049] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Thermostat</span> - The control system that regulates your home's temperature
                  </div>
                </div>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-gray-900">
                Our AC Installation Service Areas in North Texas
              </h3>
              <p className="mt-4 text-gray-700">
                Fort Worth Heat and Air proudly provides professional AC installation services throughout the region, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {["Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "North Richland Hills", "Euless", "Bedford", "Grapevine", "Haltom City", "Burleson", "Benbrook", "Saginaw"].map((city) => (
                  <div key={city} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-[#003049]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}, TX
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#780000] to-[#5a0000] text-white text-center rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Flexible Financing Options Available
                </h3>
                <p className="mb-4">
                  We offer competitive financing options to make your new AC system affordable. With approved credit, you can get a new energy-efficient cooling system now while paying over time!
                </p>
                <a href="tel:8178000340" className="inline-block bg-white text-[#780000] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition-colors">
                  CALL FOR FINANCING INFO: (817) 800-0340
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

      {/* REVIEWS SECTION */}
      <section className="w-full bg-[#003049] py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center mb-4">
            Trusted by Fort Worth Homeowners
          </h2>
          <p className="text-blue-200 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our AC installation customers have to say:
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

      {/* FAQ SECTION - REVAMPED */}
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
              AC Installation Questions Answered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've compiled answers to the most common questions about air conditioner installation in the Fort Worth area.
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
            <p className="text-gray-700 mb-6">Our AC experts are ready to answer all your Installation questions</p>
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
            Ready to Upgrade Your AC System?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for the next heatwave to discover your AC isn't ready. Schedule your installation service today and enjoy peace of mind all season long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Schedule Installation Online
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
            <span className="text-[#003049] font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
            We Are Here For You
          </h2>
          <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
            Schedule Your AC Installation Today
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
            We aren't comfortable until you are! Our team of certified technicians is ready to install your new AC system to keep you cool through the hottest Texas summers.
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
                  <p className="text-md font-medium text-[#003049]">24/7 Availability</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

      {/* CITYSCAPE WITH GRADIENT BLEND */}
      <div className="w-full relative overflow-hidden">
        {/* Image container */}
        <div className="relative">
          <img 
            src={cityscape} 
            alt="Fort Worth cityscape" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '150px', maxHeight: '400px' }}
          />
          
          {/* Gradient overlay at bottom to blend with footer */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#003049] to-transparent"></div>
        </div>
      </div>
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
      <h3 className="text-2xl font-bold text-[#003049] mb-6 text-center">Request Installation Quote</h3>

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
          What type of service do you need? <span className="text-red-500">*</span>
        </label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]">
          <option value="">Select service</option>
          <option value="ac-replacement">AC Replacement</option>
          <option value="ac-installation">New AC Installation</option>
          <option value="ac-repair">AC Repair</option>
          <option value="maintenance">Maintenance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How Can We Help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          maxLength={600}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049]"
          placeholder="Tell us about your AC replacement needs"
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
              className="focus:ring-[#003049] h-4 w-4 text-[#003049] border-gray-300 rounded"
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
        className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2"
      >
        Request Installation Quote
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
};

export default ACInstallation;