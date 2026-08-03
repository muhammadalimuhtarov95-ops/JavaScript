let a1 = "olma banan anor";
console.log(a1.split(" "));

let a2 = "12345";
console.log(a2.split(""));




let a3 = ["olma", "banan", "anor"];
console.log(a3.join(" "));

let a4 = ["1", "2", "3"];
console.log(a4.join("-"));




let a5 = ["a", "b", "c"];
console.log(a5.reverse());

let a6 = [1, 2, 3, 4];
console.log(a6.reverse());




let a7 = [1, 2];
let a8 = [3, 4];
console.log(a7.concat(a8));

let a9 = ["a", "b"];
let a10 = ["c", "d"];
console.log(a9.concat(a10));




let a11 = ["a", "b", "c", "d"];
console.log(a11.slice(0, 2));

let a12 = [1, 2, 3, 4, 5];
console.log(a12.slice(-2));




let a13 = ["a", "b", "c", "d"];
console.log(a13.splice(0, 2));

let a14 = [1, 2, 3, 4];
a14.splice(1, 2, 10, 20);
console.log(a14);