"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";
interface MusicContextType { startMusic: () => void; lowerVolume: () => void; restoreVolume: () => void; setAudioRef: (ref: HTMLAudioElement) => void; isPlaying: boolean; }
const MusicContext=createContext<MusicContextType|null>(null);
export function MusicProvider({children}:{children:React.ReactNode}){
 const audioRef=useRef<HTMLAudioElement|null>(null),[isPlaying,setIsPlaying]=useState(false),normalVolume=.25,loweredVolume=.06;
 const setAudioRef=useCallback((ref:HTMLAudioElement)=>{audioRef.current=ref;},[]);
 const startMusic=useCallback(()=>{const audio=audioRef.current;if(!audio)return;audio.volume=0;audio.play().then(()=>{let v=0;const fade=setInterval(()=>{v+=.015;audio.volume=Math.min(v,normalVolume);if(v>=normalVolume)clearInterval(fade);},100);setIsPlaying(true);}).catch(()=>{});},[]);
 const lowerVolume=useCallback(()=>{if(audioRef.current)audioRef.current.volume=loweredVolume;},[]);
 const restoreVolume=useCallback(()=>{if(audioRef.current)audioRef.current.volume=normalVolume;},[]);
 return <MusicContext.Provider value={{startMusic,lowerVolume,restoreVolume,setAudioRef,isPlaying}}>{children}</MusicContext.Provider>;
}
export function useMusic(){const ctx=useContext(MusicContext);if(!ctx)throw new Error("useMusic must be used within MusicProvider");return ctx;}
