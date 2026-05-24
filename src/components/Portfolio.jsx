import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiX } from 'react-icons/fi';

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Cinematic Podcast Edit',
      category: 'Podcast',
      thumbnail: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Instagram Reel Series',
      category: 'Reel',
      thumbnail: 'https://images.unsplash.com/photo-1626499461180-76c66db4f535?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'Commercial',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Brand Storytelling',
      category: 'Documentary',
      thumbnail: 'https://images.unsplash.com/photo-1527480122842-4cea57ca6e4e?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 5,
      title: 'Music Video Production',
      category: 'Music',
      thumbnail: 'https://images.unsplash.com/photo-1616299206176-e81d2b5a6bb7?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 6,
      title: 'Corporate Highlight Reel',
      category: 'Corporate',
      thumbnail: 'https://images.unsplash.com/photo-1600881333607-5e0b7d50f8f7?w=400&h=300&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of our best work and client projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedVideo(item)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-2xl border border-neon-red/20 group-hover:border-neon-red/60 transition-all">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent flex flex-col justify-end p-6 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neon-red text-sm mb-4">{item.category}</p>
                </motion.div>

                {/* Play Button */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-red to-neon-pink flex items-center justify-center shadow-lg shadow-neon-red/50"
                  >
                    <FiPlay className="text-white text-2xl ml-1" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-neon-red transition-colors"
              >
                <FiX />
              </button>
              <iframe
                width="100%"
                height="500"
                src={selectedVideo.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;