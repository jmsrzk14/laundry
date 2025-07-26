'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const pricing = [
  {
    service: 'Wash & Fold',
    price: '$2.50',
    unit: 'per lb',
    description: 'Professional washing and folding',
    popular: false
  },
  {
    service: 'Dry Cleaning',
    price: '$8.99',
    unit: 'per item',
    description: 'Expert dry cleaning service',
    popular: true
  },
  {
    service: 'Express Service',
    price: '$4.99',
    unit: 'per lb',
    description: '4-hour rush service',
    popular: false
  }
];

export function PricingSection() {
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Just honest pricing for quality laundry services 
            that save you time and give you perfect results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricing.map((item, index) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full text-center ${item.popular ? 'border-blue-500 border-2 shadow-lg' : ''} hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{item.service}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">{item.price}</span>
                    <span className="text-gray-500 ml-2">{item.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Button 
                    className={`w-full ${item.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    Get Started
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
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Free Pickup & Delivery
          </h3>
          <p className="text-gray-600 mb-6">
            On orders over $35. Schedule your pickup today and experience the convenience 
            of professional laundry service delivered to your door.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
            Schedule Free Pickup
          </Button>
        </motion.div>
      </div>
    </section>
  );
}