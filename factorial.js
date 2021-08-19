// const factorial = (num) => {
//   for (let i = num - 1; i > 0; i--) {
//     num = num * i;
//   }
//   return num;
// };
// console.log(factorial(5));

// const factorialrecursive = (num) => {
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * factorialrecursive(num - 1);
//   }
// };

// console.log(factorialrecursive(5));
const factorial = (n) => (n < 2 ? 1 : factorial(n - 1));

console.log(factorial(3));
