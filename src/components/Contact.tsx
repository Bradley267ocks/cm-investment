/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 font-display">Get a Free Quotation</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Ready to transform your property? Contact CM Investment today for professional services and a free quotation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:0678649431" className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-bold text-gray-900">067 864 9431</p>
                  </div>
                </a>
                
                <a href="mailto:mupumhochristopher@gmail.com" className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-base font-bold text-gray-900 break-all">mupumhochristopher@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-base font-bold text-gray-900 leading-snug">
                      Belmont Park, Kraaifontein,<br />
                      Western Cape
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
              <form className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button 
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
