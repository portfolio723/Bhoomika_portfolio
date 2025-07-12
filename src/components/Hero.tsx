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
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/20 flex items-center justify-center px-3 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 transition-colors duration-300 w-full max-w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight break-words">
            Hi, I'm <span className="text-violet-600 dark:text-violet-400">Bhoomika</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 break-words">
            Full-stack developer and SaaS builder crafting scalable, beautiful web experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
            <button 
              onClick={scrollToWork}
              className="bg-violet-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Right Content - Global Client Network */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl max-w-sm sm:max-w-md lg:max-w-lg w-full mx-2 sm:mx-0">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2 break-words">
              <MapPin className="text-violet-600 dark:text-violet-400" size={24} />
              Trusted Globally
            </h3>
            <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden mb-3 sm:mb-4 w-full">
              <img 
                src="/image 1 copy.jpg" 
                alt="Global Client Network Map" 
                className="w-full h-full object-contain max-w-full"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed break-words">
              Trusted by clients worldwide, I believe exceptional digital products are built through collaboration, trust, and attention to detail  and that’s exactly what I bring to every client relationship. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};