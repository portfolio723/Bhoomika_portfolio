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
React.js, Next.js, Framer, WordPress, Shopify, and Supabase. Whether it’s:

- A clean business website
- A feature-rich SaaS dashboard
- A sales-driven Shopify store
- Or a sleek personal portfolio

I deliver systems that are not only beautiful — but blazing-fast, SEO-friendly, and built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">5+ Years</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Experience</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Happy Clients</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">100+</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Global</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Reach</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                My Journey
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                With over 5 years of experience in full-stack development, I've had the privilege 
                of working with clients across the globe, from startups to enterprise companies.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I specialize in creating scalable web applications using modern technologies like 
                React, Node.js, and cloud platforms. My approach combines technical expertise 
                with a deep understanding of user experience and business objectives.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Global Client Network
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};