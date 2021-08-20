const FindPercentage = (numbers) =>
  numbers.reduce((acc, curr) => acc + curr) / numbers.length;
console.log(FindPercentage([45, 43, 67, 89, 43, 88]));
console.log(FindPercentage([45, 43, 67, 89, 43, 78]));
console.log(FindPercentage([45, 43, 67, 89, 43, 75, 67]));
