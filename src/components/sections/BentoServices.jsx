'use client';

import React from 'react';
import Link from 'next/link';
import LiquidServices from '../react/LiquidServices';

const BentoServices = ({ dict, lang = 'ar' }) => {
  const t = dict?.home?.bento || {};
  
  return (
    <section id="services" className="py-32 bg-subtle relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-right">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              {t.title} <span className="text-primary">{t.highlight}</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed">
                {t.description}
            </p>
          </div>
          
          {/* Link to Full Services Page */}
          <Link href={`/${lang === 'en' ? 'en/' : ''}services`} className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            <span>{t.viewAll}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${lang === 'ar' ? 'rtl:rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
        
        {/* --- CHANGE THIS NUMBER FROM 5 TO 10 --- */}
        <LiquidServices limit={10} dict={dict} lang={lang} />
        
        {/* Mobile Link for Full Services */}
        <div className="mt-12 text-center md:hidden">
            <Link href={`/${lang === 'en' ? 'en/' : ''}services`} className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-foreground/10 rounded-xl font-bold text-foreground">
                <span>{t.viewAll}</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoServices;

