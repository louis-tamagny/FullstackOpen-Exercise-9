import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { isNotNumber } from "./utils";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.use(express.json());

app.get("/bmi", (req, res) => {
  const { weight, height } = req.query;
  try {
    if (height && weight) {
      const bmi = calculateBmi(Number(height), Number(weight));
      res.status(200).json({ weight, height, bmi });
    } else {
      throw new Error("parameters missing");
    }
  } catch (error: unknown) {
    let errMessage = "";
    if (error instanceof Error) {
      errMessage = error.message;
    } else {
      errMessage = "unexpected error";
    }
    res.status(400).json({ error: errMessage });
  }
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  try {
    if (daily_exercises && target) {
      if (Array.isArray(daily_exercises) && !isNotNumber(target)) {
        const days = daily_exercises.map((day) => {
          if (isNotNumber(day)) {
            throw new Error("malformatted parameters");
          }
          return Number(day);
        });
        const response = calculateExercises(days, Number(target));
        res.status(200).json(response);
      } else {
        throw new Error("malformatted parameters");
      }
    } else {
      throw new Error(`parameters missing`);
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
