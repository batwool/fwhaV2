import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#780000] mb-6">
              Heating and Air Conditioning in Los Angeles and Surrounding Areas
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Though we are one of the longest-running HVAC companies in the Los Angeles area, we pride ourselves on offering the most up-to-date and efficient heating and cooling systems. While HVAC technologies continue to evolve, we evolve along with them, continually training and mastering the latest in emerging HVAC products and machinery.
              </p>
              <p>
                Opening our doors in 1945, Brody Pennell has been the Greater Los Angeles area's most trusted and experienced HVAC team for decades. We have been a proud dealer of Carrier heating and cooling systems and accessories for over 50 years. To this day, we remain the only Carrier Dealer in the West Los Angeles area and the only Carrier Presidents Award Recipient for 2021 in all of LA and Orange Counties.
              </p>
              <p>
                With 75 years of experience in residential and commercial heating and cooling, we have the expertise and the know-how to bring unique solutions to every HVAC need or concern.
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="https://brodypennell.com/wp-content/themes/yootheme/cache/77/Air-Conditioning-7798f68d.png"
              alt="Heating and Air Conditioning Services"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;