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
  metadataBase: new URL('https://erateech.com'),
  title: {
    default: 'إراتيك - وكالة رقمية',
    template: '%s | إراتيك - وكالة رقمية'
  },
  description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة في اليمن وصنعاء',
  keywords: ['وكالة رقمية', 'تصميم مواقع', 'تطوير ويب', 'اليمن', 'صنعاء', 'خدمات رقمية', 'erateech'],
  authors: [{ name: 'Erateek Agency' }],
  creator: 'Erateek Agency',
  publisher: 'Erateek Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://erateech.com',
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
    canonical: 'https://erateech.com',
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
        {children}
      </body>
    </html>
  )
}

