import React from 'react';
import Link from 'next/link';

const Footer = ({ dict, lang = 'ar' }) => {
  const currentYear = new Date().getFullYear();
  
  // Use dictionary for links
  const footerLinks = [
    {
      title: dict.footer.company.title,
      links: dict.footer.company.links,
    },
    {
      title: dict.footer.services.title,
      links: [
        { label: dict.services.web.label, href: `/${lang === 'en' ? 'en/' : ''}services#websites` },
        { label: dict.services.branding.label, href: `/${lang === 'en' ? 'en/' : ''}services#branding` },
        { label: dict.services.marketing.label, href: `/${lang === 'en' ? 'en/' : ''}services#digital-marketing` },
        { label: dict.services.content.label, href: `/${lang === 'en' ? 'en/' : ''}services#media` },
      ],
    },
    {
      title: dict.footer.quickLinks.title,
      links: dict.footer.quickLinks.links,
    },
  ];

  return (
    <footer
      className="bg-dark text-white pt-20 pb-10 relative overflow-hidden mt-20 rounded-t-[3rem]"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm"
      >
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20"
        >
          {/* Brand Section */}
          <div className="max-w-xl">
            <Link href={`/${lang === 'en' ? 'en' : ''}`} className="text-3xl font-black tracking-tighter mb-6 block"
              >{dict.navbar.logo}<span className="text-primary">.</span></Link
            >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {dict.footer.brand.slogan_line1} <span
                className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary"
                >{dict.footer.brand.slogan_highlight}</span
              > {dict.footer.brand.slogan_line2}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang === 'en' ? 'en/' : ''}contact`}
                className="px-8 py-4 bg-white text-dark rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                {dict.footer.brand.cta}
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:w-auto">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-lg mb-6 text-white">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-sm" dir="ltr">
            &copy; {currentYear} Erateek Agency. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

