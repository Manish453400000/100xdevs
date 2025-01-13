import express from "express";
import jwt from "jsonwebtoken";

const ALL_USERS = [
  {
    username: "manish9062",
    password: "123",
    name: "Manish",
  },
  {
    username: "sina9062",
    password: "123ff",
    name: "Sina",
  },
  {
    username: "harkirat007",
    password: "123",
    name: "Harkirat",
  },
];

const app = express();

app.use(express.json());

app.post("/signin", (req, res) => {});
app.get("/users");
