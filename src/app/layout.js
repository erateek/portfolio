import './globals.css'
import NextTopLoader from 'nextjs-toploader';

import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-arabic',
})

export const metadata = {
  metadataBase: new URL('https://erateek.com'),
  title: {
    default: 'إراتيك - وكالة رقمية',
    template: '%s | إراتيك - وكالة رقمية'
  },
  description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة في اليمن وصنعاء',
  keywords: ['وكالة رقمية', 'تصميم مواقع', 'تطوير ويب', 'اليمن', 'صنعاء', 'خدمات رقمية', 'erateek'],
  authors: [{ name: 'Erateek Agency' }],
  creator: 'Erateek Agency',
  publisher: 'Erateek Agency',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://erateek.com',
    siteName: 'إراتيك - وكالة رقمية',
    title: 'إراتيك - وكالة رقمية',
    description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة في اليمن وصنعاء',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'إراتيك - وكالة رقمية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'إراتيك - وكالة رقمية',
    description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة',
    images: ['/og-image.jpg'],
  },
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
    canonical: 'https://erateek.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}>
      <head>
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-primary/20 font-sans">
        <NextTopLoader
          color="#6366f1"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #6366f1,0 0 5px #6366f1"
        />
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[9999]" style={{backgroundImage: "url('/noise.svg')"}}></div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Erateek Agency',
              url: 'https://erateek.com',
              logo: 'https://erateek.com/icon.png',
              sameAs: [
                'https://facebook.com/erateek',
                'https://instagram.com/erateek',
              ],
              description: 'Leading digital agency in Yemen specializing in web design, development, and digital marketing.',
              image: 'https://erateek.com/og-image.jpg',
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}

