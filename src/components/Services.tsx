/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { services } from '../types';
import { ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1216px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 font-display">
              Professional Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              We provide a comprehensive range of premium services to transform and maintain your property to the highest standards.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us sub-section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Why Choose CM Investment?</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Experienced Professionals', icon: '👷', desc: 'Skilled craftsmen with years of expertise.' },
              { title: 'Affordable Pricing', icon: '💰', desc: 'Transparent and competitive rates.' },
              { title: 'Quality Workmanship', icon: '🏆', desc: 'We never compromise on quality.' },
              { title: 'On-Time Completion', icon: '⏱️', desc: 'Punctual and efficient project delivery.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
