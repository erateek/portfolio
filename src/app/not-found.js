import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <h1 className="text-9xl font-black text-slate-100 tracking-tighter select-none">
          404
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-lg max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
