const Palendrome1 = (tru) => {
  const arrtru = tru.split("");
  for (let i = 0; i < Math.floor(arrStr.length / 2); i++) {
    if (arrtru[i] !== arrtru[arrtru.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(Palendrome("saras"));
console.log(Palendrome("1841"));
console.log(Palendrome("madaam"));
