import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Send } from 'lucide-react';

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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
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
                <span className="text-gray-400">contact@cesa.com</span>
              </li>
              <li className="text-gray-400">
                Computer Engineering Department<br />
                Bharati VidyaPeeth College Of Engineering - Belapur<br />
                Navi Mumbai, Maharashtra - 400001
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
