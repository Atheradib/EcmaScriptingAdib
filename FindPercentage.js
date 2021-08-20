const FindPercentage = (numbers) => {
  let totalOfNumbers = 0;
  numbers.forEach((element) => {
    totalOfNumbers = totalOfNumbers + element;
  });
  const average = totalOfNumbers / numbers.length;
  return average;
};
console.log(FindPercentage([45, 43, 67, 89, 43]));
console.log(FindPercentage([45, 43, 67, 89, 43, 78]));
console.log(FindPercentage([45, 43, 67, 89, 43, 75, 67]));
