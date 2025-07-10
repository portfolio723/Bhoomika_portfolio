import React from 'react';
import { Mail, Phone, Linkedin, Calendar, MapPin, Upload } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-violet-600 dark:text-violet-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're ready to launch or just exploring ideas, I'd love to connect.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Inquiry Form</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+264">🇳🇦 +264</option>
                    <option value="+597">🇸🇷 +597</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project-details" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="project-details"
                  name="project-details"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Files (PDF or any file)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-violet-600 transition-colors bg-white dark:bg-gray-800">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Drop files here or click to upload
                      </span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                    </label>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">PDF, DOC, PNG, JPG up to 10MB</p>
                </div>
              </div>
              
              <div>
                <label htmlFor="reference-link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reference Link
                </label>
                <input
                  type="url"
                  id="reference-link"
                  name="reference-link"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="https://example.com (inspiration or reference)"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Estimated Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="$1,000 - $5,000 or your budget range"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-violet-700 transition-colors duration-300"
              >
                Submit Project Inquiry
              </button>
            </form>
            
            {/* Ready to start your project section moved here */}
            <div className="mt-12 bg-violet-600 rounded-2xl p-8 text-white">
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
            
            {/* Social Icons Row */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:itsbhoomikapatel@gmail.com"
                  className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Email
                  </span>
                </a>
                
                <a
                  href="tel:+13683993448"
                  className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                  title="Phone"
                >
                  <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Phone
                  </span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/bpmrc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>
                
                <a
                  href="https://calendly.com/d/cs2w-gqs-qg2/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                  title="Calendly"
                >
                  <Calendar className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Calendly
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">itsbhoomikapatel@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+1 (368) 399-3448</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};