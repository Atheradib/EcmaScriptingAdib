// const findPercentage = (numbers) => {
//   return numbers.reduce((acc, curr) => acc + curr) / numbers.length;
// };
const findPercentage = (numbers) => {
  return numbers.reduce((acc, curr) => acc + curr) / numbers.length;
};
console.log(findPercentage([45, 78, 45, 78, , 89, 52]));

const arr = ["a", "b", "c", "d", "e"];

arr.splice(1, 0, "h");
console.log(arr);
