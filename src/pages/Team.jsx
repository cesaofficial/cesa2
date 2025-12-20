
import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import teamData from '../data/team';

const TeamMember = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderColor = () => {
    if (member.isLead) return 'border-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.8)]';
    if (member.isVicePresident || member.isViceLead) return 'border-[#5d5bff] hover:shadow-[0_0_25px_rgba(93,91,255,0.7)]';
    return 'border-gray-200 dark:border-gray-700 hover:shadow-[0_0_20px_rgba(57,55,255,0.4)] hover:border-[#5d5bff]';
  };

  return (
    <div 
      className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border-2 transition-all duration-300 ${getBorderColor()} ${
        isHovered ? 'transform -translate-y-2 scale-[1.02]' : ''
      } h-full flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/team/placeholder.jpg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{member.position}</p>
        <div className="flex mt-3 space-x-2">
          <a 
            href={member.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#5d5bff] dark:hover:text-[#5d5bff] transition-colors duration-300"
            aria-label={`${member.name}'s GitHub`}
          >
            <Github size={18} />
          </a>
          <a 
            href={member.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={member.social.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition-colors"
            aria-label={`${member.name}'s Instagram`}
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [activeSection, setActiveSection] = useState('leadership');
  const [activeTab, setActiveTab] = useState('all');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = teamData.teams.map(team => ({
        id: team.title.toLowerCase().replace(/\s+/g, '-'),
        element: document.getElementById(team.title.toLowerCase().replace(/\s+/g, '-'))
      }));

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionHeight = section.element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our <span className="text-[#5d5bff]">Team</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The brilliant minds driving innovation and excellence at CESA
          </p>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 py-6 mb-16 border-b border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-opacity-90">
          <div className="flex flex-wrap justify-center gap-3">
            {['Leadership', ...teamData.teams.slice(1).map(t => t.title)].map((title) => {
              const id = title.toLowerCase().replace(/\s+/g, '-');
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === id 
                      ? 'bg-[#5d5bff] text-white shadow-md' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Teams Grid */}
        <div className="space-y-28">
          {teamData.teams.map((team) => {
            const leads = team.members.filter(m => m.isLead || m.isViceLead || m.isVicePresident);
            const members = team.members.filter(m => !m.isLead && !m.isViceLead && !m.isVicePresident);
            
            return (
              <section 
                key={team.title}
                id={team.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-28"
              >
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {team.title} Team
                  </h2>
                  <div className="w-20 h-1 bg-[#5d5bff] mx-auto rounded-full"></div>
                </div>

                {/* Leadership Row */}
                {leads.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8 text-center">
                      {team.title === 'Leadership' ? 'Leadership Team' : 'Team Leads'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {leads.map((member, index) => (
                        <div key={`lead-${index}`} className="h-full">
                          <TeamMember member={member} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Members Grid */}
                {members.length > 0 && (
                  <div>
                    {leads.length > 0 && (
                      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8 text-center">
                        Team Members
                      </h3>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                      {members.map((member, index) => (
                        <div key={`member-${index}`} className="h-full">
                          <TeamMember member={member} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;