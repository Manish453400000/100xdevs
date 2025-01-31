import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
} from "../controller/todo.controller.js";

const todoRouter = Router();

todoRouter.route("/create").post(createTodo);
todoRouter.route("/todo").get(getAllTodo);
todoRouter.route("/delete").get(deleteTodo);
todoRouter.route("/filter").get(() => {});

export { todoRouter };
