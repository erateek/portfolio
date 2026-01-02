'use client';

import { useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⚠️</span>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Something went wrong!
          </h2>
          <p className="text-slate-600 text-lg max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>

        <div>
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:bg-slate-800 shadow-xl shadow-slate-200"
          >
            <RefreshCcw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
