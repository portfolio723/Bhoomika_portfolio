import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sirplusgamer",
    company: "TechStart Inc.",
    text: "Great guy to work with. Highly recommended. Excellent communication, accurate service.",
    rating: 5,
    avatar: "SG"
  },
  {
    name: "Benhuebner",
    company: "E-commerce Solutions",
    text: "Well done! Thanks. Attention to detail and professional work.",
    rating: 5,
    avatar: "BH"
  },
  {
    name: "Designwithcalm",
    company: "Creative Agency",
    text: "Very good communication. Highly recommended to work with! Clear and smooth collaboration.",
    rating: 5,
    avatar: "DC"
  }
  {
    name: "Insp_Insights",
    company: "Creative Agency",
    text: "Very fast delivery and as described. Easy transaction. Speedy delivery, smooth experience.",
    rating: 5,
    avatar: "II"
  }
  {
    name: "Katastrophicbtz",
    company: "Creative Agency",
    text: "Great communication and goes beyond to help! Will definitely use again. Proactive and supportive.",
    rating: 5,
    avatar: "KS"
  }
  {
    name: "Michaelbrown479",
    company: "Creative Agency",
    text: "Order done as per request and on time. Thanks Bhumika! Prompt and accurate execution.",
    rating: 5,
    avatar: "MB"
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