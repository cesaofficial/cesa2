import React from 'react';

const TeamCard = ({ title, description, iconSrc }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-24 h-24 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={iconSrc} 
            alt={`${title} icon`} 
            className="w-16 h-16 text-white"
            onError={(e) => {
              console.error(`Failed to load icon: ${iconSrc}`);
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  // Paths to your SVG files in the public folder
  const teamIcons = {
    technical: '/icons/technical-team.svg',
    sports: '/icons/sports-team.svg',
    creative: '/icons/creative-team.svg',
    sponsorship: '/icons/sponser-team.svg',
    digital: '/icons/digital-team.svg',
    pr: '/icons/pr-team.svg'
  };

  const teams = [
    {
      title: "Technical Team",
      description: "Driving innovation through cutting-edge technology and solutions.",
      iconSrc: teamIcons.technical
    },
    {
      title: "Sports Team",
      description: "Fostering sportsmanship and healthy competition among students.",
      iconSrc: teamIcons.sports
    },
    {
      title: "Creative Team",
      description: "Crafting compelling themes for events and engaging content for our community.",
      iconSrc: teamIcons.creative
    },
    {
      title: "Sponsorship Team",
      description: "Building valuable partnerships and securing resources for our events.",
      iconSrc: teamIcons.sponsorship
    },
    {
      title: "Digital Team",
      description: "Enhancing our digital presence and managing online platforms.",
      iconSrc: teamIcons.digital
    },
    {
      title: "PR Team",
      description: "Managing public relations and building strong community connections.",
      iconSrc: teamIcons.pr
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Teams</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the passionate individuals who make our events and initiatives possible through their dedication and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              title={team.title}
              description={team.description}
              iconSrc={team.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
