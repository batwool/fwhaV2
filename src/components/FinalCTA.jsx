import React from "react";
import cityscapeImg from "../assets/cityscapes.png"; // renamed import

const FinalCTA = ({ cityscape = cityscapeImg }) => {
  return (
    <section className="w-full bg-white py-16 relative">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#003049] to-transparent opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mb-32 opacity-50"></div>

      {/* Content */}
      <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-5xl text-center z-10">
        {/* CTA badge */}
        <div className="inline-flex items-center justify-center mb-4 bg-blue-50 px-4 py-2 rounded-full">
          <svg className="w-5 h-5 mr-2 text-[#003049]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <span className="text-[#003049] font-medium">Same-Day Availability</span>
        </div>

        <h2 className="text-3xl font-bold text-[#003049] sm:text-4xl mb-6">
          We Are Here For You
        </h2>
        <p className="text-xl mb-3 max-w-3xl mx-auto text-gray-800 font-semibold">
          Schedule Your Service Today
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
          We aren’t comfortable until you are. Our certified team restores cooling fast and verifies performance before we leave.
        </p>

        {/* Call & Schedule Cards */}
        <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Call */}
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

            {/* Schedule */}
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
            className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center"
          >
            Book Online Now
          </button>

          <a href="tel:8178000340" className="bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors transform hover:scale-105 flex items-center justify-center">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
