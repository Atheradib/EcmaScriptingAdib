const arr = [null, 1, 2, 3, 4, "cat", { num: 25 }, undefined, 2];

const newArr = arr
  .filter((item) => typeof item === "number" && item)
  .reduce((acc, num) => acc + num + 25);

console.log(newArr);
