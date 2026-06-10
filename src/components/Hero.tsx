/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ChevronRight } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    'Professional Workmanship',
    'Affordable Pricing',
    'Quality Materials',
    'Customer Satisfaction',
  ];

  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-gray-950 overflow-hidden">
      {/* Clean Background Image with Subtle Overlay - Reduced Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/bR5yFZFs/the-hero-image.png" 
          alt="Professional Construction Work" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full container-custom py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-md">
              Reliable Construction Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Professional <br className="hidden sm:block" />
              <span className="text-blue-500">Ceiling, Painting</span> <br className="hidden sm:block" />
              & Tiling Services
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Quality workmanship, reliable service, and beautiful finishes for homes and businesses throughout South Africa. We bring excellence to every renovation project.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-12">
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all active:scale-95"
              >
                Get a Free Quote
                <ChevronRight size={20} />
              </a>
              <a 
                href="tel:0678649431"
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg transition-all"
              >
                <Phone size={20} className="text-blue-500" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 w-full max-w-xl">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-300">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
