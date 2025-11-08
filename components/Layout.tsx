
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

// Extend the Window interface to include gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: { page_path: string }) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-ZM1Z48J8B1';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // This effect hook will run on component mount and whenever the location changes.
  useEffect(() => {
    // Check if the gtag function is available on the window object.
    if (window.gtag) {
      // Since we are using HashRouter, the actual path is in the hash.
      // We combine pathname and hash to get the full path for GA.
      const pagePath = location.pathname + location.hash;
      
      // Send a page_view event to Google Analytics.
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-slate-900 dark:text-gray-300 transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;