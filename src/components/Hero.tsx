import React from 'react';

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
    <section id="home" className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-28 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 relative z-10 w-full">
        
        {/* LEFT - TEXT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            High-Impact Digital Solutions for Startups, Creators & Businesses
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Mercatique Consultant is a team of Full-Stack Developers, Web Developers, and SaaS Developers crafting high-impact digital solutions for startups, creators, coaches, and growing businesses.
          </p>

          <h2 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">We specialize in:</h2>
          <ul className="text-white/70 list-disc list-inside space-y-2 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            <li>Fast, mobile-first business websites</li>
            <li>High-converting e-commerce stores</li>
            <li>Scalable SaaS platforms and dashboards</li>
            <li>Sleek personal branding and portfolio pages</li>
          </ul>

          <p className="text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            Whether you're launching a startup, selling products, or building your digital presence — we deliver modern, conversion-optimized websites that are fast, SEO-friendly, and built to scale with your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button 
              onClick={scrollToContact}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
            >
              Get a Free Strategy Call
            </button>
            <button 
              onClick={scrollToWork}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold text-sm sm:text-base md:text-lg"
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT - MOCKUP IMAGES */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
              alt="Ethical Hacking Website UI"
              className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
              alt="Creative Innovation UI"
              className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
};