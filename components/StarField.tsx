"use client";
import { useEffect, useRef } from "react";

export default function StarField({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if(!active) return;
    const c = canvasRef.current!;
    c.width = window.innerWidth; c.height = window.innerHeight;
    const ctx = c.getContext("2d")!;
    const stars = Array.from({length:200}, () => ({ x:Math.random()*c.width, y:Math.random()*c.height, size:Math.random()*2.5+0.5, opacity:Math.random(), speed:Math.random()*0.02+0.005, phase:Math.random()*Math.PI*2 }));
    let frame=0, id:number;
    const animate = () => {
      frame++; ctx.clearRect(0,0,c.width,c.height);
      stars.forEach(s => {
        const twinkle = Math.sin(frame*s.speed+s.phase)*0.5+0.5, alpha = s.opacity*(0.4+twinkle*0.6);
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI*2); ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill();
        if(s.size>1.5){ ctx.beginPath(); ctx.arc(s.x, s.y, s.size*4, 0, Math.PI*2); ctx.fillStyle = `rgba(212,139,160,${alpha*0.12})`; ctx.fill(); }
      });
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(id);
  }, [active]);
  return active ? <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" /> : null;
}
