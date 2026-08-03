let str1 = 'Salom';
let str2 = 'JavaScript';
console.log(str1);
console.log(str2);

console.log("=====================================");

let str3 = "Algoritm";
let str4 = "Oxford";
console.log(str3);
console.log(str4);

console.log("=====================================");

let ism = "Ali";
let yosh = 18;
console.log(`Salom ${ism}`);
console.log(`Yoshim ${yosh} da`);

console.log("=====================================");

let son = 123;
let matn1 = String(son);
console.log(matn1);
let qiymat = true;
let matn2 = String(qiymat);
console.log(matn2);

console.log("=====================================");

let son1 = 456;
let son2 = 2026;
console.log(son1.toString());
console.log(son2.toString());

console.log("=====================================");

let str = "Algoritm and Oxford";
let str002 = "Algoritm and Oxford";
console.log(str.charAt(0));
console.log(str002.charAt(5));

console.log("=====================================");

let str03 = "Algoritm and Oxford";
let str04 = "Algoritm and Oxford";
console.log(str03[0]);
console.log(str04[10]);

console.log("=====================================");

let str5 = "Algoritm and Oxford";
let str6 = "Algoritm and Oxford";
console.log(str5.at(0));
console.log(str6.at(-1));

console.log("=====================================");

let str7 = "Algoritm and Oxford";
let str8 = "Algoritm and Oxford";
console.log(str7.charCodeAt(0));
console.log(str8.charCodeAt(1));

console.log("=====================================");

let a = "Salom";
let b = "Dunyo";
console.log(a.concat(b));

let c = "Java";
let d = "Script";
console.log(c.concat(d));

console.log("=====================================");

let str9 = "Algoritm and Oxford";
let str10 = "Algoritm and Oxford";
console.log(str9.includes("and"));
console.log(str10.includes("Oxford"));

console.log("=====================================");

let text1 = "Salom Dunyo";
console.log(text1.replace("Dunyo", "JavaScript"));

let text2 = "Men olma yaxshi ko'raman";
console.log(text2.replace("olma", "o'zimni"));

console.log("=====================================");

let str11 = "Algoritm and Oxford";
let str12 = "Algoritm and Oxford";
console.log(str11.startsWith("Alg"));
console.log(str12.startsWith("Ox"));

console.log("====================================");

let str13 = "Algoritm and Oxford";
let str14 = "Algoritm and Oxford";
console.log(str13.endsWith("rd"));
console.log(str14.endsWith("and"));

console.log("=====================================");

let str15 = "Algoritm and Oxford";
let str16 = "Algoritm and Oxford";
console.log(str15.search("and"));
console.log(str16.search("Oxford"));

console.log("======================================");

let str17 = "Algoritm and Oxford";
let str18 = "Algoritm and Oxford";
console.log(str17.indexOf("o"));
console.log(str18.indexOf("a"));

console.log("======================================");

let str19 = "Algoritm and Oxford";
let str20 = "Algoritm and Oxford";
console.log(str19.lastIndexOf("o"));
console.log(str20.lastIndexOf("a"));

console.log("=======================================");

let phone1 = "90 111 22 33";
let num = "25";
console.log(phone1.padStart(phone1.length + 5, "+998 "));
console.log(num.padStart(5, "0"));

console.log("=======================================");

let email = "eshmat.toshmatov2026";
let ism2 = "Ali";
console.log(email.padEnd(email.length + 10, "@gmail.com"));
console.log(ism2.padEnd(8, "*"));
