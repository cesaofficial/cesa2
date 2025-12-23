import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Send, X as XIcon } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    // Reset subscription status after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Subscription Section */}
      <div className="bg-gradient-to-r from-[#3937ff] to-[#6a68ff] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with CESA Events</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an update on upcoming events, workshops, and tech talks.
            </p>
            {isSubscribed ? (
              <div className="bg-green-50 text-green-800 px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-[#3937ff] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send size={18} className="inline" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-900/20 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/cesa-logo.png" 
                alt="CESA Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Computer Engineering Students' Association - Fostering innovation and technical excellence in computer engineering.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com/cesa_bvcoenm/" 
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-pink-500 hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/cesa-bvcoe-17200b378/" 
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-blue-500 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/cesa_bvcoenm" 
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L17.217 1.154h1.684zm-.928 19.75h1.474L6.324 2.827H4.753l13.22 18.076z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/cesa-bvcoenm" 
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">connect.cesaofficial@gmail.com</span>
              </li>
              <li className="text-gray-400">
                Computer Engineering Department<br />
                Bharati VidyaPeeth College Of Engineering - Belapur Sector 7<br />
                Navi Mumbai, Maharashtra - 400614
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CESA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
