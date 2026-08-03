// 1. ''
// 2. ""
// 3. ``✨
// 4. String()
// 5. toString

// let str = "aaaaaaaaaa/naaaaaaaaaaaaaa"
// console.log(str);

// let str = sa/tlom
// console.log(str)

// let str = "Algoritm and Oxford";
// console.log(str.charAt(0));
// console.log(str[0]);
// console.log(str.at(0));
// console.log("==============");
// console.log(str.charAt(-1));
// console.log(str[-1]);
// console.log(str.at(-1));

// let str = "Algoritm and Oxford";
// 3 . charCodeAt()
// console.log(str.charCodeAt(1))

// 4.concat
// let Matn1 = "Salom"
// let Matn2 = "Alik"
// let Matn3 = "Niam gap"
// let Matn = Matn1.concat(" ",Matn2," ",Matn3)
// console.log(Matn)

// 5. includes
// let i = "and"
// if(str.includes(i)){
//  str = str.replace(i, "va")
// }else{
//     console.log("yo'q mavjut emas")
// }
// console.log(str)

let str = "Algoritm and Oxford";
// 6. startWith(), endsWith()
// let s = "Alg";
// let isStart = str.startsWith(s)
// console.log(isStart)
// let e = "rd"
// let end = e.endsWith(e)
// console.log(end)

// let isAlpa = str.search("and");
// console.log(isAlpa)
// console.log(str.indexOf("o"))
// console.log(str.lastIndexOf("o"));

let phon = "90 111 22 33";
let phone = phon.padStart(phone.length + 5, "+998 ");
console.log(phone);

let nam = "eshmat.toshmatov2026";
let emeil = nam.padEnd(nam.length + 10, "@gmail.com");
console.log(emeil);

// padStart(umumiy_uzunlik, qo'shiladigan_belgi)
// padEnd(umumiy_uzunlik, qo'shiladigan_belgi)
