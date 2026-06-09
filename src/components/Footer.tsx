/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="max-w-[1216px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="font-display font-bold text-2xl tracking-tight">CM INVESTMENT</span>
            </div>
            <p className="text-gray-400 leading-relaxed italic">
              "Professional ceiling, painting, and tiling services for residential and commercial spaces."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600 after:mt-2">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Projects', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
                    <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600 after:mt-2">Services</h4>
            <ul className="space-y-4">
              {['Ceiling Installation', 'Ceiling Repairs', 'Skimming', 'Painting', 'Tiling', 'Renovations'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                    <ChevronRight size={14} className="text-blue-600" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600 after:mt-2">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Phone</p>
                  <a href="tel:0678649431" className="hover:text-blue-400 transition-colors">067 864 9431</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:mupumhochristopher@gmail.com" className="hover:text-blue-400 transition-colors break-all">mupumhochristopher@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Location</p>
                  <p>Kraaifontein, Western Cape</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {currentYear} CM Investment. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
