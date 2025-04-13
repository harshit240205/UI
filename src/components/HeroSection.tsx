import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiPlay, FiPause } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const backgrounds = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
    alt: 'Mountain landscape'
  },
  {
    type: 'video',
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02e&profile_id=164&oauth2_token_id=57447761',
    poster: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg'
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    alt: 'Mountain peaks'
  },
  {
    type: 'video',
    src: 'https://player.vimeo.com/external/517090081.sd.mp4?s=60b9db30e3bf0e756a9bfcb7fee7b8b92e546b38&profile_id=164&oauth2_token_id=57447761',
    poster: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg'
  }
];

const HeroSection: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCreateItinerary = () => {
    if (location.pathname !== '/') {
      navigate('/#form');
    } else {
      const formSection = document.getElementById('form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {backgrounds.map((bg, index) => (
            index === currentBg && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {bg.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted={!isPlaying}
                    playsInline
                    className="w-full h-full object-cover"
                    poster={bg.poster}
                  >
                    <source src={bg.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={bg.src}
                    alt={bg.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Background Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
        >
          {isPlaying ? (
            <FiPause className="w-6 h-6 text-white" />
          ) : (
            <FiPlay className="w-6 h-6 text-white" />
          )}
        </button>
        <div className="flex space-x-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBg ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-2"
          >
            <img
              src="https://images.pexels.com/photos/1752372/pexels-photo-1752372.jpeg"
              alt="Logo"
              className="w-8 h-8 rounded-md object-cover"
            />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-white font-medium"
          >
            Planora
          </motion.span>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="flex items-center space-x-4"
        >
          <a href="#vision" className="text-white hover:text-blue-400 transition-colors">
            Our Vision
          </a>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
            GET THE APP
          </button>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-white px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.5,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="text-2xl md:text-3xl mb-4 tracking-wider text-shadow-lg"
          >
            DISCOVER YOUR
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5,
              delay: 0.7,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tight text-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            JOURNEY
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 1.2,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="max-w-3xl mx-auto mt-8 text-xl md:text-2xl text-gray-200 text-shadow"
          >
            <p className="mb-2">
              <span className="font-semibold">AI-Powered Travel Planning</span> that creates personalized itineraries
            </p>
            <p>
              tailored to your preferences and dreams.{' '}
              <a href="#learn-more" className="text-blue-400 hover:text-blue-300 underline">
                Start Planning Now
              </a>
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300"
            onClick={handleCreateItinerary}
          >
            <span>Create Your Itinerary</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 z-10 p-8 text-white text-center"
      >
        <p className="text-lg font-light mb-4 text-shadow">Let AI craft your perfect adventure</p>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full mx-auto flex items-center justify-center"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 