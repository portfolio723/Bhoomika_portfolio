import React from 'react';

export const About = () => {
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
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a <strong>Full-Stack Web Developer</strong> who transforms ideas into high-performing digital experiences. With a sharp eye for design and a deep understanding of code, I help <strong>startups, creators, and businesses</strong> launch fast, mobile-first, and conversion-optimized solutions — from <strong>responsive websites</strong> to <strong>scalable SaaS platforms</strong>, <strong>e-commerce stores</strong>, and <strong>personal branding pages</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every project I build is driven by two core principles: <strong>clarity in design and precision in execution</strong>. I work with a powerful tech stack including <strong>React.js, Next.js, Framer, WordPress, Shopify, and Supabase</strong>. Whether it's:
              </p>
              
              <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                <li>• A clean business website</li>
                <li>• A feature-rich SaaS dashboard</li>
                <li>• A sales-driven Shopify store</li>
                <li>• Or a sleek personal portfolio</li>
              </ul>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I deliver systems that are not only beautiful — but <strong>blazing-fast, SEO-friendly, and built to scale</strong>.
              </p>
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