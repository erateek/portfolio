
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { estimateReadingTime } from '../../lib/readingTime';
import { Clock, Star, TrendingUp, Zap, Award } from 'lucide-react';

const BlogTemplate = ({ dict, lang, posts }) => {
  const data = dict.blogPage || { 
      // Fallback if dictionary update failed or lagging
      title: lang === 'ar' ? 'مدونة' : 'Erateek',
      titleHighlight: lang === 'ar' ? 'إراتيك' : 'Blog',
      subtitle: '',
      noPosts: '',
      readMore: ''
  };

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
          >
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1
                className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight"
              >
                {data.title} <span className="text-primary">{data.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-32 px-4 md:px-6">
          <div className="container mx-auto">
            {!posts || posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-lg">{data.noPosts}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const readingTime = estimateReadingTime(post.content);
                  
                  // Logic for "Special Badge" based on Schema (Consistent)
                  // Options: 'featured', 'trending', 'new', 'editorsChoice', 'none'
                  let SpecialBadge = null;
                  const badgeType = post.badge || 'none';

                  // Dynamic "New" fallback if published within 7 days and no other badge set
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
                     // Fallback: Automatically mark as New if recent
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
                        {/* Overlay Location Badge on Image for "Sanaa" look */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                           📍 {lang === 'ar' ? 'صنعاء، اليمن' : 'Sanaa, Yemen'}
                        </div>
                      </div>
                    )}

                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* 1. Category */}
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                            {post.category || (lang === 'ar' ? 'عام' : 'General')}
                          </span>

                          {/* 2. Reading Time */}
                          <span className="text-xs px-3 py-1 bg-surface-200 text-muted rounded-full font-bold border border-foreground/5 flex items-center gap-1.5">
                             <Clock className="w-3 h-3 text-secondary" />
                             <span>{readingTime} {lang === 'ar' ? 'د' : 'min'}</span>
                          </span>

                          {/* 3. Special Badge (Review/Editor Choice) */}
                          {SpecialBadge && (
                            <span className={`text-xs px-3 py-1 rounded-full font-bold border flex items-center gap-1.5 ${SpecialBadge.color}`}>
                               <SpecialBadge.icon className="w-3 h-3" />
                               <span>{SpecialBadge.text}</span>
                            </span>
                          )}
                        </div>

                        <h2 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-muted leading-relaxed mb-6 line-clamp-3">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted">{post.author}</span>
                          <span className="text-muted">
                            {new Date(post.publishDate).toLocaleDateString(
                              lang === 'en' ? 'en-US' : 'ar-EG',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              }
                            )}
                          </span>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                          <span>{data.readMore}</span>
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
            )}
          </div>
        </section>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
};

export default BlogTemplate;
