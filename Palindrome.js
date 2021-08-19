const Palindrome = (tru) => {
  return tru === tru.split("").reverse("").join("");
};
console.log(Palindrome("saras"));
console.log(Palindrome("sarasa"));
