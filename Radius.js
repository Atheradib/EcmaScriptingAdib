const calculateArea = (radius) => {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);
  }
  return area;
  //   let area1 = [];
  //   radius.map((element) => {
  //     area1.push(Math.PI * radius[element] * radius[element]);
  //   });
  //   return area1;
};
console.log(calculateArea([3, 1, 2, 4]));
