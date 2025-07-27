'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const pricing = [
  {
    service: '10 Pounds',
    price: '$19.99 USD',
    description: 'Lorem ipsum dolor sit amet consectet adipiscing eli mattis sit phasellus mo.',
  },
  {
    service: '15 Pounds',
    price: '$29.99 USD',
    description: 'Lorem ipsum dolor sit amet consectet adipiscing eli mattis sit phasellus mo.',
  },
  {
    service: '30 Pounds',
    price: '$39.99 USD',
    description: 'Lorem ipsum dolor sit amet consectet adipiscing eli mattis sit phasellus mo.',
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
              <Card className={`h-full text-center hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{item.service}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Button 
                    className={`w-full bg-gray-800 hover:bg-blue-600`}
                  >
                    Get Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}