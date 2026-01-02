import Link from 'next/link';
import Navbar from '../sections/Navbar';
import HeroSection from '../react/HeroSection';
import ClientMarquee from '../sections/ClientMarquee';
import BentoServices from '../sections/BentoServices';
import BlogPreview from '../sections/BlogPreview';
import Footer from '../sections/Footer';

export default function HomeTemplate({ dict, lang, posts }) {
  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <main>
        <HeroSection dict={dict} lang={lang} />

        <ClientMarquee dict={dict} />

        <BentoServices dict={dict} lang={lang} />

        <BlogPreview dict={dict} lang={lang} posts={posts} />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div
              className="bg-slate-900 rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
                {dict.home.cta.title}
              </h2>
              <p
                className="text-white/60 text-xl mb-12 max-w-2xl mx-auto relative z-10"
              >
                {dict.home.cta.description}
              </p>
              <div className="relative z-10">
                <Link
                  href={lang === 'en' ? '/en/contact' : '/contact'}
                  className="inline-block bg-primary px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform"
                >
                  {dict.home.cta.button}
                </Link>
              </div>
              <div
                className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
              >
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
