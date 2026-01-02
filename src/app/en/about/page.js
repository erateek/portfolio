import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import { en } from '../../../i18n/dictionaries';

export const metadata = {
  title: {
    absolute: 'About Erateek | Our Story & Vision',
  },
  description: 'Meet the Erateech team, our mission, and vision. Leading digital agency in Yemen specializing in integrated digital solutions.',
  keywords: ['About Us', 'Erateech Team', 'Digital Agency Sanaa', 'Digital Services Yemen', 'erateech'],
  openGraph: {
    title: 'About Us | Erateech - Digital Agency',
    description: 'Meet the Erateech team, our mission, and vision. Leading digital agency in Yemen.',
    url: 'https://erateech.com/en/about',
    siteName: 'Erateech - Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://erateech.com/en/about',
  },
};

export default function About() {
  return (
    <>
      <Navbar dict={en} lang="en" />

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
              Who We <span className="text-primary">Are</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              A leading digital agency specialized in providing integrated and innovative digital solutions.
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
                <h2 className="text-4xl mb-6">Our Story</h2>
                <p className="text-lg">
                  At <strong className="text-primary">Erateech</strong>, we believe that digital success starts with a deep understanding of our clients' needs. Since our inception, our goal has been clear: to help companies and brands stand out in the digital world through innovative solutions and effective strategies.
                </p>

                <h2 className="text-4xl mt-16 mb-6">Our Vision</h2>
                <p className="text-lg">
                  We strive to be the premier digital partner for ambitious companies in the region, delivering outstanding services that combine creativity, technology, and strategy.
                </p>

                <h2 className="text-4xl mt-16 mb-6">Our Values</h2>
                <ul className="text-lg space-y-3">
                  <li>
                    <strong>Quality</strong>: We commit to the highest standards of quality in everything we do.
                  </li>
                  <li>
                    <strong>Innovation</strong>: We keep up with the latest technologies and digital trends.
                  </li>
                  <li>
                    <strong>Transparency</strong>: We build relationships based on trust and clarity.
                  </li>
                  <li>
                    <strong>Results</strong>: We focus on achieving tangible and measurable results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={en} lang="en" />
    </>
  );
}
