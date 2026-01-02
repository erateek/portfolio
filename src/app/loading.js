export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Pulse Effect */}
        <div className="absolute w-16 h-16 bg-indigo-600/20 rounded-full animate-ping" />
        {/* Core Dot */}
        <div className="w-4 h-4 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/50" />
      </div>
    </div>
  );
}
