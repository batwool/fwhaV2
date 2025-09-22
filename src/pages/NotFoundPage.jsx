import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Logo/Header Area */}
        <div className="mb-12">
          <div className="inline-block bg-[#003049] px-6 py-3 rounded-lg mb-4">
            <h1 className="text-2xl font-bold text-white">Fort Worth Heat and Air</h1>
          </div>
          <p className="text-gray-600">Keeping North Texas Homes Warm</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#003049]">
          {/* 404 Graphic */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-[#003049] opacity-10 absolute inset-0 flex items-center justify-center">
              404
            </div>
            <div className="relative z-10">
              <svg 
                className="w-32 h-32 mx-auto text-[#780000] mb-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          
          <p className="text-lg text-gray-600 mb-2">
            This page is currently under construction.
          </p>
          <p className="text-gray-600 mb-8">
            We're working hard to bring you more valuable content for your heating and air needs.
          </p>

          {/* Feature List */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <h3 className="font-semibold text-[#003049] mb-4">In the meantime, check out our services:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#780000] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Heater Repair Services
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#780000] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Heater Replacement
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#780000] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
            <a
              href="/"
              className="w-full sm:w-auto bg-[#003049] hover:bg-[#002239] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-block text-center"
            >
              Return Home
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-block text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              <span className="text-red-800 font-semibold">Emergency Service: (817) 800-0340</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Fort Worth Heat and Air. All rights reserved.</p>
          <p className="mt-1">Serving Fort Worth, Arlington, Mansfield, and surrounding areas.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;