import React, { useState } from "react";
import { Link } from "react-router-dom";

const Arlington = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How often should I have my HVAC system serviced in Arlington?",
      answer: "We recommend annual maintenance for both heating and cooling systems. Given Arlington's climate with hot summers and mild winters, having your system checked before each season ensures optimal performance and efficiency year-round."
    },
    {
      question: "What are signs that my AC needs repair in Arlington?",
      answer: "Common signs include reduced cooling performance, unusual noises, higher energy bills, frequent cycling, water leaks, and poor airflow. With our hot Texas summers, these issues can develop quickly, so regular maintenance is key."
    },
    {
      question: "How long does HVAC installation typically take in Arlington homes?",
      answer: "Most standard HVAC installations take 1-2 days. Complex installations or those requiring ductwork modifications may take 3-5 days. We work efficiently to minimize disruption to your Arlington home while ensuring quality installation."
    },
    {
      question: "Do you offer emergency services in Arlington?",
      answer: "Yes, we provide 24/7 emergency HVAC services throughout Arlington. Whether it's a sudden breakdown during a heat wave or heating issues on a chilly evening, our team is ready to assist you promptly."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - With white rounded rectangle background */}
      <section className="relative bg-gray-900 text-white min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${hvacImg})`,
          }}
        />
        
        {/* Dark Overlay */}
        {/* Blue Overlay */}
    <div className="absolute inset-0 bg-[#003049] opacity-40" />
        
        {/* Content Container */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* White Rounded Rectangle Background for Text */}
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            {/* Location Breadcrumb */}
            <div className="flex items-center mb-6 text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-[#780000]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                <Link to="/cities-served" className="text-[#780000] hover:underline">Cities Served</Link> / Arlington, TX
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              HVAC Services in Arlington, TX
            </h1>
            
            {/* Description */}
            <div className="prose prose-lg mb-8">
              <p className="text-gray-700 text-xl">
                <strong>If you're experiencing issues with your heating & air conditioning system in Arlington, give us a call–we're already on our way! <br></br> <br></br>Call our office at </strong>
                <a href="tel:8178000340" className="text-[#780000] font-semibold hover:underline">(817) 800-0340</a>
                <strong> or schedule your service online.</strong>
              </p>
            </div>

            {/* Request Service Button */}
            <div className="mb-8">
              <a
                href="#schedule"
                className="bg-[#780000] hover:bg-[#600000] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block text-lg"
              >
                Request Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Text Content */}
              <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg text-gray-700">
                <h2 className="text-4xl font-bold text-gray-900 mt-8 mb-4">Services in Arlington</h2>
                <p>Like many other communities in the Dallas-Fort Worth metroplex, residents love living in Arlington, Texas because of its central location, affordable housing, and numerous attractions. Though many residents may want to spend every day outside, the truth of the matter is, creating a comfortable home environment is important to enjoying your life in Arlington.</p>

                <p>We are honored to provide quality HVAC services to businesses and families living in Arlington and the surrounding areas. From new installation to quality HVAC upgrades to repairs and maintenance, our experienced and qualified team is ready to handle all of your heating and cooling needs. Below, we will explain some of the excellent residential and commercial HVAC services that we offer to those in Arlington and beyond.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Air Conditioning Service in Arlington</h2>
                <p>We have been a strong presence in Texas for many years. Our reputation for excellence and providing quality services and products has earned us the reputation of the best Arlington AC services. No matter what temperature the outdoor thermometer reads, our team is ready to help you maintain optimal home comfort and keep your HVAC system running efficiently.</p>

                <p>We know that there is never a convenient time to experience a breakdown with your HVAC system, especially as the temperatures start to climb during the hot Texas summers. That is why we provide both routine maintenance and emergency repair services. We never want you to be left without home comfort options, so we are available to Arlington residents 365 days a year.</p>

                <p>One of our main goals is to be honest and transparent. We bid by the job instead of by the hour, so you know the cost up-front, regardless of the time it takes to complete the job correctly. Our certified technicians approach every job with a fully-stocked service truck so they are prepared for any issue that may arise.</p>

                <p>We provide a broad range of air conditioning services, including repairs, maintenance programs, and installation of new units, so whatever your needs, contact us today to learn more about how we can serve you!</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Heating Services in Arlington</h2>
                <p>Though Arlington is warm for much of the year, a working air conditioning unit is only part of the home comfort picture. When the weather starts to cool down in the winter months, you may find yourself turning off the AC and turning up the heat. Since you are only using your heater for a couple months out of the year, it is important to keep it well-maintained and get annual tune-ups, so that your heater is ready when you need it most.</p>

                <p>We also provide outstanding heating services in Arlington. From installation and replacement to routine maintenance, we have all of your heating system needs covered. We provide the highest quality heating systems and products, and we are ready to help you warm things up in the cooler winter months.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best HVAC Services in Arlington</h2>
                <p>When you need comprehensive Arlington HVAC services, we have the solutions to your biggest heating and cooling system problems. We want our customers to get the service they need, which is why we offer specials on various products and services, warranties on parts and labor for repairs, maintenance programs, and 100% customer satisfaction guaranteed.</p>

                <p>As an HVAC company, we provide local families and businesses with the best Arlington heating and cooling services for the entire system in your home or corporate building. We are certified Healthy Air Experts, so we can also provide you with recommendations and upgrades to help you achieve the cleanest and most comfortable air possible. For improvement on your HVAC system, contact us today.</p>

                <p>We enjoy helping keep families and businesses in the Arlington area comfortable year-round. Whether you want to cool your home more efficiently, you are looking for ways to improve indoor air quality, or you need a heater tune-up before the cold winter weather hits, we are here to handle all of your Arlington HVAC needs. If you have any questions about our heating or air conditioning services or products, call us today.</p>
              </div>
              
              {/* Map and Service Areas */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Arlington & Surrounding Areas</h2>
                
                {/* Google Map Embed */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214470.0984223124!2d-97.32793369999999!3d32.699879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7af9a2e5f3e5%3A0x2a0c2d42a7b079b9!2sArlington%2C%20TX!5e0!3m2!1sen!2sus!4v1719523200000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arlington Service Area"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Service Areas */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">We proudly serve Arlington and surrounding communities including:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Fort Worth", "Dallas", "Grand Prairie", "Mansfield", "Euless", "Bedford", "Grapevine", "Irving", "Hurst"].map((area) => (
                      <div key={area} className="flex items-center">
                        <svg className="w-4 h-4 text-[#780000] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-1">
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions for Arlington Homeowners
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 text-gray-900 font-semibold text-lg flex justify-between items-center hover:bg-gray-100 transition-colors"
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
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/** Service Form Component */
const ServiceForm = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="bg-[#003049] rounded-lg shadow-xl p-6 sticky top-6" id="schedule">
      <h2 className="text-2xl font-bold text-white mb-4">Request Service</h2>
      <p className="text-gray-200 mb-6">Please fill out the form below to request an estimate or schedule service.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Full Name <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Email Address <span className="text-red-300">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Phone Number <span className="text-red-300">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(817) 800-0340"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            How Can We Help? <span className="text-red-300">*</span>
          </label>
          <textarea
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe your HVAC needs..."
            maxLength={600}
          />
          <p className="text-gray-300 text-xs mt-1">0 of 600 max characters</p>
        </div>

        <div className="bg-[#780000] p-4 rounded-lg">
          <p className="text-white text-xs">
            By clicking "Send Message", I am providing express written consent to receive autodialed and pre-recorded calls, 
            texts, and SMS/MMS with marketing communications regarding home services at the phone number provided above, 
            even if the number is on a corporate, state, or national Do Not Call list. Consent is not a condition to purchase services or products.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-[#003049] font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Review Badges */}
      <div className="mt-8 pt-6 border-t border-gray-600">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-white font-semibold text-sm mb-1">Google</div>
            <div className="text-yellow-400 text-lg font-bold">5.0★</div>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold text-sm mb-1">Facebook</div>
            <div className="text-yellow-400 text-lg font-bold">5.0★</div>
          </div>
          <div className="text-center">
            <div className="text-white font-semibold text-sm mb-1">Yelp</div>
            <div className="text-yellow-400 text-lg font-bold">5.0★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arlington;