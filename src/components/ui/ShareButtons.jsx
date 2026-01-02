
'use client';

import { Share2 } from 'lucide-react';

export default function ShareButtons({ title, text, url, iconOnly = false, lang = 'ar' }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: url || window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(url || window.location.href);
        alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group ${iconOnly ? '!px-0 !py-0 w-full h-full border-none bg-transparent' : ''}`}
    >
      <Share2 className={`w-5 h-5 group-hover:text-primary transition-colors ${iconOnly ? 'w-6 h-6' : ''}`} />
      {!iconOnly && <span>{lang === 'ar' ? 'مشاركة' : 'Share'}</span>}
    </button>
  );
}
