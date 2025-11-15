// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kishorkumar Dhanabose - QA Engineer Portfolio',
  description: 'Meticulous QA Engineer with 2.5+ years of experience in Manual, Automation, AEM, and Performance Testing. Proven track record of delivering high-quality solutions for web, mobile, and API testing.',
  keywords: ['QA Engineer', 'Automation Testing', 'WDIO', 'Selenium', 'Performance Testing', 'JMeter', 'Manual Testing', 'AEM Testing'],
  authors: [{ name: 'Kishorkumar Dhanabose' }],
  openGraph: {
    title: 'Kishorkumar Dhanabose - QA Engineer Portfolio',
    description: 'Experienced QA Engineer specializing in Automation and Performance Testing',
    url: 'https://kishorkumar-portfolio.vercel.app',
    siteName: 'Kishorkumar Portfolio',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kishorkumar Dhanabose - QA Engineer',
    description: 'QA Engineer | Automation | Performance Testing',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}