// import express from "express";
import z from "zod";

// const app = express();
// const schema = z.array(z.number());

// //{
// //    email: string;
// //    password: string atleast 8 letter;
// //    country: "IN", "US";
// //}
// const userSchema = z.object({
//   email: z.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("US")),
//   kidneys: z.array(z.number()),
// });

// app.use(express.json());

// app.post("/checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const validation = schema.safeParse(kidneys);
//   if (!validation.success) res.status(401).send({ validation });
//   const kidneyLength = kidneys.length;

//   res.send("you have " + kidneyLength + " kidneys");
// });

// app.listen(3000);

//if this is an array of string with atleast 1 input, return true, else return false;

const validateInput = (user) => {
  const shema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const response = shema.safeParse(user);

  if (response.success == true) {
    console.log("you'r good to go now", response);
  } else console.log("somthing wrong with your input!!!", response.error);
};

const user = {
  email: "doluimanish83@gmail.com",
  password: "manish9062",
};
validateInput(user);
