import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, Grid, List } from 'lucide-react';
import '../../styles/memories.css';

const MemoriesModal = ({ event, onClose }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Get all images from the event folder
        const imageContext = require.context(
          `/public/images/${event.folder}`,
          false,
          /\.(jpg|jpeg|png|gif)$/
        );
        
        const imageList = imageContext.keys().map(key => ({
          src: `/images/${event.folder}/${key.replace('./', '')}`,
          alt: `${event.title} - ${key}`
        }));
        
        setImages(imageList);
      } catch (error) {
        console.error('Error loading images:', error);
        // Fallback to known images if dynamic loading fails
        if (event.id === 'codeclash') {
          const codeClashImages = [];
          for (let i = 1; i <= 15; i++) {
            codeClashImages.push({
              src: `/images/codeClash_images/cc${i}.jpeg`,
              alt: `CodeClash - Image ${i}`
            });
          }
          setImages(codeClashImages);
        } else if (event.id === 'farewell') {
          const farewellImages = [
            { src: '/images/farewell_images/IMG_2912.jpeg', alt: 'Farewell - IMG_2912' },
            { src: '/images/farewell_images/IMG_2920.jpeg', alt: 'Farewell - IMG_2920' },
            { src: '/images/farewell_images/IMG_2931.jpeg', alt: 'Farewell - IMG_2931' },
            { src: '/images/farewell_images/IMG_7669.jpeg', alt: 'Farewell - IMG_7669' },
            { src: '/images/farewell_images/IMG_7678.jpeg', alt: 'Farewell - IMG_7678' },
            { src: '/images/farewell_images/farewell_cp.jpeg', alt: 'Farewell - Cover' }
          ];
          setImages(farewellImages);
        }
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [event]);

  const handleImageDownload = (imageSrc) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openImageInLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction) => {
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="relative z-10 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-white/20">
          <div className="flex items-center justify-between p-4 md:p-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {event.title} Gallery
              </h2>
              <p className="text-gray-300 mt-1">
                {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-gray-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20 text-white' : 'text-gray-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="p-4 md:p-8">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                      onClick={() => openImageInLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageDownload(image.src);
                            }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white/5 dark:bg-gray-800/50 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => openImageInLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{image.alt}</h3>
                        <p className="text-gray-400 text-sm mt-1">Click to view full size</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageDownload(image.src);
                        }}
                        className="p-2 self-center text-gray-400 hover:text-white"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="relative z-10 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-t border-white/20 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              Want to see more photos from {event.title}?
            </p>
            <a
              href={event.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <span>View More Photos</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <img
            src={images[selectedImageIndex]?.src}
            alt={images[selectedImageIndex]?.alt}
            className="max-w-full max-h-full object-contain"
          />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="text-sm">{images[selectedImageIndex]?.alt}</p>
            <p className="text-xs text-gray-400 mt-1">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoriesModal;
