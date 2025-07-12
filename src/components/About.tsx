import React from 'react';
import { MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* About Me Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            About <span className="text-violet-600 dark:text-violet-400">Me</span>
          </h2>
        </div>

        {/* About Content - 3 Paragraphs */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="space-y-6 sm:space-y-8 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Full-Stack Web Developer who transforms ideas into high-performing digital experiences. With a sharp eye for design and a deep understanding of code, I help startups, creators, and businesses launch fast, mobile-first, and conversion-optimized solutions.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              From responsive websites to scalable SaaS platforms, e-commerce stores, and personal branding pages — every project I build is driven by two core principles: clarity in design and precision in execution.
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I work with a powerful tech stack including React.js, Next.js, Framer, WordPress, Shopify, and Supabase to deliver systems that are not only beautiful — but blazing-fast, SEO-friendly, and built to scale.
            </p>
          </div>
        </div>

        {/* Global Client Network Map - Centered */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <MapPin className="text-violet-600 dark:text-violet-400" size={32} />
              Global Client Network
            </h3>
          </div>
          
          <div className="flex justify-center mb-4 sm:mb-6">
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
              Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea. 
              I believe exceptional digital products are built through collaboration, trust, and attention to detail — and that's exactly what I bring to every client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};