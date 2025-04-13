import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiUsers, FiHeart, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AnimatedFormBackground from './AnimatedFormBackground';

const interests = [
  { id: 'adventure', label: 'Adventure', icon: '🏔️' },
  { id: 'culture', label: 'Culture', icon: '🏛️' },
  { id: 'food', label: 'Food & Dining', icon: '🍽️' },
  { id: 'beach', label: 'Beach & Relaxation', icon: '🏖️' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'nightlife', label: 'Nightlife', icon: '🌃' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'history', label: 'History', icon: '🏰' },
];

const recommendedLocations = [
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800',
    tags: ['Beach', 'Culture']
  },
  {
    id: 'swiss',
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800',
    tags: ['Mountains', 'Adventure']
  },
  {
    id: 'tokyo',
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800',
    tags: ['City', 'Culture']
  },
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800',
    tags: ['Beach', 'Romance']
  }
];

const EnhancedForm: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [customDestination, setCustomDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelers, setTravelers] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Prepare the form data
    const formData = {
      destination: selectedLocation ? 
        recommendedLocations.find(loc => loc.id === selectedLocation)?.name : 
        customDestination,
      duration,
      travelers,
      interests: selectedInterests.map(id => 
        interests.find(interest => interest.id === id)?.label
      ),
    };

    // Store the form data in localStorage for the next page
    localStorage.setItem('travelFormData', JSON.stringify(formData));

    // Navigate to the itinerary page
    navigate('/itinerary');
  };

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <AnimatedFormBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Form Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Plan Your Dream Trip
          </h2>
          <p className="text-gray-600 text-lg">
            Let AI create your perfect travel itinerary in minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
        >
          {/* Recommended Locations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Popular Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendedLocations.map((location) => (
                <motion.div
                  key={location.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedLocation(location.id);
                    setCustomDestination(''); // Clear custom destination when selecting a recommended one
                  }}
                  className={`relative rounded-xl overflow-hidden cursor-pointer group h-40 ${
                    selectedLocation === location.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{location.name}</p>
                      <div className="flex gap-2 mt-2">
                        {location.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Custom Destination</label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Or enter your own destination"
                    value={customDestination}
                    onChange={(e) => {
                      setCustomDestination(e.target.value);
                      setSelectedLocation(''); // Clear selected location when entering custom destination
                    }}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Duration</label>
                <div className="relative">
                  <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors appearance-none"
                  >
                    <option value="">Select duration</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                    <option value="10">10 Days</option>
                    <option value="14">14 Days</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Travelers</label>
                <div className="relative">
                  <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select 
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors appearance-none"
                  >
                    <option value="">Number of travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <motion.button
                  key={interest.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedInterests(prev =>
                      prev.includes(interest.id)
                        ? prev.filter(id => id !== interest.id)
                        : [...prev, interest.id]
                    );
                  }}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedInterests.includes(interest.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{interest.label}</span>
                  </div>
                  {selectedInterests.includes(interest.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full"
                    >
                      <FiCheck size={12} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Generate AI Travel Plan
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '1000+', label: 'Destinations' },
            { number: '24/7', label: 'AI Support' },
            { number: '100%', label: 'Personalized' },
            { number: '5 min', label: 'Quick Plan' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white/60 backdrop-blur-md rounded-lg p-4"
            >
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedForm; 