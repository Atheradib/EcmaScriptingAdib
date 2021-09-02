const FindPercentage = (numbers) => {
  let totalNumbers = 0;
  numbers.forEach((element) => {
    totalNumbers += element;
  });
  const average = totalNumbers / numbers.length;
  return average;
};
console.log(FindPercentage([56, 67, 78, 89, 90]));
