import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import ProjectBriefWizard from '../../components/features/ProjectBriefWizard';
import { ar } from '../../i18n/dictionaries';

export const metadata = {
  title: 'ابدأ مشروعك | إراتيك',
  description: 'نموذج بدء المشروع لجمع متطلبات العميل وبناء الهوية البصرية',
};

export default function BriefPage() {
  return (
    <>
      <Navbar dict={ar} lang="ar" />
      <main className="min-h-screen bg-background relative selection:bg-primary/30">
        {/* Background Gradients */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
           <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-float"></div>
        </div>

        <section className="relative z-10 pt-32 pb-20 px-4 md:px-6"> 
           <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20 animate-fade-in-up">
                 ⚡ الخطوة الأولى للنجاح
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                لنبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">شيئاً استثنائياً</span> معاً
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                أكمل النموذج التالي لنفهم رؤيتك بشكل أعمق. الأمر لن يستغرق أكثر من دقيقتين.
              </p>
           </div>
           
           <ProjectBriefWizard lang="ar" />
        </section>
      </main>
      <Footer dict={ar} lang="ar" />
    </>
  );
}
