import { getLatestPosts } from '../../lib/blog';
import { en } from '../../i18n/dictionaries';
import HomeTemplate from '@/components/templates/HomeTemplate.jsx';

export const metadata = {
  title: {
    absolute: 'Erateek | Your Strategic Partner for Digital Growth',
  },
  description: 'Erateek Agency provides integrated web solutions: Website Design, E-commerce, and Digital Marketing. We turn your vision into a successful digital project defined by quality and innovation.',
  keywords: ['Web Design', 'E-commerce Development', 'Digital Marketing', 'Digital Agency', 'Yemen', 'Gulf', 'Web Apps', 'Erateek'],
  openGraph: {
    title: 'Erateek | Your Strategic Partner for Digital Growth',
    description: 'Erateek Agency provides integrated web solutions: Website Design, E-commerce, and Digital Marketing.',
    url: 'https://erateek.com/en',
    siteName: 'Erateek - Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://erateek.com/en',
  },
};

export default async function Home() {
  const latestPosts = await getLatestPosts('en', 3);
  return <HomeTemplate dict={en} lang="en" posts={latestPosts} />;
}
