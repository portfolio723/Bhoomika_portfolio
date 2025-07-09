import React from 'react';
import { Download, Users } from 'lucide-react';

export const About = () => {
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
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering brands through 
            <span className="text-violet-600"> design, code & simplicity</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-2 md:px-0">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Bhoomika Patel — a full-stack developer with a strong focus on building web solutions that align design with technology. My work spans from business websites and e-commerce stores to full-scale SaaS platforms and personal branding tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're an early-stage founder or an established brand, I build platforms that scale beautifully — inside and out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-violet-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center">
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-lg font-medium hover:bg-violet-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Users size={20} />
                Hire Me
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-rose-100 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-violet-300 to-rose-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-violet-600">BP</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bhoomika Patel</h3>
              <p className="text-gray-600">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};