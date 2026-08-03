let a = -200;
let a1 = 200;
console.log(Math.abs(a));
console.log(Math.abs(a1));

console.log("=======================");

let b = 3.9999;
let b2 = 3.0001;    
console.log(Math.floor(b));
console.log(Math.floor(b2));

console.log("=======================");

let d = 3.0001;
let d2 = 3.999;
console.log(Math.ceil(d));
console.log(Math.ceil(d2));

console.log("=======================");

let e = 3.5;
let e2 = 3.4;
console.log(Math.round(e));
console.log(Math.round(e2));

console.log("=======================");

let f = 1.333;
let f2 = 1.000001;
console.log(Math.trunc(f));
console.log(Math.trunc(f2));

console.log("=======================");

let g = 100;
let g2 = "100";
console.log(+g + 1);
console.log(+g2 + 1);


console.log(parseInt(g) + 1);
console.log(parseInt(g2) + 1);

console.log(parseFloat(g) + 1);
console.log(parseFloat(g2) + 1);

console.log(Number(g) + 1);
console.log(Number(g2) + 1);
console.log("=======================");

let h = 10;
let h2 = 10.1;
console.log(Number.isInteger(h));
console.log(Number.isInteger(h2));

console.log("=======================")


let i = Math.trunc(Math.random() * 10);
let i2 = Math.trunc(Math.random() * 10);
console.log(i);
console.log(i2);

console.log("=======================")

