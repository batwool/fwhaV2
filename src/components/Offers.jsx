import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="featured-offers"
        className="py-20 bg-[#003049] border-4 border-dotted border-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading - no red line */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Exclusive Offers Just for You
            </h2>
          </div>

          {/* Three Card Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - AC Safety & Summer Survival Visit */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden group">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#003049]/10 rounded-full flex items-center justify-center text-[#003049]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#780000] bg-[#780000]/10 px-2.5 py-1 rounded-full">
                    Limited Time
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#003049] mb-2">
                  AC Safety & Summer Survival Visit
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Pre-season check for your system so it's ready for Texas heat. We inspect, clean key
                  components, and give you a written health report.
                </p>

                <div className="mt-auto">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center w-full bg-[#780000] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#660000] transition-colors duration-200 text-center"
                  >
                    Book Your Visit
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Comfort Club Maintenance Membership */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-[#003049]/10 rounded-full flex items-center justify-center text-[#003049] mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#003049] mb-2">
                  Comfort Club Maintenance Membership
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  2 visits per year, priority scheduling, 10% off repairs, and member‑only offers.
                </p>

                <div className="mb-6 mt-2">
                  <span className="inline-block bg-[#003049]/10 text-[#003049] text-xs font-medium px-2.5 py-1 rounded-full">
                    Save 10% on repairs
                  </span>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/comfort-club"
                    className="inline-flex items-center justify-center w-full bg-[#780000] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#660000] transition-colors duration-200 text-center"
                  >
                    Learn About Comfort Club
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - System Replacement Estimate */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-[#003049]/10 rounded-full flex items-center justify-center text-[#003049] mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#003049] mb-2">
                  Request a 3‑Option System Estimate
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  We inspect your system and give you three clear options: premium, most‑popular, and
                  essential, with financing options.
                </p>

                <div className="mb-6 mt-2">
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    Financing Available
                  </span>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center w-full bg-[#780000] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#660000] transition-colors duration-200 text-center"
                  >
                    Request Install Estimate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-[90%] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://portal.fieldpulse.com/fortworthheatandair"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Request Service"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;