// console.log(1 + "1");
// console.log(1 - "1");
// console.log(5 - "1");
// console.log(1 + 1);

// polymorphism-----it decide what to do on run time
let getName = (fName, lName) => {
  return fName + "" + lName;
};
console.log(getName(Ather, Adib));
let getName = (fName, mName, lName) => {
  return fName + "" + mName + "" + lName;
};
console.log(getName(Ather, Saifuddin, Adib));
