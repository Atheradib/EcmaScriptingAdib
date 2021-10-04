// // const FindAllDuplicate = (arr) => {
// //   const newArr = [];
// //   arr.forEach((element, index) => {
// //     arr.indexOf(element) !== index && newArr.push(element);
// //   });
// //   return newArr;
// // };
// const FindAllDuplicate = (arr) => {
//   const newArr = [];
//   arr.forEach((element, index) => {
//     arr.indexOf(element) !== index && newArr.push(element);
//   });
//   return newArr;
// };
// console.log(FindAllDuplicate([1, 5, 2, 4, 8, 45, 70, 8, 0, 70, 8, 1, 0, 4]));

// let str1 = "ABC";
// let str2 = "BC";

// let str3 = str1.split("");
// let str4 = str2.split("");
// let opt1 = [];
// let opt2 = [];

// str3.map((item)=>{
//   item === str4.
// })

// const removeDuplicate = (arr) => {
//   let newArr = [];
//   arr.forEach((element, index) => {
//     arr.indexOf(element) !== index && newArr.push(element);
//   });
//   return newArr;
// };

// console.log(
//   removeDuplicate(["U1", "U2", "U3", "U4", "U5", "U1", "U2", "U3", "U4", "U5"])
// );

//  const addGrade=(students)=>{
//   students.ForEach((element)=>{
//     if(element.marks>90){
//       element.grade=A
//     }else{
//       element.grade=B;
//     }
//   })
//   return students

//  }
//  console.log(addGrade( [
//   { name: 'Quincy', marks: 96 },
//   { name: 'Jason', marks: 84 },
//   { name: 'Alexis', marks: 100 },
//   { name: 'Sam', marks: 65 },
//   { name: 'Katie', marks: 90 }
//   ];))

// n = 13;

// const addition = (n) => {
//   for (let i = 0; i <= n; i++) {}
// };

// console.log(addition([1, 4, 45, 6, 10, 8]));

// var data = ;
// Output =[1,2,3,4,5,6]

// let newData = data.toString();

// console.log(newData);
const addArr = (arr) => {
  let newArr=Array.from(arr.toString())
  console.log(newArr)
  let concat = `${newArr[0]}`

//   let newArr = [];
//   data.forEach((item) => {
//     item.toString() && newArr.push(item);
//   });
//   return newArr;
// };

console.log(addArr([1, [2, 3], [[4, 5, 6]]]));
