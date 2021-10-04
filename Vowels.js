const findVowels = () => {
  let char = "M";
  char = char.toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log("char is vowel");
  } else {
    console.log("char is consonent");
  }
};
findVowels();
