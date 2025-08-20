'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './../components/Navbar';
import { Footer } from './../components/Footer';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavFooter = pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register');

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}
