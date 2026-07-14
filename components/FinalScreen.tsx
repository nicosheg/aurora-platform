"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import { useMusic } from "@/contexts/MusicContext";

export default function FinalScreen({ herName, senderName }: { herName:string; senderName:string }) {
  const [step, setStep] = useState(0);
  const { setAudioRef } = useMusic();
  const [audioEl, setAudioEl] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = document.querySelector("audio[loop]") as HTMLAudioElement;
    if (el) setAudioEl(el);
    const t1=setTimeout(()=>setStep(1),1200);
    const t2=setTimeout(()=>setStep(2),4000);
    const t3=setTimeout(()=>setStep(3),7000);
    const t4=setTimeout(()=>setStep(4),10000);
    const t5=setTimeout(()=>setStep(5),14000);
    const t6=setTimeout(()=>{
      if(audioEl){
        let vol = audioEl.volume;
        const fade = setInterval(() => {
          vol = Math.max(0, vol - 0.02);
          audioEl.volume = vol;
          if (vol <= 0) {
            clearInterval(fade);
            audioEl.pause();
          }
        }, 150);
      }
    },15000);
    return ()=>{ clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); };
  }, [audioEl]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField active={step>=2} />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {step>=0 && (
          <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5 }} className="text-2xl md:text-4xl font-serif font-light text-white/80">
            Close your eyes.
          </motion.p>
        )}
        {step>=1 && (
          <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5 }} className="mt-8 text-5xl md:text-7xl font-serif font-light text-white/40">
            3
          </motion.p>
        )}
        {step>=2 && (
          <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5 }} className="mt-8 text-5xl md:text-7xl font-serif font-light text-white/60">
            2
          </motion.p>
        )}
        {step>=3 && (
          <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5 }} className="mt-8 text-5xl md:text-7xl font-serif font-light text-white/80">
            1
          </motion.p>
        )}
        {step>=4 && (
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.5 }} className="mt-12 space-y-8">
            <h2 className="text-display font-serif font-light gradient-text">Happy Birthday, {herName}</h2>
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} className="text-white/60 font-serif text-lg">
              Now check your phone.
            </motion.p>
            <motion.div
              className="text-6xl"
              animate={{ scale:[1,1.3,1], opacity:[0.7,1,0.7] }}
              transition={{ duration:2, repeat:Infinity }}
            >
              ♥
            </motion.div>
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }} className="text-white/40 text-sm mt-8 font-light tracking-wider">
              — {senderName}
            </motion.p>

            {/* FIDUCIA Signature */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:2.5 }}
              className="mt-10"
            >
              <a
                href="https://fiduciaweb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="fiducia-signature text-white/30"
              >
                <span className="dot"></span>Intelligence by FIDUCIA
              </a>
            </motion.div>
          </motion.div>
        )}
        {step>=5 && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:2 }}
            className="mt-16 space-y-8"
          >
            <p className="text-xl md:text-2xl font-serif font-light text-white/70 leading-relaxed">
              Some experiences are built with code.<br/>
              This one was built with thought, time, and care<br/>
              — just for you.
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_,i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  animate={{ opacity:[0.3,1,0.3], scale:[1,1.2,1] }}
                  transition={{ duration:1.5, repeat:Infinity, delay:i*0.2 }}
                >
                  ✦
                </motion.span>
              ))}
            </div>

            {/* FIDUCIA Signature also at the very end */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:2 }}
              className="mt-12"
            >
              <a
                href="https://fiduciaweb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="fiducia-signature text-white/30"
              >
                <span className="dot"></span>Intelligence by FIDUCIA
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
