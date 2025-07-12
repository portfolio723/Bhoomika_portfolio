import React from 'react';
import { MapPin, Users, Globe, Award } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About <span className="text-violet-600 dark:text-violet-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a Full-Stack Web Developer who transforms ideas into high-performing digital experiences. With a sharp eye for design and a deep understanding of code, I help startups, creators, and businesses launch fast, mobile-first, and conversion-optimized solutions — from responsive websites to scalable SaaS platforms, e-commerce stores, and personal branding pages.

Every project I build is driven by two core principles: clarity in design and precision in execution. I work with a powerful tech stack including :
React.js, Next.js, Framer, WordPress, Shopify, and Supabase. Whether it's:

- A clean business website
- A feature-rich SaaS dashboard
- A sales-driven Shopify store
- Or a sleek personal portfolio

I deliver systems that are not only beautiful — but blazing-fast, SEO-friendly, and built to scale.
          </p>
        </div>

        
        {/* Global Client Network Map */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
            <MapPin className="text-violet-600 dark:text-violet-400" size={24} />
            Global Client Network
          </h3>
          <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden mb-4 sm:mb-6 w-full">
            <img 
              src="/image 1 copy.jpg" 
              alt="Global Client Network Map" 
              className="w-full h-full object-contain max-w-full"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea. 
            I believe exceptional digital products are built through collaboration, trust, and attention to detail — and that's exactly what I bring to every client relationship.
          </p>
        </div>
      </div>
    </section>
  );
};