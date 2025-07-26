'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Users, Award, Leaf, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Customers', value: '10,000+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Leaf, label: 'Eco-Friendly', value: '100%' },
  { icon: Clock, label: 'Average Delivery', value: '24hrs' },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose CleanCycle?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, we've been dedicated to providing exceptional laundry services 
              that save you time and give you peace of mind. Our commitment to quality, 
              convenience, and environmental responsibility has made us the trusted choice 
              for thousands of families and businesses.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'State-of-the-art cleaning equipment and techniques',
                'Eco-friendly detergents and sustainable practices',
                'Professional staff trained in garment care',
                'Convenient pickup and delivery service',
                'Quality guarantee on all services'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <stat.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4239853/pexels-photo-4239853.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional laundry facility"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">State-of-the-Art Facility</h4>
                <p className="text-sm opacity-90">Modern equipment for perfect results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}