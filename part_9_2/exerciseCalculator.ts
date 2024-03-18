import { isNotNumber } from "./utils";

interface returnValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (daily: number[], target: number): returnValues => {
  const average = daily.reduce((a, b) => a + b, 0) / daily.length;
  const rating = average < target ? Math.ceil((average / target) * 2) : 3;
  const ratingDescription =
    rating === 1
      ? "the worst"
      : rating === 2
      ? "not too bad but could be better"
      : "the best";
  return {
    periodLength: daily.length,
    trainingDays: daily.filter((e) => e !== 0).length,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  if (process.argv.length < 4) {
    throw new Error("Not enough arguments");
  }

  if (isNotNumber(process.argv[2])) {
    throw new Error(`Invalid argument - ${process.argv[2]} is not a number`);
  }

  const target = Number(process.argv[2]);

  const days = process.argv.slice(3).map((d) => {
    if (isNotNumber(d)) {
      throw new Error(`Invalid argument - ${d} is not a number`);
    } else {
      return Number(d);
    }
  });

  console.log(calculateExercises(days, target));
} catch (error: unknown) {
  let errMessage = "An error occured:";
  if (error instanceof Error) {
    errMessage += error.message;
  }
  console.log(errMessage);
}
