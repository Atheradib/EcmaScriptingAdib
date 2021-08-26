// const objNest = {
//   data: [
//     {
//       name: "Ather",
//       city: "punne",
//     },
//     {
//       name: "dher",
//       city: "punnne",
//     },
//     {
//       name: "Atjer",
//       city: "puuune",
//     },
//   ],
// };
// const filteredData = objNest.data.map((item) => item.name);

// console.log(filteredData);
const obj = {
  name: "Ather",
  city: "Hyder",
  contact: 986064,
};

// const keys = Object.keys(obj);
// const newArr = keys.map((key) => obj[key]);
const keys = Object.values(obj);
console.log(keys);
