import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import QuoteCalculator from '../../../components/features/QuoteCalculator';
import { en } from '../../../i18n/dictionaries';

export const metadata = {
  title: 'Get a Quote | Erateek',
  description: 'Calculate your digital project cost in seconds with Erateek interactive pricing tool.',
};

export default function QuotePageEn() {
  return (
    <>
      <Navbar dict={en} lang="en" />
      <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                    🚀 Start Your Journey
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                    Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Project Package</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
                    Select the services and features you need, and get an instant cost calculation. Prices designed for startups and entrepreneurs.
                </p>
            </div>

            <QuoteCalculator lang="en" />
        </div>
      </main>
      <Footer dict={en} lang="en" />
    </>
  );
}
