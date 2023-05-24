import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="fixed md:static -left-full w-64 bg-zinc-950 p-6 border-r border-zinc-800 ">
      <div className="mb-6 pb-6 border-b border-zinc-800">
        <h2 className="text-2xl font-bold">LOGO</h2>
      </div>

      <nav className="space-y-3">
        <Link
          href="/"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Sobre
        </Link>
        <Link
          href="/members"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Nossa Equipe
        </Link>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 space-y-3">
        <Link
          href="/"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Link 1
        </Link>
        <Link
          href="/"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Link 2
        </Link>
        <Link
          href="/"
          className="flex items-center text-sm font-semibold text-zinc-100 hover:text-zinc-400"
        >
          Link 3
        </Link>
      </nav>
    </aside>
  );
}
