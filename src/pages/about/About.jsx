import { Award, Users, Code, Zap, Cpu, BookOpen, Rocket, GraduationCap, Briefcase, Globe, Calendar, Clock, MapPin, ArrowRight, Quote, ListChecks, Trophy, Users2 } from 'lucide-react';
import Navbar from '../components/navbar';

const About = () => {
  const stats = [
    { 
      icon: <Users className="w-8 h-8 text-[#5d5bff]" />,
      title: "Active Community",
      description: "Dedicated tech enthusiasts"
    },
    {
      icon: <Code className="w-8 h-8 text-[#5d5bff]" />,
      title: "Regular Events",
      description: "Hackathons & tech talks"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#5d5bff]" />,
      title: "Innovative Projects",
      description: "Open source solutions"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#5d5bff]" />,
      title: "Learning Sessions",
      description: "Workshops & skill development"
    }
  ];

  const codeClashHighlights = [
    { icon: <Award className="w-5 h-5 mr-2 text-[#5d5bff]" />, text: "Premier coding competition with exciting prizes and recognition" },
    { icon: <Code className="w-5 h-5 mr-2 text-[#5d5bff]" />, text: "Test your skills in algorithm design and optimization" },
    { icon: <Rocket className="w-5 h-5 mr-2 text-[#5d5bff]" />, text: "Real-world problem statements from top tech companies" },
    { icon: <Users className="w-5 h-5 mr-2 text-[#5d5bff]" />, text: "Network with industry professionals and fellow coders" }
  ];

  const eventFeatures = [
    { icon: <ListChecks className="w-5 h-5 mr-2 text-[#5d5bff]" />, title: "Multiple Rounds", desc: "Progressive challenges that test various aspects of coding" },
    { icon: <Clock className="w-5 h-5 mr-2 text-[#5d5bff]" />, title: "Time-bound", desc: "Test your speed and accuracy under pressure" },
    { icon: <Trophy className="w-5 h-5 mr-2 text-[#5d5bff]" />, title: "Prizes & Recognition", desc: "Win exciting prizes and get noticed by recruiters" },
    { icon: <Users2 className="w-5 h-5 mr-2 text-[#5d5bff]" />, title: "Community", desc: "Compete with the best coders and learn from peers" }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6 text-[#5d5bff]" />,
      title: "Technical Growth",
      description: "Enhance your coding and problem-solving skills"
    },
    {
      icon: <Users className="w-6 h-6 text-[#5d5bff]" />,
      title: "Community",
      description: "Connect with fellow tech enthusiasts"
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#5d5bff]" />,
      title: "Innovation",
      description: "Turn your ideas into reality"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 sm:pt-40 sm:pb-32">
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
              About CESA
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block text-[#3937ff] dark:text-[#5d5bff]">Empowering</span>
              <span className="block text-[#3937ff] dark:text-[#5d5bff]">Tech Enthusiasts</span>
            </h1>
            
            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              The official technical society of BVCOE, fostering <span className="font-semibold text-gray-800 dark:text-white">innovation</span> and <span className="font-semibold text-gray-800 dark:text-white">technical excellence</span>.
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-gray-700 mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">{stat.title}</h3>
                <p className="mt-2 text-center text-gray-500 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Empowering students with technical skills and opportunities for growth.</p>
            <div className="w-24 h-1 bg-[#5d5bff] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We are dedicated to fostering a culture of technical excellence and innovation within our community. Through various initiatives, we aim to bridge the gap between academic learning and real-world applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our community thrives on collaboration, with members working on cutting-edge projects, participating in hackathons, and attending workshops led by industry experts.
                </p>
                
                <div className="mt-8 space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5d5bff] to-[#8b8aff] rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl h-full">
                <img 
                  src="/bvcoe.webp" 
                  alt="CESA Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">Our Community</h3>
                  <p className="text-white/80 mt-1">Passionate minds, innovative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Flagship Event: CodeClash */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Flagship Event
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CodeClash</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Where the best coders compete and create</p>
            <div className="w-24 h-1 bg-[#5d5bff] mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#5d5bff] to-[#8b8aff] text-white">
                      <Code className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#5d5bff] to-[#8b8aff] bg-clip-text text-transparent">CodeClash</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    CodeClash stands as our premier coding competition, a battleground where the most talented programmers come together to solve complex challenges, push their limits, and emerge as coding champions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {eventFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.icon}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Why Compete?</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Showcase your skills to top recruiters, win amazing prizes, and join an elite network of talented developers who've made their mark in the tech industry.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-gradient-to-b from-[#5d5bff] to-[#8b8aff] p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Competition Highlights</h3>
                    <ul className="space-y-3">
                      {codeClashHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-blue-100 mb-3 last:mb-0">
                          {highlight.icon}
                          <span className="text-blue-100">{highlight.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Ready to Compete?</h4>
                    <p className="text-sm text-blue-100 mb-4">
                      Stay tuned for the next edition of CodeClash. Follow us for updates!
                    </p>
                    <button className="w-full bg-white text-[#5d5bff] hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Involved */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Join our community of passionate tech enthusiasts and take your skills to the next level.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Participate</h3>
              <p className="text-gray-600 dark:text-gray-400">Join our events and competitions to test your skills and learn from others.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">Meet like-minded individuals and build your professional network.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Grow</h3>
              <p className="text-gray-600 dark:text-gray-400">Develop your skills through hands-on projects and expert-led workshops.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
