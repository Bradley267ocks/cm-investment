/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Hammer, 
  Paintbrush, 
  Layers, 
  Grid3X3, 
  Home, 
  Building2, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Users,
  ShieldCheck,
  Star
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface Choice {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}

export const services: Service[] = [
  {
    id: 'ceiling-inst',
    title: 'Ceiling Installation',
    description: 'Professional installation of modern ceiling systems for residential and commercial properties.',
    icon: Layers,
  },
  {
    id: 'ceiling-rep',
    title: 'Ceiling Repairs',
    description: 'Expert repair services for damaged, sagging, or water-affected ceilings.',
    icon: Hammer,
  },
  {
    id: 'skimming',
    title: 'Skimming Services',
    description: 'High-quality wall and ceiling skimming for a perfectly smooth, professional finish.',
    icon: Paintbrush,
  },
  {
    id: 'int-painting',
    title: 'Interior Painting',
    description: 'Transform your indoor spaces with professional painting and meticulous attention to detail.',
    icon: Home,
  },
  {
    id: 'ext-painting',
    title: 'Exterior Painting',
    description: 'Durable and beautiful exterior finishes that protect and enhance your property.',
    icon: Building2,
  },
  {
    id: 'floor-tiling',
    title: 'Floor Tiling',
    description: 'Precision tiling for floors using high-quality materials and modern patterns.',
    icon: Grid3X3,
  },
  {
    id: 'wall-tiling',
    title: 'Wall Tiling',
    description: 'Elegant wall tiling for bathrooms, kitchens, and feature walls.',
    icon: Grid3X3,
  },
  {
    id: 'renovations',
    title: 'Renovation Projects',
    description: 'Complete residential and commercial renovation services tailored to your needs.',
    icon: ShieldCheck,
  },
];

export const reasons: Choice[] = [
  {
    id: 'exp',
    title: 'Experienced Professionals',
    description: 'Our team brings years of expertise to every project.',
    icon: Users,
  },
  {
    id: 'price',
    title: 'Affordable Pricing',
    description: 'Quality workmanship at competitive rates that fit your budget.',
    icon: DollarSign,
  },
  {
    id: 'quality',
    title: 'Quality Workmanship',
    description: 'We take pride in delivering finishes of the highest standard.',
    icon: CheckCircle2,
  },
  {
    id: 'time',
    title: 'On-Time Completion',
    description: 'Reliable scheduling and efficient project management.',
    icon: Clock,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Johan Venter',
    content: 'Excellent ceiling installation and professional service. The team was punctual and very tidy.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Smith',
    content: 'Very neat painting work and great attention to detail. Our home looks brand new!',
    rating: 5,
  },
  {
    id: '3',
    name: 'David Nkosi',
    content: 'Highly recommended for tiling and renovation projects. They understood exactly what we wanted.',
    rating: 5,
  },
];
