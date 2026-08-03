let arr = [11, 22, 33];

arr.push(4);

console.log(arr); 

let arr2 = ["banannanan", "gaming", "olmazor"];

arr2.push("sahtolistul");

console.log(arr2); 

let arr3 = ["Pubg", "nexia 7", "Mnzi"];

arr3.push("Mashina");

console.log(arr3); 

let arr4 = ["kitob", "Damas", "olmoz"];

arr4.push("kalendar");

console.log(arr4); 

let arr5 = ["+", "-", "/"];

arr5.push("*");

console.log(arr5); 

console.log("=======================================")




let a1 = [1, 2, 3,4,5];
console.log(a1.pop()); 

let a2 = ["a", "d"];
console.log(a2.pop()); 

let a3 = [11];
console.log(a3.pop()); 

let a4 = [];
console.log(a4.pop()); 

let a5 = [5, 6, 7];
a5.pop();
console.log(a5);

console.log("=======================================")


let a6 = [2, 3];
a6.unshift(1);
console.log(a6); 

let a7 = [];
a7.unshift(10);
console.log(a7); 

let a8 = ["b"];
a8.unshift("a");
console.log(a8);

let a9 = [3];
a9.unshift(1, 2);
console.log(a9);

let a10 = [5];
console.log(a10.unshift(4));

console.log("=======================================")


let a11 = [1, 2, 3];
delete a11[1];
console.log(a11);

let a12 = ["a", "b"];
delete a12[0];
console.log(a12);

let a13 = [100];
delete a13[0];
console.log(a13);

let a14 = [1, 2, 3, 4];
delete a14[3];
console.log(a14);

let a15 = [5, 6];
delete a15[1];
console.log(a15.length);
console.log("=======================================")


console.log(["dizayn prag ramma"].length);
console.log(["Asarlar dan bosh ga "].length); 
console.log("Mashina salam slar".length); 
console.log("Mashina gerdiya".length); 
let a16 = ["dhysgfhdhfhfgffgfgfgfg"];
console.log(a1.length); 
console.log("=======================================")

console.log([1, 2, 3, 3, 42, ].at(0)); 
console.log([1, 12,, "hdar", 3].at(2)); 
console.log([1, 2,233, 3421, 1].at(-1)); 
console.log("hello my name".at(1)); 
console.log("salom mening ismim".at(-2)); 
console.log("=======================================")


console.log([4, 5, 8].indexOf(2)); 
console.log([9, 8, 7].indexOf(5));  
console.log(["a", "b"].indexOf("b")); 
console.log("olim".indexOf("l")); 
console.log([1, 5, 234].indexOf(5)); 
console.log("=======================================")

console.log([1, 2, 1].lastIndexOf(1)); 
console.log([5, 5, 5].lastIndexOf(5)); 
console.log(["a", "b", "a"].lastIndexOf("a")); 
console.log("hello worlsc sdf".lastIndexOf("l")); 
console.log([1, 2,34234].lastIndexOf(7)); 
console.log("=======================================")

console.log([2, 5, 3].includes(2)); 
console.log([7, 6, 3].includes(5)); 
console.log("qwerty".includes("qw")); 
console.log("karil".includes("ril")); 
console.log(["a", "b"].includes("a")); 
console.log("=======================================")

console.log("a,b,c".split(" "));

console.log("laekd".split(""));

console.log("3 4 5 6".split(" "));

console.log("salom-salom".split("-"));

console.log("a b c".split("|"));
console.log("=======================================")


console.log(["a", "b", "c"].join(","));

console.log(["a", "b", "c"].join(" "));

console.log([1, 2, 3].join(" = = ="));

console.log(["SAlom", "Dunyo"].join("5"));

console.log([5, 6, 7].join(" qo'sh"));
console.log("=======================================")

