'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Shirt, Droplets, Clock, Shield, Truck, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const services = [
  {
    icon: Shirt,
    title: 'Wash & Fold',
    description: 'Professional washing and folding service for your everyday clothes.',
    features: ['Same-day service available', 'Eco-friendly detergents', 'Careful fabric handling'],
    price: 'Starting at $2.50/lb'
  },
  {
    icon: Droplets,
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate and formal garments.',
    features: ['Stain removal expertise', 'Pressing included', '24-48 hour turnaround'],
    price: 'Starting at $8.99/item'
  },
  {
    icon: Sparkles,
    title: 'Premium Care',
    description: 'Specialized care for luxury items and delicate fabrics.',
    features: ['Hand washing available', 'Custom care instructions', 'Premium packaging'],
    price: 'Starting at $15.99/item'
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    description: 'Convenient pickup and delivery service to your doorstep.',
    features: ['Flexible scheduling', 'Real-time tracking', 'Contactless service'],
    price: 'Free with $35+ orders'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday wash and fold to specialized dry cleaning, we provide comprehensive
            laundry solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-blue-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Something Custom?</h2>
          <p className="text-gray-600 mb-6">
            We offer customized laundry solutions for businesses, hotels, and special requirements.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            Contact Us for Custom Solutions
          </Button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}