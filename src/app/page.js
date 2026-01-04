import { getLatestPosts } from '../lib/blog';
import { ar } from '../i18n/dictionaries';
import HomeTemplate from '../components/templates/HomeTemplate.jsx';

// Metadata remains the same... (omitted from replacement for brevity if unchanged, but ReplaceFileContent requires context)
export const metadata = {
  title: 'إراتيك | شريكك الاستراتيجي للنمو الرقمي',
  description: 'وكالة إراتيك تقدم حلول ويب متكاملة: تصميم مواقع، متاجر إلكترونية، وتسويق رقمي. نحول فكرتك إلى مشروع رقمي ناجح يتميز بالجودة والابتكار.',
  keywords: ['تصميم مواقع', 'برمجة متاجر', 'تسويق الكتروني', 'وكالة رقمية', 'اليمن', 'صنعاء', 'تطبيقات ويب', 'Erateek'],
  openGraph: {
    title: 'إراتيك | شريكك الاستراتيجي للنمو الرقمي',
    description: 'وكالة إراتيك تقدم حلول ويب متكاملة: تصميم مواقع، متاجر إلكترونية، وتسويق رقمي.',
    url: 'https://erateek.com',
    siteName: 'إراتيك - وكالة رقمية',
    images: [
      {
        url: 'https://erateek.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'إراتيك - وكالة رقمية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'إراتيك - وكالة رقمية',
    description: 'وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة',
    images: ['https://erateek.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateek.com',
  },
};

export default async function Home() {
  const latestPosts = await getLatestPosts('ar', 3);
  return <HomeTemplate dict={ar} lang="ar" posts={latestPosts} />;
}
