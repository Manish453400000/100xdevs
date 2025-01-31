import { Todo } from "../models/todo.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createTodo = asyncHandler(async (req, res) => {
  const { title, description, lebel, completed } = req.body;

  const todo = await Todo.create({
    title,
    description,
    lebel,
    completed,
  });

  res.status(200).json(new ApiResponse(201, todo, "success", true));
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.query.id;

  await Todo.deleteOne({
    _id: id,
  });
  res
    .status(200)
    .json(new ApiResponse(200, deleteTodo, "this todo deleted", true));
});

export const getAllTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(new ApiResponse(200, todos, "all Todo", true));
});
