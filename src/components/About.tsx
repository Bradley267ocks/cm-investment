/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    { title: 'Skilled Team', desc: 'Expert craftsmen with specialized training.' },
    { title: 'Quality Finishes', desc: 'Attention to detail in every corner.' },
    { title: 'Reliable Service', desc: 'Punctual and professional work ethic.' },
    { title: 'Competitive Pricing', desc: 'Honest rates for premium quality.' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1216px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/src/assets/images/ceiling_project_1781026216943.png" 
                alt="Our Work Quality" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">About Our Company</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Quality You Can Trust <br />
                at <span className="text-blue-600">CM Investment</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                CM Investment specializes in ceiling installations, skimming, painting, and tiling services. We are committed to delivering high-quality workmanship, attention to detail, and reliable service that transforms residential and commercial spaces.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
