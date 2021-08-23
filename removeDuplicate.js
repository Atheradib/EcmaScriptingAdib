// const RemoveDuplicate = (str) => {
//   const arrStr = str.split(" ");
//   uniqueArr = [...new Set(arrStr)];
//   return uniqueArr.join(" ");
// };

const RemoveDuplicate = (str) => {
  const arrStr = str.split(" ");
  uniqeArr = [...new Set(arrStr)];
  return uniqeArr.join(" ");
};
console.log(RemoveDuplicate("I am good. I want to go. I am learning"));
