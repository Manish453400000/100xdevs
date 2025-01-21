import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobAtom = atom({
  key: "jobsAtom",
  default: 104,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});
