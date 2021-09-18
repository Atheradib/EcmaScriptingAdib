// const FindAllDuplicate = (arr) => {
//   const newArr = [];
//   arr.forEach((element, index) => {
//     arr.indexOf(element) !== index && newArr.push(element);
//   });
//   return newArr;
// };
const FindAllDuplicate = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    arr.indexOf(element) !== index && newArr.push(element);
  });
  return newArr;
};
console.log(FindAllDuplicate([1, 5, 2, 4, 8, 45, 70, 8, 0, 70, 8, 1, 0, 4]));
