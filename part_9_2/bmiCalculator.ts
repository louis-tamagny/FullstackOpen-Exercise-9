import { isNotNumber } from "./utils";

const calculateBmi = (height: number, weight: number): string => {
  if (isNotNumber(height) || isNotNumber(weight)) {
    throw new Error("Arguments are not valid numbers");
  }
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

try {
  console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log("Error message: " + error.message);
  } else {
    console.log("unexpected error");
  }
}
