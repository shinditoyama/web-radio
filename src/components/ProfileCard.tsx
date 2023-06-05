import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
}

export function ProfileCard({ name, description }: Props) {
  return (
    <div className="flex flex-col justify-center w-full text-center rounded-md mt-8 md:mt-4 md:w-96 lg:w-80 xl:w-64 bg-white">
      <img
        alt="avatar"
        src="https://source.unsplash.com/100x100/?portrait?0"
        className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full"
      />
      <div className="flex-1 my-4">
        <p className="text-xl text-zinc-800 font-semibold leading-snug">
          {name}
        </p>
        <p className="text-zinc-800">{description}</p>
      </div>
      <div className="flex items-center justify-center p-3 space-x-6 border-t-2">
        <Link
          href="https://twitter.com/ak_kamona"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-transform transform hover:scale-125"
        >
          <Facebook className="w-6 h-6 text-zinc-800" />
        </Link>
        <Link
          href="https://twitter.com/ak_kamona"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-transform transform hover:scale-125"
        >
          <Instagram className="w-6 h-6 text-zinc-800" />
        </Link>
      </div>
    </div>
  );
}
