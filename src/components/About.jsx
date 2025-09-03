import React from 'react';

// ✅ Import images
import groupPhoto from '../assets/groupphoto1.jpeg';
import ginoPhoto from '../assets/ginophoto.jpeg';
import canonPhoto from '../assets/canonphoto3.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Images */}
          <div className="lg:-ml-14 max-w-[116%]">
            <img
              src={groupPhoto}
              alt="Fort Worth Heat & Air Team"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                src={ginoPhoto}
                alt="Technician Gino"
                className="w-full rounded-lg shadow-md"
              />
              <img
                src={canonPhoto}
                alt="Technician at work"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <p className="text-xl text-[#003049] font-bold">Est. 2013</p>
                <div className="w-64 h-[3px] bg-gray-300"></div>
              </div>
              <h2 className="text-4xl font-bold text-[#003049] mb-4 mt-2">
                Building Our Legacy.<br />
                Serving With Purpose.<br />
                <span className="text-[#780000]">Leading The Way Forward.</span>
              </h2>
            </div>

            <h3 className="text-3xl font-bold text-[#003049] mb-4">
              15 Years of Service. A Future Built on Trust.
            </h3>

            <p className="text-lg text-gray-700 mb-4">
              This year, Fort Worth Heat & Air proudly celebrates 15 years of serving the Fort Worth community. With over 30 years of combined experience, we've been more than an HVAC company; we've been a trusted neighbor, a problem-solver, and a partner in comfort for homeowners and businesses across the Fort Worth area.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              While we may still be building our name, our commitment is already set in stone: doing the job right, every time. We’re driven to earn the trust of our community through hard work, honest service, and results you can feel.
            </p>

            <p className="text-lg text-gray-700">
              As we look ahead, we’re excited to grow, make our mark, and become the HVAC company Fort Worth knows and relies on for years to come.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
