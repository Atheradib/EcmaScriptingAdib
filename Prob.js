// const capthString = (str) => {
//   const arrStr = str.split(" ");
//   const newArr = [];
//   arrStr.forEach((element) => {
//     element.split("") && newArr.push(element.toUpperCase());
//   });
//   return newArr.join(" ");
// };
// console.log(capthString("my name is rohit"));

// const arr = (arr1) => {
//   let newArr = [];
//   arr1.map((item) => {
//     item === 0 && newArr.push(item);
//   });
//   arr1.map((item) => {
//     item === 1 && newArr.push(item);
//   });
//   return newArr;
// };
// console.log(arr([1, 0, 1, 0, 1, 0]));

const captheString = (str) => {
  const newArr = [];
  str.forEach((item) => {
    if (typeof item === "string") {
      newArr.push(item.toUpperCase());
    }
  });
  return newArr;
};
console.log(captheString(["ather", "imran", "adib", undefined, null, 1]));


