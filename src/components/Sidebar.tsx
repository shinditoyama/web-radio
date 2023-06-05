"use client";
import { links, playingAtom, radioAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { Check } from "lucide-react";
import { Audio } from "react-loader-spinner";
import { NavLink } from "./NavLink";

interface Props {
  open: boolean;
}

export function Sidebar({ open }: Props) {
  const [selected, setSelected] = useAtom(radioAtom);
  const [playing, setPlaying] = useAtom(playingAtom);

  const switchRadio = (item: any) => {
    if (playing) setPlaying(false);
    setSelected(item);
  };

  return (
    <aside
      className={`fixed top-0 z-20 md:z-0 md:sticky h-full w-64 p-6 bg-zinc-950 border-r border-zinc-800 transition-transform ease-in-out md:-translate-x-0 ${
        !open && "-translate-x-full"
      } `}
    >
      <h2 className="text-2xl font-bold">LOGO</h2>
      <nav className="pt-6 mt-6 border-t border-zinc-800">
        <NavLink path="/" name="Home" />
        <NavLink path="/about" name="Sobre" />
        <NavLink path="/members" name="Nossa Equipe" />
      </nav>

      <nav className="pt-6 mt-6 border-t border-zinc-800">
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => switchRadio(item)}
            className="w-full flex items-center justify-between text-sm font-semibold p-2 rounded text-zinc-100 hover:bg-zinc-800"
          >
            <div className="w-32 truncate text-left">{item.name}</div>
            <div className={`${selected.id !== item.id && "hidden"}`}>
              {playing && (
                <Audio
                  height="20"
                  width="20"
                  color="#4fa94d"
                  ariaLabel="audio-loading"
                  wrapperStyle={{}}
                  wrapperClass="wrapper-class"
                  visible={true}
                />
              )}
              {!playing && <Check size={20} />}
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
}
