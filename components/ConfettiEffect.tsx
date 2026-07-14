"use client";
import { useEffect, useRef, useState } from "react";
const COLORS = ["#d48ba0","#f0c0d0","#e8b4c0","#fce4ec","#c08090","#f5d0d8","#fdf0f4","#d48ba0"];
export default function ConfettiEffect({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pieces, setPieces] = useState<any[]>([]);
  useEffect(() => {
    if (!active) { setPieces([]); return; }
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const newPieces = Array.from({length:80}, () => ({
      x: Math.random()*canvas.width, y: -20-Math.random()*200, size: Math.random()*8+4,
      color: COLORS[Math.floor(Math.random()*COLORS.length)],
      speedY: Math.random()*1.5+0.8, speedX: (Math.random()-0.5)*2,
      rotation: Math.random()*360, rotationSpeed: (Math.random()-0.5)*3, opacity: 1
    }));
    setPieces(newPieces);
    const ctx = canvas.getContext("2d")!;
    let frame = 0, id: number;
    const animate = () => {
      frame++; ctx.clearRect(0,0,canvas.width,canvas.height);
      setPieces(prev => prev.map(p => ({...p, y:p.y+p.speedY, x:p.x+p.speedX+Math.sin(frame*0.02+p.x*0.01)*0.5, rotation:p.rotation+p.rotationSpeed, opacity: frame>100?p.opacity-0.008:p.opacity })).filter(p => p.opacity>0 && p.y<canvas.height+50));
      pieces.forEach(p => { ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation*Math.PI/180); ctx.globalAlpha = Math.max(0,p.opacity); ctx.fillStyle = p.color; ctx.fillRect(-p.size/2,-p.size/4,p.size,p.size/2); ctx.restore(); });
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(id);
  }, [active]);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
}
