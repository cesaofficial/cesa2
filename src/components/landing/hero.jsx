import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%233937ff%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to </span>
            <span className="block text-[#3937ff] dark:text-[#5d5bff]">Computer Engineering</span>
            <span className="block text-[#3937ff] dark:text-[#5d5bff]">Students' Association</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering the next generation of computer engineers through innovation, collaboration, and excellence in technology.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3937ff] hover:bg-[#2a28cc] shadow-sm transition-colors duration-200"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-[#3937ff] dark:text-[#5d5bff] bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="relative rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3937ff] to-[#6a68ff] opacity-90 dark:opacity-80"></div>
            <div className="relative px-6 py-12 sm:p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    number: '50+',
                    title: 'Events',
                    description: 'Workshops, hackathons, and tech talks'
                  },
                  {
                    number: '100+',
                    title: 'Members',
                    description: 'Active computer engineering students'
                  },
                  {
                    number: '50+',
                    title: 'Projects',
                    description: 'Innovative solutions and applications'
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-white">
                    <p className="text-4xl font-extrabold">{stat.number}</p>
                    <p className="mt-2 text-lg font-semibold">{stat.title}</p>
                    <p className="mt-1 text-sm opacity-90">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;