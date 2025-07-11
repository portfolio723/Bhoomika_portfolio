import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MovieVault – Movie & TV Show Explorer",
    description: "Browse thousands of movies and TV shows. Includes search, rating, filtering, and watchlist features.",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*ogcZGfI4cnf9aKmJw_779w.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://movievault.io/",
    type: "Entertainment Web App"
  },
  {
    title: "ValueFile – Resume + Networking Tool",
    description: "Dynamic consultant-focused resume builder with version toggles, export, and custom layout logic.",
    image: "https://www.vl-file.com/static/media/auth-img1.b0dfe698c812d36bfe81.png?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://www.vl-file.com/",
    type: "Resume Optimization SaaS"
  },
  {
    title: "ClientManager.io – Client SaaS Platform",
    description: "Web-based CRM for project onboarding, task management, and client invoicing. Built for ease and speed.",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*VjmZvduliKrj4jR3fwsPzA.png?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://www.clientmanager.io/",
    type: "SaaS CRM Tool"
  },
  {
    title: "The Great Perfumes – Perfume eCommerce",
    description: "Modern storefront for 50+ perfume products with cart, shipping, coupon, and secure payment.",
    image: "https://thegreatperfumes.nl/wp-content/uploads/2023/08/Amber-Night-768x768.jpg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://thegreatperfumes.nl/",
    type: "E-commerce Website"
  },
  {
    title: "My Cookies & Cream – Bakery Business Website",
    description: "3-page website for a bakery brand. Includes photo gallery, location integration, and contact form.",
    image: "https://mycookiesandcream.com/wp-content/uploads/2024/03/vecteezy_homemade-ice-cream-sandwich-with-cookies_26771306-1536x861.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://mycookiesandcream.com/",
    type: "Static Business Website"
  },
  {
    title: "Elevate Chairs – Shopify Store",
    description: "Ergonomic chair eCommerce store with optimized product catalog, discount campaigns, and fast checkout.",
    image: "https://elevatechairs.com/cdn/shop/files/2.jpg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://elevatechairs.com/",
    type: "E-commerce Website"
  },
  {
    title: "Thera Hair – Shopify Haircare Store",
    description: "Haircare brand built on Shopify with branded UI, product reviews, bundles, and customer-first navigation.",
    image: "https://therahair.com/cdn/shop/files/therabrush_-_2025-04-09T023913.639_90b0cb1f-f5a5-4180-85fc-d5f2e9c7190d.png?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://therahair.com/",
    type: "Shopify Storefront"
  },
  {
    title: "Jaysha – Fashion & Beauty Shopify Store",
    description: "Trendy fashion and beauty store built with a bold layout, conversion-focused product sections, and email marketing integration.",
    image: "https://jaysha.us/images/about-1.jpg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://jaysha.us/",
    type: "Shopify Store"
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Some of the projects I 
            <span className="text-violet-600 dark:text-violet-400"> loved building</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="mt-auto">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    Visit Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};