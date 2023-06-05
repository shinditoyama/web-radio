import Hamburger from "hamburger-react";

interface Props {
  open: boolean;
  handleOpen: () => void;
}

export function Header({ open, handleOpen }: Props) {
  return (
    <header className="flex justify-between items-center md:hidden bg-zinc-800 border-b border-zinc-700">
      <div />
      <button
        onClick={handleOpen}
        className="m-2 rounded-md focus:outline-none hover:text-white hover:bg-gray-700"
      >
        <Hamburger size={24} toggled={open} />
      </button>
    </header>
  );
}
