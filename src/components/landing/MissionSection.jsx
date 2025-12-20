import React from 'react';

const MissionSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Technical Excellence",
      description: "Fostering innovation and technical expertise through hands-on learning and real-world projects."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Building",
      "description": "Creating a vibrant community of tech enthusiasts who learn, grow, and innovate together."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Industry Readiness",
      "description": "Bridging the gap between academia and industry with practical skills and knowledge."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation Hub",
      "description": "Nurturing creative thinking and innovative solutions to real-world challenges."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* What We Are */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering Tomorrow's <span className="text-indigo-600 dark:text-indigo-400\">Tech Leaders</span> Today
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            CESA is the premier student-run technical organization at BVCOE-NM, dedicated to fostering innovation, 
            technical excellence, and professional growth in the field of computer engineering and technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto text-center mb-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-md"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl">
            <div className="text-indigo-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're on a mission to bridge the gap between academic theory and real-world application by providing 
              hands-on learning experiences, industry exposure, and a collaborative environment where innovation thrives. 
              Through workshops, projects, and events, we empower students to become the next generation of technology leaders 
              who will shape the future of our digital world.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Driving Innovation Through
              <span className="text-indigo-600 dark:text-indigo-400"> Excellence</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900/50 group"
              >
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
