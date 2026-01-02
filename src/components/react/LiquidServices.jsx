'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Monitor, Smartphone, Code2, 
  BarChart3, Megaphone, Image as ImageIcon, Search, 
  Share2, Video, Wrench, Headphones, GraduationCap,
  X, CheckCircle2, ArrowRight,
  Layout, PenTool, Package
} from 'lucide-react';

const servicesData = [
  { 
    id: 'ui-ux',
    icon: Layout, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2560&auto=format&fit=crop"
  },
  { 
    id: 'websites',
    icon: Monitor, 
    color: "text-dev", 
    bg: "bg-dev/10",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'branding',
    icon: PenTool, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'ecommerce',
    icon: ShoppingCart, 
    color: "text-dev", 
    bg: "bg-dev/10",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'mobile',
    icon: Smartphone, 
    color: "text-mobile", 
    bg: "bg-mobile/10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
   { 
    id: 'packaging',
    icon: Package, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'graphic',
    icon: ImageIcon, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'digital-marketing',
    icon: Megaphone, 
    color: "text-marketing", 
    bg: "bg-marketing/10",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'media',
    icon: Video, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'seo',
    icon: Search, 
    color: "text-marketing", 
    bg: "bg-marketing/10",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=800"
  },
];

const LiquidServices = ({ limit, dict, lang = 'ar' }) => {
  const [selectedId, setSelectedId] = useState(null);
  
  // Merge dictionary content with static data
  const services = servicesData.map(item => {
    const textData = dict?.servicesList?.[item.id] || {};
    return { ...item, ...textData };
  });

  const visibleServices = limit ? services.slice(0, limit) : services;

  useEffect(() => {
    // 1. Initial Check
    const checkHash = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash && servicesData.some(s => s.id === hash)) {
            setSelectedId(hash);
        } else {
             setSelectedId(null);
        }
    };
    
    checkHash(); // Run on mount

    // 2. Listen for hash changes (Browser Back/Forward)
    window.addEventListener('hashchange', checkHash);

    // 3. Listen for Link Clicks (Fix for Next.js same-page hash navigation)
    const handleHashLinkClick = (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        try {
            const url = new URL(link.href);
            // Check if it's a link to the current page AND has a hash
            if (url.origin === window.location.origin && 
                url.pathname === window.location.pathname && 
                url.hash) {
                
                const id = url.hash.replace('#', '');
                if (servicesData.some(s => s.id === id)) {
                    // It's a valid service link - open popup
                    setSelectedId(id);
                    // Let the browser/Next.js handle the URL update
                }
            }
        } catch (err) {
            // Ignore invalid URLs
        }
    };
    window.addEventListener('click', handleHashLinkClick);
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
          window.history.pushState(null, '', ' '); // Clear hash
          setSelectedId(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
        window.removeEventListener('keydown', handleEsc);
        window.removeEventListener('hashchange', checkHash);
        window.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  const handleServiceClick = (id) => {
      setSelectedId(id);
      window.history.pushState(null, '', `#${id}`);
  };

  const handleClose = (e) => {
      if (e) e.stopPropagation();
      setSelectedId(null);
      // Use replaceState to clear hash without scrolling
      window.history.pushState(null, '', ' '); 
  };

  if (!dict) return null; // Safety check

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <motion.div
            layoutId={`card-${service.id}`}
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className={`
              relative group cursor-pointer overflow-hidden rounded-[2rem] 
              bg-surface border border-foreground/5 shadow-sm 
              hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/60 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-surface hover:to-primary/5
              transition-all duration-300 h-[320px] flex flex-col justify-between p-6
            `}
          >
            {/* Background Image (Subtle) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
               <Image src={service.image} fill className="object-cover grayscale" alt={service.title || 'Service'} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            </div>

            {/* Top: Icon */}
            <div className="relative z-10">
              {/* Icon Container: Also glows on hover */}
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40`}>
                <service.icon className="w-7 h-7" />
              </div>
              <motion.h3 layoutId={`title-${service.id}`} className="text-xl font-black text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </motion.h3>
              <p className="text-muted font-medium text-sm">{service.short}</p>
            </div>

            {/* Bottom: Action Hint */}
            <div className="relative z-10 flex justify-between items-center mt-4 pt-4 border-t border-foreground/5 group-hover:border-primary/10">
                <span className="text-xs font-bold text-muted uppercase tracking-wider group-hover:text-primary transition-colors">{dict.common.details}</span>
                <div className={`w-8 h-8 rounded-full ${service.bg} flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedId && (() => {
          const service = services.find(s => s.id === selectedId);
          if (!service) return null;
          
          return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-slate-950/80 cursor-pointer" // Removed backdrop-blur-md for performance
              />

              <motion.div
                layoutId={`card-${service.id}`}
                key={service.id}
                className="w-full max-w-2xl bg-surface rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 max-h-[85vh] flex flex-col md:flex-row"
              >
                  <button 
                      onClick={handleClose}
                      className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white text-foreground transition-colors"
                  >
                      <X className="w-5 h-5" />
                  </button>

                  <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                      <Image src={service.image} fill className="object-cover" alt={service.title} sizes="(max-width: 768px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-surface via-surface/20 to-transparent" />
                      
                      <div className="absolute bottom-6 right-6 md:top-10 md:right-10">
                          <div className={`w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                              <service.icon className="w-7 h-7" />
                          </div>
                          <motion.h3 layoutId={`title-${service.id}`} className="text-2xl font-black text-foreground">
                              {service.title}
                          </motion.h3>
                      </div>
                  </div>

                  <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col h-full overflow-y-auto">
                      <div className="mb-8">
                          <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-3">{dict.common.aboutService}</h4>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                              {service.desc}
                          </p>
                      </div>

                      <div className="mb-8">
                          <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-3">{dict.common.whatWeOffer}</h4>
                          <ul className="space-y-3">
                              {service.features?.map((feature, i) => (
                                  <motion.li 
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 * i }}
                                      key={i} 
                                      className="flex items-center gap-3 font-medium text-foreground"
                                  >
                                      <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                                      {feature}
                                  </motion.li>
                              ))}
                          </ul>
                      </div>

                      <div className="mt-auto pt-6 border-t border-foreground/5 flex gap-4">
                          <Link href={`/${lang === 'en' ? 'en/' : ''}contact`} className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                              {dict.common.startProject}
                          </Link>
                      </div>
                  </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default LiquidServices;

