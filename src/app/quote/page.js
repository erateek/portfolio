import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import QuoteCalculator from '../../components/features/QuoteCalculator';
import { ar } from '../../i18n/dictionaries';

export const metadata = {
  title: 'احصل على عرض سعر | إراتيك',
  description: 'احسب تكلفة مشروعك الرقمي في ثوانٍ مع أداة التسعير التفاعلية من إراتيك.',
};

export default function QuotePage() {
  return (
    <>
      <Navbar dict={ar} lang="ar" />
      <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                    🚀 ابدأ رحلتك معنا
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                    صمم باقة <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">مشروعك</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                    اختر الخدمات والميزات التي تحتاجها، واحصل على تقدير فوري للتكلفة. أسعارنا مصممة لتناسب الشركات الناشئة ورواد الأعمال.
                </p>
            </div>

            <QuoteCalculator lang="ar" />
        </div>
      </main>
      <Footer dict={ar} lang="ar" />
    </>
  );
}
