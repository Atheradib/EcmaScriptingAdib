const findrepeatingChar = (str) => {
  const arrStr = str.split("");
  const newObj = {};
  arrStr.forEach((element) => {
    newObj[element] = undefined ? (newObj[element] = 1) : newObj[element]++;
  });
  return newObj;
};
console.log(findrepeatingChar("mine success is depends on your success"));
