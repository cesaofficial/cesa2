import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Code, Zap, Cpu, BookOpen, Rocket, GraduationCap, Briefcase, Globe, Calendar, Clock, MapPin, ArrowRight , Quote } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <Users className="w-8 h-8 text-[#5d5bff]" />,
      number: "500+",
      title: "Active Members",
      description: "Dedicated tech enthusiasts in our community"
    },
    {
      icon: <Code className="w-8 h-8 text-[#5d5bff]" />,
      number: "30+",
      title: "Events/Year",
      description: "Hackathons, workshops & tech talks"
    },
    {
      icon: <Award className="w-8 h-8 text-[#5d5bff]" />,
      number: "15+",
      title: "Awards",
      description: "Recognitions in tech competitions"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#5d5bff]" />,
      number: "50+",
      title: "Projects",
      description: "Open source & innovative solutions"
    }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6 text-[#5d5bff]" />,
      title: "Technical Excellence",
      description: "Hands-on coding sessions and workshops"
    },
    {
      icon: <Users className="w-6 h-6 text-[#5d5bff]" />,
      title: "Community Building",
      description: "Networking with like-minded tech enthusiasts"
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#5d5bff]" />,
      title: "Innovation Hub",
      description: "Platform for turning ideas into reality"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "CESA's hackathons transformed my approach to problem-solving. The hands-on experience and mentorship helped me land my dream job at a leading tech company.",
      author: "Priya Patel",
      role: "Software Engineer, Google"
    },
    {
      id: 2,
      quote: "Being part of CESA's core team taught me leadership and technical skills that I use every day in my startup. The network I built here is invaluable.",
      author: "Rahul Verma",
      role: "Founder, TechStart Inc."
    }
  ];

  const achievements = [
    { 
      icon: <Code size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "CodeFiesta 2023",
      description: "Annual flagship hackathon with 200+ participants"
    },
    {
      icon: <Users size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Tech Connect",
      description: "Industry expert sessions and networking events"
    },
    {
      icon: <Rocket size={40} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Project Incubator",
      description: "Mentored 50+ student projects to completion"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
              <span className="block text-[#3937ff] dark:text-[#5d5bff]">Code. Create.</span>
              <span className="block text-[#3937ff] dark:text-[#5d5bff]">Collaborate.</span>
            </h1>
            
            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              The official technical society of BVCOE, fostering <span className="font-semibold text-gray-800 dark:text-white">innovation</span> and <span className="font-semibold text-gray-800 dark:text-white">technical excellence</span> since 1990.
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
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{stat.number}</h3>
                <p className="mt-2 text-center font-medium text-gray-900 dark:text-gray-200">{stat.title}</p>
                <p className="mt-1 text-center text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">CESA is the official technical society of BVCOE, dedicated to fostering technical excellence and innovation among students.</p>
            <div className="w-24 h-1 bg-[#5d5bff] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Since our inception in 1990, we've been the driving force behind the college's technical culture, organizing events that bridge the gap between academic learning and industry requirements.
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
                  alt="CESA Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span>CESA Core Team 2023-24</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Community</h3>
                  <p className="text-white/80 mt-1">Passionate minds, innovative solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Flagship Events</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Where innovation meets execution</p>
            <div className="w-24 h-1 bg-[#5d5bff] mx-auto mt-4"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5d5bff] to-transparent"></div>
            
            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "CodeFiesta",
                  description: "Our flagship 36-hour hackathon that brings together the brightest minds to build innovative solutions to real-world problems.",
                  icon: <Code className="w-6 h-6 text-white" />,
                  stats: "200+ Participants | ₹2L+ Prizes"
                },
                {
                  title: "TechWeek",
                  description: "A week-long technical fest featuring workshops, competitions, and talks by industry leaders and alumni.",
                  icon: <Cpu className="w-6 h-6 text-white" />,
                  stats: "15+ Events | 1000+ Footfall"
                },
                {
                  title: "AlumConnect",
                  description: "Networking events and mentorship sessions with our esteemed alumni working at top tech companies worldwide.",
                  icon: <Users className="w-6 h-6 text-white" />,
                  stats: "50+ Mentors | 100+ Success Stories"
                },
                {
                  title: "Project Expo",
                  description: "Showcasing innovative projects by students, with opportunities for funding and incubation.",
                  icon: <Rocket className="w-6 h-6 text-white" />,
                  stats: "50+ Projects | 10+ Incubated"
                }
              ].map((item, index) => (
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5d5bff] text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <p className="text-sm text-[#5d5bff] font-medium">{item.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Hear from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <Quote className="text-indigo-600 dark:text-indigo-400 w-8 h-8 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Join Us Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#5d5bff] to-[#8b8aff] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to be part of CESA?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Applications for our core team and upcoming events are now open. Let's build something amazing together!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#5d5bff] bg-white hover:bg-gray-100 shadow-sm transition-colors duration-200"
            >
              Join Our Team
              <Users className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
            >
              View Events Calendar
              <Calendar className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            Follow us on social media for updates and announcements
          </p>
        </div>
      </section>
    </div>
  );
};
export default About;