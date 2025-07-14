import React from 'react';
import { MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        

        
        {/* Global Client Network Map - Centered */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg">
          <div className="text-center mb-2 sm:mb-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <MapPin className="text-violet-600 dark:text-violet-400" size={32} />
              Trusted Globally
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-2">
              I’ve successfully delivered projects in 11 countries, including:
            </p>
          </div>
          
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="relative w-full max-w-2xl h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <img 
                src="/image 1 copy.jpg" 
                alt="Global Client Network Map" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Trusted by clients worldwide, I believe exceptional digital products are built through collaboration, trust, and attention to detail  and that’s exactly what I bring to every client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};