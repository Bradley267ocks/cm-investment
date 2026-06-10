/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    { id: 1, title: 'Luxury Living Ceiling', category: 'Ceiling', image: 'https://i.ibb.co/bR5yFZFs/the-hero-image.png' },
    { id: 2, title: 'Modern Bathroom Tiling', category: 'Tiling', image: '/src/assets/images/tiling_project_1781026229802.png' },
    { id: 3, title: 'Professional Ventilation', category: 'Renovation', image: 'https://i.ibb.co/qMvSmPdL/istockphoto-1470745396-612x612-ventilation.jpg' },
    { id: 4, title: 'Air Conditioning Install', category: 'Renovation', image: 'https://i.ibb.co/GvMM8vN8/Gemini-Generated-Image-jcwnnmjcwnnmjcwn-aircon.png' },
    { id: 5, title: 'Commercial Office Ceiling', category: 'Ceiling', image: 'https://i.ibb.co/p6yVnHsx/about-nutec-construction-png-1781022720284-home-building.jpg' },
    { id: 6, title: 'Full Interior Renovation', category: 'Renovation', image: '/src/assets/images/painting_project_1_1781026246832.png' },
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="projects" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-12 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 font-display">
              Project Showcase
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-blue-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-[110]"
            >
              <X size={40} />
            </button>
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors p-4 z-[110]"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors p-4 z-[110]"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={selectedImage}
              className="relative max-w-5xl w-full aspect-[4/3] md:aspect-video"
            >
              <img 
                src={projects[selectedImage].image} 
                alt={projects[selectedImage].title} 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">
                  {projects[selectedImage].category}
                </span>
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl">
                  {projects[selectedImage].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
