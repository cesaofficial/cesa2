import React from 'react';
import { ArrowRight } from 'lucide-react';

const SponsorCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%233937ff%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Partner with <span className="text-[#3937ff] dark:text-[#5d5bff]">CESA</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us in shaping the future of technology. Let's build something extraordinary together.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sponsor@cesa.com"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-md text-white bg-[#3937ff] hover:bg-[#2a28cc] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Become a Sponsor
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-md text-[#3937ff] dark:text-[#5d5bff] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by leading tech companies and organizations
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8 items-center opacity-70">
              {['Unstop'].map((company) => (
                <div key={company} className="text-gray-400 dark:text-gray-500 font-medium">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorCTA;
