import React from 'react';
import { Mail, Phone, Linkedin, Calendar, Upload } from 'lucide-react';

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
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-violet-600 dark:text-violet-400">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Whether you're ready to launch or just exploring ideas, I'd love to connect.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Inquiry Form</h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
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
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number
                </label>
                <div className="flex">
                  <select className="px-2 md:px-3 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base max-h-40 overflow-y-auto">
                    <option value="+93">🇦🇫 +93 Afghanistan</option>
                    <option value="+355">🇦🇱 +355 Albania</option>
                    <option value="+213">🇩🇿 +213 Algeria</option>
                    <option value="+1">🇺🇸 +1 American Samoa</option>
                    <option value="+376">🇦🇩 +376 Andorra</option>
                    <option value="+244">🇦🇴 +244 Angola</option>
                    <option value="+1">🇦🇮 +1 Anguilla</option>
                    <option value="+1">🇦🇬 +1 Antigua and Barbuda</option>
                    <option value="+54">🇦🇷 +54 Argentina</option>
                    <option value="+374">🇦🇲 +374 Armenia</option>
                    <option value="+297">🇦🇼 +297 Aruba</option>
                    <option value="+61">🇦🇺 +61 Australia</option>
                    <option value="+43">🇦🇹 +43 Austria</option>
                    <option value="+994">🇦🇿 +994 Azerbaijan</option>
                    <option value="+1">🇧🇸 +1 Bahamas</option>
                    <option value="+973">🇧🇭 +973 Bahrain</option>
                    <option value="+880">🇧🇩 +880 Bangladesh</option>
                    <option value="+1">🇧🇧 +1 Barbados</option>
                    <option value="+375">🇧🇾 +375 Belarus</option>
                    <option value="+32">🇧🇪 +32 Belgium</option>
                    <option value="+501">🇧🇿 +501 Belize</option>
                    <option value="+229">🇧🇯 +229 Benin</option>
                    <option value="+1">🇧🇲 +1 Bermuda</option>
                    <option value="+975">🇧🇹 +975 Bhutan</option>
                    <option value="+591">🇧🇴 +591 Bolivia</option>
                    <option value="+387">🇧🇦 +387 Bosnia and Herzegovina</option>
                    <option value="+267">🇧🇼 +267 Botswana</option>
                    <option value="+55">🇧🇷 +55 Brazil</option>
                    <option value="+1">🇻🇬 +1 British Virgin Islands</option>
                    <option value="+673">🇧🇳 +673 Brunei</option>
                    <option value="+359">🇧🇬 +359 Bulgaria</option>
                    <option value="+226">🇧🇫 +226 Burkina Faso</option>
                    <option value="+257">🇧🇮 +257 Burundi</option>
                    <option value="+855">🇰🇭 +855 Cambodia</option>
                    <option value="+237">🇨🇲 +237 Cameroon</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+1">🇨🇦 +1 Canada</option>
                    <option value="+238">🇨🇻 +238 Cape Verde</option>
                    <option value="+1">🇰🇾 +1 Cayman Islands</option>
                    <option value="+236">🇨🇫 +236 Central African Republic</option>
                    <option value="+235">🇹🇩 +235 Chad</option>
                    <option value="+56">🇨🇱 +56 Chile</option>
                    <option value="+86">🇨🇳 +86 China</option>
                    <option value="+57">🇨🇴 +57 Colombia</option>
                    <option value="+269">🇰🇲 +269 Comoros</option>
                    <option value="+242">🇨🇬 +242 Congo</option>
                    <option value="+682">🇨🇰 +682 Cook Islands</option>
                    <option value="+506">🇨🇷 +506 Costa Rica</option>
                    <option value="+385">🇭🇷 +385 Croatia</option>
                    <option value="+53">🇨🇺 +53 Cuba</option>
                    <option value="+357">🇨🇾 +357 Cyprus</option>
                    <option value="+420">🇨🇿 +420 Czech Republic</option>
                    <option value="+45">🇩🇰 +45 Denmark</option>
                    <option value="+253">🇩🇯 +253 Djibouti</option>
                    <option value="+1">🇩🇲 +1 Dominica</option>
                    <option value="+1">🇩🇴 +1 Dominican Republic</option>
                    <option value="+593">🇪🇨 +593 Ecuador</option>
                    <option value="+20">🇪🇬 +20 Egypt</option>
                    <option value="+503">🇸🇻 +503 El Salvador</option>
                    <option value="+240">🇬🇶 +240 Equatorial Guinea</option>
                    <option value="+291">🇪🇷 +291 Eritrea</option>
                    <option value="+372">🇪🇪 +372 Estonia</option>
                    <option value="+251">🇪🇹 +251 Ethiopia</option>
                    <option value="+679">🇫🇯 +679 Fiji</option>
                    <option value="+358">🇫🇮 +358 Finland</option>
                    <option value="+33">🇫🇷 +33 France</option>
                    <option value="+241">🇬🇦 +241 Gabon</option>
                    <option value="+220">🇬🇲 +220 Gambia</option>
                    <option value="+995">🇬🇪 +995 Georgia</option>
                    <option value="+49">🇩🇪 +49 Germany</option>
                    <option value="+233">🇬🇭 +233 Ghana</option>
                    <option value="+30">🇬🇷 +30 Greece</option>
                    <option value="+1">🇬🇩 +1 Grenada</option>
                    <option value="+502">🇬🇹 +502 Guatemala</option>
                    <option value="+224">🇬🇳 +224 Guinea</option>
                    <option value="+245">🇬🇼 +245 Guinea-Bissau</option>
                    <option value="+592">🇬🇾 +592 Guyana</option>
                    <option value="+509">🇭🇹 +509 Haiti</option>
                    <option value="+504">🇭🇳 +504 Honduras</option>
                    <option value="+852">🇭🇰 +852 Hong Kong</option>
                    <option value="+36">🇭🇺 +36 Hungary</option>
                    <option value="+354">🇮🇸 +354 Iceland</option>
                    <option value="+91">🇮🇳 +91 India</option>
                    <option value="+62">🇮🇩 +62 Indonesia</option>
                    <option value="+98">🇮🇷 +98 Iran</option>
                    <option value="+964">🇮🇶 +964 Iraq</option>
                    <option value="+353">🇮🇪 +353 Ireland</option>
                    <option value="+972">🇮🇱 +972 Israel</option>
                    <option value="+39">🇮🇹 +39 Italy</option>
                    <option value="+225">🇨🇮 +225 Ivory Coast</option>
                    <option value="+1">🇯🇲 +1 Jamaica</option>
                    <option value="+81">🇯🇵 +81 Japan</option>
                    <option value="+962">🇯🇴 +962 Jordan</option>
                    <option value="+7">🇰🇿 +7 Kazakhstan</option>
                    <option value="+254">🇰🇪 +254 Kenya</option>
                    <option value="+686">🇰🇮 +686 Kiribati</option>
                    <option value="+965">🇰🇼 +965 Kuwait</option>
                    <option value="+996">🇰🇬 +996 Kyrgyzstan</option>
                    <option value="+856">🇱🇦 +856 Laos</option>
                    <option value="+371">🇱🇻 +371 Latvia</option>
                    <option value="+961">🇱🇧 +961 Lebanon</option>
                    <option value="+266">🇱🇸 +266 Lesotho</option>
                    <option value="+231">🇱🇷 +231 Liberia</option>
                    <option value="+218">🇱🇾 +218 Libya</option>
                    <option value="+423">🇱🇮 +423 Liechtenstein</option>
                    <option value="+370">🇱🇹 +370 Lithuania</option>
                    <option value="+352">🇱🇺 +352 Luxembourg</option>
                    <option value="+853">🇲🇴 +853 Macau</option>
                    <option value="+389">🇲🇰 +389 Macedonia</option>
                    <option value="+261">🇲🇬 +261 Madagascar</option>
                    <option value="+265">🇲🇼 +265 Malawi</option>
                    <option value="+60">🇲🇾 +60 Malaysia</option>
                    <option value="+960">🇲🇻 +960 Maldives</option>
                    <option value="+223">🇲🇱 +223 Mali</option>
                    <option value="+356">🇲🇹 +356 Malta</option>
                    <option value="+692">🇲🇭 +692 Marshall Islands</option>
                    <option value="+222">🇲🇷 +222 Mauritania</option>
                    <option value="+230">🇲🇺 +230 Mauritius</option>
                    <option value="+52">🇲🇽 +52 Mexico</option>
                    <option value="+691">🇫🇲 +691 Micronesia</option>
                    <option value="+373">🇲🇩 +373 Moldova</option>
                    <option value="+377">🇲🇨 +377 Monaco</option>
                    <option value="+976">🇲🇳 +976 Mongolia</option>
                    <option value="+382">🇲🇪 +382 Montenegro</option>
                    <option value="+212">🇲🇦 +212 Morocco</option>
                    <option value="+258">🇲🇿 +258 Mozambique</option>
                    <option value="+95">🇲🇲 +95 Myanmar</option>
                    <option value="+264">🇳🇦 +264 Namibia</option>
                    <option value="+674">🇳🇷 +674 Nauru</option>
                    <option value="+977">🇳🇵 +977 Nepal</option>
                    <option value="+31">🇳🇱 +31 Netherlands</option>
                    <option value="+64">🇳🇿 +64 New Zealand</option>
                    <option value="+505">🇳🇮 +505 Nicaragua</option>
                    <option value="+227">🇳🇪 +227 Niger</option>
                    <option value="+234">🇳🇬 +234 Nigeria</option>
                    <option value="+850">🇰🇵 +850 North Korea</option>
                    <option value="+47">🇳🇴 +47 Norway</option>
                    <option value="+968">🇴🇲 +968 Oman</option>
                    <option value="+92">🇵🇰 +92 Pakistan</option>
                    <option value="+680">🇵🇼 +680 Palau</option>
                    <option value="+507">🇵🇦 +507 Panama</option>
                    <option value="+675">🇵🇬 +675 Papua New Guinea</option>
                    <option value="+595">🇵🇾 +595 Paraguay</option>
                    <option value="+51">🇵🇪 +51 Peru</option>
                    <option value="+63">🇵🇭 +63 Philippines</option>
                    <option value="+48">🇵🇱 +48 Poland</option>
                    <option value="+351">🇵🇹 +351 Portugal</option>
                    <option value="+974">🇶🇦 +974 Qatar</option>
                    <option value="+40">🇷🇴 +40 Romania</option>
                    <option value="+7">🇷🇺 +7 Russia</option>
                    <option value="+250">🇷🇼 +250 Rwanda</option>
                    <option value="+1">🇰🇳 +1 Saint Kitts and Nevis</option>
                    <option value="+1">🇱🇨 +1 Saint Lucia</option>
                    <option value="+1">🇻🇨 +1 Saint Vincent and the Grenadines</option>
                    <option value="+685">🇼🇸 +685 Samoa</option>
                    <option value="+378">🇸🇲 +378 San Marino</option>
                    <option value="+239">🇸🇹 +239 Sao Tome and Principe</option>
                    <option value="+966">🇸🇦 +966 Saudi Arabia</option>
                    <option value="+221">🇸🇳 +221 Senegal</option>
                    <option value="+381">🇷🇸 +381 Serbia</option>
                    <option value="+248">🇸🇨 +248 Seychelles</option>
                    <option value="+232">🇸🇱 +232 Sierra Leone</option>
                    <option value="+65">🇸🇬 +65 Singapore</option>
                    <option value="+421">🇸🇰 +421 Slovakia</option>
                    <option value="+386">🇸🇮 +386 Slovenia</option>
                    <option value="+677">🇸🇧 +677 Solomon Islands</option>
                    <option value="+252">🇸🇴 +252 Somalia</option>
                    <option value="+27">🇿🇦 +27 South Africa</option>
                    <option value="+82">🇰🇷 +82 South Korea</option>
                    <option value="+211">🇸🇸 +211 South Sudan</option>
                    <option value="+34">🇪🇸 +34 Spain</option>
                    <option value="+94">🇱🇰 +94 Sri Lanka</option>
                    <option value="+249">🇸🇩 +249 Sudan</option>
                    <option value="+597">🇸🇷 +597 Suriname</option>
                    <option value="+268">🇸🇿 +268 Swaziland</option>
                    <option value="+46">🇸🇪 +46 Sweden</option>
                    <option value="+41">🇨🇭 +41 Switzerland</option>
                    <option value="+963">🇸🇾 +963 Syria</option>
                    <option value="+886">🇹🇼 +886 Taiwan</option>
                    <option value="+992">🇹🇯 +992 Tajikistan</option>
                    <option value="+255">🇹🇿 +255 Tanzania</option>
                    <option value="+66">🇹🇭 +66 Thailand</option>
                    <option value="+670">🇹🇱 +670 Timor-Leste</option>
                    <option value="+228">🇹🇬 +228 Togo</option>
                    <option value="+676">🇹🇴 +676 Tonga</option>
                    <option value="+1">🇹🇹 +1 Trinidad and Tobago</option>
                    <option value="+216">🇹🇳 +216 Tunisia</option>
                    <option value="+90">🇹🇷 +90 Turkey</option>
                    <option value="+993">🇹🇲 +993 Turkmenistan</option>
                    <option value="+688">🇹🇻 +688 Tuvalu</option>
                    <option value="+256">🇺🇬 +256 Uganda</option>
                    <option value="+380">🇺🇦 +380 Ukraine</option>
                    <option value="+971">🇦🇪 +971 United Arab Emirates</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+598">🇺🇾 +598 Uruguay</option>
                    <option value="+998">🇺🇿 +998 Uzbekistan</option>
                    <option value="+678">🇻🇺 +678 Vanuatu</option>
                    <option value="+39">🇻🇦 +39 Vatican City</option>
                    <option value="+58">🇻🇪 +58 Venezuela</option>
                    <option value="+84">🇻🇳 +84 Vietnam</option>
                    <option value="+967">🇾🇪 +967 Yemen</option>
                    <option value="+260">🇿🇲 +260 Zambia</option>
                    <option value="+263">🇿🇼 +263 Zimbabwe</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="flex-1 px-3 md:px-4 py-2 md:py-3 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
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
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base resize-none"
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Files (PDF or any file)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 text-center hover:border-violet-600 transition-colors bg-white dark:bg-gray-700">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                  <div className="mt-4">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white text-center">
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
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
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
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                  placeholder="$1,000 - $5,000 or your budget range"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-3 md:py-4 px-6 rounded-lg font-medium hover:bg-violet-700 transition-colors duration-300 text-sm md:text-base"
              >
                Submit Project Inquiry
              </button>
            </form>
          </div>
          
          {/* Social Icons Row */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center gap-4 md:gap-6">
              <a
                href="mailto:itsbhoomikapatel@gmail.com"
                className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>
              
              <a
                href="tel:+13683993448"
                className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors duration-300"
                title="Phone"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
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
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
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
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Calendly
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};