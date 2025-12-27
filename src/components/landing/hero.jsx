import { ArrowRight, Code, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 sm:pt-40 sm:pb-32"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-25">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Welcome to CESA
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block text-[#3937ff] dark:text-[#5d5bff]">Computer Engineering</span>
            <span className="block text-[#3937ff] dark:text-[#5d5bff]">Student's Association</span>
          </h1>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Where <span className="font-semibold text-gray-800 dark:text-white">code meets innovation</span> and students become <span className="font-semibold text-gray-800 dark:text-white">tech leaders</span> of tomorrow.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Code className="w-5 h-5 mr-2 text-[#3937ff]" />
                <span>Master In-Demand Skills</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Cpu className="w-5 h-5 mr-2 text-[#6a68ff]" />
                <span>Build Real Projects</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3937ff] hover:bg-[#2a28cc] shadow-sm transition-colors duration-200"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/events"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-[#3937ff] dark:text-[#5d5bff] bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
