"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  path: string;
}

export function NavLink({ name, path }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      //prefetch={false}
      className={` ${
        path === pathname &&
        "flex items-center text-sm font-semibold p-2 rounded text-green-500 hover:bg-zinc-800"
      } ${
        path !== pathname &&
        "flex items-center text-sm font-semibold p-2 rounded text-zinc-100 hover:bg-zinc-800"
      }`}
    >
      {name}
    </Link>
  );
}
