'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';


const reviews = [
  {
    id: 1,
    name: "Dr. Asim",
    role: "Faculty Mentor, CyberSpace Legion",
    text: "It has been inspiring to see students bridge theory and real-world cybersecurity challenges. CSL fosters a culture of technical curiosity, ethical responsibility, and collaboration.",
    avatar: "/planet-09.png"
  },
  {
    id: 2,
    name: "Huzaifa Malik",
    role: "President, CyberSpace Legion",
    text: "Leading CSL has been an incredible journey - from organizing national-level DFIR simulations to hosting Red vs Blue team exercises, we’re preparing the next generation of cybersecurity leaders.",
    avatar: "/planet-09.png"
  },
  {
    id: 3,
    name: "M. Faizan",
    role: "Vice President, Technical Operations",
    text: "Our focus is hands-on learning - cryptography, reverse engineering, digital forensics, and malware analysis. CSL gives students a space to learn, break, fix, and build stronger systems.",
    avatar: "/planet-09.png"
  },
  {
    id: 4,
    name: "Dr. Mehmood",
    role: "PhD Advisor, Artificial Intelligence & Security",
    text: "The integration of AI into cybersecurity is transforming how we detect and respond to threats. CSL’s initiative to explore AI-driven defense systems is truly forward-thinking.",
    avatar: "/planet-09.png"
  },
  {
    id: 5,
    name: "Asim Muneer",
    role: "Cyber Defense Lead",
    text: "From conducting incident response simulations to mentoring new recruits, our mission is simple - build capability, resilience, and awareness in cybersecurity across Pakistan.",
    avatar: "/planet-09.png"
  }
];


const Feedback = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        {/* Reviews Section */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.6] lg:max-w-[500px] flex flex-col gradient-05 sm:p-8 p-6 rounded-[32px] border-[1px] border-[#6a6a6a] relative min-h-[500px]"
        >
          <div className="feedback-gradient" />
          
          {/* Review Content */}
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {reviews[currentReview].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold sm:text-[26px] text-[20px] text-white">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="font-normal sm:text-[16px] text-[12px] text-cyan-400">
                    {reviews[currentReview].role}
                  </p>
                </div>
              </div>

              <p className="font-normal sm:text-[20px] text-[16px] sm:leading-[32px] leading-[24px] text-white/90 italic">
                "{reviews[currentReview].text}"
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-cyan-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevReview}
                className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                  ←
                </div>
                <span className="text-sm">Previous</span>
              </button>

              <button
                onClick={nextReview}
                className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors group"
              >
                <span className="text-sm">Next</span>
                <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-cyan-400 flex items-center justify-center transition-colors">
                  →
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img 
            src={reviews[currentReview].avatar} 
            alt={reviews[currentReview].name} 
            className="w-full lg:h-[500px] h-auto min-h-[300px] object-cover rounded-[40px] shadow-2xl"
          />
          
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img 
              src="/stamp.png" 
              alt="stamp" 
              className="md:w-[155px] w-[100px] md:h-[155px] h-[100px] object-contain animate-pulse" 
            />
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-full h-1">
            <motion.div
              key={currentReview}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;