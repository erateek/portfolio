import Navbar from '../../../../components/sections/Navbar';
import Footer from '../../../../components/sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getRecommendedPosts } from '../../../../lib/blog';
import { en } from '../../../../i18n/dictionaries';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../../sanity/lib/image';
import { estimateReadingTime } from '../../../../lib/readingTime';
import ReadingProgressBar from '../../../../components/ui/ReadingProgressBar';
import ShareButtons from '../../../../components/ui/ShareButtons';
import { ArrowRight, Calendar, Clock, ArrowUpRight, Star, TrendingUp, Zap, Award } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, 'en');
  
  if (!post) {
    return {
      title: 'Post Not Found | Erateek',
    };
  }

  return {
    title: `${post.title} | Erateek`,
    description: post.description,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://erateek.com/en/blog/${slug}`,
      siteName: 'Erateek - Digital Agency',
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, 'en');

  if (!post) {
    notFound();
  }

  const recommendedPosts = await getRecommendedPosts(slug, 'en', 3);

  const readingTime = estimateReadingTime(post.content);

  // Logic for "Special Badge" based on Schema
  let SpecialBadge = null;
  const badgeType = post.badge || 'none';
  const isRecent = (new Date() - new Date(post.publishDate)) / (1000 * 60 * 60 * 24) < 7;

  if (badgeType === 'featured') {
      SpecialBadge = { icon: Star, text: 'Featured', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' };
  } else if (badgeType === 'trending') {
      SpecialBadge = { icon: TrendingUp, text: 'Trending', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' };
  } else if (badgeType === 'new') {
      SpecialBadge = { icon: Zap, text: 'New', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' };
  } else if (badgeType === 'editorsChoice') {
      SpecialBadge = { icon: Award, text: 'Editor\'s Choice', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' };
  } else if (isRecent && badgeType === 'none') {
      SpecialBadge = { icon: Zap, text: 'New', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' };
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="relative w-full h-96 my-8 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={urlForImage(value).fit('max').auto('format').url()}
              alt={value.alt || ' '}
              fill
              className="object-cover"
            />
          </div>
        )
      }
    },
    block: {
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary bg-surface py-6 px-8 rounded-3xl not-italic shadow-sm my-8">
          {children}
        </blockquote>
      )
    }
  }

  return (
    <>
      <Navbar dict={en} lang="en" />
      <ReadingProgressBar />

      <main className="min-h-screen bg-background">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-8 md:pt-36 md:pb-16 px-4 md:px-6">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           
           <div className="container mx-auto max-w-4xl relative z-10">
            {/* Navigation & Tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <Link
                href="/en/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-primary transition-colors group p-2 -ml-2"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1 rotate-180 scale-x-[-1]" />
                <span>Back to Blog</span>
              </Link>
              <div className="flex flex-wrap gap-2">
                 {/* Category as primary tag */}
                 {post.category && (
                    <span className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold border border-primary/10">
                      {post.category}
                    </span>
                 )}
                {/* Filter out category from tags to avoid duplication */}
                {post.tags && post.tags.filter(t => t !== post.category).map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-surface border border-foreground/10 text-muted text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground leading-[1.2] md:leading-[1.1] mb-8 tracking-tight">
              {post.title}
            </h1>

            {/* Meta Data */}
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm border-b border-foreground/5 pb-8 mb-8">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-background shadow-lg bg-surface overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary font-bold text-xs">
                     <Image src="/icon-192.png" alt={post.author} fill className="object-cover" />
                   </div>
                </div>
                <div>
                  <span className="block font-bold text-foreground text-base">{post.author}</span>
                  <span className="text-muted text-xs">Editorial Team</span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-muted bg-surface px-3 py-2 rounded-lg border border-foreground/5">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2 text-muted bg-surface px-3 py-2 rounded-lg border border-foreground/5 mr-auto sm:mr-0">
                <Clock className="w-4 h-4 text-secondary" />
                <span>{readingTime} min read</span>
              </div>

               {/* Special Badge */}
               {SpecialBadge && (
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border font-bold ${SpecialBadge.color} mr-auto sm:mr-0`}>
                  <SpecialBadge.icon className="w-4 h-4" />
                  <span>{SpecialBadge.text}</span>
                </div>
               )}
            </div>

            {/* Hero Image */}
            {post.image && (
              <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5 mb-12 group">
                <div className="aspect-[4/3] md:aspect-[21/9] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            )}
           </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <article className="pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg md:prose-xl max-w-none
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-headings:scroll-mt-20
              prose-p:text-muted prose-p:leading-8 prose-p:text-base md:prose-p:text-lg
              prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted prose-li:marker:text-primary"
            >
              <PortableText value={post.content} components={ptComponents} />
            </div>
          </div>
        </article>

        {/* --- CTA / SHARE SECTION --- */}
        <section className="pb-32 px-4 md:px-6">
           <div className="container mx-auto max-w-4xl">
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center shadow-2xl shadow-slate-900/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
                
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl md:text-4xl font-black mb-4">
                    Inspired by this article?
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                    Share these insights with your network and start a discussion.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/en/contact"
                      className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                    >
                      <span>Contact Us</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                    <ShareButtons 
                      title={post.title} 
                      text={post.description} 
                      url={`https://erateek.com/en/blog/${slug}`} 
                      lang="en"
                    />
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* --- RECOMMENDED POSTS --- */}
        {recommendedPosts.length > 0 && (
          <section className="pb-24 px-4 md:px-6 bg-subtle/30 -mt-20 pt-24 z-0 relative">
            <div className="container mx-auto max-w-6xl">
               <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
                  <div>
                     <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                       Recommended for you
                     </h2>
                     <p className="text-muted text-lg">
                       Articles you might find interesting
                     </p>
                  </div>
                  <Link href="/en/blog" className="text-primary font-bold hover:underline flex items-center gap-2">
                     View all articles
                     <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {recommendedPosts.map((recPost) => (
                     <Link href={`/en/blog/${recPost.slug}`} key={recPost.slug} className="group flex flex-col h-full bg-surface rounded-3xl border border-foreground/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                        <div className="relative aspect-[16/10] overflow-hidden">
                           {recPost.image ? (
                             <Image 
                               src={recPost.image} 
                               alt={recPost.title} 
                               fill 
                               className="object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                           ) : (
                             <div className="w-full h-full bg-subtle flex items-center justify-center">
                               <span className="text-muted">No Image</span>
                             </div>
                           )}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                           <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20">
                                 {recPost.category || 'General'}
                              </span>
                              <span className="text-xs text-muted flex items-center gap-1">
                                 <Calendar className="w-3 h-3" />
                                 {new Date(recPost.publishDate).toLocaleDateString('en-US')}
                              </span>
                           </div>
                           <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {recPost.title}
                           </h3>
                           <p className="text-muted text-sm line-clamp-3 mb-4 flex-1">
                              {recPost.description}
                           </p>
                           <div className="flex items-center gap-2 text-primary font-bold text-sm mt-auto">
                              <span>Read more</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
          </section>
        )}
      </main>

      {/* --- MOBILE FLOATING SHARE BAR --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 p-2 bg-surface/80 backdrop-blur-xl rounded-full border border-foreground/10 shadow-2xl">
         <Link
            href="/en/contact"
            className="px-6 py-3 bg-primary rounded-full text-white text-sm font-bold flex items-center gap-2"
          >
           <span>Contact</span>
         </Link>
         <div className="w-11 h-11 bg-foreground/5 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/10">
             <ShareButtons 
               title={post.title} 
               text={post.description} 
               url={`https://erateek.com/en/blog/${slug}`} 
               iconOnly={true}
               lang="en"
             />
         </div>
      </div>

      <Footer dict={en} lang="en" />
    </>
  );
}
