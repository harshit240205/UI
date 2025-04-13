import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import EnhancedForm from './components/EnhancedForm';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItineraryPage from './components/ItineraryPage';

const MainLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleBookNowClick = () => {
    if (location.pathname !== '/') {
      navigate('/#form');
    } else {
      const formSection = document.getElementById('form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('form');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/90 relative">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Planora
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'features', 'testimonials', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-base font-medium transition-all duration-300 relative group ${
                      activeSection === section
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      activeSection === section ? 'scale-x-100' : ''
                    }`} />
                  </button>
                ))}
              </div>
              <button 
                onClick={handleBookNowClick}
                className="ml-8 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hidden md:block"
              >
                Book Now
              </button>
              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>

        <section id="features" className="py-20 relative">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <FeaturesSection />
          </div>
        </section>

        <section id="testimonials" className="py-20 relative">
          <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <TestimonialsSection />
          </div>
        </section>

        <section id="form" className="py-20 relative">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnhancedForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-md text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-5 h-5" />
                  <span>contact@travelai.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiPhone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-5 h-5" />
                  <span>123 Travel Street, Adventure City</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'features', 'testimonials', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Subscribe to our newsletter for travel tips and exclusive offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Planora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
      </Routes>
    </Router>
  );
};

export default App; 