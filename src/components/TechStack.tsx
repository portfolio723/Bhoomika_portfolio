import React, { useEffect, useRef } from 'react';

const techStack = [
  { name: 'Figma', logo: 'https://img.icons8.com/color/48/figma--v1.png' },
  { name: 'Canva', logo: 'https://img.icons8.com/color/48/canva.png' },
  { name: 'Adobe XD', logo: 'https://img.icons8.com/color/48/adobe-xd--v1.png' },
  { name: 'HTML5', logo: 'https://img.icons8.com/color/48/html-5--v1.png' },
  { name: 'CSS3', logo: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', logo: 'https://img.icons8.com/color/48/javascript--v1.png' },
  { name: 'Bootstrap', logo: 'https://img.icons8.com/color/48/bootstrap.png' },
  { name: 'Tailwind CSS', logo: 'https://img.icons8.com/color/48/tailwindcss.png' },
  { name: 'React.js', logo: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Next.js', logo: 'https://img.icons8.com/color/48/nextjs.png' },
  { name: 'Webflow', logo: 'https://img.icons8.com/color/48/webflow.png' },
  { name: 'WordPress', logo: 'https://img.icons8.com/color/48/wordpress.png' },
  { name: 'Shopify', logo: 'https://img.icons8.com/color/48/shopify.png' },
  { name: 'Stripe', logo: 'https://img.icons8.com/color/48/stripe.png' },
  { name: 'PayPal', logo: 'https://img.icons8.com/color/48/paypal.png' },
  { name: 'Google Analytics', logo: 'https://img.icons8.com/color/48/google-analytics.png' },
  { name: 'Netlify', logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png' },
  { name: 'Vercel', logo: 'https://img.icons8.com/color/48/vercel.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/color/48/mongodb.png' },
  { name: 'PostgreSQL', logo: 'https://img.icons8.com/color/48/postgreesql.png' },
  { name: 'Firebase', logo: 'https://img.icons8.com/color/48/firebase.png' },
  { name: 'Supabase', logo: 'https://img.icons8.com/color/48/supabase.png' }
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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech <span className="text-violet-600 dark:text-violet-400"> Stack</span>
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
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 group flex-shrink-0 min-w-[120px]"
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 group flex-shrink-0 min-w-[120px]"
              >
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};