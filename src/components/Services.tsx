import React from 'react';
import { Globe, ShoppingCart, Zap, Database, FileText, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Clean, SEO-optimized websites using WordPress or Framer",
    color: "text-blue-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Shopify/WooCommerce builds with product setup, payment & shipping",
    color: "text-green-600"
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "One-page, conversion-first funnels for creators, ads & campaigns",
    color: "text-yellow-600"
  },
  {
    icon: Database,
    title: "SaaS & Dashboards",
    description: "Full-stack tools with admin panels, CRMs, and login flows",
    color: "text-violet-600"
  },
  {
    icon: FileText,
    title: "Resume Tools",
    description: "Resume builders and personal branding platforms",
    color: "text-rose-600"
  },
  {
    icon: Settings,
    title: "Custom Tools",
    description: "Unique Notion tools, Figma exports, or no-code dashboards",
    color: "text-gray-600"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services I <span className="text-violet-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to launch, I provide end-to-end solutions for your digital needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-lg ${service.color === 'text-blue-600' ? 'bg-blue-100' : 
                service.color === 'text-green-600' ? 'bg-green-100' :
                service.color === 'text-yellow-600' ? 'bg-yellow-100' :
                service.color === 'text-violet-600' ? 'bg-violet-100' :
                service.color === 'text-rose-600' ? 'bg-rose-100' : 'bg-gray-100'
              } flex items-center justify-center mb-6`}>
                <service.icon className={`${service.color} w-8 h-8`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};