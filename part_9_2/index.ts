import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { weight, height } = req.query;
  try {
    if (height && weight) {
      const bmi = calculateBmi(Number(height), Number(weight));
      res.status(200).json({ weight, height, bmi });
    } else {
      throw new Error("malformatted parameters");
    }
  } catch (error: unknown) {
    let errMessage = "";
    if (error instanceof Error) {
      errMessage = error.message;
    } else {
      errMessage = "Unexpected error";
    }
    res.status(400).json({ error: errMessage });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
