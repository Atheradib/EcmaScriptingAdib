const Palendrome = (str) => {
  const arrStr = str.split("");
  for (let i = 0; i < Math.floor(arrStr.length / 2); i++) {
    if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(Palendrome("madsm"));
console.log(Palendrome("98572127589"));
console.log(Palendrome("985721275895"));
console.log(Palendrome("sarasa"));
console.log(Palendrome("abba"));
console.log(Palendrome("abbu"));
console.log(Palendrome("talat"));
