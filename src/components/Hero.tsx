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
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/20 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            Hi, I'm <span className="text-violet-600 dark:text-violet-400">Bhoomika</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8">
            Full-stack developer and SaaS builder crafting scalable, beautiful web experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
            Blending design with backend logic to deliver sites and platforms that are lightning-fast, SEO-smart, and beautifully responsive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button 
              onClick={scrollToWork}
              className="bg-violet-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-medium text-base sm:text-lg md:text-xl hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-medium text-base sm:text-lg md:text-xl hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Right Content - Global Client Network */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl max-w-lg w-full">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center gap-3">
              <MapPin className="text-violet-600 dark:text-violet-400" size={24} />
              Global Client Network
            </h3>
            <div className="relative h-48 sm:h-56 md:h-72 rounded-lg overflow-hidden mb-4 sm:mb-6">
              <img 
                src="/image 1 copy.jpg" 
                alt="Global Client Network Map" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};