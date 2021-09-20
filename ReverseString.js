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

// const reverseWord = (str) => {
//   const arrStr = str.split("");
//   const newArr = [];
//   for (let i = arrStr.length - 1; i >= 0; i--) {
//     newArr.push(arrStr[i]);
//   }
//   return newArr.join("");
// };
// const reverseWord = (str) => {
//   const arrStr = str.split("");
//   const newArr = [];
//   for (let i = arrStr.length - 1; i >= 0; i--) {
//     newArr.push(arrStr[i]);
//   }
//   return newArr.join("");
// };

// console.log(`Expected Reverse word is ${reverseWord("Ather")}`);

// const isVowel = (str) => ["a", "e", "i", "o", "u"].includes(str);

// console.log(isVowel("o"));
// console.log(isVowel("s"));

const vowels = ["a", "e", "i", "o", "u", "y"];

function isVowel(word) {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      result = true;
      break;
    }
  }
  return result;
}
console.log(isVowel("g"));
