// const removeDup = (objArr) => {
//   const arrObj = objArr.split(" ");
//   const newArr = [];
//   arrObj.forEach((element, index) => {
//     arrObj.indexOf(element) !== index && newArr.push(element);
//   });
//   const uniqeArr = [...new Set(newArr)];
//   return uniqeArr;
// };
// const removeDup = (str) => {
//   const arrStr = str.split(" ");
//   const newArr = [];
//   arrStr.forEach((element, index) => {
//     arrStr.indexOf(element) !== index && newArr.push(element);
//   });
//   const uniqueArr = [...new Set(newArr)];
//   return uniqueArr;
// };

const removeDup = (str) => {
  const arrStr = str.split(" ");
  const newArr = [];
  arrStr.forEach((element, index) => {
    arrStr.indexOf(element) !== index && newArr.push(element);
  });
  uniqueArr = [...new Set(newArr)];
  return uniqueArr;
};
console.log(
  removeDup(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  )
);
