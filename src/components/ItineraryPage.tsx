import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiUsers, FiCalendar, FiHeart } from 'react-icons/fi';

interface FormData {
  destination: string;
  duration: string;
  travelers: string;
  interests: string[];
}

const ItineraryPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem('travelFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-700">Creating Your Perfect Itinerary</h2>
          <p className="text-gray-500 mt-2">Our AI is crafting a personalized travel plan...</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center text-gray-700">
          <h2 className="text-2xl font-semibold">No itinerary data found</h2>
          <p className="mt-2">Please go back and fill out the travel form.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Your Personalized Travel Itinerary
            </h1>
            <p className="text-gray-600 mt-2">
              AI-crafted travel plan based on your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-blue-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Destination</p>
                  <p className="font-semibold">{formData.destination}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiCalendar className="text-blue-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{formData.duration} Days</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiUsers className="text-blue-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Travelers</p>
                  <p className="font-semibold">{formData.travelers}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiHeart className="text-blue-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Interests</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {formData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Itinerary - You can replace this with AI-generated content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Daily Schedule</h2>
            {Array.from({ length: Number(formData.duration) }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Day {index + 1}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-sm text-gray-600 shadow">
                      Morning
                    </div>
                    <p className="text-gray-700">
                      Explore local attractions and cultural sites
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-sm text-gray-600 shadow">
                      Afternoon
                    </div>
                    <p className="text-gray-700">
                      Experience local cuisine and shopping
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white rounded-lg px-3 py-1 text-sm text-gray-600 shadow">
                      Evening
                    </div>
                    <p className="text-gray-700">
                      Enjoy sunset views and dinner at recommended restaurants
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItineraryPage; 