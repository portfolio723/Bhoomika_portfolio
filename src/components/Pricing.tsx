import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Website",
    price: "$750 – $1,500",
    features: [
      "3–5 Responsive Pages",
      "Mobile-first Design",
      "Basic SEO Optimization",
      "Contact Form Integration"
    ],
    popular: false
  },
  {
    name: "Business Pro Website",
    price: "$1,500 – $2,800",
    features: [
      "Up to 10 Custom Pages",
      "Blog Setup & Analytics",
      "CTA (WhatsApp, Email, Maps)",
      "On-Page SEO"
    ],
    popular: true
  },
  {
    name: "E-Commerce Store",
    price: "$2,500 – $5,000",
    features: [
      "Shopify/WooCommerce Setup",
      "Payment & Shipping Integration",
      "10–30 Products",
      "Coupon & Checkout Optimization"
    ],
    popular: false
  },
  {
    name: "Landing Page Funnel",
    price: "$600 – $1,200",
    features: [
      "High-Conversion Page",
      "Lead Capture Form",
      "CTA + Chat Button",
      "Basic Analytics"
    ],
    popular: false
  },
  {
    name: "SaaS MVP Build",
    price: "$6,000 – $11,000",
    features: [
      "Full Login/Auth System",
      "Admin Dashboard & CRM",
      "Scalable Backend (Node/Supabase)",
      "Onboarding Workflows"
    ],
    popular: false
  },
  {
    name: "Resume/Bio Platform",
    price: "$400 – $800",
    features: [
      "Personal Portfolio or Bio Site",
      "Multi-section Navigation",
      "Figma/Notion-based Layout",
      "Export & Share Options"
    ],
    popular: false
  }
];

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent <span className="text-violet-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your project needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-violet-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-violet-600 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm">CAD</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-violet-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-violet-600 text-white hover:bg-violet-700'
                  : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50'
              }`}
              >
                Start Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};