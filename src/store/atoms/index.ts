import { atom } from "jotai";

export const links = [
  {
    id: 1,
    name: "American Road",
    url: "https://c5.radioboss.fm:18224/stream",
    cover: "/logo3.jpg",
  },
  {
    id: 2,
    name: "Jazz",
    url: "https://jking.cdnstream1.com/b22139_128mp3",
    cover: "/logo2.png",
  },
  {
    id: 3,
    name: "Crazy Rock",
    url: "http://148.72.158.239:8186/live",
    cover: "/logo1.jpeg",
  },
];

export const radioAtom = atom(links[0]);
export const playingAtom = atom(false);
