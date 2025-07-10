import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    text: "Bhoomika transformed our vision into a stunning, functional website. Her attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    company: "E-commerce Solutions",
    text: "The Shopify store Bhoomika built for us increased our conversion rate by 40%. Incredible work and professional service throughout.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    text: "Working with Bhoomika was a game-changer. She delivered a SaaS platform that perfectly matched our needs and timeline.",
    rating: 5,
    avatar: "ER"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Clients <span className="text-violet-600 dark:text-violet-400">Stay</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative"
            >
              <Quote className="text-violet-200 dark:text-violet-800 w-16 h-16 absolute top-4 right-4 opacity-50" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};