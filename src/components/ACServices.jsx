import React from 'react';

const ACServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#003049] mb-12">What happened? Why does my AC need repair?</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              Even if you keep your air conditioner correctly maintained, at some point it's going to require repair services. Air conditioners are working machines, with parts that wear and tear over time.
            </p>
            <p className="text-gray-700 mb-4">
              Think about when a car breaks down and requires service. There's a whole host of things that could have gone wrong. Some are more common and could be a simple fix, while others, maybe more complex and potentially costly. But, you won't know for sure until you have a qualified expert on the case.
            </p>
            <p className="text-gray-700 mb-4">
              The same is true with AC repair. Your air conditioner could be broken due to leaks, inadequate lubrication, age, dust, electrical issues, wear and tear, or even faulty installation. One of our trained and certified technicians can visit your home and evaluate your system. Then, we can give you a straight answer on what's needed to get your air conditioner up and running.
            </p>
          </div>

          <div>
            <img
              src="https://brodypennell.com/wp-content/uploads/2022/04/Air-Conditioning-Repair.png"
              alt="HVAC technician performing AC tune-up"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-[#003049] mb-8">How soon can you get here?</h3>
          <p className="text-gray-700 text-center mb-8">
            No matter what time of day you discover your cooling system is broken, you can call us. Seriously! Whether it's 3 am or early Sunday morning, our team is hard at work keeping LA comfortable. Call us anytime - really! - at (310) 810-2721, and we will dispatch a technician to your home.
          </p>

          <div className="text-center">
            <a
              href="tel:+1-310-810-2721"
              className="bg-[#003049] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Call (310) 810-2721
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACServices;