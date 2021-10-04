// with normal function
// function getSum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           console.log(a + b + c + d + e);
//         };
//       };
//     };
//   };
// }

const getSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

console.log(getSum(1)(2)(3)(4)(5));
