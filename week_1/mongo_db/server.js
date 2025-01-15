import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen(8080, () => {
  console.log("server is listning on port 8080");
});
