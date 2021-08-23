const items = [1, "orange", undefined, "apple", null, "mango"];

const arrcap = [];
items.forEach((item) => {
  if (typeof item === "string") {
    arrcap.push(item.toUpperCase());
  }
});
console.log(arrcap);
