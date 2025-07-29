'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import CartModal from './ui/card-modal';
import { Menu, X, WashingMachine, Phone, Mail, Clock, MapPinIcon, ShoppingCart } from 'lucide-react';

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
    { href: '/about', label: 'Tentang Kami' },
    { href: '/partners', label: 'Kemitraan' },
    { href: '/outlet', label: 'Outlet Kami' },
    { href: '/article', label: 'Artikel' },
  ];

  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <motion.nav
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative top-0 right-0 z-40 transition-all duration-300`}
    >
      <div className="mx-auto px-[2em] bg-white md:bg-blue-400 backdrop-blur-md shadow-none md:shadow-lg">
        <div className="flex items-center justify-between h-16">
          <div className="items-center gap-4 hidden md:flex">
            <div className="flex items-center">
              <Phone size={23} color="white" />
              <span className="text-md text-white ml-2 hidden md:inline">(+62) 822 8333 8333</span>
            </div>
            <div className="flex items-center ml-6">
              <Mail size={25} color="white" />
              <span className="text-md text-white ml-2 hidden md:inline">admin@example.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <div className="p-2 bg-blue-600 rounded-lg">
              <WashingMachine className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Laundry X</span>
          </div>

          <div className="items-center gap-4 hidden md:flex">
            <div className="flex items-center">
              <Clock size={23} color="white" />
              <span className="text-md text-white ml-2 hidden md:inline">Mon - Fri: 07.00 - 18.00</span>
            </div>
            <div className="flex items-center ml-6">
              <MapPinIcon size={25} color="white" />
              <span className="text-md text-white ml-2 hidden md:inline">Bandung, Indonesia</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 w-full z-50 bg-white shadow-lg border-t"
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
            </div>
          </motion.div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-8 absolute top-20 left-10 z-40 md:justify-between">
        <div className="hidden items-center gap-2 md:flex mr-6">
          <div className="relative p-2 bg-blue-600 rounded-lg">
            <WashingMachine className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Laundry X</span>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            {item.label}
          </Link>
        ))}
        <button onClick={() => setShowCartModal(true)} className="ml-[30em]">
          <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
        </button>
      </div>
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
    </motion.nav>
  );
}