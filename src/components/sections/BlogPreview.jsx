
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { estimateReadingTime } from '../../lib/readingTime';
import { Clock, Star, TrendingUp, Zap, Award } from 'lucide-react';

// Mock blog posts - in a real app, you'd fetch these from a CMS or API
const latestPosts = [
  {
    slug: 'post-1',
    title: 'أهمية التصميم في العصر الرقمي',
    description: 'كيف يمكن للتصميم الجيد أن يحول زوار موقعك إلى عملاء دائمين',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    tags: ['تصميم', 'تجربة المستخدم'],
  },
  {
    slug: 'post-2',
    title: 'دليل شامل لتحسين محركات البحث',
    description: 'خطوات عملية لتحسين موقعك في نتائج البحث',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2d1e6?auto=format&fit=crop&q=80&w=800',
    tags: ['SEO', 'تسويق'],
  },
  {
    slug: 'post-3',
    title: 'أفضل ممارسات تطوير المواقع',
    description: 'نصائح من الخبراء لبناء مواقع سريعة وآمنة',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['تطوير', 'تقنية'],
  },
];

const BlogPreview = ({ dict, lang = 'ar', posts = [] }) => {
  const t = dict?.home?.blog || {};
  // const latestPosts = posts.slice(0, 3); // Handled by parent or slice here if needed
  
  // if (!posts || posts.length === 0) return null; 
  
  if (!posts || posts.length === 0) {
    return (
      <section id="blog" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-foreground mb-4">{t.title}</h2>
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50">
                <p className="text-muted text-lg font-medium">No posts available at the moment. Check back soon!</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-32 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"
      >
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight"
          >
            {t.title} <span className="text-primary">{t.highlight}</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => {
            // Calculate reading time safely
            const readingTime = estimateReadingTime(post.content || '');
            
            // Logic for "Special Badge" based on Schema (Consistent)
            let SpecialBadge = null;
            const badgeType = post.badge || 'none';

             // Dynamic "New" fallback if published within 7 days
            const isRecent = (new Date() - new Date(post.publishDate)) / (1000 * 60 * 60 * 24) < 7;

            if (badgeType === 'featured') {
               SpecialBadge = { icon: Star, text: lang === 'ar' ? 'مميز' : 'Featured', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' };
            } else if (badgeType === 'trending') {
               SpecialBadge = { icon: TrendingUp, text: lang === 'ar' ? 'رائج' : 'Trending', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' };
            } else if (badgeType === 'new') {
               SpecialBadge = { icon: Zap, text: lang === 'ar' ? 'جديد' : 'New', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' };
            } else if (badgeType === 'editorsChoice') {
               SpecialBadge = { icon: Award, text: lang === 'ar' ? 'اختيار المحرر' : 'Editor\'s Choice', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' };
            } else if (isRecent && badgeType === 'none') {
               SpecialBadge = { icon: Zap, text: lang === 'ar' ? 'جديد' : 'New', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' };
            }

            return (
              <Link
                key={post.slug}
                href={`/${lang === 'en' ? 'en/' : ''}blog/${post.slug}`}
                className="group bg-surface rounded-[2rem] overflow-hidden border border-foreground/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden relative">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     {/* Overlay Location Badge on Image */}
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                        📍 {lang === 'ar' ? 'صنعاء، اليمن' : 'Sanaa, Yemen'}
                     </div>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* Category */}
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                      {post.category || (lang === 'ar' ? 'عام' : 'General')}
                    </span>
                    
                    {/* Reading Time */}
                    <span className="text-xs px-3 py-1 bg-surface-200 text-muted rounded-full font-bold border border-foreground/5 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-secondary" />
                        <span>{readingTime} {lang === 'ar' ? 'د' : 'min'}</span>
                    </span>

                     {/* Special Badge */}
                    {SpecialBadge && (
                      <span className={`text-xs px-3 py-1 rounded-full font-bold border flex items-center gap-1.5 ${SpecialBadge.color}`}>
                          <SpecialBadge.icon className="w-3 h-3" />
                          <span>{SpecialBadge.text}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                    <span>{dict.common.readMore}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href={`/${lang === 'en' ? 'en/' : ''}blog`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface border-2 border-foreground/10 hover:border-primary hover:bg-primary/5 rounded-xl font-bold text-foreground transition-all"
          >
            <span>{t.viewAll}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
