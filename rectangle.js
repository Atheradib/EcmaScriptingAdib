const AreaOfRectangle = (b,w) => b*w;

const AreaOfTriangle = (b,h) => (1/2)*b*h;

const x=10;
const b=15 ;
const h=30;

const AreaOfCircle = (r) => (22/7)*r*r;
const AreaOfHalfCircle = (r) => (22/7)*r*r*(1/2);


//const r1=7
//const r2=5
//const x=12
//const h=14
//const b=27

console.log(`Area of Diagram 4 is ${AreaOfRectangle(14,27-7)+ AreaOfTriangle(27-7,12)+ AreaOfHalfCircle(7)- AreaOfCircle(5)}`);


console.log(`Area of Rectangle is ${AreaOfRectangle(20,30)} sq.unit`);

console.log(`Area of Rectangle is ${AreaOfTriangle(10,15)}sq.unit`);

console.log(`Area of Diag 3 is ${AreaOfRectangle(x,b) + AreaOfTriangle(b,h-x)}`);

console.log(`Area of Circle is ${AreaOfCircle(30)}sq.unit`);

