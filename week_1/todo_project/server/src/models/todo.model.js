import { model, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    lebel: {
      type: String,
      default: "CODE",
      enum: [
        "CODE",
        "COFFEE",
        "MEAL",
        "TRAINING",
        "STUDY",
        "GAME",
        "SPORTS",
        "REST",
      ],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
