let str1 = " 144 ";
let r1 = Math.sqrt(parseInt(str1.trim()));
console.log(r1); 

let str2 = "7.89";
let r2 = Math.floor(parseFloat(str2)).toString();
console.log(r2); 

let str3 = "-25";
let r3 = Math.abs(parseInt(str3)).toString();
console.log(r3);

let str4 = "javascript";
let r4 = str4[0].toUpperCase() + str4.slice(1);
console.log(r4); 

let str5 = "81";
let r5 = Math.sqrt(parseInt(str5)).toString().repeat(2);
console.log(r5); 

let str6 = "frontend";
let r6 = Math.pow(str6.length, 2);
console.log(r6); 

let str7 = "125";
let r7 = Math.cbrt(parseInt(str7)).toString();
console.log(r7); 

let str8 = "React JS";
let r8 = str8.replace(" ", "_").toUpperCase();
console.log(r8);

let str9 = "15.51";
console.log(Math.round(parseFloat(str9)).toString()); 

let str10 = "HTML,CSS,JS";
console.log(str10.split(",").length); 

let str11 = "49";
console.log(Math.pow(Math.sqrt(parseInt(str11)), 2)); 


let str12 = "backend";
console.log(str12[str12.length - 1].toUpperCase());

let str13 = "  36.9  ";
console.log(Math.ceil(parseFloat(str13.trim()))); 

let str14 = "apple banana apple";
console.log(str14.replaceAll("apple", "orange"));

let str15 = "-64";
console.log(Math.sqrt(Math.abs(parseInt(str15))));

let str200 = "hello"
console.log(str200.repeat(3).length)

let st = "256 ";
st = Math.floor(Math.cbrt(Math.sqrt(parseInt(st.trim()))))

toString