// src/components/ServiceForm.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ServiceForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1jv4hq",       // Replace with your EmailJS Service ID
        "template_18swbf4",       // Replace with your EmailJS Template ID
        form.current,
        "ZOo7SxVfK4NkOVjmq"        // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your request has been sent!");
          form.current.reset();  // clears the form after successful send
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg border border-[#003049] border-opacity-20 p-6 sticky top-6"
      id="schedule"
    >
      <h2 className="text-xl font-bold text-[#003049] mb-3">Request Service</h2>
      <p className="text-gray-600 text-sm mb-4">
        Fill out the form below and our team will contact you shortly to schedule your service
      </p>

      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-[#780000]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-[#780000]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-[#780000]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="(817) 800-0340"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            name="service"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003049] focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="AC Repair">AC Repair</option>
            <option value="AC Installation">AC Installation</option>
            <option value="AC Maintenance">AC Maintenance</option>
            <option value="Heater Repair">Heater Repair</option>
            <option value="Heater Replacement">Heater Replacement</option>
            <option value="Indoor Air Quality">Indoor Air Quality</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How Can We Help?
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003049] focus:border-transparent"
            placeholder="Briefly describe your HVAC needs..."
            maxLength={300}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#780000] hover:bg-[#600000] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
