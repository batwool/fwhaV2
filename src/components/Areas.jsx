import React from 'react';
import { Link } from 'react-router-dom';

const Areas = () => {
  const tarrantCountyCities = [
    "Arlington", "Bedford", "Benbrook", "Blue Mound", "Burleson", "Colleyville", "Crowley",
    "Dalworthington Gardens", "Edgecliff Village", "Euless", "Everman", "Flower Mound", "Forest Hill",
    "Fort Worth", "Grapevine", "Haltom City", "Haslet", "Hurst", "Keller", "Kennedale",
    "Lake Worth", "Mansfield", "North Richland Hills", "Pantego",
    "Richland Hills", "River Oaks", "Saginaw", "Sansom Park", "Southlake", "Trophy Club",
    "Watauga", "Westlake", "Westover Hills", "Westworth Village", "White Settlement"
  ];

  const MapPin = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
      />
    </svg>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-[60%_40%] gap-6">
          {/* Left Column */}
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Areas We Serve</h2>
            <h3 className="text-xl text-gray-600 mb-6">Serving Tarrant County And Surrounding Areas</h3>
            <hr className="w-16 border-t-2 border-[#780000] mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 mb-8">
              {tarrantCountyCities.map((city) => (
                <Link
                  key={city}
                  to={`/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center p-1 hover:bg-gray-50 rounded transition-colors duration-200 group"
                >
                  <MapPin className="h-4 w-4 mr-2 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
                  <span className="text-[#780000] font-medium hover:underline text-sm">{city}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/cities-served"
              className="inline-block bg-[#780000] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#660000] transition-colors duration-200"
            >
              View Service Area
            </Link>
          </div>

          {/* Right Column - Google Map Embed */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/d/u/1/embed?mid=1LHaKSnUYOIoPu1zLhrsszO3ei-q14Fk&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;