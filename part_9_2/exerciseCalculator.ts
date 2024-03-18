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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
