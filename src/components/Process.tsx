/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ArrowRight, Star } from 'lucide-react';
import { testimonials } from '../types';

const Process = () => {
  const steps = [
    { title: 'Contact Us', desc: 'Reach out via phone or our online form.' },
    { title: 'Site Inspection', desc: 'We visit your property for a detailed assessment.' },
    { title: 'Free Quotation', desc: 'Receive a transparent and detailed pricing estimate.' },
    { title: 'Professional Installation', desc: 'Our experts execute the project with precision.' },
    { title: 'Final Quality Check', desc: 'We ensure everything meets our high standards.' },
  ];

  return (
    <section id="process" className="section-padding bg-gray-950 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">Work Strategy</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Process</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              From the initial consultation to the final brush stroke, we maintain clear communication and expert management.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-6">
                {index + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 md:p-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 text-lg">Contact CM Investment today for professional results that last.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0678649431" className="flex items-center justify-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
                <Phone size={22} />
                Call 067 864 9431
              </a>
              <a href="#contact" className="flex items-center justify-center gap-3 bg-blue-600 text-white border border-blue-500 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all active:scale-95 shadow-xl">
                Request a Quote
                <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Client Satisfaction</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider">Happy Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
