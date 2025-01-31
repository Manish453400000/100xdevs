import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);

app.get("/api/notification", (req, res) => {
  res.status(200).json({
    notification: 44,
    jobs: 22,
    message: 44,
    network: 184,
  });
});

app.listen(8080, () => {
  console.log("server is listning on port: 8080");
});
