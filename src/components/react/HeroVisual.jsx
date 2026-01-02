'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, BarChart3, CheckCircle2, Zap } from 'lucide-react';

const HeroVisual = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-1000"
    >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />

        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[320px] md:w-[480px] aspect-[4/3]"
        >
            {/* Base Plate */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/50"
                 style={{ transform: "translateZ(0px)" }}>
                <div className="h-12 border-b border-white/20 flex items-center px-6 gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="p-6 grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-2 h-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-white/40" />
                    <div className="col-span-1 bg-white/50 rounded-2xl border border-white/40" />
                    <div className="col-span-1 bg-white/50 rounded-2xl border border-white/40" />
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div style={{ transform: "translateZ(60px)" }} className="absolute -left-12 top-20 bg-[#1e1e2e] text-white p-4 rounded-2xl shadow-xl border border-white/10 w-48 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2 text-slate-400"><Code className="w-4 h-4" /><span>config.js</span></div>
                <div className="space-y-1 opacity-70">
                    <p><span className="text-purple-400">const</span> quality = <span className="text-emerald-400">true</span>;</p>
                    <p><span className="text-purple-400">return</span> <span className="text-yellow-400">"Excellence"</span>;</p>
                </div>
            </motion.div>

            <motion.div style={{ transform: "translateZ(90px)" }} className="absolute -right-8 bottom-24 bg-white p-4 rounded-2xl shadow-xl border border-white/50 w-40">
                <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase"><BarChart3 className="w-4 h-4 text-primary" /><span>Growth</span></div>
                <div className="text-2xl font-black text-slate-900">+127%</div>
                <div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-green-500" /></div>
            </motion.div>

            <motion.div style={{ transform: "translateZ(120px)" }} className="absolute -top-6 -right-6 bg-emerald-500 text-white p-3 rounded-2xl shadow-lg flex items-center gap-3 pr-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                <div className="flex flex-col"><span className="text-[10px] uppercase font-bold opacity-80">System</span><span className="text-sm font-bold">Online</span></div>
            </motion.div>

             <motion.div style={{ transform: "translateZ(80px)" }} className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
            </motion.div>
        </motion.div>
    </div>
  );
};
export default HeroVisual;

