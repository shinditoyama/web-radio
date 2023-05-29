"use client";
import { typeState } from "@/store/atoms";
import { useAtom } from "jotai";
import { PauseCircle, PlayCircle, Volume } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const audioRef = useRef<any>();
  const [types] = useAtom(typeState);

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
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={types?.cover} width={56} height={56} alt="Capa do album" />
        <div className="flex flex-col">
          <strong>Música {playing ? "Tocando" : "Pausado"}</strong>
          <span>{types?.name}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <audio ref={audioRef} src={types?.url} />
          <button onClick={toggle} className="flex items-center justify-center">
            {playing ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <Volume size={32} />
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="cursor-pointer accent-violet-400"
          />
        </div>
      </div>
    </footer>
  );
}
