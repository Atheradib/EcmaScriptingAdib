const subsExists = (str) => {
  const arrStr = str.split(" ");
  let cnt = 0;
  arrStr.forEach((element) => {
    if (element.toUpperCase() === "Lorem".toUpperCase()) {
      cnt++;
    }
  });
  return cnt;
};
const strData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis, est in hendrerit pellentesque, mauris magna porta sem, eu porta elit nisl et metus. Nulla facilisi. Aliquam vel orci sodales, posuere ante vestibulum, suscipit lectus. Suspendisse finibus gravida ipsum nec semper. Donec placerat mattis mauris semper placerat. Nam tempor orci non laoreet eleifend. Cras ornare neque sit amet ante dapibus tempor.";
console.log(subsExists(strData));
