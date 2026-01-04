import { getAllPosts } from '../../lib/blog';
import { ar } from '../../i18n/dictionaries';
import BlogTemplate from '../../components/templates/BlogTemplate';

export const metadata = {
  title: 'المدونة | إراتيك - رؤى وأفكار في العالم الرقمي',
  description: 'اكتشف أحدث المقالات والنصائح في مجال تصميم المواقع، التسويق الرقمي، والتجارة الإلكترونية من خبراء إراتيك.',
  keywords: ['مدونة رقمية', 'مقالات تقنية', 'تصميم مواقع اليمن', 'خدمات رقمية صنعاء', 'erateek'],
  openGraph: {
    title: 'المدونة | إراتيك - وكالة رقمية',
    description: 'أحدث المقالات والنصائح في عالم التطوير الرقمي والتسويق والتصميم',
    url: 'https://erateek.com/blog',
    siteName: 'إراتيك - وكالة رقمية',
    images: [
      {
        url: 'https://erateek.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'المدونة - إراتيك',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'المدونة | إراتيك',
    description: 'أحدث المقالات والنصائح في عالم التطوير الرقمي',
    images: ['https://erateek.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateek.com/blog',
  },
};

export default async function Blog() {
  const sortedPosts = await getAllPosts('ar');
  return <BlogTemplate dict={ar} lang="ar" posts={sortedPosts} />;
}
