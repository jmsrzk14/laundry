'use client';

import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
    </main>
  );
}