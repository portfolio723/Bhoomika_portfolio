import React from 'react';
import { Globe, FileText, ShoppingCart, Rocket, Code, ServerCog } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Starter Website",
    icon: Globe,
    description: "Responsive 3–5 page sites with contact form, SEO, and fast performance. Best for local businesses and solopreneurs.",
    angle: 0,
  },
  {
    id: 2,
    title: "Business Pro Website", 
    icon: FileText,
    description: "Up to 10 pages with blog, analytics, WhatsApp integration, and on-page SEO. Ideal for consultants and growing teams.",
    angle: 60,
  },
  {
    id: 3,
    title: "E-Commerce Store",
    icon: ShoppingCart,
    description: "Setup with Shopify/WooCommerce, 10–30 products, secure payments, discount codes, and optimized mobile checkout.",
    angle: 120,
  },
  {
    id: 4,
    title: "Landing Page Funnel",
    icon: Rocket,
    description: "High-converting single-page sites with lead forms, chat integration, and analytics. Best for ads, creators, and coaches.",
    angle: 180,
  },
  {
    id: 5,
    title: "SaaS MVP Build",
    icon: Code,
    description: "Custom web app with login/auth, onboarding, dashboard, and scalable backend. Built for early-stage startups.",
    angle: 240,
  },
  {
    id: 6,
    title: "Web Maintenance",
    icon: ServerCog,
    description: "Ongoing optimization, security updates, performance monitoring, and feature enhancements for existing websites.",
    angle: 300,
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1e1b4b] via-[#2c2c6c] to-[#3b0764] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Services We <span className="text-violet-400">Offer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            From idea to launch, we provide end-to-end solutions for your digital needs
          </p>
        </div>

        {/* Radial Services Layout */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Central Globe Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
            </div>
            
            {/* Orbital rings */}
            <div className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] border border-white/10 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
          </div>

          {/* Orbiting Service Icons */}
          {services.map((service, index) => {
            const radius = window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 150 : window.innerWidth < 1024 ? 200 : 240;
            const x = Math.cos((service.angle * Math.PI) / 180) * radius;
            const y = Math.sin((service.angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={service.id}
                className="absolute group cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                {/* Connection line to center */}
                <div 
                  className="absolute w-px bg-gradient-to-r from-violet-400/50 to-transparent origin-right"
                  style={{
                    height: `${radius}px`,
                    transform: `rotate(${service.angle + 180}deg)`,
                    transformOrigin: 'right center',
                    right: '50%',
                    top: '50%',
                    marginTop: '-0.5px'
                  }}
                ></div>

                {/* Service Icon Circle */}
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Service Label */}
                  <div className="absolute top-full mt-2 sm:mt-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap">
                      <p className="text-xs sm:text-sm font-medium text-white">{service.title}</p>
                    </div>
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-2 sm:mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-xl max-w-xs">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{service.title}</h4>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid for Mobile Fallback */}
        <div className="block sm:hidden mt-12">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};