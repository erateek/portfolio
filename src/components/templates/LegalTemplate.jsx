'use client';

import React from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const LegalTemplate = ({ dict, lang, contentKey }) => {
  const data = dict[contentKey];

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <header className="mb-16 border-b border-foreground/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                    {data.title}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-muted">
                    <p className="text-lg font-medium">{data.lastUpdated}</p>
                    <div className="h-1 w-20 bg-primary/20 rounded-full md:hidden"></div>
                </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted max-w-none">
                <p className="lead text-2xl font-medium text-foreground mb-12">
                    {data.intro}
                </p>

                <div className="space-y-12">
                    {data.sections.map((section, idx) => (
                        <section key={idx} className="bg-surface border border-foreground/5 rounded-3xl p-8 hover:border-primary/10 transition-colors">
                            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black">
                                    {idx + 1}
                                </span>
                                {section.title}
                            </h2>
                            <p className="text-muted leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </article>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
};

export default LegalTemplate;
