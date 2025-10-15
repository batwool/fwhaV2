import React, { useState } from "react";
import sendBookingEmail from "../email";
import ourLogo from '../assets/logo5.png';


const BookNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await sendBookingEmail(formData);

  if (result.success) {
    alert("✅ Booking request sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: ""
    });
  } else {
    alert("❌ Failed to send. Please try again later.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Postcard Container - Horizontal on wider screens */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-300 transform rotate-1 transition-transform duration-300 hover:rotate-0 lg:flex lg:flex-row">
          {/* Postcard Left Side - Header/Logo Section */}
          <div className="bg-[#003049] py-8 px-6 text-center lg:w-2/5 lg:flex lg:flex-col lg:justify-between">
            {/* Postcard Stamp */}
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-16 h-16 bg-[#780000] rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-md">
              <div className="text-center">
                <div>BOOK</div>
                <div>NOW</div>
              </div>
            </div>
            
            {/* Logo and Title */}
            <div className="lg:flex lg:flex-col lg:items-center lg:mt-8">
              <div className="flex justify-center mb-4">
            <img 
  src={OurLogo} 
  alt="Company Logo" 
  className="h-20 object-contain"
/>

              </div>
              <h1 className="text-2xl font-bold text-white">Book Your Service</h1>
              <p className="text-blue-100 mt-2">Fill out the form and we'll contact you soon</p>
            </div>
            
            {/* Contact Info - Moved to bottom on desktop */}
            <div className="mt-8 lg:mt-auto">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-2">Contact Info</h3>
                <div className="text-blue-100 text-sm">
                  <p className="flex items-center justify-center mb-1">
                    <span className="mr-2">📞</span> (817) 800-0340
                  </p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Postcard Right Side - Form Section */}
          <div className="p-8 bg-white relative lg:w-3/5">
            {/* Postcard lines */}
            <div className="absolute left-8 right-8 top-4 border-t border-dashed border-gray-300"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-[#003049] transition-colors"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-[#003049] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-[#003049] transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-[#003049] transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Home Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-[#003049] transition-colors"
                  placeholder="123 Main Street, City, State, ZIP"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#003049] hover:bg-[#00283e] text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-opacity-50"
              >
                Submit Booking Request
              </button>
            </form>
            
            {/* Mobile-only footer */}
            <div className="mt-6 pt-4 border-t border-dashed border-gray-300 md:hidden">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div>We'll respond within 24 hours</div>
                <div>📞 (817) 800-0340</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p>Need immediate assistance? Call us directly at <a href="tel:8178000340" className="text-[#003049] font-semibold">(817) 800-0340</a></p>
        </div>
      </div>
    </div>
  );
};

export default BookNow;