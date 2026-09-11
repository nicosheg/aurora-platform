"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";
type Stage="opening"|"middle"|"ending";
type Props={musicUrl?:string;musicTracks?:Partial<Record<Stage,string>>;stage?:Stage};
export default function MusicToggle({musicUrl,musicTracks,stage="opening"}:Props){
 const [playing,setPlaying]=useState(false),[hasInteracted,setHasInteracted]=useState(false);const audioRef=useRef<HTMLAudioElement>(null);const {setAudioRef,startMusic:contextStart}=useMusic();const src=musicTracks?.[stage]||musicUrl||"";
 useEffect(()=>{if(audioRef.current)setAudioRef(audioRef.current);},[setAudioRef]);
 useEffect(()=>{const a=audioRef.current;if(!a||!src)return;if(a.src===src)return;a.pause();a.src=src;a.load();if(playing){a.volume=0;a.play().then(()=>{let v=0;const f=setInterval(()=>{v+=.02;a.volume=Math.min(v,.25);if(v>=.25)clearInterval(f);},100);}).catch(()=>{});}},[src,playing]);
 const toggle=()=>{const a=audioRef.current;if(!a||!src)return;if(!hasInteracted){setHasInteracted(true);contextStart();setPlaying(true);return;}if(playing){a.pause();setPlaying(false);}else a.play().then(()=>setPlaying(true)).catch(()=>{});};
 return <><motion.button onClick={toggle} aria-label={playing?"Pause music":"Play music"} className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card-light flex items-center justify-center hover:border-white/30 transition-all duration-500" whileHover={{scale:1.1}} whileTap={{scale:.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}>{playing?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3" fill="white" stroke="none"/><circle cx="18" cy="16" r="3" fill="white" stroke="none"/></svg>:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>}</motion.button>{src&&<audio ref={audioRef} src={src} loop preload="auto"/>}</>;
}
