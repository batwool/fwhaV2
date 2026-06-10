import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Existing hero assets - using relative paths
import fwhahero from '../assets/shorterfwha.mp4';
import fbreview from '../assets/fbreview.png';
import googlereview from '../assets/GoogleReview.png';
import yelpreview from '../assets/yelpreview.png';

// Hero Component (kept exactly as original)
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video + Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/fwhaposter.webp"
        >
          <source src={fwhahero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,48,73,0.5)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
        <div className="flex flex-col justify-center min-h-screen">
          <div className="flex flex-wrap sm:flex-nowrap justify-start gap-3 mb-6">
            <img
              src={googlereview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
            />
            <img
              src={fbreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
            />
            <img
              src={yelpreview}
              alt="Reviews"
              className="h-14 md:h-18 lg:h-20 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Honest, Expert HVAC
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8">
            Proudly Serving Fort Worth & Tarrant County Homes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16">
            <button
              onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
              className="bg-[#780000] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#650000] transition-colors"
            >
              Request Service
            </button>

            <a
              href="tel:8178000340"
              className="bg-white text-[#780000] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Call (817) 800-0340
            </a>
          </div>

          {/* Stats */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">A+</div>
              <p className="text-gray-200">Rated by BBB</p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-gray-200">Areas Serviced</p>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold mb-2">30</div>
              <p className="text-gray-200">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Featured Offers Strip Component
const FeaturedOffers = () => {
  const scrollToForm = () => {
    document.getElementById('service-request-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - AC Safety & Summer Survival Visit */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#003049] mb-3">AC Safety & Summer Survival Visit</h3>
              <p className="text-gray-600 mb-4">
                Pre-season check for your system so it's ready for Texas heat. We inspect, clean key components, and give you a written health report.
              </p>
              <p className="text-[#780000] font-semibold mb-4">Starting at $149</p>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#780000] text-white py-2 rounded-md font-semibold hover:bg-[#650000] transition-colors"
              >
                Book Your Visit →
              </button>
            </div>
          </div>

          {/* Card 2 - Comfort Club Membership */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#003049] mb-3">Comfort Club Maintenance Membership</h3>
              <p className="text-gray-600 mb-4">
                2 visits per year, priority scheduling, 10% off repairs, and member-only offers.
              </p>
              <Link
                to="/comfort-club"
                className="block w-full bg-[#780000] text-white py-2 rounded-md font-semibold text-center hover:bg-[#650000] transition-colors"
              >
                Learn About Comfort Club →
              </Link>
            </div>
          </div>

          {/* Card 3 - System Replacement Estimate */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#003049] mb-3">Request a 3-Option System Estimate</h3>
              <p className="text-gray-600 mb-4">
                We inspect your system and give you three clear options: premium, most-popular, and essential, with financing options.
              </p>
              <button
                onClick={scrollToForm}
                className="w-full bg-[#780000] text-white py-2 rounded-md font-semibold hover:bg-[#650000] transition-colors"
              >
                Request Install Estimate →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Services Section with required copy
const Services = () => {
  const services = [
    {
      title: 'Heating Services',
      description: 'Furnace and heat pump repair, replacement, and tune-ups so your home stays warm when North Texas decides to freeze.',
      link: '/heating',
      icon: '🔥'
    },
    {
      title: 'Cooling Services',
      description: 'AC repair and replacement for everything from "no cool" calls to full system upgrades with better comfort and lower bills.',
      link: '/cooling',
      icon: '❄️'
    },
    {
      title: 'Indoor Air Quality',
      description: 'Filters, air purification, humidity control, and ductwork solutions to help you breathe cleaner air at home.',
      link: '/indoor-air-quality',
      icon: '🌬️'
    },
    {
      title: 'Commercial HVAC',
      description: 'Commercial HVAC service and maintenance for small businesses and facilities in Fort Worth.',
      link: '/commercial',
      icon: '🏢'
    }
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28">
      {/* Background with wave design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#003049]"></div>
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-40 md:h-56 lg:h-72"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C320,140 420,40 720,60 C1020,80 1120,140 1440,80 L1440,120 L0,120 Z"
            fill="#004366"
            opacity="0.3"
          />
          <path
            d="M0,100 C360,160 480,60 720,80 C960,100 1080,160 1440,100 L1440,120 L0,120 Z"
            fill="#004366"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold text-white mb-3">OUR SERVICES</h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fort Worth Heating & Air Conditioning
          </h2>
          <div className="w-24 h-1 mx-auto mb-3" style={{ backgroundColor: '#780000' }}></div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Looking for reliable HVAC services in Fort Worth? Our expert team handles heating repair,
            air conditioning installation, and routine maintenance to keep your home comfortable all year round.
          </p>
        </div>

        {/* Services Grid - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#003049] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-[#780000] font-semibold inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12 space-y-5 sm:space-y-0 sm:space-x-5">
          <a
            href="tel:8178000340"
            className="inline-block px-12 py-6 bg-[#780000] text-white font-semibold rounded-lg shadow-md hover:bg-[#600000] transition-colors duration-200 text-xl"
          >
            Call (817) 800-0340
          </a>
          <button
            onClick={() => window.HCPWidget && window.HCPWidget.openModal()}
            className="inline-block px-12 py-6 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#003049] transition-colors duration-200 text-xl"
          >
            Request Service
          </button>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const benefits = [
    'Local Fort Worth team, not a national call center.',
    'Techs are trained, background-checked W-2 employees.',
    'Clear 3-option estimates – no surprises, no pressure.',
    'Comfort Club + Breakdown Shield options for priority, same-day service.',
    '24/7 emergency support when you need it most.'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">Why Fort Worth Heat & Air?</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#780000' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another HVAC company. We're your neighbors, committed to keeping Fort Worth comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <svg className="w-6 h-6 text-[#780000] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Request Form Component with HubSpot integration
const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    serviceNeeded: 'AC Repair / No Cool',
    preferredDate: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Fixed: removed TypeScript type annotation
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Prepare data for HubSpot
    const hubspotData = {
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'phone', value: formData.phone },
        { name: 'email', value: formData.email },
        { name: 'address', value: formData.address },
        { name: 'zip', value: formData.zip },
        { name: 'hs_lead_status', value: 'NEW' },
        { name: 'message', value: `Service Needed: ${formData.serviceNeeded}\nPreferred Date: ${formData.preferredDate || 'Not specified'}\nNotes: ${formData.notes}\nSource: Website - Service Request` }
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Homepage Service Request'
      }
    };

    try {
      // Replace with your actual HubSpot portal ID and form GUID
      const PORTAL_ID = 'YOUR_PORTAL_ID';
      const FORM_GUID = 'YOUR_FORM_GUID';
      
      // Uncomment below and replace with actual HubSpot endpoint
      // const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(hubspotData)
      // });
      
      // For demo purposes, simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted to HubSpot:', hubspotData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ve received your request and will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        zip: '',
        serviceNeeded: 'AC Repair / No Cool',
        preferredDate: '',
        notes: ''
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please call us directly or try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="service-request-form" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">Schedule Service</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#780000' }}></div>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 1 hour
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">ZIP Code *</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">What do you need help with? *</label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
              >
                <option>AC Repair / No Cool</option>
                <option>Heating Problem / No Heat</option>
                <option>Maintenance / Tune-Up</option>
                <option>Comfort Club Membership</option>
                <option>System Replacement / Estimate</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Preferred Date/Time (optional)</label>
              <input
                type="datetime-local"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Anything else we should know?</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#780000]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#780000] text-white py-3 rounded-md font-semibold text-lg hover:bg-[#650000] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Main Homepage Component
const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturedOffers />
      <Services />
      <WhyChooseUs />
      <ServiceRequestForm />
    </main>
  );
};

export default Homepage;