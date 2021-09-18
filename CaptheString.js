// const items = [1, "orange", undefined, "apple", null, "mango"];

// const arrcap = [];
// items.forEach((item) => {
//   if (typeof item === "string") {
//     arrcap.push(item.toUpperCase());
//   }
//   return arrcap;
// });
// console.log(arrcap);
const arr = [1, null, "orange", undefined, "apple", "mango"];
const arrCap = [];
arr.forEach((item) => {
  if (typeof item === "string") {
    arrCap.push(item.toUpperCase());
  }
  return arrCap;
});

console.log(arrCap);

// function multiply(num1, num2, num3) {
//   console.log(num1 * num2 * num3);
// }
// let numbers = [1, 2, 3];
// multiply(...numbers);

//Passing elements of the array as arguments to the Math Object
// let numbers = [1, 2, 300, -1, 0, -100];
// console.log(Math.min(...numbers));

// function add(x, y) {
//   return x + y;
// }

// console.log(add(1, 5, 8)); // return 6

// function someFunction() {
//   return arguments;
// }

// console.log(someFunction("joykare", 100, false));

// const arr = [1, 3, 7, 9, 2];
// const result = arr.splice(3, 2);
// console.log(result);
// let arr = ["educative", 4, [1, 3], { type: "animal" }];
// let slicedValues = arr.slice(1, 4);
// console.log(arr.indexOf([1, 2]));
// console.log(arr);
// console.log(slicedValues);
