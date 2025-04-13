import React from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiClock, FiStar, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';

// Define feature data
const features = [
  {
    icon: FiMap,
    title: 'Smart Route Planning',
    description: 'AI-powered algorithms create optimized routes based on your preferences and travel style.',
    color: 'from-blue-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FiClock,
    title: 'Real-Time Updates',
    description: 'Stay informed with live updates on weather, events, and local recommendations.',
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FiStar,
    title: 'Personalized Experience',
    description: 'Get tailored suggestions that match your interests and travel preferences.',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FiTrendingUp,
    title: 'Smart Recommendations',
    description: 'Machine learning algorithms that learn from your choices to suggest better options.',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FiShield,
    title: 'Safe Travel Planning',
    description: 'Up-to-date safety information and alerts for your destinations.',
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FiGlobe,
    title: 'Local Insights',
    description: 'Access to local tips, hidden gems, and authentic experiences.',
    color: 'from-emerald-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
  }
];

const FeatureCard: React.FC<{
  feature: typeof features[0];
  index: number;
}> = ({ feature, index }) => {
  const gradientFrom = feature.color.split(' ')[0].replace('from-', '');
  const gradientTo = feature.color.split(' ')[1].replace('to-', '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
        style={{
          background: `linear-gradient(to right, var(--${gradientFrom}), var(--${gradientTo}))`
        }}
      />
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 h-full border border-gray-200 hover:border-transparent transition-colors duration-300">
        <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0 z-10" />
          <motion.img
            initial={{ scale: 1.2 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-4 left-4 z-20 flex items-center space-x-3"
          >
            <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} shadow-lg`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white drop-shadow-lg">
              {feature.title}
            </h3>
          </motion.div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <button className={`w-full px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${feature.color} text-white hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-2`}>
            <span>Learn More</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Intelligent Travel Planning
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the future of travel planning with our AI-powered features that make your journey seamless and memorable.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Ready to Experience Smart Travel Planning?
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
        >
          Start Planning Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FeaturesSection; 