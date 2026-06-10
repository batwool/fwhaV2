import React, { useState } from 'react';

const ComfortClub = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003049] mb-4">
              Comfort Club Maintenance Membership
            </h1>
            <div className="w-24 h-1 bg-[#780000] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Keep your HVAC system running efficiently year‑round with our premium maintenance plan.
            </p>
          </div>

          {/* What's included + Pricing grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Benefits */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#003049] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#780000]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                What's Included
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#780000] font-bold mr-3">✓</span>
                  <span><strong>2 comprehensive visits per year</strong> – one for A/C, one for heating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#780000] font-bold mr-3">✓</span>
                  <span><strong>Priority scheduling</strong> – skip the line as a member</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#780000] font-bold mr-3">✓</span>
                  <span><strong>10% off all repairs</strong> – parts and labor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#780000] font-bold mr-3">✓</span>
                  <span><strong>Member‑only special offers</strong> throughout the year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#780000] font-bold mr-3">✓</span>
                  <span><strong>No overtime or emergency fees</strong> for members</span>
                </li>
              </ul>
            </div>

            {/* Right: Pricing & Shield Upgrade */}
            <div className="space-y-8">
              <div className="bg-[#003049] text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Membership Pricing</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-sm uppercase tracking-wide">Annual Plan</p>
                    <p className="text-3xl font-bold mt-2">Book Below</p>
                    <p className="text-sm">per year (best value)</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-sm uppercase tracking-wide">Monthly Plan</p>
                    <p className="text-3xl font-bold mt-2">Book Below</p>
                    <p className="text-sm">billed every 4 weeks</p>
                  </div>
                </div>
              </div>

              {/* Shield Upgrade */}
              <div className="border-2 border-[#780000] rounded-xl p-6 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-[#780000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#003049]">Shield Upgrade – Added Protection</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Add the Shield Upgrade to your Comfort Club membership:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Priority Scheduling</li>
                  <li>Includes one capacitor or contactor replacement per year</li>
                  <li>Priority dispatch for emergency calls (2‑hour window)</li>
                  <li>Annual air filter delivery (4 filters)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3 italic">*Shield upgrade excludes major component failures.</p>
              </div>
            </div>
          </div>

          {/* Call to action button */}
          <div className="text-center mt-12">
            <button
              onClick={openModal}
              className="bg-[#780000] text-white px-10 py-4 rounded-md text-xl font-semibold hover:bg-[#660000] transition-colors duration-200 inline-flex items-center gap-2 shadow-lg"
            >
              Join Comfort Club
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Clicking opens our service request form – choose "Comfort Club Membership" as the service type.
            </p>
          </div>
        </div>
      </section>

      {/* FieldPulse Modal */}
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
              title="Request Service – Comfort Club"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ComfortClub;