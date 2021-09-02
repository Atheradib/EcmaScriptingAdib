// const RemoveDuplicate = (str) => {
//   const arrStr = str.split(" ");
//   uniqueArr = [...new Set(arrStr)];
//   return uniqueArr.join(" ");
// };

const RemoveDuplicate = (str) => {
  const arrStr = str.split(" ");
  uniqArr = [...new Set(arrStr)];
  return uniqArr.join(" ");
};
console.log(RemoveDuplicate("I am good. I want to go. I am learning"));
