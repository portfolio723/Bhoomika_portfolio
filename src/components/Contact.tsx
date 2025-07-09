import React from 'react';
import { Mail, Phone, Linkedin, Calendar, MapPin } from 'lucide-react';

export const Contact = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-violet-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're ready to launch or just exploring ideas, I'd love to connect.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Mail className="text-violet-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a href="mailto:itsbhoomikapatel@gmail.com" className="text-gray-600 hover:text-violet-600 transition-colors">
                  itsbhoomikapatel@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Phone className="text-violet-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <a href="tel:+13683993448" className="text-gray-600 hover:text-violet-600 transition-colors">
                  +1 (368) 399-3448
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Linkedin className="text-violet-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/bpmrc/" className="text-gray-600 hover:text-violet-600 transition-colors">
                  linkedin.com/in/bpmrc
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <Calendar className="text-violet-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-900">Schedule a Call</h3>
                <a href="https://calendly.com/d/cs2w-gqs-qg2/30-minute-meeting" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Book a 30-minute meeting
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
            <p className="text-violet-100 mb-8">
              Let's discuss how we can bring your vision to life with modern web technologies and beautiful design.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://calendly.com/d/cs2w-gqs-qg2/30-minute-meeting', '_blank')}
                className="w-full bg-white text-violet-600 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Schedule Discovery Call
              </button>
              <button 
                onClick={scrollToWork}
                className="w-full border-2 border-white text-white py-4 rounded-lg font-medium hover:bg-white hover:text-violet-600 transition-colors duration-300"
              >
                View Portfolio
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-violet-400">
              <div className="flex items-center gap-2 text-violet-100">
                <MapPin size={20} />
                <span>Based in Toronto, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};