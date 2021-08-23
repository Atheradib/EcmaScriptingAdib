const FindPercentage = (numbers) => {
  let totalNumbers = 0;
  numbers.forEach((element) => {
    totalNumbers = totalNumbers + element;
  });
  percentage = totalNumbers / numbers.length;
  return percentage;
};

console.log(FindPercentage([45, 78, 89, 46, 80, 79]));
