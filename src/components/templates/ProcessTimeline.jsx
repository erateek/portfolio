'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const icons = {
  Search: Search,
  Map: Map,
  Palette: Palette,
  Code: Code2,
  Rocket: Rocket
};

const ProcessTimeline = ({ dict, lang }) => {
  const data = dict.process;

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      
      <main className="min-h-screen bg-background pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-black text-foreground mb-6"
                >
                    {data.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl text-muted leading-relaxed"
                >
                    {data.subtitle}
                </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full"></div>

                <div className="space-y-24 md:space-y-32">
                    {data.steps.map((step, idx) => {
                        const Icon = icons[step.icon];
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
                            >
                                {/* Icon Bubble (Center) */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface border-4 border-background shadow-xl shadow-primary/20 z-20 flex items-center justify-center text-primary">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-start md:text-end' : 'md:pl-16 text-start'}`}>
                                    <div className="bg-surface border border-foreground/5 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group">
                                        <div className={`w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 ${isEven ? 'md:ml-auto' : ''}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                                            <span className="text-primary/40 mr-2 md:mr-0 md:ml-2">0{idx + 1}.</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-muted text-lg leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternate side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[100px]"></div>
                    
                    <div className="relative z-10">
                        <p className="text-primary font-bold tracking-widest uppercase mb-4">{data.cta_sub}</p>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
                            {data.cta}
                        </h2>
                        <Link 
                            href={`/${lang === 'en' ? 'en/' : ''}contact`}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
                        >
                            {dict.common.startProject}
                            <ArrowRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
};

export default ProcessTimeline;
