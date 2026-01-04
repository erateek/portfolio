import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';

import { ar } from '../../i18n/dictionaries';

export const metadata = {
  title: 'من نحن | إراتيك - قصتنا ورؤيتنا',
  description: 'تعرف على فريق إراتيك ورؤيتنا ومهمتنا في قيادة التحول الرقمي في اليمن.',
  keywords: ['من نحن', 'فريق إراتيك', 'وكالة رقمية صنعاء', 'حلول رقمية', 'erateek'],
  openGraph: {
    title: 'من نحن | إراتيك - وكالة رقمية',
    description: 'تعرف على فريق إراتيك ورؤيتنا ومهمتنا.',
    url: 'https://erateek.com/about',
    siteName: 'إراتيك - وكالة رقمية',
    images: [
      {
        url: 'https://erateek.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'من نحن - إراتيك',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن | إراتيك',
    description: 'تعرف على فريق إراتيك ورسالتنا ورؤيتنا',
    images: ['https://erateek.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://erateek.com/about',
  },
};

export default function About() {
  return (
    <>
      <Navbar dict={ar} lang="ar" />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"
          >
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1
              className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight"
            >
              من <span className="text-primary">نحن</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              وكالة رقمية رائدة متخصصة في تقديم حلول رقمية متكاملة ومبتكرة
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-32 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div
              className="bg-surface rounded-[3rem] p-8 md:p-16 border border-foreground/5"
            >
              <div
                className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-foreground
                prose-p:text-muted prose-p:leading-relaxed"
              >
                <h2 className="text-4xl mb-6">قصتنا</h2>
                <p className="text-lg">
                  في <strong className="text-primary">إراتيك</strong>، نؤمن بأن النجاح
                  الرقمي يبدأ بفهم عميق لاحتياجات عملائنا. منذ تأسيسنا، كان هدفنا
                  واضحًا: مساعدة الشركات والعلامات التجارية على التميز في العالم
                  الرقمي من خلال حلول مبتكرة واستراتيجيات فعالة.
                </p>

                <h2 className="text-4xl mt-16 mb-6">رؤيتنا</h2>
                <p className="text-lg">
                  نسعى لأن نكون الشريك الرقمي الأول للشركات الطموحة في المنطقة، من
                  خلال تقديم خدمات متميزة تجمع بين الإبداع والتقنية والاستراتيجية.
                </p>

                <h2 className="text-4xl mt-16 mb-6">قيمنا</h2>
                <ul className="text-lg space-y-3">
                  <li>
                    <strong>الجودة</strong>: نلتزم بأعلى معايير الجودة في كل ما نقوم
                    به
                  </li>
                  <li>
                    <strong>الابتكار</strong>: نواكب أحدث التقنيات والاتجاهات
                    الرقمية
                  </li>
                  <li>
                    <strong>الشفافية</strong>: نبني علاقات قائمة على الثقة والوضوح
                  </li>
                  <li>
                    <strong>النتائج</strong>: نركز على تحقيق نتائج ملموسة وقابلة
                    للقياس
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={ar} lang="ar" />
    </>
  );
}

