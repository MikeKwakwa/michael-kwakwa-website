import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://michaelkwakwa.com'),
  title: 'Michael Kwakwa | Creative Director & Founder',
  description: 'Creative Director and founder building meaningful music, platforms, and ideas at the intersection of culture, technology and purpose. Founder of FairPlayer, Mikey Shy, OwnPlay, and more.',
  keywords: ['Michael Kwakwa', 'Creative Director', 'FairPlayer', 'Mikey Shy', 'OwnPlay', 'Music Streaming', 'H.E.A.L', 'This Ability Group'],
  authors: [{ name: 'Michael Kwakwa' }],
  creator: 'Michael Kwakwa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://michaelkwakwa.com',
    title: 'Michael Kwakwa | Creative Director & Founder',
    description: 'Creative Director and founder building meaningful music, platforms, and ideas at the intersection of culture, technology and purpose.',
    siteName: 'Michael Kwakwa',
    images: [
      {
        url: '/logos/fairplayer_logo_2.png',
        width: 1200,
        height: 630,
        alt: 'Michael Kwakwa - Creative Director',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Kwakwa | Creative Director & Founder',
    description: 'Creative Director and founder building meaningful music, platforms, and ideas at the intersection of culture, technology and purpose.',
    images: ['/logos/fairplayer_logo_2.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
