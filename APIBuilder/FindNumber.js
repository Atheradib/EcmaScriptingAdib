const bisectionAlgo = (arrNum, findNum) => {
  let firstIndex = 0;
  let lastIndex = arrNum.length - 1;
  let mid = Math.floor((firstIndex + lastIndex) / 2);
  if (arrNum[mid === findNum]) {
    return mid;
  } else if(arrNum[mid]>findNum){
      firstIndex=mid;
      else
  }
};
console.log(bisectionAlgo([2, 4, 5, 7, 8, 11, 45, 77, 120, 134, 145], 120));
