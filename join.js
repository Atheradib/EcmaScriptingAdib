// const arr1 = ["cat", "mat"];
// const arr2 = ["rat", "bat"];
// const arr3 = ["ghat", "date"];

// console.log([...arr1, ...arr2, ...arr3]);

const arr1 = ["cat", "mat"];
const arr2 = ["rat", "date", "hat"];
const arr3 = ["mat", "date", "cat"];

const joinArr = [...arr1, ...arr2, ...arr3];
const uniqArr = [...new Set(joinArr)];

console.log(uniqArr);
