import { getPostsForSitemap } from '../lib/blog';

const baseUrl = 'https://erateek.com';

export default async function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/brief',
  ];

  const routes = [];

  // 1. Generate Static Routes for AR (default) and EN
  staticRoutes.forEach(route => {
    // Arabic (Default)
    routes.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/blog' ? 'daily' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    });

    // English
    routes.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/blog' ? 'daily' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // 2. Generate Blog Post Routes (Dynamic)
  try {
    const posts = await getPostsForSitemap();
    
    posts.forEach((post) => {
      const isEnglish = post.language === 'en';
      const routePrefix = isEnglish ? '/en/blog' : '/blog';
      
      routes.push({
        url: `${baseUrl}${routePrefix}/${post.slug}`,
        lastModified: new Date(post.publishedAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Error generating blog routes for sitemap:', error);
  }

  return routes;
}

