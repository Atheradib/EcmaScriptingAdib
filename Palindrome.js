const Palindrome = (tru) => {
  // return tru === tru.split("").reverse("").join("");
  const arrTru = tru.split("");
  const newArr = [];
  for (let i = 0; i > arrTru.length / 2; i++) {
    if (arrTru[i] !== arrTru[arrTru.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(Palindrome("saras"));
console.log(Palindrome("sarasa"));
