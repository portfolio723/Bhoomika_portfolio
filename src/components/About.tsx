import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            Empowering brands through 
            <span className="text-violet-600 dark:text-violet-400"> design, code & simplicity</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                I'm a Full-Stack Web Developer who transforms ideas into high-performing digital experiences. With a sharp eye for design and a deep understanding of code, I help startups, creators, and businesses launch fast, mobile-first, and conversion-optimized solutions — from responsive websites to scalable SaaS platforms, e-commerce stores, and personal branding pages.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Every project I build is driven by two core principles: clarity in design and precision in execution. I work with a powerful tech stack including React.js, Next.js, Framer, WordPress, Shopify, and Supabase. Whether it's:
              </p>
              
              <ul className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3">
                <li>• A clean business website</li>
                <li>• A feature-rich SaaS dashboard</li>
                <li>• A sales-driven Shopify store</li>
                <li>• Or a sleek personal portfolio</li>
              </ul>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I deliver systems that are not only beautiful — but blazing-fast, SEO-friendly, and built to scale.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-rose-100 dark:from-violet-900/30 dark:to-rose-900/30 rounded-2xl p-6 sm:p-8 md:p-10 text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-violet-300 to-rose-300 dark:from-violet-600 dark:to-rose-600 rounded-full mx-auto mb-4 sm:mb-6 md:mb-8 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400">BP</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">Bhoomika Patel</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};