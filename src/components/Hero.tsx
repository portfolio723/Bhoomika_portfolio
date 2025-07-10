import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
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
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 flex items-center justify-center px-4 md:px-6 lg:px-8 relative overflow-hidden pt-20 md:pt-24 pb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left px-2 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-violet-600">Bhoomika</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Full-stack developer and SaaS builder crafting scalable, beautiful web experiences.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Blending design with backend logic to deliver sites and platforms that are lightning-fast, SEO-smart, and beautifully responsive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2 sm:px-0">
            <button 
              onClick={scrollToWork}
              className="bg-violet-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-violet-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Call
            </button>
          </div>
          
          <div className="mt-12 lg:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-violet-600" size={24} />
                Global Client Network
              </h3>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="/image 1 copy.jpg" 
                  alt="Global Client Network Map" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mt-4 text-center">
                Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};