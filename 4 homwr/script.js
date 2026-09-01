// Distructutre

// 3-xil distructyre bor

// 1. object distructyre
// 2. Array distructyre
// paramet distructuyre

// let para = {
//   id: 1,
//   ism: "Eshmat",
//   yosh: 60,
//   child: {
//     id: 2,
//     ism: "toshmat",
//     yosh: 25,
//   },
// };
// console.log(para.ism)
// console.log(para.child.ism)

// let {
//   ism,
//   child: { ism: a },
// } = para;
// console.log(ism, a);

// let arr = [1, 2, 3, [4, 5]];

// let [a, b, c, [d, e]] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// let obj = {
//   id: 1,
//   name: "Loptop",
//   color: "White",
//   price: { dollor: "$1000" },
//   models: ["Hp", "Acer", "Acuc", "Del", "Lenovo", "Tashiba"],
// };
// function def({ name, color, price: { dollor }, models: [a, b, c] }) {
//   console.log(name);
//   console.log(color);
//   console.log(dollor);
//   console.log(a, b, c);
// }

// def(obj);

let obj = { id: 1 };
let obj2 = { name: "UZB" };
// let obj3 = Object.assign(obj, obj2)
// console.log(obj3)
let ob = { ...obj, ...obj2 };

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// let arr = arr1.concat(arr2)
// console.log(arr)

let arr = [...arr1, ...arr2];

// Spreed (...) - vazifasi (object va arey ni parchalash uchun ishlatiladi.)

function ddd(a, b, c, ...arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(sum)
}
ddd(1, 2, 3, 4, 5, 6, 7, 8, 9);
// Rest (...) Vazifasi (qiymatlarni arrey ga joylab berish )
