import { getAllPosts } from '../../../lib/blog';
import { en } from '../../../i18n/dictionaries';
import BlogTemplate from '../../../components/templates/BlogTemplate';

export const metadata = {
  title: {
    absolute: 'Blog | Erateek - Digital Insights & Ideas',
  },
  description: 'Explore the latest articles and tips on web design, digital marketing, and e-commerce from Erateek experts.',
  keywords: ['Digital Blog', 'Tech Articles', 'Web Design Yemen', 'Digital Services Sanaa', 'Erateech'],
  openGraph: {
    title: 'Blog | Erateech - Digital Agency',
    description: 'Latest articles and tips in digital development, marketing, and design',
    url: 'https://erateech.com/en/blog',
    siteName: 'Erateech - Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Erateech',
    description: 'Latest articles and tips in digital development',
    images: ['https://erateech.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateech.com/en/blog',
  },
};

export default async function Blog() {
  const sortedPosts = await getAllPosts('en');
  return <BlogTemplate dict={en} lang="en" posts={sortedPosts} />;
}
