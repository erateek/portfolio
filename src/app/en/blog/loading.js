export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <div className="h-16 w-3/4 mx-auto bg-slate-100 rounded-2xl animate-pulse" />
            <div className="h-6 w-1/2 mx-auto bg-slate-100 rounded-full animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden h-[500px] flex flex-col">
              {/* Image */}
              <div className="h-48 bg-slate-100 animate-pulse w-full" />
              
              <div className="p-8 flex-1 space-y-4">
                 {/* Tags */}
                 <div className="flex gap-2">
                    <div className="h-6 w-16 bg-slate-100 rounded-full animate-pulse" />
                    <div className="h-6 w-20 bg-slate-100 rounded-full animate-pulse" />
                 </div>
                 
                 {/* Title */}
                 <div className="h-8 w-full bg-slate-100 rounded-xl animate-pulse" />
                 <div className="h-8 w-2/3 bg-slate-100 rounded-xl animate-pulse" />

                 {/* Desc */}
                 <div className="space-y-2 pt-2">
                    <div className="h-4 w-full bg-slate-50 rounded animate-pulse" />
                    <div className="h-4 w-full bg-slate-50 rounded animate-pulse" />
                    <div className="h-4 w-3/4 bg-slate-50 rounded animate-pulse" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
