import { atomFamily } from "recoil";

const TODOS = [
  {
    id: 1,
    title: "GO TO GYM",
    description: "hit the gym from 7-9",
  },
  {
    id: 2,
    title: "GO TO EAT",
    description: "eat food from 9-10",
  },
];

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id == id);
    o;
  },
});
