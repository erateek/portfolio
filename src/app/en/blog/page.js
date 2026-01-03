import { getAllPosts } from '../../../lib/blog';
import { en } from '../../../i18n/dictionaries';
import BlogTemplate from '../../../components/templates/BlogTemplate';

export const metadata = {
  title: {
    absolute: 'Blog | Erateek - Digital Insights & Ideas',
  },
  description: 'Explore the latest articles and tips on web design, digital marketing, and e-commerce from Erateek experts.',
  keywords: ['Digital Blog', 'Tech Articles', 'Web Design Yemen', 'Digital Services Sanaa', 'Erateek'],
  openGraph: {
    title: 'Blog | Erateek - Digital Agency',
    description: 'Latest articles and tips in digital development, marketing, and design',
    url: 'https://erateek.com/en/blog',
    siteName: 'Erateek - Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Erateek',
    description: 'Latest articles and tips in digital development',
    images: ['https://erateek.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateek.com/en/blog',
  },
};

export default async function Blog() {
  const sortedPosts = await getAllPosts('en');
  return <BlogTemplate dict={en} lang="en" posts={sortedPosts} />;
}
