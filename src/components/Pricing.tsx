import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Website",
    price: "$750 – $1,500",
    features: [
      "3 to 5 fully responsive pages",
      "Designed with mobile-first approach",
      "Contact form integration",
      "Basic on-page SEO"
    ],
    extraFeatures: [
      "Optimized for fast loading and performance",
      "Clean, professional design suited for brand identity", 
      "Basic privacy policy and terms (if required)"
    ],
    popular: false
  },
  {
    name: "Business Pro Website",
    price: "$1,500 – $2,800",
    features: [
      "Up to 10 web pages including blog setup",
      "Integrated Google Maps for physical locations",
      "WhatsApp or CTA button for quick contact",
      "Google Analytics or similar tools setup"
    ],
    extraFeatures: [
      "Enhanced on-page SEO",
      "Mobile and tablet optimized design",
      "Custom forms (contact, inquiry, newsletter)",
      "Professional, scalable layout for business growth"
    ],
    popular: true
  },
  {
    name: "E-Commerce Store",
    price: "$2,500 – $5,000",
    features: [
      "Shopify or WooCommerce platform setup",
      "10 to 30 product listings with descriptions and images",
      "Secure payment gateway integration (PayPal, Stripe, etc.)",
      "Shipping methods and zone configuration"
    ],
    extraFeatures: [
      "Discount code functionality and promo banner setup",
      "SEO for products and categories",
      "Mobile-optimized checkout process",
      "Optional blog/news section for marketing",
      "Inventory and order management setup"
    ],
    popular: false
  },
  {
    name: "Landing Page Funnel",
    price: "$600 – $1,200",
    features: [
      "Single-page design focused on conversion",
      "Lead capture form (connected to email or CRM)",
      "WhatsApp/chat button integration",
      "Basic analytics (Google Tag Manager, Facebook Pixel)"
    ],
    extraFeatures: [
      "Clear call-to-action buttons (book now, contact, subscribe)",
      "Fast-loading with minimal distractions",
      "Optimized for mobile and desktop ads",
      "Ideal for marketing campaigns or one-time offers"
    ],
    popular: false
  },
  {
    name: "SaaS MVP Build",
    price: "$6,000 – $11,000",
    features: [
      "Custom-built web application (MVP-level)",
      "Secure user authentication and login system",
      "Onboarding flow for new users",
      "Main dashboard with core functionalities"
    ],
    extraFeatures: [
      "Admin panel for backend management",
      "Scalable backend architecture",
      "Responsive UI for mobile and desktop",
      "Optional integration of APIs (e.g., Stripe, OpenAI, Mailchimp)",
      "Ideal for tech startups testing product-market fit"
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
    extraFeatures: [],
    popular: false
  }
];

export const Pricing = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transparent <span className="text-violet-600 dark:text-violet-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your project needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-violet-600 dark:ring-violet-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-violet-600 dark:bg-violet-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2 flex items-center justify-center gap-1">
                  {plan.price}
                  <Plus className="w-5 h-5" />
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="text-violet-600 dark:text-violet-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
                {showMore[index] && plan.extraFeatures.map((feature, featureIndex) => (
                  <li key={`extra-${featureIndex}`} className="flex items-start gap-3">
                    <Check className="text-violet-600 dark:text-violet-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
                {plan.extraFeatures.length > 0 && (
                  <li>
                    <button
                      onClick={() => toggleShowMore(index)}
                      className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 text-sm font-medium"
                    >
                      {showMore[index] ? 'Show Less' : 'Load More'}
                    </button>
                  </li>
                )}
              </ul>
              
              <button 
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-violet-600 dark:bg-violet-500 text-white hover:bg-violet-700 dark:hover:bg-violet-600'
                  : 'border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20'
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