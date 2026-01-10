import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, MapPin, Award, Users, Clock, ExternalLink, Bookmark, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const EventModal = ({ event, onClose }) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  if (!event) return null;

  const formatDate = (dateString) => {
    return format(parseISO(dateString), 'EEEE, MMMM d, yyyy');
  };

  const isPastEvent = event.status === 'past';

  const generateShareContent = () => {
    const baseUrl = 'https://cesa2.vercel.app';
    const eventUrl = `${baseUrl}/events/${event.id}`;
    
    // Use the description as-is with all emojis and formatting
    const shareText = `${event.description}\n\n` +
      `📅 Date: ${formatDate(event.date)}\n` +
      `🕐 Time: ${event.time || 'TBA'}\n` +
      `📍 Location: ${event.location}\n` +
      `💰 Prize Pool: ${event.prizePool}\n` +
      `👥 Team Size: ${event.teamSize}\n` +
      `💸 Entry Fee: ${event.entryFee}\n\n` +
      `🔗 Register now: ${event.registrationLink}\n` +
      `🌐 More info: https://cesa2.vercel.app\n\n` +
      `#CESA #BVCOE #TechEvent #${event.title.replace(/\s+/g, '')}`;
    
    return { text: shareText, url: eventUrl };
  };

  const handleCopyLink = async () => {
    const { text } = generateShareContent();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = (platform) => {
    const { text, url } = generateShareContent();
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'LinkedIn':
        // For LinkedIn, we'll open the URL and let user add description manually
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'WhatsApp':
        shareUrl = `https://wa.me/?text=${encodedText}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <img
              src={event.banner}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 text-xs font-medium bg-[#3937ff] text-white rounded-full">
                  {event.type}
                </span>
                {isPastEvent ? (
                  <span className="px-3 py-1 text-xs font-medium bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full">
                    Past Event
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-600 dark:text-green-400 rounded-full">
                    Registration Open
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {event.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* About Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About the Event</h3>
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {event.description}
                  </div>
                </div>

                {/* Rounds Section */}
                {event.rounds && event.rounds.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Event Rounds</h3>
                    <div className="space-y-4">
                      {event.rounds.map((round, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3937ff]/10 text-[#3937ff] dark:bg-[#5d5bff]/20 dark:text-[#5d5bff] flex items-center justify-center font-medium">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">{round.name}</h4>
                              {round.date && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                                  <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
                                  {round.date}
                                </p>
                              )}
                              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1.5">
                                {round.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rules Section */}
                {event.rules && event.rules.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Rules & Guidelines</h3>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                      <ul className="space-y-2">
                        {event.rules.map((rule, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#3937ff]/10 text-[#3937ff] dark:bg-[#5d5bff]/20 dark:text-[#5d5bff] flex items-center justify-center text-xs font-medium mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{rule}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Winners Section for Past Events */}
                {isPastEvent && event.winners && event.winners.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Winners</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {event.winners.map((winner, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#f9f9ff] to-white dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-2xl font-bold text-white">
                            {winner.position}
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{winner.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{winner.prize}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guest Speaker */}
                {event.guests && event.guests.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Guest Speaker</h3>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-lg">
                          {event.guests[0].name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{event.guests[0].name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {event.guests[0].role} • {event.guests[0].company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            {event.guests[0].bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Details Card */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CalendarIcon className="w-5 h-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                        <p className="text-gray-900 dark:text-white">
                          {formatDate(event.date)}
                          {event.time && (
                            <span className="block text-sm text-gray-500 dark:text-gray-400">
                              {event.time}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#6366f1] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Venue</p>
                        <p className="text-gray-900 dark:text-white">{event.location}</p>
                      </div>
                    </div>

                    {event.prizePool && (
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Prize Pool</p>
                          <p className="text-gray-900 dark:text-white">{event.prizePool}</p>
                        </div>
                      </div>
                    )}

                    {event.stats && (
                      <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#6366f1]">{event.stats.participants}+</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Participants</p>
                          </div>
                        </div>
                        {/* View Memories Button */}
                        <div className="pt-4">
                          <button 
                            onClick={() => {
                              onClose();
                              navigate(`/memories?event=${encodeURIComponent(event.title)}`);
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#6366f1] hover:bg-[#4f46e5] rounded-lg transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            View Memories
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Section */}
                {!isPastEvent ? (
                  <div className="text-center">
                    <a
                      href={event.registrationLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Registration closes on {format(parseISO(event.registrationDeadline || event.date), 'MMM d, yyyy')}
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      This event has ended. Stay tuned for future events!
                    </p>
                  </div>
                )}

                {/* Share Buttons */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-3">Share this event</p>
                  <div className="flex justify-center gap-3">
                    {['Twitter', 'LinkedIn', 'WhatsApp'].map((platform) => (
                      <button
                        key={platform}
                        onClick={() => handleShare(platform)}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        title={`Share on ${platform}`}
                      >
                        <span className="sr-only">Share on {platform}</span>
                        {platform === 'Twitter' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {platform === 'LinkedIn' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {platform === 'WhatsApp' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.467h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )}
                      </button>
                    ))}
                    <button
                      onClick={handleCopyLink}
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      title="Copy event details"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs text-green-600 dark:text-green-400 text-center mt-2">
                      Event details copied! Paste into LinkedIn for best results.
                    </p>
                  )}
                </div>
                {/* Coordinators Section */}
                {event.coordinators && event.coordinators.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Event Coordinators</h3>
                    <div className="space-y-3">
                      {event.coordinators.map((coordinator, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">{coordinator.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                Contact: {coordinator.contact}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                onClick={() => window.open(`tel:${coordinator.contact.replace(/\s/g, '')}`, '_self')}
                                className="p-2 rounded-full bg-[#3937ff]/10 text-[#3937ff] dark:bg-[#5d5bff]/20 dark:text-[#5d5bff] hover:bg-[#3937ff]/20 dark:hover:bg-[#5d5bff]/30 transition-colors"
                                title="Call coordinator"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feedback Form Section */}
                {event.feedback !== false && (
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Share Your Feedback</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="feedback-rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          How was your experience?
                        </label>
                        <div className="flex items-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <React.Fragment key={star}>
                              <input
                                type="radio"
                                id={`star${star}`}
                                name="rating"
                                value={star}
                                className="sr-only"
                              />
                              <label
                                htmlFor={`star${star}`}
                                className="text-2xl cursor-pointer text-gray-300 hover:text-yellow-400 peer-hover:text-yellow-400 peer-checked:text-yellow-400"
                                title={`${star} star${star > 1 ? 's' : ''}`}
                              >
                                ★
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="feedback-comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your feedback (optional)
                        </label>
                        <textarea
                          id="feedback-comment"
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1] dark:bg-gray-700 dark:text-white"
                          placeholder="Share your thoughts about the event..."
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Your feedback helps us improve future events
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#6366f1] text-white font-medium rounded-lg hover:bg-[#4f46e5] transition-colors"
                        >
                          Submit Feedback
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
