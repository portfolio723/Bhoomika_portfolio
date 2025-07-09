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
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 flex items-center justify-center px-4 relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e0e7ff%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-violet-600">Bhoomika</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
            Full-stack developer and SaaS builder crafting scalable, beautiful web experiences.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Blending design with backend logic to deliver sites and platforms that are lightning-fast, SEO-smart, and beautifully responsive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToWork}
              className="bg-violet-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-violet-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-violet-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Right Content - Global Map */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="text-violet-600" size={24} />
              Global Client Network
            </h3>
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
              {/* World map background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Simplified continent shapes */}
                  {/* North America */}
                  <path d="M20 60 Q40 50 60 60 L80 70 Q90 80 85 90 L70 100 Q50 95 40 85 L25 75 Z" fill="#94a3b8" />
                  {/* South America */}
                  <path d="M55 110 Q65 105 70 115 L75 140 Q70 160 65 165 L55 160 Q50 145 52 130 Z" fill="#94a3b8" />
                  {/* Europe */}
                  <path d="M140 50 Q155 45 165 55 L170 65 Q165 70 155 68 L145 65 Z" fill="#94a3b8" />
                  {/* Africa */}
                  <path d="M150 80 Q165 75 170 90 L175 120 Q170 140 160 145 L150 140 Q145 115 148 95 Z" fill="#94a3b8" />
                  {/* Asia */}
                  <path d="M180 40 Q220 35 260 45 L280 60 Q275 80 260 85 L220 80 Q190 70 185 55 Z" fill="#94a3b8" />
                  {/* Australia */}
                  <path d="M280 130 Q300 125 320 130 L325 140 Q320 145 305 143 L285 140 Z" fill="#94a3b8" />
                </svg>
              </div>
              
              {/* Location pins matching the image */}
              {/* India */}
              <div className="absolute top-[45%] left-[62%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    India
                  </div>
                </div>
              </div>
              
              {/* USA */}
              <div className="absolute top-[35%] left-[15%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    USA
                  </div>
                </div>
              </div>
              
              {/* UK */}
              <div className="absolute top-[25%] left-[42%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    UK
                  </div>
                </div>
              </div>
              
              {/* Kenya */}
              <div className="absolute top-[55%] left-[52%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.6s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Kenya
                  </div>
                </div>
              </div>
              
              {/* Namibia */}
              <div className="absolute top-[75%] left-[45%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Namibia
                  </div>
                </div>
              </div>
              
              {/* Suriname */}
              <div className="absolute top-[50%] left-[28%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Suriname
                  </div>
                </div>
              </div>
              
              {/* Italy */}
              <div className="absolute top-[38%] left-[46%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.2s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Italy
                  </div>
                </div>
              </div>
              
              {/* France */}
              <div className="absolute top-[32%] left-[43%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.4s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    France
                  </div>
                </div>
              </div>
              
              {/* Germany */}
              <div className="absolute top-[28%] left-[47%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.6s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Germany
                  </div>
                </div>
              </div>
              
              {/* South Korea */}
              <div className="absolute top-[35%] left-[78%] group">
                <div className="relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.8s'}}></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    South Korea
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              Trusted by clients across India, USA, UK, Kenya, Namibia, Suriname, Italy, France, Germany, and South Korea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};