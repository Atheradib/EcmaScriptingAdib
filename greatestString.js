// const greatestString = (arrStr) => {
//   let maxStr = arrStr[0].length;
//   let strData = arrStr[0];
//   arrStr.forEach((element) => {
//     if (maxStr < element.length) {
//       maxStr = element.length;
//       strData = element;
//     }
//   });
//   return strData;
// };

// const greatestString = (arrStr) => {
//   let maxStr = arrStr[0].length;
//   let strData = arrStr[0];
//   arrStr.forEach((element) => {
//     if (maxStr < element.length) {
//       maxStr = element.length;
//       strData = element;
//     }
//   });
//   return strData;
// };
const greatestString = (arrStr) => {
  let maxStr = arrStr[0].length;
  let strData = arrStr[0];
  arrStr.forEach((element) => {
    if (maxStr < element.length) {
      maxStr = element.length;
      strData = element;
    }
  });
  return strData;
};

console.log(greatestString(["cat", "bat", "boot", "I", "React", "java", "am"]));
