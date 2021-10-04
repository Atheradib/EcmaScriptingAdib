// const findrepeatingChar = (str) => {
//   const newObj = str.split("");
//   const newObj = {};
//   newObj.forEach((element) => {
//     newObj[element] = undefined ? (newObj[element] = 1) : newObj[element]++;
//   });
//   return newObj;
// };

const findrepeatingChar = (str) => {
  const arrStr = str.split("");
  const newObj = [];
  arrStr.forEach((element) => {
    newObj[element] = (newObj[element] || 0) + 1;
    // newObj[element] = undefined ? (newObj[element] = 1) : newObj[element]++;
  });
  return newObj;
};
console.log(findrepeatingChar("selected"));

// const rword = (str) => {
//   const newObj = str.split("");
//   const newStr = [];
//   newObj.forEach((element) => {
//     newStr[element] = (newStr[element] || 0) + 1;
//   });
//   return newStr;
// };
// console.log(rword("my nam is imran hassan"));
