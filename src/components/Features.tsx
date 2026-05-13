'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity } from 'lucide-react';

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const centerImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const centerImageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const bentoParallax1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bentoParallax2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div id="features" ref={containerRef} className="w-full flex flex-col items-center">
      
      {/* Dark Section: "Built to inspire" */}
      <section className="w-full bg-black text-white py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center">
        <motion.div style={{ y: bentoParallax1 }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[2.5rem] md:text-[4rem] font-medium tracking-tight mb-20 text-center"
          >
            Built to inspire. <span className="text-white/50">Made to impact.</span>
          </motion.h2>

          <div className="relative w-full max-w-4xl aspect-video md:aspect-[21/9] flex items-center justify-center">
            {/* Center Image Placeholder */}
            <motion.div 
              style={{ scale: centerImageScale, rotate: centerImageRotate }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <img 
                src="/dark-center-mockup.png" 
                alt="GreenScore Core" 
                className="h-[120%] md:h-[150%] w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Pointers */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Pointer 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute top-[20%] left-[5%] md:left-[10%] text-left"
              >
                <div className="text-primary-50 font-light text-2xl md:text-3xl italic mb-2">01</div>
                <h3 className="text-lg md:text-xl font-bold mb-1">Live Metrics</h3>
                <p className="text-white/60 text-sm md:text-base max-w-[200px]">Real-time tracking of your daily carbon offset.</p>
              </motion.div>

              {/* Pointer 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute top-[40%] right-[5%] md:right-[10%] text-right"
              >
                <div className="text-primary-50 font-light text-2xl md:text-3xl italic mb-2">02</div>
                <h3 className="text-lg md:text-xl font-bold mb-1">EPA Verified</h3>
                <p className="text-white/60 text-sm md:text-base max-w-[200px] ml-auto">Calculations backed by scientific data standards.</p>
              </motion.div>

              {/* Pointer 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-[10%] left-[5%] md:left-[10%] text-left"
              >
                <div className="text-primary-50 font-light text-2xl md:text-3xl italic mb-2">03</div>
                <h3 className="text-lg md:text-xl font-bold mb-1">Virtual Forest</h3>
                <p className="text-white/60 text-sm md:text-base max-w-[200px]">Watch your real-world impact grow digitally.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section: Bento Grid */}
      <section className="w-full bg-muted/30 py-32 md:py-40 px-6 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-foreground/50 text-sm uppercase tracking-widest font-bold mb-4">Inside the platform</p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.1] max-w-2xl">
              Engineered for <br/>real change.
            </h2>
            <p className="text-foreground/60 text-lg mt-6 max-w-xl">
              Every feature, custom-designed to build sustainable habits. Nothing borrowed. Nothing standard. Nothing in the way.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
            
            {/* Box 1 (Wide) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[2rem] bg-card border border-border overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/5 to-transparent z-0" />
              <div className="relative z-10 p-8 h-full flex flex-col">
                <p className="text-foreground/50 text-sm font-bold mb-2">Transport</p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground max-w-[250px]">
                  A journey where every step counts.
                </h3>
                <p className="text-foreground/60 text-sm mt-4 max-w-[250px]">
                  Log public transit, biking, and walking to see your footprint shrink.
                </p>
                <div className="absolute bottom-[-10%] right-[-5%] w-[60%] transition-transform duration-700 group-hover:scale-105">
                  <img src="https://source.unsplash.com/W7tLS5vmmCM/1000x800" alt="Transport" className="rounded-tl-[2rem] shadow-2xl" />
                </div>
              </div>
            </motion.div>

            {/* Box 2 (Square) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-1 rounded-[2rem] bg-black text-white border border-border overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="text-white/50 text-sm font-bold mb-2">Data Integrity</p>
                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    UNEP Standards
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Box 3 (Square) */}
            <motion.div 
              style={{ y: bentoParallax2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-1 rounded-[2rem] bg-card border border-border overflow-hidden relative group"
            >
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="text-foreground/50 text-sm font-bold mb-2">Seamless Logging</p>
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">
                    Tap. Log. Done.
                  </h3>
                </div>
                <div className="absolute bottom-[-15%] right-[-15%] w-[80%] transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
                   <img src="/log-action-mockup.png" alt="Log Action UI" className="object-contain drop-shadow-2xl rounded-xl" />
                </div>
              </div>
            </motion.div>

            {/* Box 4 (Wide) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[2rem] bg-card border border-border overflow-hidden relative group"
            >
              <div className="relative z-10 p-8 h-full flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <p className="text-foreground/50 text-sm font-bold mb-2">Ecosystem</p>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground max-w-[300px]">
                    Grow the forest. Not the device.
                  </h3>
                  <p className="text-foreground/60 text-sm mt-4 max-w-[300px]">
                    Your actions directly influence your virtual forest, creating a tangible connection to your impact.
                  </p>
                </div>
                <div className="flex-1 h-full w-full relative min-h-[150px]">
                  <img src="https://source.unsplash.com/vzVGHfxZIZ8/1000x800" alt="Forest" className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
