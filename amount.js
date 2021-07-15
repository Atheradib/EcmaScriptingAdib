const MillageCost =(distance,mileage,price) => 
Math.ceil((distance/mileage)*price);

// console.log(`Amount need to fill fuel is Rs. ${MillageCost(300,50,100)}`);
console.log(`Amount need to fill fuel is Rs. ${MillageCost(320,51,110.08)}`);
console.log(Math.floor(66.48));



