import React, { useState, useEffect } from 'react';
import { events as eventsData, eventTypes, viewModes } from '../data/events';
import EventCard from '../components/events/EventCard';
import Navbar from '../components/navbar';
import EventModal from '../components/events/EventModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, ChevronDown } from 'lucide-react';
import { eventTypes as eventTypeData } from '../data/events';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Filter events based on active tab
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.status === activeTab));
    }
  }, [activeTab, eventsData]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const EmptyState = () => {
    let message = '';
    let subMessage = '';
    let image = '';

    switch (activeTab) {
      case 'upcoming':
        message = 'No upcoming events';
        subMessage = 'Stay tuned for exciting events coming your way!';
        image = '/events/upcoming-event.svg';
        break;
      case 'live':
        message = 'No live events';
        subMessage = 'Check back soon for live events and activities!';
        image = '/events/live-events.svg';
        break;
      case 'past':
        message = 'No past events yet';
        subMessage = 'Our past events will appear here. Check back after our next event!';
        image = '/events/empty-state-events.svg';
        break;
      default:
        message = 'No events found';
        subMessage = 'We couldn\'t find any events matching your criteria.';
        image = '/events/empty-state-events.svg';
    }

    return (
      <motion.div
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-sm mx-auto mb-8">
          <img
            src={image}
            alt="No events"
            className="w-full h-auto max-h-64 object-contain mx-auto"
          />
        </div>
        <div className="max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            {message}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {subMessage}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            {activeTab !== 'upcoming' && (
              <button
                onClick={() => setActiveTab('upcoming')}
                className="px-6 py-2.5 bg-[#3937ff] hover:bg-[#2a28cc] text-white font-medium rounded-lg transition-colors dark:bg-[#5d5bff] dark:hover:bg-[#4f4dff]"
              >
                View Upcoming Events
              </button>
            )}
            {activeTab !== 'past' && (
              <button
                onClick={() => setActiveTab('past')}
                className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                View Past Events
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-25">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>

        {/* Header */}
        <div className="relative mb-16">
          {/* Logo in top-left corner */}
          <div className="absolute top-0 left-0">
            <img
              src="/cesa-logo.png"
              alt="CESA Logo"
              className="h-24 w-auto"
            />
          </div>

          {/* Centered content */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#3937ff]/10 text-[#3937ff] dark:bg-[#5d5bff]/20 dark:text-[#5d5bff] mb-6">
              Upcoming & Past Events
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              <span className="block text-[#3937ff] dark:text-[#5d5bff]">Our Events</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover exciting workshops, competitions, and networking events organized by CESA. Join us to learn, compete, and grow!
            </p>
          </div>
        </div>

        {/* Tabs and View Toggle */}
        <div className="relative flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-1 w-full sm:w-auto">
            {eventTypes.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center ${activeTab === tab.id
                    ? 'bg-[#3937ff] text-white shadow-md shadow-[#3937ff]/20 dark:bg-[#5d5bff] dark:shadow-[#5d5bff]/30'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                  }`}
              >
                {React.createElement(tab.icon, { className: 'w-4 h-4 mr-2' })}
                {tab.label}
                {activeTab === tab.id && (
                  <ChevronDown className="w-4 h-4 ml-1 transform transition-transform" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-1 rounded-lg border border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                  ? 'bg-white text-[#3937ff] shadow-sm dark:bg-gray-600 dark:text-white'
                  : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              title="Grid View"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                  ? 'bg-white text-[#3937ff] shadow-sm dark:bg-gray-600 dark:text-white'
                  : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              title="List View"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Events Grid/List */}
        {filteredEvents.length === 0 ? (
          <EmptyState />
        ) : (
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    viewMode={viewMode}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    viewMode={viewMode}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
