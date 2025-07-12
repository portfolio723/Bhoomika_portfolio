import React from 'react';
import { Globe, ShoppingCart, Zap, Database, FileText, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Starter Website",
    description: "Responsive 3–5 page sites with contact form, SEO, and fast performance. Best for local businesses and solopreneurs.",
    color: "text-blue-600"
  },
  {
    icon: ShoppingCart,
    title: "Business Pro Website",
    description: "Up to 10 pages with blog, analytics, WhatsApp integration, and on-page SEO. Ideal for consultants and growing teams.",
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
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 break-words px-2">
            Services I <span className="text-violet-600 dark:text-violet-400">Offer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto break-words px-2">
            From idea to launch, I provide end-to-end solutions for your digital needs
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg ${service.color === 'text-blue-600' ? 'bg-blue-100' : 
                service.color === 'text-green-600' ? 'bg-green-100' :
                service.color === 'text-yellow-600' ? 'bg-yellow-100' :
                service.color === 'text-violet-600' ? 'bg-violet-100' :
                service.color === 'text-rose-600' ? 'bg-rose-100' : 'bg-gray-100'
              } flex items-center justify-center mb-4 sm:mb-6`}>
                <service.icon className={`${service.color} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 break-words">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};