import { useEffect } from 'react';
import Hero from '../components/landing/hero';
import MissionSection from '../components/landing/MissionSection';
import WhatsHappening from '../components/landing/WhatsHappening';
import TeamSection from '../components/landing/TeamSection';
import SponsorCTA from '../components/landing/SponsorCTA';
import Footer from '../components/landing/Footer';

const Landing = () => {
  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      <main className="flex-grow">
        <Hero />
        <WhatsHappening />
        <MissionSection />
        <TeamSection />
        <SponsorCTA />
      </main>
      <Footer />
      {/* Footer will go here */}
    </div>
  );
};

export default Landing;
