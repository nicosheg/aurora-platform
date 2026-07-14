"use client";
import { useEffect, useRef } from "react";

interface Props { timeOfDay?: "morning" | "afternoon" | "evening"; }

export default function PetalField({ timeOfDay = "morning" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let petals: any[] = [];
    let id: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const count = timeOfDay === "evening" ? 45 : timeOfDay === "afternoon" ? 30 : 20;
    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 6,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    const drawPetal = (x: number, y: number, size: number, rot: number, alpha: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#f0c0d0";
      ctx.beginPath(); ctx.ellipse(0, 0, size * 0.5, size * 0.25, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#e8b4c0";
      ctx.beginPath(); ctx.ellipse(size * 0.3, 0, size * 0.25, size * 0.15, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        drawPetal(p.x, p.y, p.size, p.rotation, p.opacity);
      });
      id = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, [timeOfDay]);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-1" />;
}
