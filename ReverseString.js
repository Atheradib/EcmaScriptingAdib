// How are you

// console.log("How are you".split(" ").reverse().join(" "));

// const reverseWord = (str) => {
//   const arrStr = str.split("");
//   const newArr = [];
//   for (let i = arrStr.length - 1; i >= 0; i--) {
//     newArr.push(arrStr[i]);
//   }
//   return newArr.join("");
// };

const reverseWord = (str) => {
  const arrStr = str.split("");
  const newArr = [];
  for (let i = arrStr.length - 1; i >= 0; i--) {
    newArr.push(arrStr[i]);
  }
  return newArr.join("");
};
console.log(`Expected Reverse word is ${reverseWord("Ather")}`);
