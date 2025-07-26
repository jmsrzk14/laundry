'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X, Droplets, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative top-0 right-0 z-50 transition-all duration-300 bg-blue-400 backdrop-blur-md shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Phone size={20} color='white'/>
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CleanCycle</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}