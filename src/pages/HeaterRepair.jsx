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
      question: "How often should I have my HVAC system serviced?",
      answer: "We recommend having your HVAC system serviced at least once a year, ideally in the spring for AC and fall for heating. Regular maintenance helps prevent breakdowns, improves efficiency, and extends the lifespan of your system."
    },
    {
      question: "What are the signs that my AC needs repair?",
      answer: "Common signs include warm air blowing from vents, unusual noises (grinding, squealing), strange odors, reduced airflow, frequent cycling on/off, higher than normal energy bills, and water leaks around the unit."
    },
    {
      question: "How long does an average AC repair take?",
      answer: "Most common AC repairs can be completed within 2-4 hours. However, more complex issues like compressor replacement or refrigerant leak repairs may take longer, typically 4-8 hours. We'll provide you with a timeframe after diagnosing the problem."
    },
    {
      question: "What's the average lifespan of an air conditioner?",
      answer: "A well-maintained air conditioner typically lasts 10-15 years. Regular maintenance, proper installation, and usage patterns all affect lifespan. If your AC is over 10 years old and requiring frequent repairs, it might be more cost-effective to consider replacement."
    },
    {
      question: "Do you offer emergency service after hours?",
      answer: "Yes! We offer 24/7 emergency AC repair service. Texas heat doesn't keep business hours, and neither do we. Call us anytime at (817) 800-0340 for immediate assistance with your heating or cooling emergency."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Absolutely. All our technicians are fully licensed, certified, and insured. We carry comprehensive liability insurance and workers' compensation to protect your home and our team. We also conduct thorough background checks and provide ongoing training to ensure top-quality service."
    }
  ];

  const reviewsData = [
    {
      name: "Sarah J.",
      location: "Fort Worth, TX",
      rating: 5,
      review: "My AC went out during the hottest week of the year. Fort Worth Heat and Air responded within an hour and had it fixed quickly. Professional and fair pricing. Highly recommend!",
      date: "July 2023"
    },
    {
      name: "Michael T.",
      location: "Arlington, TX",
      rating: 5,
      review: "These folks are the real deal. Honest assessment, didn't try to upsell me on anything I didn't need. Fixed my compressor issue at a reasonable price.",
      date: "August 2023"
    },
    {
      name: "Jennifer L.",
      location: "North Richland Hills, TX",
      rating: 5,
      review: "24/7 service is no joke. Our AC died at 10pm on a Saturday and they had someone here by 11pm. Amazing service when you need it most!",
      date: "June 2023"
    },
    {
      name: "Robert K.",
      location: "Mansfield, TX",
      rating: 5,
      review: "I've used them for both AC repair and annual maintenance. Always punctual, professional, and thorough. My go-to HVAC company in the area.",
      date: "May 2023"
    },
    {
      name: "Amanda W.",
      location: "Euless, TX",
      rating: 5,
      review: "Quick response time and excellent service. They explained everything clearly and didn't charge an arm and a leg. Will definitely use them again.",
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
      <section className="relative bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://genzryan.com/wp-content/uploads/2024/10/twin-cities-ac-repair-scaled.jpeg')`,
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
                {/* Changed this SVG to a shield icon */}
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

      {/* TWO COLUMN SECTION */}
      <section className="py-16 bg-white relative">
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT COLUMN: Long content */}
            <div className="lg:w-[65%]">
              {/* NEW SECTION ADDED HERE */}
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Professional Heater Repair Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
  For dependable AC repair service in Fort Worth, TX, call Fort Worth Heat and Air. Proudly serving Texas homeowners for over a decade.
</p>
<p className="mt-4 text-lg text-gray-600">
  Texas summers are no joke, and a broken AC can make your home unbearable. Cracking the windows only does so much when the heat sets in. That's why having a trusted, local AC repair team matters. At Fort Worth Heat and Air, we know how to handle the Texas heat, and we'll get your air conditioner running so your home stays comfortable all season long.
</p>
<p className="mt-4 text-lg text-gray-600">
  Fort Worth Heat and Air has been proudly serving Fort Worth and nearby communities for over 10 years. We may not be the biggest name in town, but our customers consistently rate us 5 stars for reliable, professional AC services. We focus on quality and care, making sure every repair and installation keeps your home comfortable. If you want dependable service from a team that truly cares, give us a call today!
</p>
{/* NEW ROUNDED RECTANGLE ADDED HERE */}
<div className="my-8 max-w-5xl">
  <div className="p-10 bg-[#003049] text-white rounded-xl text-left">
    <h3 className="text-2xl font-bold mb-2">Schedule Your AC Repair Service Today!</h3>
    <p className="mb-4">Ready to get started with your service or repairs? Schedule your appointment online, or give us a call at <span className="font-semibold">(817) 800-0340</span>.</p>
    <button className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-6 rounded-md transition-colors">
      Schedule Service
    </button>
  </div>
  {/* RED DIVIDER ADDED HERE */}
  <div className="h-1 w-full bg-[#780000] rounded-full mt-8"></div>
</div>
{/* END OF NEW CONTENT */}

              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                24/7 Emergency AC Repair Service
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We understand that your home comfort is important after a long day. When your AC fails, it can disrupt your routine and create stress. That's why Fort Worth Heat and Air provides on-call technicians and customer support 24/7 to ensure your cooling system is repaired promptly.
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
                Need immediate AC service? Call us at <span className="font-semibold">(817) 800-0340</span> or submit an online request. Fort Worth Heat and Air is here to help!
              </p>

              <h3 className="mt-10 text-2xl font-semibold">
                Why does my AC need repair?
              </h3>
              <p className="mt-4 text-gray-600">
                Even with proper maintenance, air conditioners will eventually need repairs. Parts wear over time, and issues can arise due to leaks, age, dust, electrical problems, or faulty installation.
              </p>
              <p className="mt-4 text-gray-600">
                Some problems are simple, others more complex. Our certified technicians can evaluate your system and provide a clear solution to restore optimal cooling and heating.
              </p>

              <h3 className="mt-10 text-2xl font-semibold">How soon can we get to you?</h3>
              <p className="mt-4 text-gray-600">
                No matter the time, Fort Worth Heat and Air is ready to respond. From early mornings to late nights, call us at <span className="font-semibold">(817) 800-0340</span> to dispatch a technician to your home quickly.
              </p>
              <p className="mt-4 text-gray-600">
                We aim to fix most issues in one visit, with fully stocked trucks and certified techs prepared to restore your home comfort.
              </p>

              {/* UPDATED COUPON - MATCHES SCHEDULE BOX WIDTH */}
<div className="mt-8 p-6 bg-white border-4 border-dotted border-[#780000] text-center w-full max-w-5xl mx-auto rounded-lg shadow-md">
  <h3 className="text-3xl font-bold text-[#780000] mb-2">
    $50 Off Any HVAC Repair
  </h3>
  <p className="text-lg text-gray-700 mb-4">
    New customer special. Limit one per customer. Call for details.
  </p>
  <a href="tel:8178000340" className="inline-block bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-6 rounded-md transition-colors">
    GIVE US A CALL
  </a>
</div>

              <h3 className="mt-10 text-2xl font-semibold">
                Common Air Conditioner Repairs
              </h3>
              <p className="mt-4 text-gray-600">
                Some of the most frequent AC issues we handle include:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>
                  <strong>Refrigerant Leaks:</strong> Reduces cooling efficiency. We locate, seal, and refill refrigerant.
                </li>
                <li>
                  <strong>Drainage Problems:</strong> Clogged drain pans or pipes can prevent your AC from working properly.
                </li>
                <li>
                  <strong>Broken Condenser Fan:</strong> The outdoor fan cools refrigerant. Motor or blade issues can cause failure.
                </li>
                <li>
                  <strong>Compressor Issues:</strong> The heart of your AC. If it fails, replacement may be required.
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-semibold">The Best AC Repair in Fort Worth, TX</h3>
              <p className="mt-4 text-gray-600">
                Fort Worth Heat and Air has completed countless AC service calls. When you work with us, you can expect:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                <li>Friendly, professional customer service</li>
                <li>Certified and trained technicians</li>
                <li>Fully stocked service vehicles</li>
                <li>24/7 emergency service, year-round</li>
                <li>100% satisfaction guaranteed</li>
              </ul>
              <p className="mt-6 text-gray-600 font-semibold">
                Don't wait! Call Fort Worth Heat and Air at (817) 800-0340 to get your AC and heating system running smoothly.
              </p>
            </div>

            {/* RIGHT COLUMN: Fixed position form */}
            <div className="lg:w-[35%] lg:sticky lg:top-6 self-start">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION (UPDATED WITH CAROUSEL) */}
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

      {/* FAQ SECTION (UPDATED) */}
      <section className="w-full bg-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto">
          <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl text-center mb-8">
            Frequently Asked Questions
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
      <h3 className="text-xl font-semibold mb-4 text-white">Request Service</h3>

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
          placeholder="0 of 600 max characters"
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