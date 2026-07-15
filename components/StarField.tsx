"use client";
import { useEffect, useRef } from "react";

export default function StarField({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const stars: { x: number; y: number; size: number; opacity: number; speed: number; phase: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }
    let frame = 0;
    let animationId: number;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        const twinkle = Math.sin(frame * star.speed + star.phase) * 0.5 + 0.5;
        const alpha = star.opacity * (0.4 + twinkle * 0.6);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,167,116,${alpha * 0.12})`;
          ctx.fill();
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [active]);
  return active ? <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" /> : null;
}
