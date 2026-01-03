import React from 'react';

const ClientMarquee = ({ dict }) => {
  const brands = [
    { name: "Movies Hub", url: "https://movies.suhaeb.com" },
    { name: "Hisab", url: "https://hisab.suhaeb.com" },
  ];
  
  // Multiply the list to ensure it covers screens even on 4k monitors
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands]; 
  const title = dict?.home?.clients?.title || "Success Partners";

  // Shared marquee item component
  const MarqueeItem = ({ client }) => (
    <a 
      href={client.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-3xl md:text-5xl font-black text-slate-200 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
    >
      {client.name}
    </a>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm">{title}</p>
      </div>
      
      {/* 
        Container with Dir="ltr" to ensure standard left-scrolling behavior regardless of page direction.
        Use "mask-image" for fade effect on edges.
      */}
      <div 
        className="relative flex overflow-hidden border-y border-slate-50 py-10 bg-[#fafafa]/50" 
        dir="ltr"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* First Marquee Set */}
        <div className="flex shrink-0 items-center justify-around gap-32 min-w-full animate-scroll px-16 will-change-transform">
          {duplicatedBrands.map((client, idx) => (
             <MarqueeItem key={`a-${idx}`} client={client} />
          ))}
        </div>

        {/* Second Marquee Set (Immediate Follow-up) */}
        <div className="flex shrink-0 items-center justify-around gap-32 min-w-full animate-scroll px-16 will-change-transform">
          {duplicatedBrands.map((client, idx) => (
             <MarqueeItem key={`b-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;

