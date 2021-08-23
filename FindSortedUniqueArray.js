const FindSortedUniqueArray = (objArr) => {
  let mergedArr = [];
  objArr.data.forEach((element) => {
    mergedArr = [...mergedArr, ...element];
  });
  const uniqueArr = [...new Set(mergedArr)].sort((a, b) => a - b);
  return uniqueArr;
};

console.log(
  FindSortedUniqueArray({
    data: [
      [24, 75, 12, 14, 1],
      [35, 24, 13, 2],
      [7, 1, 75, 24, 15, 7],
      [43, 53, 76, 45],
    ],
  })
);
