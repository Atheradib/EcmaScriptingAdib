// const findPrime = (num) => {
//     for (i = 2; i < num / 2; i++) {
//       if (num % i === 0) {
//         return "not prime number";
//       }
//     }
//     return "prime number";
//   };
const findPrime = (num) => {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return "not prime";
    }
  }
  return "prime";
};
const findPrime = (num) => {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return "not Prime";
    }
  }
  return "prime number";
};

console.log(findPrime(19));
console.log(findPrime(15));
console.log(findPrime(14));
console.log(findPrime(13));
