import React, { useState } from "react";
import FinalCTA from "../components/FinalCTA";

const PaymentPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("hearth");
  const [openIndex, setOpenIndex] = useState(null);
  const [projectCost, setProjectCost] = useState(5000);
  const [loanTerm, setLoanTerm] = useState("12 months (0% interest)");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const calculateMonthlyPayment = () => {
    if (loanTerm.includes("0%")) {
      return (projectCost / 12).toFixed(2);
    }
    return (projectCost / 24).toFixed(2);
  };

  const handleApplyNow = () => {
    window.open('https://app.gethearth.com/partners/fort-worth-heat-and-air-1/lisa/apply', '_blank');
  };

  const plansData = [
    {
      id: "hearth",
      name: "Hearth Financing",
      price: "0% for 12 months",
      description: "Quick approval with no impact to your credit score",
      features: [
        "Loan amounts up to $250,000",
        "Affordable monthly payment options",
        "Funding within 1-3 days",
        "No prepayment penalties",
        "No home equity required"
      ],
      bestFor: "Medium to large projects and system replacements"
    },
    {
      id: "wisetack",
      name: "WiseTack Financing",
      price: "0% to 35.9% APR",
      description: "Flexible payment solutions for your project",
      features: [
        "Financing from $500 - $25,000",
        "APRs from 0% to 35.9%",
        "Terms from 3 to 60 months",
        "No penalties or late fees",
        "No compounding interest"
      ],
      bestFor: "Small to medium projects with flexible terms"
    }
  ];

  const benefitsData = [
    {
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises. All costs are clearly explained upfront.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Quick Approval",
      description: "See your personalized monthly payment options within minutes without affecting your credit score.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Flexible Terms",
      description: "Choose from various payment plans that work with your budget and timeline.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      title: "No Prepayment Penalties",
      description: "Pay off your balance early without any additional fees or penalties.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  const faqData = [
    {
      question: "Will checking my financing options affect my credit score?",
      answer: "No, you can see your personalized payment plans without affecting your credit score."
    },
    {
      question: "How does the financing approval process work?",
      answer: "Financing is provided by independent third-party lenders and is subject to credit approval. We are not a lender and do not make credit decisions. All financing terms, rates, conditions, and approvals are solely determined by the third-party financing provider and may vary based on the applicant's credit profile."
    },
    {
      question: "How long does the approval process take?",
      answer: "Most applications are approved within minutes. Once approved, funding typically occurs within 1-3 days."
    },
    {
      question: "Are there any prepayment penalties?",
      answer: "No, all our financing plans allow early payoff without any penalties or additional fees."
    },
    {
      question: "Do I need home equity to qualify?",
      answer: "No, our financing options do not require home equity."
    },
    {
      question: "What is the maximum loan amount available?",
      answer: "Through Hearth, we offer loan amounts up to $250,000. WiseTack offers financing from $500 to $25,000."
    },
    {
      question: "How soon can I get funding for my project?",
      answer: "Once approved, funding typically occurs within 1-3 days, allowing you to start your project quickly."
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Complete our simple application in just a few minutes."
    },
    {
      step: 2,
      title: "Get Instant Decision",
      description: "See your personalized payment options within minutes without affecting your credit score."
    },
    {
      step: 3,
      title: "Schedule Your Service",
      description: "Book your appointment at your convenience."
    },
    {
      step: 4,
      title: "Get Funded Quickly",
      description: "Receive funding within 1-3 days after approval."
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#003049] to-[#00283e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        
        <div className="relative px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Financing Options for Your HVAC Needs
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              See your personalized monthly payment options within minutes and without affecting your credit score. No prepayment penalties. No home equity required.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: "0%", label: "Interest Financing" },
                { value: "$250K", label: "Loan Amounts" },
                { value: "1-3 Days", label: "Funding Time" },
                { value: "5 min", label: "Approval Process" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => document.getElementById("financing-options").scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#780000] hover:bg-[#5a0000] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Financing Options
            </button>
          </div>
        </div>
      </section>

      {/* FINANCING OPTIONS */}
      <section id="financing-options" className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Flexible Payment Plans
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Find convenient monthly payment options for your project. See your personalized payment plans without affecting your credit score now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plansData.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  selectedPlan === plan.id ? "ring-2 ring-[#780000] transform -translate-y-2" : ""
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className={`p-6 ${selectedPlan === plan.id ? "bg-[#003049] text-white" : "bg-gray-100 text-[#003049]"}`}>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-2 text-2xl font-bold">{plan.price}</div>
                  <p className="text-sm mt-1">{plan.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Best for:</span>
                    <p className="font-medium">{plan.bestFor}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full mt-6 py-2 px-4 rounded-lg font-medium ${
                      selectedPlan === plan.id 
                        ? "bg-[#780000] hover:bg-[#5a0000] text-white" 
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    } transition-colors`}
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hearth Makes It Easy</h3>
              <p className="text-gray-700 mb-4">
                Hearth makes it easy for you to find monthly payment options for your project, with loan amounts up to $250,000, affordable monthly payment options, funding within 1-3 days, no prepayment penalties, and no home equity required.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Loan amounts up to $250,000</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Funding within 1-3 days</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>No prepayment penalties</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>No home equity required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WiseTack Financing Details</h3>
              <p className="text-gray-700 mb-4">
                WiseTack offers flexible financing options for a wide range of project sizes with transparent terms and no hidden fees.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Financing from $500 to $25,000</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>APRs from 0% to 35.9%</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>Terms from 3 to 60 months</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span>No penalties, late fees, or compounding interest</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Financing Disclaimer */}
          <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Financing Disclaimer</h3>
            <p className="text-sm text-gray-700">
              Financing is provided by independent third-party lenders and is subject to credit approval. Fort Worth Heat and Air is not a lender and does not make credit decisions. All financing terms, rates, conditions, and approvals are solely determined by the third-party financing provider and may vary based on the applicant's credit profile. Fort Worth Heat and Air makes no representations or warranties regarding financing, and is not responsible for any decisions, terms, payments, obligations, or disputes that may arise between the customer and the financing provider. Customers are encouraged to carefully review and understand all financing agreements before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our Financing Options?
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              We make it easy to get the HVAC services you need with payment plans designed for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#003049] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple Application Process
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Getting approved for financing is quick and easy. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md h-full">
                  <div className="absolute -top-4 -left-4 bg-[#780000] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="bg-[#003049] hover:bg-[#00283e] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
              onClick={handleApplyNow}
            >
              Apply for Financing Now
            </button>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#003049] to-[#00283e] rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Payment Calculator</h2>
                <p className="mb-6">Estimate your monthly payments based on your project cost and selected term.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Cost: ${projectCost}</label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="20000" 
                      step="500" 
                      value={projectCost}
                      onChange={(e) => setProjectCost(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span>$1,000</span>
                      <span>$10,000</span>
                      <span>$20,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Loan Term</label>
                    <select 
                      className="w-full p-2 rounded text-gray-800"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                    >
                      <option value="12 months (0% interest)">12 months (0% interest)</option>
                      <option value="24 months (5.99% APR)">24 months (5.99% APR)</option>
                      <option value="36 months (6.99% APR)">36 months (6.99% APR)</option>
                      <option value="48 months (7.99% APR)">48 months (7.99% APR)</option>
                      <option value="60 months (8.99% APR)">60 months (8.99% APR)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Estimated Monthly Payment</div>
                  <div className="text-4xl font-bold text-[#003049] my-4">${calculateMonthlyPayment()}</div>
                  <div className="text-gray-600 text-sm">
                    For a ${projectCost.toLocaleString()} project with {loanTerm}
                  </div>
                  <button 
                    className="mt-6 bg-[#780000] hover:bg-[#5a0000] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Financing FAQs
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our financing options and payment plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <button
                  className="w-full px-6 py-5 text-left text-white font-semibold text-lg flex justify-between items-center focus:outline-none bg-gradient-to-r from-[#003049] to-[#00283e] hover:from-[#00283e] hover:to-[#001f33] transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 pb-5 pt-4 text-gray-700 transition-all duration-300 ease-in-out bg-blue-50 ${openIndex === index ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#003049] to-[#00283e] text-white">
        <div className="px-4 sm:px-8 lg:px-16 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply for financing in minutes and get the HVAC services you need with affordable monthly payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-[#003049] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
              onClick={handleApplyNow}
            >
              Apply for Financing
            </button>
            <a href="tel:8178000340" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003049] transition-colors inline-block text-center">
  Contact Our Team
</a>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
};

export default PaymentPlans;