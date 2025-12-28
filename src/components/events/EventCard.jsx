import React from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin, Award, Clock } from 'lucide-react';

const EventCard = ({ event, viewMode = 'grid', onClick }) => {
  const formattedDate = format(new Date(event.date), 'MMM d, yyyy • hh:mm a');
  
  if (viewMode === 'list') {
    return (
      <div 
        onClick={onClick}
        className="group flex items-center gap-6 p-6 mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#3937ff]/20 dark:hover:border-[#5d5bff]/30 cursor-pointer"
      >
        <div className="w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img 
            src={event.banner} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-medium text-[#3937ff] dark:text-[#5d5bff] bg-[#3937ff]/10 dark:bg-[#5d5bff]/20 rounded-full">
              {event.type}
            </span>
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1.5" />
              {formattedDate}
            </span>
            {event.time && (
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1.5" />
                {event.time}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#3937ff] dark:group-hover:text-[#5d5bff] transition-colors">
            {event.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-[#3937ff] dark:text-[#5d5bff]" />
              {event.location}
            </span>
            {event.prizePool && (
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1.5 text-amber-500" />
                <span className="font-medium">{event.prizePool}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default grid view
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#3937ff]/20 dark:hover:border-[#5d5bff]/30 cursor-pointer h-full flex flex-col"
    >
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img 
          src={event.banner} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium text-white bg-[#3937ff] dark:bg-[#5d5bff] rounded-full shadow-md">
            {event.type}
          </span>
        </div>
        {event.status === 'live' && (
          <div className="absolute top-3 left-3 flex items-center px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE NOW
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-1.5" />
          {formattedDate}
          {event.time && (
            <>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1.5" />
              {event.time}
            </>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#3937ff] dark:group-hover:text-[#5d5bff] transition-colors line-clamp-2">
          {event.title}
        </h3>
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-1.5 text-[#3937ff] dark:text-[#5d5bff] flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          {event.prizePool && (
            <div className="mt-2 flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
              <Award className="w-4 h-4 mr-1.5" />
              Prize: {event.prizePool}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
