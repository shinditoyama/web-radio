"use client";
import { playingAtom, radioAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { PauseCircle, PlayCircle, Volume } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const audioRef = useRef<any>();

  const [radio] = useAtom(radioAtom);
  const [playing, setPlaying] = useAtom(playingAtom);
  const [volume, setVolume] = useState<number>(80);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing, audioRef]);

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <footer className="h-24 bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-2  w-full h-full">
        <img src={radio?.cover} width={56} height={56} alt="Capa do album" />
        <div className="sm:flex flex-col hidden">
          <strong>Música {playing ? "Tocando" : "Pausado"}</strong>
          <span>{radio?.name}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div>
          <audio ref={audioRef} src={radio?.url} />
          <button onClick={toggle} className="flex items-center justify-center">
            {playing ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end  w-full h-full">
        <div className="flex items-center ">
          <Volume size={32} />
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="w-full cursor-pointer accent-violet-400"
          />
        </div>
      </div>
    </footer>
  );
}
