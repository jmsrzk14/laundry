  import '../globals.css';
  import type { Metadata } from 'next';
  import { Inter } from 'next/font/google';
  import { DashboardSidebar } from '../components/dashboard/dashboardSidebar';
  import { DashboardHeader } from '../components/dashboard/dashboardHeader';
  
  const inter = Inter({ subsets: ['latin'] });
  
  export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard for managing your account',
  };
  
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardSidebar />
        <div className="lg:pl-64">
          <main className="px-4 lg:px-6">
            <DashboardHeader />
            { children }
          </main>
        </div>
      </div>
    );
  }