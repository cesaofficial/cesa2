import React, { useState } from 'react';
import MemoriesModal from '../components/memories/MemoriesModal';
import '../styles/memories.css';

const Memories = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 'codeclash',
      title: 'CodeClash',
      image: '/images/codeClash_images/cc10.jpeg',
      folder: 'codeClash_images',
      driveLink: 'https://drive.google.com/drive/folders/1bjhNrk_mJBUSaR97pZO_oFTM7ABGYQWl'
    },
    {
      id: 'farewell',
      title: 'Farewell',
      image: '/images/farewell_images/farewell_cp.jpeg',
      folder: 'farewell_images',
      driveLink: 'https://www.playbook.com/s/farewellbatch-25/FUwD5CjumyqjhNzViQNJA6vx'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/images/home_Page_Images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Memories
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Relive the moments that shaped our journey
          </p>
          <div className="animate-bounce mt-16">
            <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our Events
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Click on any event to explore the gallery and relive the memories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-white/80">
                      <span className="text-sm">Click to explore gallery</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <MemoriesModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Memories;
