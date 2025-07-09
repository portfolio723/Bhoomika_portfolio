import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ClientManager.io",
    description: "A comprehensive SaaS platform for managing client relationships with automated workflows and analytics dashboard.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tech: ["React", "Supabase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "MovieVault",
    description: "A modern movie discovery platform with personalized recommendations and social features.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tech: ["React", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "The Great Perfumes",
    description: "E-commerce platform for luxury perfumes with advanced filtering and subscription management.",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
    tech: ["Shopify", "JavaScript", "Klaviyo"],
    liveUrl: "#",
    githubUrl: "#"
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
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium">
                    <ExternalLink size={16} />
                    Visit Live
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium">
                    <Github size={16} />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};