// const arr = ["A", "R", "M"];
// console.log(arr.join(""));
// const str = arr.join("");

// console.log(str);

// const arr = ["A", "R", "M"];
// var a = "";

// arr.forEach((element) => {
//   a = a + element;
// });
// or
// arr.forEach((element) => {
//   a += element;
// });
// console.log(a);

// const arr = ["A", "R", "M"];
// const str = arr.reduce((a, b) => a + b);

// console.log(str);
// or;
// console.log(arr.reduce((a, b) => a + b));

// if ask reverse
// const arr = ["A", "R", "M"];
// console.log(arr.reduce((a, b) => b + a));

const arr = [2, 3, 4];
// console.log(arr.reduce((acc, num) => acc + num ** 3, 0));
console.log(arr.reduce((acc, num) => acc * num ** 3, 1));
