import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Sharma',
      title: 'Content Creator',
      content: 'KushTrendLab transformed my podcast into something cinematic. The editing quality is professional and turnaround time is incredible!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Priya Kapoor',
      title: 'Influencer',
      content: 'My reels got 10x more engagement after using their editing services. Highly recommended for anyone serious about content!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      title: 'Business Owner',
      content: 'Professional service at affordable prices. They delivered our corporate video exactly as imagined. Will definitely work with them again.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Neha Singh',
      title: 'Music Artist',
      content: 'The music video they produced for me was absolutely stunning. Creative, professional, and worth every penny!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by creators, influencers, and brands
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Current Testimonial */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-neon-red/20 relative">
            {/* Decorative Quote */}
            <div className="absolute top-6 left-6 text-6xl text-neon-red/10">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FiStar key={i} className="text-neon-red fill-current" size={20} />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-neon-red"
              />
              <div>
                <h4 className="text-lg font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-neon-red text-sm">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full glass border border-neon-red/30 hover:border-neon-red/60 flex items-center justify-center text-neon-red hover:bg-neon-red/10 transition-all"
            >
              <FiChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full glass border border-neon-red/30 hover:border-neon-red/60 flex items-center justify-center text-neon-red hover:bg-neon-red/10 transition-all"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-neon-red'
                    : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;