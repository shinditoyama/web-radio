"use client";
import { playingAtom, radioAtom } from "@/store/atoms";
import { useAtom } from "jotai";

export default function Album() {
  const [radio] = useAtom(radioAtom);
  const [playing] = useAtom(playingAtom);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="relative w-80 h-80 block rounded border-4 border-black bg-white">
        <span className="absolute overflow-hidden inset-0 translate-x-4 -translate-y-4 rounded border-4 border-black">
          <img
            src={radio?.cover}
            className="object-fill w-full h-full"
            alt="Capa do album"
          />
        </span>
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-4xl text-white font-semibold">{radio?.name}</h2>
        <p className="text-lg font-thin text-white">
          Música {playing ? "Tocando" : "Pausado"}
        </p>

        <button className="button">
          {/*playing ? <BsPlayFill /> : <BsFillPauseFill />*/}
        </button>
      </div>
    </div>
  );
}
