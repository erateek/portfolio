

import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import LiquidServices from '../../../components/react/LiquidServices';
import { en } from '../../../i18n/dictionaries';

export const metadata = {
  title: {
    absolute: 'Services | Erateek - Comprehensive Digital Solutions',
  },
  description: 'We offer a full suite of digital services: Branding, Web & App Development, Digital Marketing, and Media Production. Everything your business needs to grow.',
  keywords: ['Erateek Services', 'Web Design Packages', 'Marketing Agencies Yemen', 'Mobile App Development'],
};

export default function Services() {
  return (
    <>
      <Navbar dict={en} lang="en" />

      <main className="min-h-screen bg-background">
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              From design to development and marketing, we offer everything you need for digital growth.
            </p>
          </div>
        </section>

        <section className="pb-32 px-4 md:px-6">
          <div className="container mx-auto">
            <LiquidServices dict={en} lang="en" />
          </div>
        </section>
      </main>

      <Footer dict={en} lang="en" />
    </>
  );
}
