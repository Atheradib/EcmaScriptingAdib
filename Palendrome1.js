//
// const Palendrome = (str) => {
//   const arrStr = str.split("");
//   for (let i = 0; i < arrStr.length / 2; i++) {
//     if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
//       return false;
//     }
//     return true;
//   }
// };
const Palendrome = (str) => {
  const arrStr = str.split("");
  for (let i = 0; i < arrStr.length / 2; i++) {
    if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(Palendrome("saras"));
console.log(Palendrome("1841"));
console.log(Palendrome("madaam"));
