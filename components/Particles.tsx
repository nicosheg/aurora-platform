"use client";
import { useEffect, useRef } from "react";

interface Props { timeOfDay?: "morning" | "afternoon" | "evening"; }

export default function Particles({ timeOfDay = "morning" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let particles: any[] = [];
    let id: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const color = timeOfDay === "evening" ? "212,139,160" : timeOfDay === "afternoon" ? "232,180,192" : "212,139,160";
    for (let i=0;i<60;i++) {
      particles.push({ x:Math.random()*canvas.width, y:canvas.height+10, size:Math.random()*2+0.5, speedX:(Math.random()-0.5)*0.3, speedY:-Math.random()*0.5-0.2, opacity:Math.random()*0.5+0.1, life:0, maxLife:Math.random()*400+200 });
    }
    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles = particles.filter(p => p.life < p.maxLife);
      while (particles.length < 60) particles.push({ x:Math.random()*canvas.width, y:canvas.height+10, size:Math.random()*2+0.5, speedX:(Math.random()-0.5)*0.3, speedY:-Math.random()*0.5-0.2, opacity:Math.random()*0.5+0.1, life:0, maxLife:Math.random()*400+200 });
      particles.forEach(p => { p.x += p.speedX; p.y += p.speedY; p.life++;
        const a = p.opacity * (1 - p.life/p.maxLife);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fillStyle = `rgba(${color},${a})`; ctx.fill();
        if (p.size > 1.3) { ctx.beginPath(); ctx.arc(p.x, p.y, p.size*3, 0, Math.PI*2); ctx.fillStyle = `rgba(${color},${a*0.15})`; ctx.fill(); }
      });
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, [timeOfDay]);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: timeOfDay==="evening"?0.9:0.7 }} />;
}
