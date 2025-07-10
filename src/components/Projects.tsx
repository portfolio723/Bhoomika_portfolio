import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "🎮 MovieVault – Movie & TV Show Explorer",
    description: "Browse thousands of movies and TV shows. Includes search, rating, filtering, and watchlist features.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://movievault.io/",
    type: "Entertainment Web App"
  },
  {
    title: "📝 ValueFile – Resume + Networking Tool",
    description: "Dynamic consultant-focused resume builder with version toggles, export, and custom layout logic.",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://www.vl-file.com/",
    type: "Resume Optimization SaaS"
  },
  {
    title: "🡤 ClientManager.io – Client SaaS Platform",
    description: "Web-based CRM for project onboarding, task management, and client invoicing. Built for ease and speed.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://www.clientmanager.io/",
    type: "SaaS CRM Tool"
  },
  {
    title: "🌸 The Great Perfumes – Perfume eCommerce",
    description: "Modern storefront for 50+ perfume products with cart, shipping, coupon, and secure payment.",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://thegreatperfumes.nl/",
    type: "E-commerce Website"
  },
  {
    title: "🍚 My Cookies & Cream – Bakery Business Website",
    description: "3-page website for a bakery brand. Includes photo gallery, location integration, and contact form.",
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://mycookiesandcream.com/",
    type: "Static Business Website"
  },
  {
    title: "🎒 Elevate Chairs – Shopify Store",
    description: "Ergonomic chair eCommerce store with optimized product catalog, discount campaigns, and fast checkout.",
    image: "https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://elevatechairs.com/",
    type: "E-commerce Website"
  },
  {
    title: "🍄 Thera Hair – Shopify Haircare Store",
    description: "Haircare brand built on Shopify with branded UI, product reviews, bundles, and customer-first navigation.",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://therahair.com/",
    type: "Shopify Storefront"
  },
  {
    title: "💅 Jaysha – Fashion & Beauty Shopify Store",
    description: "Trendy fashion and beauty store built with a bold layout, conversion-focused product sections, and email marketing integration.",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    liveUrl: "https://jaysha.us/",
    type: "Shopify Store"
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some of the projects I 
            <span className="text-violet-600"> loved building</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col"
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
                  <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="mt-auto">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium text-sm"
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