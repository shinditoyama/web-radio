"use client";
import { links, typeState } from "@/store/atoms";
import { useAtom } from "jotai";
import Link from "next/link";

export function Sidebar() {
  const [selected, setSelected] = useAtom(typeState);

  const switchMusic = () => {};

  return (
    <aside className="fixed md:static -left-full w-64 bg-zinc-950 p-6 border-r border-zinc-800 ">
      <div className="mb-6 pb-6 border-b border-zinc-800">
        <h2 className="text-2xl font-bold">LOGO</h2>
      </div>
      <nav className="space-y-3">
        <Link
          href="/"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
          prefetch={false}
        >
          Sobre
        </Link>
        <Link
          href="/members"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
          prefetch={false}
        >
          Nossa Equipe
        </Link>
      </nav>

      <nav className="pt-6 mt-6 border-t border-zinc-800 space-y-3">
        {links.map((item: any) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
