let men = "do'ssssst";
let men2 = "Misann";
console.log(men.repeat(5));
console.log(men2.repeat(5));

console.log("============================");

let str = "gol";
let str2 = "nima";
console.log(str.replace("g", "m"));
console.log(str2.replace("n", "i"));

console.log("============================");

let str3 = "aaaaaaaaaaaaa";
let str4 = "bbbbbbbbbbbbb";
console.log(str3.replaceAll("a", "b"));
console.log(str4.replaceAll("b", "d"));

console.log("============================");

let str5 = "Men Maktab da o'qiyman";
let str6 = "Men Algoritm  da o'qiyman";
console.log(str5.slice(4, 10));
console.log(str6.substring(4, 13));

console.log("============================");

let stro = "Algoritm Bo'laganda qando bo'ladi bollar";
let arr = stro.split("");
console.log(arr);
let str20 = "Algoritm, Oxfort, strt21, dombit, ziyokor";
let ar = str20.split(", ");
console.log(ar);

console.log("============================");

let d = "           jigar            ";
let d2 = "           jigarlar            ";
console.log(d.trim());
console.log(d2.trim());

console.log("============================");

let a = "Salom";
let b2 = "lom";
console.log(a.localeCompare(b2));

let c = "salom";
let o = "salom";
console.log(c.localeCompare(o));

console.log("============================");

let sum = "(20 + 10 / 30 - 5)*10 ";
console.log(eval(sum));

let sum2 = "(20 + 10 / 30 - 5)*48 ";
console.log(eval(sum2));