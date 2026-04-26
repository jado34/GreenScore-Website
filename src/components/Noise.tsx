'use client';

export function Noise() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.035] mix-blend-overlay overflow-hidden">
      <div 
        className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat animate-noise"
        style={{ backgroundSize: '128px 128px' }}
      />
      <style jsx global>{`
        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
          100% { transform: translate(5%, 0); }
        }
        .animate-noise {
          animation: noise 0.2s infinite steps(1);
        }
      `}</style>
    </div>
  );
}
