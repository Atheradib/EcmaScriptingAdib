// const findrepeatingChar = (str) => {
//   const arrStr = str.split("");
//   const newObj = {};
//   arrStr.forEach((element) => {
//     newObj[element] = undefined ? (newObj[element] = 1) : newObj[element]++;
//   });
//   return newObj;
// };

// const findrepeatingChar = (str) => {
//   const arrStr = str.split("");
//   const newObj = {};
//   arrStr.forEach((element) => {
//     newObj[element] = undefined ? (newObj[element] = 1) : newObj[element]++;
//   });
//   return newObj;
// };
// console.log(findrepeatingChar("selected"));

const rword = (str) => {
  const arrStr = str.split("");
  const count = {};
  arrStr.map((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
};
console.warn(rword("selected word has there own importance"));
console.log(rword("selected word has there own importance"));
