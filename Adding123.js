n = 4;
let str = "";
for (let i = 1; i <= 4; i++) {
  str = str + " " + i;
  console.log(`${str}`);
}
arr = [];
for (let i = n - 1; i <= n; i++) {
  arr.push(i);
}
for (let i = n - 1; i >= 4; i--) {
  arr.pop();
  console.log(arr.join(""));
}
