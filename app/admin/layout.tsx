import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DashboardSidebar } from '../components/dashboard/dashboardSidebar';
import { DashboardHeader } from '../components/dashboard/dashboardHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Manage your laundry orders and account settings.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <DashboardSidebar />
          <div className="lg:pl-64">
            <DashboardHeader />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}