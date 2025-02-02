// import axios from "axios";
import axios from "axios";
import { atom, atomFamily, selector } from "recoil";


export const allTodosState = atom({
  key: "allTodosState",
  default: selector({
    key: "allTodosSelector",
    get: async () => {
      try {
        const response = await axios.get("/api/todos");
        return response.data.data; // Store all todos
      } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
      }
    },
  }),
});

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => ({
    _id: id,
    title: "", 
    description: "", 
    lebel: "",
    completed: false 
  }),
});