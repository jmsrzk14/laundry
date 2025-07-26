'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Users, Award, Clock, Leaf } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Customers', value: '10,000+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Clock, label: 'Orders Completed', value: '50,000+' },
  { icon: Leaf, label: 'Eco-Friendly', value: '100%' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sarah founded CleanCycle with a vision to revolutionize the laundry industry through technology and exceptional service.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Michael ensures our operations run smoothly and efficiently, maintaining the highest quality standards.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Success Manager',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Emily leads our customer success team, ensuring every customer has an exceptional experience.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About CleanCycle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about providing exceptional laundry services that save you time 
            and give you peace of mind, all while caring for the environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <stat.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Founded in 2008, CleanCycle began as a small neighborhood laundromat with a big dream: 
              to transform the way people think about laundry services. What started as a simple 
              wash-and-fold operation has grown into a full-service laundry and dry cleaning company 
              serving thousands of customers across the city.
            </p>
            <p className="mb-6">
              Our commitment to quality, convenience, and environmental responsibility has been the 
              driving force behind our success. We've invested in state-of-the-art equipment, 
              eco-friendly cleaning solutions, and technology that makes ordering and tracking 
              your laundry as easy as tapping your phone.
            </p>
            <p>
              Today, CleanCycle is proud to be the trusted laundry partner for busy professionals, 
              families, and businesses who value their time and want the best care for their garments.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}