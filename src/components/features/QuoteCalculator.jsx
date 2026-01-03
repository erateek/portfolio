'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_CONFIG } from '../../config/pricing';
import { Globe, ShoppingBag, Smartphone, Megaphone, Check, ChevronRight, ChevronLeft, Send, Sparkles, X, Loader2 } from 'lucide-react';

const ICONS = {
  Globe,
  ShoppingBag,
  Smartphone,
  Megaphone
};

export default function QuoteCalculator({ lang = 'ar' }) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    service: null,
    features: [],
    timeline: 'standard'
  });
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const t = {
    step1: lang === 'ar' ? 'اختر نوع المشروع' : 'Select Project Type',
    step2: lang === 'ar' ? 'الميزات الإضافية' : 'Additional Features',
    step3: lang === 'ar' ? 'الجدول الزمني' : 'Timeline',
    step4: lang === 'ar' ? 'استلام العرض' : 'Get Your Quote',
    next: lang === 'ar' ? 'التالي' : 'Next',
    back: lang === 'ar' ? 'رجوع' : 'Back',
    submit: lang === 'ar' ? 'كشف السعر المقدر' : 'Reveal Estimated Price',
    name: lang === 'ar' ? 'الاسم الكامل' : 'Full Name',
    email: lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address',
    phone: lang === 'ar' ? 'رقم الهاتف' : 'Phone Number',
    successTitle: lang === 'ar' ? 'السعر التقديري لمشروعك' : 'Estimated Project Cost',
    successMsg: lang === 'ar' ? 'تم إرسال تفاصيل العرض إلى بريدك الإلكتروني.' : 'Quote details have been sent to your email.',
    bookCall: lang === 'ar' ? 'احجز استشارة مجانية' : 'Book Free Consultation',
    currency: '$'
  };

  const calculateTotal = () => {
    if (!selections.service) return 0;
    const service = PRICING_CONFIG.services.find(s => s.id === selections.service);
    let total = service.basePrice;

    // Add features
    if (PRICING_CONFIG.features[selections.service]) {
        selections.features.forEach(fId => {
            const feature = PRICING_CONFIG.features[selections.service].find(f => f.id === fId);
            if (feature) total += feature.price;
        });
    }

    // Apply multiplier
    const timeline = PRICING_CONFIG.timelines.find(t => t.id === selections.timeline);
    if (timeline) total *= timeline.multiplier;

    return Math.round(total);
  };

  const handleNext = () => {
    if (step === 1 && !selections.service) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => setStep(prev => prev - 1);

  const toggleFeature = (featureId) => {
    setSelections(prev => {
      const exists = prev.features.includes(featureId);
      return {
        ...prev,
        features: exists 
          ? prev.features.filter(f => f !== featureId)
          : [...prev.features, featureId]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Calculate High Price
    const totalHigh = calculateTotal();
    // Calculate Discounted Price (90% OFF)
    const totalDiscounted = Math.round(totalHigh * 0.10);
    
    setEstimatedPrice(totalDiscounted);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            ...contact, 
            selections, 
            totalOriginal: totalHigh, 
            totalDiscounted: totalDiscounted, 
            lang 
        })
      });
      
      if (res.ok) {
        setShowResult(true);
      }
    } catch (error) {
      console.error('Quote submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showResult) {
    return (
      <div className="bg-surface border border-foreground/10 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        
        {/* Confetti / Celebration vibe could vary, but keeping it clean */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10"
        >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-black text-foreground mb-4">{t.successTitle}</h2>
            
            {/* PRICING REVEAL */}
            <div className="flex flex-col items-center justify-center gap-2 my-8">
                <div className="text-xl text-muted line-through decoration-red-500/50 decoration-2">
                    {t.currency}{Math.round(estimatedPrice * 10)} {/* Helper to show old price */}
                </div>
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                    {t.currency}{estimatedPrice}
                </div>
                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold border border-red-200 mt-2">
                    🔥 90% OFF APPLIED
                </div>
            </div>

            {/* UPDATED: Generic success message */}
            <p className="text-muted mb-8 text-lg">{lang === 'ar' ? 'تم استلام طلبك بنجاح! سيتواصل معك فريقنا قريباً.' : 'Request received successfully! Our team will contact you soon.'}</p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
               <button onClick={() => window.location.href = `/${lang === 'en' ? 'en/' : ''}brief`} className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                   <Sparkles className="w-5 h-5" />
                   {lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Project Now'}
               </button>
               
               <button onClick={() => window.location.href = '/contact'} className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
                   {t.bookCall}
               </button>
            </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-surface/80 backdrop-blur-md border border-foreground/10 rounded-[2.5rem] p-6 md:p-10 shadow-xl relative overflow-hidden min-h-[500px]">
       
       {/* DISCOUNT BANNER */}
       <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 font-bold text-sm shadow-md z-20">
            {lang === 'ar' ? '🔥 عرض خاص: خصم 90% لفترة محدودة جداً!' : '🔥 LIMITED OFFER: 90% OFF ENDING SOON!'}
       </div>

       {/* Background Glow */}
       <div className="absolute top-0 left-0 w-full h-1 bg-foreground/5 mt-[36px]"> {/* Changed margins to account for banner */}
          <motion.div 
            className="h-full bg-primary" 
            initial={{ width: '0%' }} 
            animate={{ width: `${(step / 4) * 100}%` }} 
          />
       </div>

       <div className="relative z-10 pt-10">
         <AnimatePresence mode='wait'>
            {step === 1 && (
                <motion.div 
                    key="step1" 
                    initial={{ x: 20, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t.step1}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PRICING_CONFIG.services.map(s => {
                            const Icon = ICONS[s.icon];
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => setSelections({...selections, service: s.id})}
                                    className={`p-6 rounded-2xl border transition-all text-right rtl:text-right ltr:text-left flex items-start gap-4 hover:border-primary/50 group ${selections.service === s.id ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5' : 'bg-subtle border-foreground/5 hover:bg-white'}`}
                                >
                                    <div className={`p-3 rounded-lg transition-colors ${selections.service === s.id ? 'bg-primary text-white' : 'bg-surface text-muted group-hover:text-primary'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{s.title[lang]}</h3>
                                        <p className="text-sm text-muted">{s.description[lang]}</p>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </motion.div>
            )}

            {step === 2 && (
                 <motion.div 
                    key="step2" 
                    initial={{ x: 20, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t.step2}</h2>
                    <div className="space-y-3">
                        {PRICING_CONFIG.features[selections.service]?.map(f => (
                            <label key={f.id} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${selections.features.includes(f.id) ? 'bg-primary/10 border-primary' : 'bg-subtle border-foreground/5 hover:bg-white'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selections.features.includes(f.id) ? 'bg-primary border-primary' : 'border-foreground/20'}`}>
                                        {selections.features.includes(f.id) && <Check className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="text-foreground font-medium">{f.label[lang]}</span>
                                </div>
                                <span className="text-primary font-bold">+{f.price}{t.currency}</span>
                                <input type="checkbox" className="hidden" onChange={() => toggleFeature(f.id)} checked={selections.features.includes(f.id)} />
                            </label>
                        ))}
                    </div>
                </motion.div>
            )}

            {step === 3 && (
                 <motion.div 
                    key="step3" 
                    initial={{ x: 20, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t.step3}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {PRICING_CONFIG.timelines.map(tm => (
                            <button
                                key={tm.id}
                                onClick={() => setSelections({...selections, timeline: tm.id})}
                                className={`p-4 rounded-xl border text-center transition-all ${selections.timeline === tm.id ? 'bg-primary/10 border-primary text-primary' : 'bg-subtle border-foreground/5 text-muted hover:bg-white'}`}
                            >
                                <span className="block font-bold mb-1">{tm.label[lang]}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {step === 4 && (
                 <motion.div 
                    key="step4" 
                    initial={{ x: 20, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                            <Send className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">{t.step4}</h2>
                        <p className="text-muted">{lang === 'ar' ? 'أدخل بياناتك لفتح السعر' : 'Touch detail to unlock the estimated price'}</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            required 
                            type="text" 
                            placeholder={t.name}
                            value={contact.name}
                            onChange={(e) => setContact({...contact, name: e.target.value})}
                            className="w-full bg-subtle border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <input 
                            required 
                            type="email" 
                            placeholder={t.email}
                            value={contact.email}
                            onChange={(e) => setContact({...contact, email: e.target.value})}
                            className="w-full bg-subtle border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                         <input 
                            required 
                            type="tel" 
                            placeholder={t.phone}
                            value={contact.phone}
                            onChange={(e) => setContact({...contact, phone: e.target.value})}
                            className="w-full bg-subtle border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        
                        <button 
                            disabled={isSubmitting}
                            className="w-full btn-glow text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                            <span>{t.submit}</span>
                        </button>
                    </form>
                </motion.div>
            )}
         </AnimatePresence>

         {/* Navigation Buttons */}
         {step < 4 && (
             <div className="flex justify-between mt-8 pt-8 border-t border-foreground/5">
                 <button 
                    onClick={handleBack} 
                    disabled={step === 1}
                    className="text-muted hover:text-foreground px-4 py-2 disabled:opacity-0 transition-colors flex items-center gap-2"
                 >
                    {lang === 'ar' ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                    {t.back}
                 </button>

                 <button 
                    onClick={handleNext} 
                    disabled={step === 1 && !selections.service}
                    className="bg-foreground text-inverse px-6 py-2 rounded-lg font-bold hover:bg-foreground/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    {t.next}
                    {lang === 'ar' ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                 </button>
             </div>
         )}
       </div>
    </div>
  );
}
