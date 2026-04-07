import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Playtech NZ Guide to Casinos Slots and Games in New Zealand',
  description:
    'Explore Playtech NZ casinos, slots, pokies, live dealer games, and free demo games. Learn if Playtech is legit and enjoy safe, exciting online gaming in New Zealand.',
  alternates: {
    canonical: 'http://playtech-demo.nz/',
  },
  openGraph: {
    type: 'website',
    title: 'Playtech NZ Guide to Casinos Slots and Games in New Zealand',
    description:
      'Explore Playtech NZ casinos, slots, pokies, live dealer games, and free demo games. Learn if Playtech is legit and enjoy safe, exciting online gaming in New Zealand.',
    url: 'http://playtech-demo.nz/',
    siteName: 'Playtech NZ Guide',
  },
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playtech NZ Guide to Casinos Slots and Games in New Zealand',
    description:
      'Explore Playtech NZ casinos, slots, pokies, live dealer games, and free demo games. Learn if Playtech is legit and enjoy safe, exciting online gaming in New Zealand.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'Na3yLxOXcxo6rtmiThK4UN-LzZtROIRMVqQEBj4D94c',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NZ">
      <body>{children}</body>
    </html>
  );
}
