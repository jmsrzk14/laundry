'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Schedule your first pickup today and discover the convenience of professional 
            laundry service. No commitment required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Schedule Your Pickup
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Phone Number" />
                  </div>
                  <Input placeholder="Email Address" />
                  <Input placeholder="Address" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input type="date" />
                    <Input type="time" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Schedule Free Pickup
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                details: '+1 (555) 123-4567',
                description: 'Speak with our friendly team'
              },
              {
                icon: Mail,
                title: 'Email Us',
                details: 'hello@cleancycle.com',
                description: 'Send us your questions anytime'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                details: '123 Clean Street, Wash City',
                description: 'Drop off your laundry in person'
              },
              {
                icon: Clock,
                title: 'Hours',
                details: 'Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM',
                description: 'We\'re here when you need us'
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
                        <p className="text-white/90 font-medium mb-1">{contact.details}</p>
                        <p className="text-white/70 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}