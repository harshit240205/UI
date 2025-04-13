import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        {/* First Wave */}
        <motion.div
          className="absolute w-[200%] h-[50vh] left-[-50%]"
          style={{
            top: '20%',
            background: 'linear-gradient(45deg, #4F46E5, #06B6D4)',
            borderRadius: '50%',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Second Wave */}
        <motion.div
          className="absolute w-[200%] h-[50vh] left-[-50%]"
          style={{
            top: '40%',
            background: 'linear-gradient(45deg, #8B5CF6, #3B82F6)',
            borderRadius: '50%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Third Wave */}
        <motion.div
          className="absolute w-[200%] h-[50vh] left-[-50%]"
          style={{
            top: '60%',
            background: 'linear-gradient(45deg, #EC4899, #8B5CF6)',
            borderRadius: '50%',
          }}
          animate={{
            x: [-100, 0, -100],
            y: [50, 0, 50],
            rotate: [5, 0, 5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground; 