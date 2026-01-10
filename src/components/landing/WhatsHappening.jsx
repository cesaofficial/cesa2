import { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Trophy, Zap, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsHappening = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Scavenger Hunt",
      type: "Adventure Challenge",
      status: "upcoming",
      date: "2025-01-21",
      location: "College Quadrangle",
      teamSize: "4 members",
      entryFee: "₹200",
      oneLiner: "🗺️ Adventure calls your name! The most epic campus treasure hunt awaits!",
      gradient: "from-purple-500 to-pink-500",
      icon: Search
    },
    {
      id: 2,
      title: "8 Digit Heist",
      type: "Mystery Challenge",
      status: "upcoming",
      date: "2025-01-21",
      location: "Computer Lab",
      teamSize: "4 members",
      entryFee: "₹120 per team of 4",
      oneLiner: "🔥 The wait is over! Crack the legendary 8-digit code and claim victory!",
      gradient: "from-blue-500 to-cyan-500",
      icon: Zap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#3937ff]/10 to-[#6a68ff]/10 text-[#3937ff] dark:text-[#5d5bff] border border-[#3937ff]/20 dark:border-[#5d5bff]/30 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            WHAT'S HAPPENING AT CESA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming <span className="bg-gradient-to-r from-[#3937ff] to-[#6a68ff] bg-clip-text text-transparent">Events</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Two epic challenges. One chance to prove yourself.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#3937ff] to-[#6a68ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient}`}></div>
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.gradient} p-3 flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-[#3937ff] dark:text-[#5d5bff] bg-[#3937ff]/10 dark:bg-[#5d5bff]/20 rounded-full mb-2">
                            {event.type}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#3937ff] dark:group-hover:text-[#5d5bff] transition-colors">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* One Liner */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-6">
                      {event.oneLiner}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-5 h-5 mr-3 text-[#3937ff]" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-5 h-5 mr-3 text-[#3937ff]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Trophy className="w-5 h-5 mr-3 text-amber-500" />
                        <span className="font-medium">{event.prizePool}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="/events"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3937ff] to-[#6a68ff] text-white font-medium rounded-lg hover:from-[#2a28cc] hover:to-[#4a48cc] transition-all duration-200 group"
                    >
                      Join the Challenge
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/events"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3937ff] to-[#6a68ff] text-white font-semibold rounded-xl hover:from-[#2a28cc] hover:to-[#4a48cc] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Events
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsHappening;
