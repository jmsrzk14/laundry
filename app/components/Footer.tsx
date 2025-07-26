'use client';

import Link from 'next/link';
import { Droplets, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Wash & Fold', href: '/services' },
      { name: 'Dry Cleaning', href: '/services' },
      { name: 'Express Service', href: '/services' },
      { name: 'Pickup & Delivery', href: '/services' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    Support: [
      { name: 'Help Center', href: '/contact' },
      { name: 'Track Order', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Terms of Service', href: '/' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CleanCycle</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional laundry and dry cleaning services with convenient pickup and delivery. 
              Experience the difference of premium care for your garments.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} CleanCycle. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}