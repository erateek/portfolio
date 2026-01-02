

import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import LiquidServices from '../../components/react/LiquidServices';

import { ar } from '../../i18n/dictionaries';

export const metadata = {
  title: 'خدماتنا | إراتيك - حلول رقمية شاملة',
  description: 'نقدم باقة متكاملة من الخدمات الرقمية: تصميم هوية، تطوير مواقع وتطبيقات، تسويق رقمي، وإنتاج إعلامي. كل ما يحتاجه مشروعك للنمو.',
  keywords: ['خدمات إراتيك', 'باقات تصميم مواقع', 'شركات تسويق صنعاء', 'تطوير تطبيقات موبايل'],
};

export default function Services() {
  return (
    <>
      <Navbar dict={ar} lang="ar" />

      <main className="min-h-screen bg-background">
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8">
              خدماتنا <span className="text-primary">الشاملة</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              من التصميم إلى التطوير والتسويق، نقدم لك كل ما تحتاجه للنمو الرقمي.
            </p>
          </div>
        </section>

        <section className="pb-32 px-4 md:px-6">
          <div className="container mx-auto">
            <LiquidServices dict={ar} lang="ar" />
          </div>
        </section>
      </main>

      <Footer dict={ar} lang="ar" />
    </>
  );
}

