const greateststrINString = (str) => {
  const arrStr = str.split(" ");
  let maxStr = arrStr[0].length;

  let strData = arrStr[0];
  arrStr.forEach((element) => {
    if (maxStr < element.length) {
      maxStr = element.length;
      strData = element;
    }
  });
  return strData;
};

console.log(
  greateststrINString(
    "I am a boy.I live in Nanded,I am super excited to become a developer"
  )
);

// str = "I am a boy.I live in Nanded,I am super excited to become a developer";
// var i = str.split(" ");
// console.log(i);
