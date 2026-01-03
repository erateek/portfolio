import Navbar from '../../../components/sections/Navbar';
import Footer from '../../../components/sections/Footer';
import ContactForm from '../../../components/ContactForm';
import { en } from '../../../i18n/dictionaries';

export const metadata = {
  title: {
    absolute: 'Contact Us | Erateek - Digital Agency',
  },
  description: 'Contact us today to start your digital success journey. Erateek Digital Agency in Yemen is ready to help you.',
  keywords: ['Contact Us', 'Call Us', 'Digital Agency Sanaa', 'Digital Consultation', 'erateek'],
  openGraph: {
    title: 'Contact Us | Erateek - Digital Agency',
    description: 'Contact us today to start your digital success journey.',
    url: 'https://erateek.com/en/contact',
    siteName: 'Erateek - Digital Agency',
    locale: 'en_US',
    type: 'website',
    label: '+967 776-007-572',
    href: 'tel:+967776007572',
  },
  alternates: {
    canonical: 'https://erateek.com/en/contact',
  },
};

export default function Contact() {
  return (
    <>
      <Navbar dict={en} lang="en" />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
          >
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1
              className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight"
            >
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              We are here to help. Contact us today to start your digital success journey.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-32 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div
                  className="bg-surface rounded-[2rem] p-8 border border-foreground/5"
                >
                  <h2 className="text-3xl font-black text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Phone</h3>
                        <p className="text-muted" dir="ltr">+967 776-007-572</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          ></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">
                          Email
                        </h3>
                        <p className="text-muted">info@erateek.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                          ></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Location</h3>
                        <p className="text-muted">Yemen, Sanaa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] p-8"
                >
                  <h3 className="text-2xl font-black text-foreground mb-4">
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-muted">
                    <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p>Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-surface rounded-[2rem] p-8 border border-foreground/5">
                <h2 className="text-3xl font-black text-foreground mb-6">Send Message</h2>
                <ContactForm dict={en} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={en} lang="en" />
    </>
  );
}
