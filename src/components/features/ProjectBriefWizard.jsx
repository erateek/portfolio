'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Globe, Palette, Monitor, Send, 
  ChevronRight, ChevronLeft, Check, Layout, Type
} from 'lucide-react';

const steps = [
  { id: 1, title: { ar: 'الأساسيات', en: 'Basics' }, icon: User },
  { id: 2, title: { ar: 'الهوية', en: 'Identity' }, icon: Palette },
  { id: 3, title: { ar: 'التفاصيل', en: 'Details' }, icon: Layout },
  { id: 4, title: { ar: 'الإطلاق', en: 'Launch' }, icon: Globe },
];

const styles = [
  { id: 'modern', label: { ar: 'حديث ونظيف', en: 'Modern & Clean' }, color: 'bg-blue-500' },
  { id: 'classic', label: { ar: 'كلاسيكي ورسمي', en: 'Classic & Corporate' }, color: 'bg-slate-700' },
  { id: 'playful', label: { ar: 'مرح وإبداعي', en: 'Playful & Creative' }, color: 'bg-pink-500' },
  { id: 'luxury', label: { ar: 'فاخر وأنيق', en: 'Luxury & Elegant' }, color: 'bg-amber-500' },
];

const ProjectBriefWizard = ({ lang = 'ar' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Logic State
  const [hasWebsite, setHasWebsite] = useState(null); // null, true, false

  const [formData, setFormData] = useState({
    // Basics
    clientName: '',
    companyName: '',
    projectTitle: '',
    existingWebsite: '',
    targetAudience: '', // NEW
    
    // Identity
    brandName: '',
    primaryColor: '#6366f1',
    secondaryColor: '#e81cff',
    stylePreference: '',
    
    // Scope & Content
    pagesRequired: [],
    features: [],
    contentStatus: '', // NEW (Ready, Needs Writing, etc.)
    
    // Domain & Launch
    domainPreference: '',
    competitors: '',
    launchDate: '', // NEW
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (group, value) => {
    setFormData(prev => {
      const list = prev[group] || [];
      if (list.includes(value)) {
        return { ...prev, [group]: list.filter(item => item !== value) };
      }
      return { ...prev, [group]: [...list, value] };
    });
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <Check className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-black mb-4">
          {lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Brief Received Successfully!'}
        </h2>
        <p className="text-muted text-lg max-w-md">
          {lang === 'ar' 
            ? 'شكراً لك. فريقنا سيقوم بمراجعة التفاصيل والبدء في تجهيز خطة العمل فوراً.' 
            : 'Thank you. Our team will review the details and start preparing the action plan immediately.'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/50 backdrop-blur-md md:backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
      
      {/* Sidebar / Topbar */}
      <div className="w-full md:w-1/3 bg-slate-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div>
           <h2 className="text-2xl font-black mb-2">
             {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
           </h2>
           <p className="text-slate-400 text-sm mb-8">
             {lang === 'ar' ? 'أخبرنا المزيد عن رؤيتك لنبني لك شيئاً استثنائياً.' : 'Tell us more about your vision so we can build something exceptional.'}
           </p>

           <div className="space-y-6 relative z-10">
             {steps.map((step, idx) => {
               const isActive = step.id === currentStep;
               const isCompleted = step.id < currentStep;
               
               return (
                 <div key={step.id} className={`flex items-center gap-4 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-2' : 'opacity-50'}`}>
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/25' : isCompleted ? 'bg-green-500/20 text-green-500' : 'bg-white/10'}`}>
                     {isCompleted ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                   </div>
                   <div>
                     <span className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-0.5">Step 0{step.id}</span>
                     <span className="font-bold text-lg">{step.title[lang]}</span>
                   </div>
                 </div>
               );
             })}
           </div>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 p-8 md:p-12 bg-white relative">
         <div className="h-full flex flex-col">
            <div className="flex-1">
              <AnimatePresence mode='wait'>
                
                {/* STEP 1: BASICS */}
                {currentStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                       <User className="text-primary" />
                       {lang === 'ar' ? 'المعلومات الأساسية' : 'Project Basics'}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted uppercase">
                          {lang === 'ar' ? 'اسمك الكريم' : 'Your Name'}
                        </label>
                        <input 
                          type="text" 
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold"
                          placeholder={lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'اسم الشركة / المشروع' : 'Company / Project Name'}
                        </label>
                        <input 
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                         <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'هل لديك موقع إلكتروني حالياً؟' : 'Do you currently have a website?'}
                         </label>
                         <div className="flex gap-4">
                            <button 
                               onClick={() => setHasWebsite(true)}
                               className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${hasWebsite === true ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                               {lang === 'ar' ? 'نعم' : 'Yes'}
                            </button>
                            <button 
                               onClick={() => { setHasWebsite(false); setFormData(prev => ({...prev, existingWebsite: ''})) }}
                               className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${hasWebsite === false ? 'border-slate-800 bg-slate-50 text-slate-800' : 'border-slate-100 hover:border-slate-300'}`}
                            >
                               {lang === 'ar' ? 'لا' : 'No'}
                            </button>
                         </div>
                    </div>

                    {hasWebsite === true && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }} 
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-2"
                        >
                          <label className="text-sm font-bold text-muted uppercase">
                             {lang === 'ar' ? 'رابط الموقع الحالي' : 'Current Website URL'}
                          </label>
                          <input 
                            type="url" 
                            name="existingWebsite"
                            value={formData.existingWebsite}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none text-left"
                            dir="ltr"
                            placeholder="https://"
                          />
                        </motion.div>
                    )}

                    <div className="space-y-2">
                         <label className="text-sm font-bold text-muted uppercase">
                            {lang === 'ar' ? 'من هو جمهورك المستهدف؟' : 'Target Audience'}
                         </label>
                         <textarea 
                           name="targetAudience"
                           value={formData.targetAudience}
                           onChange={handleInputChange}
                           className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none min-h-[100px]"
                           placeholder={lang === 'ar' ? 'مثال: الشباب، الشركات، العائلات...' : 'e.g. Youth, Corporate, Families...'}
                         ></textarea>
                     </div>
                  </motion.div>
                )}

                {/* STEP 2: IDENTITY */}
                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                      <Palette className="text-secondary" />
                      {lang === 'ar' ? 'الهوية البصرية' : 'Brand Identity'}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-muted uppercase">
                             {lang === 'ar' ? 'اللون الأساسي' : 'Primary Color'}
                          </label>
                          <div className="flex items-center gap-4 bg-subtle p-2 rounded-xl border border-slate-100">
                             <input 
                               type="color" 
                               name="primaryColor"
                               value={formData.primaryColor}
                               onChange={handleInputChange}
                               className="w-12 h-12 rounded-lg cursor-pointer border-none bg-transparent"
                             />
                             <span className="font-mono font-bold text-muted">{formData.primaryColor}</span>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-muted uppercase">
                             {lang === 'ar' ? 'اللون الثانوي' : 'Secondary Color'}
                          </label>
                          <div className="flex items-center gap-4 bg-subtle p-2 rounded-xl border border-slate-100">
                             <input 
                               type="color" 
                               name="secondaryColor"
                               value={formData.secondaryColor}
                               onChange={handleInputChange}
                               className="w-12 h-12 rounded-lg cursor-pointer border-none bg-transparent"
                             />
                             <span className="font-mono font-bold text-muted">{formData.secondaryColor}</span>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-sm font-bold text-muted uppercase">
                          {lang === 'ar' ? 'نمط التصميم المفضل' : 'Preferred Style'}
                       </label>
                       <div className="grid grid-cols-2 gap-4">
                          {styles.map(style => (
                             <button
                               key={style.id}
                               onClick={() => setFormData({...formData, stylePreference: style.id})}
                               className={`p-4 rounded-xl border-2 text-left transition-all ${formData.stylePreference === style.id ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : 'border-slate-100 hover:border-slate-200'}`}
                             >
                                <div className={`w-3 h-3 rounded-full mb-2 ${style.color}`}></div>
                                <span className="font-bold text-sm block">{style.label[lang]}</span>
                             </button>
                          ))}
                       </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CONTENT & SCOPE */}
                {currentStep === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                   >
                     <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                       <Layout className="text-accent-design" />
                       {lang === 'ar' ? 'المحتوى والنطاق' : 'Content & Scope'}
                     </h3>

                     <div className="space-y-4">
                        <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'حالة المحتوى (نصوص وصور)' : 'Content Status (Text/Images)'}
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                           {[
                              { id: 'ready', label: { ar: 'جاهز تماماً', en: 'Fully Ready' }},
                              { id: 'partial', label: { ar: 'جاهز جزئياً', en: 'Partially Ready' }},
                              { id: 'needs_writing', label: { ar: 'نحتاج مساعدة في كتابته', en: 'Need Copywriting' }},
                              { id: 'later', label: { ar: 'سنجهزه لاحقاً', en: 'Will Provide Later' }}
                           ].map(status => (
                              <button
                                key={status.id}
                                onClick={() => setFormData({...formData, contentStatus: status.id})}
                                className={`p-4 rounded-xl text-start font-bold border transition-all ${formData.contentStatus === status.id ? 'bg-black text-white border-black' : 'bg-white border-slate-200 text-slate-500 hover:border-black'}`}
                              >
                                {status.label[lang]}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'الصفحات المطلوبة' : 'Pages Required'}
                        </label>
                        <div className="flex flex-wrap gap-3">
                           {['Home', 'About', 'Services', 'Contact', 'Blog', 'Portfolio', 'Login/Signup', 'Shop'].map(page => (
                              <button
                                key={page}
                                onClick={() => handleCheckboxChange('pagesRequired', page)}
                                className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${formData.pagesRequired.includes(page) ? 'bg-primary/10 text-primary border-primary' : 'bg-white border-slate-200 text-slate-500 hover:border-black'}`}
                              >
                                {page}
                              </button>
                           ))}
                        </div>
                     </div>
                   </motion.div>
                )}

                {/* STEP 4: DOMAIN & LAUNCH */}
                {currentStep === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                     <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                       <Globe className="text-green-500" />
                       {lang === 'ar' ? 'النطاق والإطلاق' : 'Domain & Launch'}
                     </h3>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mobile-stack-fix">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-muted uppercase">
                              {lang === 'ar' ? 'اسم النطاق المقترح (الدومين)' : 'Preferred Domain Name'}
                           </label>
                           <div className="flex items-center gap-2 bg-subtle rounded-xl border border-transparent focus-within:border-primary/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10 transition-all p-1 overflow-hidden">
                              <span className="text-lg md:text-xl text-muted font-light pl-3 select-none flex-shrink-0">www.</span>
                              <input 
                                type="text" 
                                name="domainPreference"
                                value={formData.domainPreference}
                                onChange={handleInputChange}
                                className="flex-1 bg-transparent border-none outline-none font-bold text-base md:text-lg h-12 w-full min-w-0" // min-w-0 fixes flex child overflow
                                placeholder="yourname.com"
                                dir="ltr"
                              />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-muted uppercase">
                              {lang === 'ar' ? 'تاريخ الإطلاق المتوقع' : 'Target Launch Date'}
                           </label>
                           <input 
                              type="date" 
                              name="launchDate"
                              value={formData.launchDate}
                              onChange={handleInputChange}
                              className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-lg text-slate-600 h-[66px]" // Matched height roughly
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'مواقع منافسة (للإلهام)' : 'Competitor Websites (Inspiration)'}
                        </label>
                        <textarea 
                          name="competitors"
                          value={formData.competitors}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none min-h-[80px] text-left"
                          dir="ltr"
                          placeholder="https://example.com"
                        ></textarea>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-muted uppercase">
                           {lang === 'ar' ? 'شرح إضافي / ملاحظات' : 'Additional Notes'}
                        </label>
                        <textarea 
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-subtle rounded-xl border border-transparent focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all outline-none min-h-[100px]"
                          placeholder={lang === 'ar' ? 'اكتب أي تفاصيل أخرى مهمة...' : 'Any other important details...'}
                        ></textarea>
                     </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-4 border-t border-slate-100">
               {currentStep > 1 ? (
                 <button 
                   onClick={prevStep}
                   className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors flex items-center gap-2"
                 >
                   <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                   {lang === 'ar' ? 'السابق' : 'Back'}
                 </button>
               ) : <div></div>}

               {currentStep < steps.length ? (
                 <button 
                   onClick={nextStep}
                   className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2"
                 >
                   {lang === 'ar' ? 'التالي' : 'Next'}
                   <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                 </button>
               ) : (
                 <button 
                   onClick={handleSubmit}
                   disabled={isSubmitting}
                   className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     <span className="animate-pulse">...</span>
                   ) : (
                     <>
                       {lang === 'ar' ? 'إرسال المعلومات' : 'Submit Brief'}
                       <Send className="w-5 h-5 rtl:rotate-180" />
                     </>
                   )}
                 </button>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProjectBriefWizard;
