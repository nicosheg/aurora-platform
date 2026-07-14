"use client";
import { motion } from "framer-motion";
import { TimelineMemory } from "@/types";
import Timeline from "./Timeline";

export default function ChapterTwo({ title, subtitle, timeline }: { title:string; subtitle:string; timeline:TimelineMemory[] }) {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
          <motion.p className="text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-4">Chapter Two</motion.p>
          <h2 className="text-heading font-serif font-light gradient-text">{title}</h2>
          <p className="text-white/40 font-serif italic mt-4 text-lg">{subtitle}</p>
        </motion.div>
        <Timeline memories={timeline} />
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="text-center mt-16">
          <p className="text-white/20 text-sm">One more chapter awaits...</p>
        </motion.div>
      </div>
    </section>
  );
}
