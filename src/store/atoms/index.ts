import { atom } from "jotai";

export const links = [
  {
    id: 1,
    name: "Crazy Rock",
    url: "http://148.72.158.239:8186/live",
    cover: "/logo1.jpeg",
  },
];

export const typeState = atom(links[0]);
