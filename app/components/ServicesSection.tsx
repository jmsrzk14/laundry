'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Shirt, Droplets, Clock, Truck, Shield, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Wash & Fold',
    description: 'Professional washing and folding service for your everyday clothes with premium care.',
    features: ['Same-day service', 'Eco-friendly detergents', 'Careful handling']
  },
  {
    icon: Droplets,
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate fabrics, formal wear, and special garments.',
    features: ['Stain removal', 'Pressing included', '48-hour turnaround']
  },
  {
    icon: Clock,
    title: 'Express Service',
    description: 'Need it fast? Our express service delivers cleaned clothes in just 4 hours.',
    features: ['4-hour service', 'Priority handling', 'Rush delivery']
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    description: 'Convenient pickup and delivery service right to your doorstep on your schedule.',
    features: ['Flexible scheduling', 'Real-time tracking', 'Contactless service']
  },
  {
    icon: Shield,
    title: 'Garment Protection',
    description: 'Advanced stain protection and fabric care to keep your clothes looking new.',
    features: ['Fabric protection', 'Color preservation', 'Odor elimination']
  },
  {
    icon: Sparkles,
    title: 'Premium Care',
    description: 'Luxury service for high-end garments, leather, and specialty items.',
    features: ['Hand washing', 'Custom care', 'Premium packaging']
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Laundry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday wash and fold to specialized dry cleaning, we provide comprehensive 
            services to meet all your laundry needs with professional care and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group-hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300 w-fit">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}