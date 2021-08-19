// const greatestNum = (arrNum) => {
//   let maxNum = 0;
//   arrNum.forEach((element) => {
//     if (element > maxNum) {
//       maxNum = element;
//     }
//   });
//   return maxNum;
// };

const leastNum = (arr) => {
  let minNum = arr[0];
  arr.forEach((element) => {
    if (element < minNum) {
      minNum = element;
    }
  });
  return minNum;
};
console.log(greatestNum([7, 5, 8, 25, 75, 1, 8, 99, 3]));
