'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const FAQTemplate = ({ dict, lang }) => {
  const data = dict.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
                    {data.title}
                </h1>
                <p className="text-xl text-muted">
                    {data.subtitle}
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {data.items.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`bg-surface border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-foreground/5 hover:border-foreground/10'}`}
                    >
                        <button
                            onClick={() => setOpenIndex(prev => prev === idx ? -1 : idx)}
                            className="w-full flex items-center justify-between p-6 text-start"
                        >
                            <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === idx ? 'text-primary' : 'text-foreground'}`}>
                                {item.q}
                            </span>
                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-subtle text-muted'}`}>
                                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-muted leading-relaxed border-t border-foreground/5">
                                        {item.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
};

export default FAQTemplate;
