import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#780000] mb-4">Schedule Service</h2>
          <p className="text-[#003049]">Get started with your HVAC service, repair, or replacement</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#003049]">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#780000] focus:border-[#780000]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#003049]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#780000] focus:border-[#780000]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#003049]">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#780000] focus:border-[#780000]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#003049]">
                How Can We Help? *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={600}
                required
                placeholder="Describe your HVAC needs..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#780000] focus:border-[#780000]"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#780000] text-white px-6 py-3 rounded-md hover:bg-[#003049] transition-colors font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-600">
            <p>
              By clicking "Send Message", I am providing express written consent to receive autodialed and pre-recorded calls, texts, and SMS/MMS with marketing communications from Brody Pennell regarding home services at the phone number provided above, even if the number is on a corporate, state, or national Do Not Call list. Consent is not a condition to purchase services or products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;