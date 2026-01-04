export const metadata = {
  title: 'خدماتنا',
  description: 'خدماتنا الشاملة في تصميم المواقع، تطوير الويب، التسويق الرقمي، والهوية البصرية في اليمن وصنعاء. اكتشف ما نقدمه من حلول رقمية متكاملة.',
  keywords: ['خدمات رقمية', 'تصميم مواقع صنعاء', 'تطوير ويب اليمن', 'تسويق رقمي', 'هوية بصرية', 'erateek'],
  openGraph: {
    title: 'خدماتنا | إراتيك - وكالة رقمية',
    description: 'خدماتنا الشاملة في تصميم المواقع، تطوير الويب، والتسويق الرقمي في اليمن وصنعاء',
    url: 'https://erateek.com/services',
    siteName: 'Erateek - Digital Agency',
    images: [
      {
        url: 'https://erateek.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'خدماتنا - إراتيك',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدماتنا | إراتيك',
    description: 'خدماتنا الشاملة في تصميم المواقع وتطوير الويب',
    images: ['https://erateek.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateek.com/services',
  },
};

export default function ServicesLayout({ children }) {
  return children;
}

