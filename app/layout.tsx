import type { Metadata, Viewport } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-merriweather',
  preload: true,
});


export const metadata: Metadata = {
  metadataBase: new URL('https://tacivo.com'),
  title: 'Tacivo - AI-Powered Tacit Knowledge Base | Capture Expert Knowledge',
  description: 'Tacivo captures expert knowledge through 30-minute AI conversations, creating institutional memory that compounds over time. Transform tacit expertise into your competitive moat.',
  keywords: 'knowledge management, AI knowledge capture, institutional memory, tacit knowledge, expert knowledge, knowledge engineering, knowledge base software, organizational learning, expertise capture, AI conversation platform',
  authors: [{ name: 'Tacivo' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Tacivo',
    locale: 'en_US',
    type: 'website',
    url: 'https://tacivo.com',
    title: 'Tacivo - AI-powered tacit knowledge base',
    description: 'Transforms organizational tacit knowledge into structured, searchable AI-ready documentation.',
    images: [
      {
        url: 'https://tacivo.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tacivo - AI-powered tacit knowledge base',
      },
      {
        url: 'https://tacivo.com/assets/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'Tacivo - AI-powered tacit knowledge base',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacivo - AI-powered tacit knowledge base',
    description: 'Capture expert knowledge. Build your competitive moat.',
    images: ['https://tacivo.com/assets/og-image.png'],
  },
  icons: {
    icon: '/assets/logo/png_bg/14.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Tacivo',
              applicationCategory: 'BusinessApplication',
              description: 'AI-powered tacit knowledge base platform that captures expert knowledge through 30-minute conversations',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '1',
              },
            }),
          }}
        />
        
        {/* Fallback for crawlers and no-JS */}
        <noscript>
          <div style={{ padding: '60px 20px', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#0f172a' }}>Tacivo</h1>
            <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#475569' }}>AI-Powered Tacit Knowledge Base</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#64748b', marginBottom: '20px' }}>
              80% of expertise never gets documented. Tacivo captures expert knowledge through 30-minute AI conversations, creating institutional memory that compounds over time.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#64748b', marginBottom: '20px' }}>
              Transform tacit expertise into your competitive moat with our living knowledge platform.
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
