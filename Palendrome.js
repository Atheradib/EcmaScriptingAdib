const Palendrome = (str) => {
  const arrStr = str.split("");
  for (let i = 0; i < Math.floor(arrStr.length / 2); i++) {
    if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(Palendrome("madams"));
console.log(Palendrome("98572127589"));
