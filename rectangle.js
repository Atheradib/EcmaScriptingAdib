const AreaOfRectangle = (b,w) => b*w;

const AreaOfTriangle = (b,h) => (1/2)*b*h;

const x=10;
const b=15 ;
const h=30;

const AreaOfCircle = (r) => (22/7)*r*r;
const AreaOfHalfCircle = (r) => (22/7)*r*r*(1/2);


const O=7
const P=5
const Q=12
const S=14
const T=27

console.log(`Area of Diagram 4 is ${AreaOfRectangle(S,T-O)+ AreaOfTriangle(T-O,Q)+ AreaOfHalfCircle(O)- AreaOfCircle(P)}`);


console.log(`Area of Rectangle is ${AreaOfRectangle(20,30)} sq.unit`);

console.log(`Area of Rectangle is ${AreaOfTriangle(10,15)}sq.unit`);

console.log(`Area of Diag 3 is ${AreaOfRectangle(x,b) + AreaOfTriangle(b,h-x)}`);

console.log(`Area of Circle is ${AreaOfCircle(30)}sq.unit`);

