import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tacivo - Living Knowledge Platform | Capture Expert Knowledge',
  description: 'Tacivo captures expert knowledge through 30-minute AI conversations, creating institutional memory that compounds over time. Transform tacit expertise into your competitive moat.',
  keywords: 'knowledge management, AI knowledge capture, institutional memory, tacit knowledge, expert knowledge',
  authors: [{ name: 'Tacivo' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://tacivo.com',
    title: 'Tacivo - Living Knowledge Platform',
    description: '30-minute conversation. Institutional memory that compounds forever.',
    images: [
      {
        url: 'https://tacivo.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tacivo - Living Knowledge Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacivo - Living Knowledge Platform',
    description: 'Capture expert knowledge. Build your competitive moat.',
  },
  icons: {
    icon: '/assets/11.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* Fallback for crawlers and no-JS */}
        <noscript>
          <div style={{ padding: '60px 20px', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#0f172a' }}>Tacivo</h1>
            <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#475569' }}>Living Knowledge Platform</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#64748b', marginBottom: '20px' }}>
              Capture expert knowledge through 30-minute AI conversations. Build institutional memory that compounds over time.
            </p>
            <p style={{ fontSize: '16px', color: '#94a3b8' }}>
              Please enable JavaScript to view the full interactive experience.
            </p>
            <a href="mailto:hello@tacivo.com" style={{ display: 'inline-block', marginTop: '30px', padding: '12px 24px', background: '#0f172a', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>Contact Us</a>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
