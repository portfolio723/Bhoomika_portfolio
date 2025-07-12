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
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-700/20 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden pt-16 sm:pt-24 md:pt-28 pb-6 sm:pb-12 transition-colors duration-300 w-full max-w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Centered Content */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight break-words">
            Hi, I'm <span className="text-violet-600 dark:text-violet-400">Bhoomika</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 break-words max-w-4xl mx-auto">
            📍 Toranto, Canada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-md mx-auto">
  <button 
    onClick={scrollToWork}
    className="bg-violet-600 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg md:text-xl hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
  >
    View My Work
  </button>
  <button 
    onClick={scrollToContact}
    className="border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-lg font-medium text-base sm:text-lg md:text-xl hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:-translate-y-1 transition-all duration-300 w-full"
  >
    Schedule a Call
  </button>
</div>

        </div>
      </div>
    </section>
  );
};