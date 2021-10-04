// n = 4;
// let str = "";
// for (let i = 1; i <= 4; i++) {
//   // str = str + " " + i;
//   str = str + i;
//   console.log(`${str}`);}

//   var myNumber =8446158196
//   var myName = "Ather Adib"
//   console.log(isNaN(myNumber))
//   console.log(isNaN(myName))
//   if(isNaN(myName)){
//   console.log("Plz Enter valid Phone Number")}

//   NaN===NaN
//   Number.NaN===NaN
//   isNaN(NaN)
//   isNaN(Number.NaN)
//   Number.isNaN(NaN)
//   console.log(NaN===NaN)
//   console.log(Number.NaN===NaN)
//   console.log(isNaN(NaN))
//   console.log(Number.NaN)
//   console.log(Number.isNaN(NaN))

// const data={

//   firstname:”ABC”,

//   lastName:”XYZ”,

//   contact:{

//       address:”some city”,

//       phoneNumber:45474564,

//   },

// };

// data.map((item)=>
//   <h1>{item.firstname}</h1>
//   <h1>{item.lastName}</h1>
//   <h1>{item.contact}</h1>
// )

const repeatingChar = (str) => {
  const newArr = str.split("");
  let newStr = [];
  newArr.map((element) => {
    newStr[element] = (newStr[element] || 0) + 1;
    if (newArr[element] > 1) {
      return newStr.push(element);
    }
  });
  return newStr;
};
console.log(repeatingChar("The Times of India"));
