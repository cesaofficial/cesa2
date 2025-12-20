import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] to-[#f0f2ff] dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/not-found.svg" 
            alt="404 Not Found" 
            className="max-w-md mx-auto w-full h-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#3937ff] hover:bg-[#2a28d9] text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <a
            href="mailto:contact@cesa.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Support
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
