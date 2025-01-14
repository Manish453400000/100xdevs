import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      type: "general",
      setup: "How was the snow globe feeling after the storm?",
      punchline: "A little shaken.",
      id: 145,
    },
    {
      type: "general",
      setup:
        'A weasel walks into a bar. The bartender says, "Wow, I\'ve never served a weasel before. What can I get for you?"',
      punchline: "Pop,goes the weasel.",
      id: 78,
    },
    {
      type: "general",
      setup: "Why are football stadiums so cool?",
      punchline: "Because every seat has a fan in it.",
      id: 404,
    },
    {
      type: "general",
      setup: "How does a penguin build it’s house?",
      punchline: "Igloos it together.",
      id: 134,
    },
    {
      type: "programming",
      setup: "To understand what recursion is...",
      punchline: "You must first understand what recursion is",
      id: 27,
    },
  ];
  res.send(jokes);
});

app.listen(8080, () => {
  console.log("server is listning on port 8080");
});
