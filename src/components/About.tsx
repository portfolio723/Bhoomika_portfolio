import React from 'react';

export const About = () => {
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 break-words px-2">
            Empowering brands through 
            <span className="text-violet-600 dark:text-violet-400"> design, code & simplicity</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 w-full">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 break-words">
                I'm a Full-Stack Web Developer who transforms ideas into high-performing digital experiences. With a sharp eye for design and a deep understanding of code, I help startups, creators, and businesses launch fast, mobile-first, and conversion-optimized solutions — from responsive websites to scalable SaaS platforms, e-commerce stores, and personal branding pages.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 break-words">
                Every project I build is driven by two core principles: clarity in design and precision in execution. I work with a powerful tech stack including React.js, Next.js, Framer, WordPress, Shopify, and Supabase. Whether it's:
              </p>
              
              <ul className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 space-y-1 sm:space-y-2 break-words">
                <li>• A clean business website</li>
                <li>• A feature-rich SaaS dashboard</li>
                <li>• A sales-driven Shopify store</li>
                <li>• Or a sleek personal portfolio</li>
              </ul>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed break-words">
                I deliver systems that are not only beautiful — but blazing-fast, SEO-friendly, and built to scale.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-rose-100 dark:from-violet-900/30 dark:to-rose-900/30 rounded-2xl p-4 sm:p-6 md:p-8 text-center mx-2 sm:mx-0 w-full max-w-sm sm:max-w-md mx-auto">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-violet-300 to-rose-300 dark:from-violet-600 dark:to-rose-600 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-600 dark:text-violet-400">BP</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 break-words">Bhoomika Patel</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};