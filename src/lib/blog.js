import { client } from '../sanity/lib/client';
import { urlForImage } from '../sanity/lib/image';

const BASE_POST_FIELDS = `
  title,
  "slug": slug.current,
  "description": description,
  "publishDate": publishedAt,
  "tags": tags,
  "image": mainImage,
  "locale": language,
  "author": author,
  "location": location,
  "category": category,
  "badge": badge,
  "seoKeywords": seoKeywords
`;

// Fields needed ONLY for the single post view
const SINGLE_POST_FIELDS = `
  ${BASE_POST_FIELDS},
  body
`;

export async function getAllPosts(locale = 'ar') {
  const query = `*[_type == "post" && language == $locale] | order(publishedAt desc) {
    ${BASE_POST_FIELDS},
    body
  }`;
  
  const posts = await client.fetch(query, { locale }, { next: { revalidate: 60 } });

  return posts.map(post => ({
    ...post,
    author: post.author || 'Erateech Team', // Use fetched author or default
    image: post.image?.asset?._ref || post.image?.asset?._id || post.image ? urlForImage(post.image).url() : null,
    content: post.body // Rename body to content to match old structure
  }));
}

export async function getPostBySlug(slug, locale = 'ar') {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    ${SINGLE_POST_FIELDS}
  }`;
  
  const post = await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  
  if (!post) return null;
  // Verify locale match locally or in query. Query didn't check locale to allow "Not Found" vs "Wrong Language" distinction, 
  // but strict filtering is safer.
  if (locale && post.locale !== locale) return null;

  return {
    ...post,
    author: post.author || 'Erateech Team',
    image: post.image?.asset?._ref || post.image?.asset?._id || post.image ? urlForImage(post.image).url() : null,
    content: post.body
  };
}

export async function getLatestPosts(locale, limit = 3) {
  const query = `*[_type == "post" && language == $locale] | order(publishedAt desc) [0...${limit}] {
    ${BASE_POST_FIELDS},
    body
  }`;
  
  const posts = await client.fetch(query, { locale }, { next: { revalidate: 60 } });

  return posts.map(post => ({
    ...post,
    author: post.author || 'Erateech Team',
    image: post.image ? urlForImage(post.image).url() : null,
    content: post.body
  }));
}

export async function getRecommendedPosts(currentSlug, locale, limit = 3) {
  const query = `*[_type == "post" && language == $locale && slug.current != $currentSlug] | order(publishedAt desc) [0...${limit}] {
    ${BASE_POST_FIELDS},
    body
  }`;
  
  const posts = await client.fetch(query, { locale, currentSlug }, { next: { revalidate: 60 } });

  return posts.map(post => ({
    ...post,
    author: post.author || 'Erateech Team',
    image: post.image ? urlForImage(post.image).url() : null,
    // No content needed for preview
  }));
}

export async function getAllPostSlugs() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const slugs = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return slugs.map(s => s.slug);
}

