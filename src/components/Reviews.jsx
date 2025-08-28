import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Michael T.",
      review: "Mike from Fort Worth Heat & Air was professional, courteous, and respectful of our home. Excellent communication and clear explanations of all our HVAC options."
    },
    {
      name: "Sandra K.",
      review: "I've used Fort Worth Heat & Air several times and today's service was outstanding. Mike and Canon were friendly, efficient, and knowledgeable. Highly recommend!"
    },
    {
      name: "Luis R.",
      review: "Mike visited my house to service my AC. He was thorough, patient, and explained everything in detail. Fort Worth Heat & Air delivers top-notch service!"
    },
    {
      name: "Emily J.",
      review: "Same-day service and excellent work! They replaced my capacitor and upgraded my system efficiently. Friendly, professional, and reliable – I won't call anyone else."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#003049]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img
            src="https://brodypennell.com/wp-content/themes/yootheme/cache/9c/5-Stars-9c47dc9a.png"
            alt="5 Stars"
            className="mx-auto mb-4 w-32"
          />
          <h2 className="text-4xl font-bold text-white mb-4">Ratings & Reviews</h2>
          <p className="text-5xl font-extrabold text-white mb-2">CHECK OUT OUR REVIEWS</p>
          <p className="text-white mt-2">
            Highly rated for: <strong>AC repair, heating services, HVAC maintenance, and professionalism</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-[#780000]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#780000]">{review.name}</p>
                  <div className="flex text-[#780000]">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-white underline hover:text-[#780000]"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
