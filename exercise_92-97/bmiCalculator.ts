import { isNotNumber } from "./utils";

export const calculateBmi = (height: number, weight: number): string => {
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
