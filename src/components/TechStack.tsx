import React, { useEffect, useRef } from 'react';

const techStack = [
  { name: 'React', logo: '⚛️' },
  { name: 'Supabase', logo: '🗃️' },
  { name: 'Shopify', logo: '🛍️' },
  { name: 'Framer', logo: '🎨' },
  { name: 'WordPress', logo: '📝' },
  { name: 'Figma', logo: '🎯' },
  { name: 'Notion', logo: '📋' },
  { name: 'Tailwind', logo: '🎪' },
  { name: 'Klaviyo', logo: '📧' }
];

export const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 30;

    const autoScroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The tools I love and 
            <span className="text-violet-600"> integrate with frequently</span>
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ width: 'calc(200% + 2rem)' }}
          >
            {/* First set of tech stack */}
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 group flex-shrink-0 min-w-[120px]"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.logo}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 group flex-shrink-0 min-w-[120px]"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.logo}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};