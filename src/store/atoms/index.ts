import { atom } from "jotai";

export const links = [
  {
    id: 1,
    name: "Crazy Rock",
    url: "http://148.72.158.239:8186/live",
    cover: "/logo1.jpeg",
  },
  {
    id: 2,
    name: "Jazz",
    url: "https://jking.cdnstream1.com/b22139_128mp3",
    cover: "/logo2.jpeg",
  },
];

export const typeState = atom(links[0]);
