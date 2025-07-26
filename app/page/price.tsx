'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for individuals and small households',
    features: [
      'Up to 20 lbs per month',
      'Standard wash & fold',
      'Pickup & delivery',
      'Email notifications',
      '48-hour turnaround'
    ]
  },
  {
    name: 'Premium',
    monthlyPrice: 59,
    yearlyPrice: 590,
    description: 'Ideal for busy families and professionals',
    features: [
      'Up to 50 lbs per month',
      'Wash & fold + dry cleaning',
      'Priority pickup & delivery',
      'SMS & email notifications',
      '24-hour rush service',
      'Stain removal included'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'For businesses and large households',
    features: [
      'Unlimited laundry',
      'All services included',
      'Dedicated account manager',
      'Same-day service',
      'Custom pickup schedule',
      'Commercial-grade cleaning',
      'Bulk discounts'
    ]
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your lifestyle. All plans include our premium 
            service guarantee and eco-friendly cleaning.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Save 17%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-blue-500 border-2 shadow-lg' : ''} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pay Per Use Option</h2>
          <p className="text-gray-600 mb-6">
            Not ready for a subscription? No problem! Pay as you go with our flexible pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wash & Fold</h3>
              <p className="text-2xl font-bold text-blue-600">$2.50/lb</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dry Cleaning</h3>
              <p className="text-2xl font-bold text-blue-600">$8.99/item</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pickup/Delivery</h3>
              <p className="text-2xl font-bold text-blue-600">Free over $35</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}