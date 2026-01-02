import React from 'react';

const ClientMarquee = ({ dict }) => {
  // Use brands from dictionary if available, otherwise fallback (for safety)
  const brands = dict?.home?.clients?.brands || ["Brand 1", "Brand 2"];
  const title = dict?.home?.clients?.title || "Clients";

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm">{title}</p>
      </div>
      
      <div className="relative flex overflow-x-hidden border-y border-slate-50 py-10 bg-[#fafafa]/50">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20">
          {brands.map((client, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-black text-slate-200 hover:text-primary transition-colors cursor-default whitespace-nowrap">
              {client}
            </span>
          ))}
        </div>

        <div className="absolute top-10 flex items-center gap-20 animate-marquee2 whitespace-nowrap ml-20">
          {brands.map((client, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-black text-slate-200 hover:text-primary transition-colors cursor-default whitespace-nowrap">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;

