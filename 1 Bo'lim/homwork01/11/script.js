let a1 = ["olma", "banan", "shaftoli"];
a1.push("anor");
console.log(a1);

let a2 = [10, 20, 30];
let a3 = Number(prompt("Son kiriting"));
a2.push(a3);
console.log(a2);

let a4 = ["qizil", "yashil", "ko'k", "sariq"];
a4.pop();
console.log(a4);

let a5 = ["telefon", "noutbuk", "planshet"];
let a6 = a5.at(-1);
a5.pop()
console.log(a6);
console.log(a5);

let a7 = ["fevral", "mart", "aprel"];
a7.unshift("yanvar");
console.log(a7);

let a8 = ["Ali", "Vali", "Hasan"];
let a9 = prompt("Ism kiriting ");
a8.unshift(a9);
console.log(a8);

const number = [5, 10, 15, 20]
delete number[2]
console.log(number)

const fruit = ["olma", "banan", "anor", "shaftoli"]
let index = fruit.indexOf("anor")
console.log(index)

const user = ["Ali", "Vali", "husan", "Husan"]
let ism = "Ali"
console.log(user.includes(ism))

const number = [10, 20, 30, 40, 20];
console.log(number.lastIndexOf(20))