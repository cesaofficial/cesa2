import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAMS } from '../constants/teams';
import Sidebar from '../components/team/Sidebar';
import TeamSection from '../components/team/TeamSection';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Navbar from '../components/navbar';


const generateTeamId = (teamName) => {
  return teamName.replace(/ & /g, '-').replace(/\s+/g, '-').toLowerCase();
};

const Team = () => {
  const teamNames = TEAMS.map(team => team.name);
  const [activeTeam, setActiveTeam] = useState(teamNames[0]);
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
  const location = useLocation();

  // Handle hash navigation on mount and hash change
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    // Scroll spy for active team
    const handleScroll = () => {
      const headerHeight = isHeaderExpanded ? 220 : 60;
      const viewportTop = headerHeight;
      const viewportBottom = window.innerHeight;

      let maxVisibleRatio = 0;
      let mostVisibleTeam = '';

      TEAMS.forEach(team => {
        const element = document.getElementById(generateTeamId(team.name));
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, viewportTop);
          const visibleBottom = Math.min(rect.bottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

          if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            mostVisibleTeam = team.name;
          }
        }
      });

      if (mostVisibleTeam && maxVisibleRatio > 0.01) {
        setActiveTeam(mostVisibleTeam);
      } else {
        if (window.scrollY < (isHeaderExpanded ? 200 : 50)) {
          setActiveTeam(teamNames[0]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [teamNames, isHeaderExpanded]);

  const toggleHeader = () => {
    setIsHeaderExpanded(prev => !prev);
  };

  return (
    <>
      <div className="background-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="relative z-10 min-h-screen font-sans text-slate-300 selection:bg-violet-500/30">
        <div className="sticky top-0 z-20 bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center pt-6 pb-2 relative">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
                Meet The Team 2025-26
              </h1>
              <button
                onClick={toggleHeader}
                className="absolute right-4 bottom-2 bg-slate-700 hover:bg-slate-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200 flex items-center justify-center"
                aria-expanded={isHeaderExpanded}
                aria-controls="collapsible-team-info"
              >
                {isHeaderExpanded ? (
                  <ChevronUp className="text-lg" />
                ) : (
                  <ChevronDown className="text-lg" />
                )}
              </button>

              <div
                id="collapsible-team-info"
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isHeaderExpanded ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="mt-2 max-w-2xl mx-auto text-base text-slate-400">
                  Get to know the passionate individuals driving our initiatives forward.
                </p>
                <Sidebar teamNames={teamNames} activeTeam={activeTeam} />
              </div>
            </header>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <main className="pt-16 md:pt-20 pb-16 md:pb-20">
            <div className="space-y-20">
              {TEAMS.map((team) => (
                <TeamSection key={team.name} team={team} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Team;
