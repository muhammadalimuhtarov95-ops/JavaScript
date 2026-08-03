//  lengeth zunligini chiqarib beradi qancha harif bo'lsa son chiqaradi 8 ta harif bo'lsa 8 sonini chiqaradi
let na1 = "Algoritm"
let na2 = "OXfort"
let na3 = "Start 21"
let na4 = "Dombit"
let na5 = "Algoritm"
let na6 = "MAshqlarda"
let na7 = "Misollard"
let na8 = "Qoidalarda"
let na9 = "Boshqalarda"
let na10 = "Bizlarda"
console.log(na1.length)
console.log(na2.length)
console.log(na3.length)
console.log(na4.length)
console.log(na5.length)
console.log(na6.length)
console.log(na7.length)
console.log(na8.length)
console.log(na9.length)
console.log(na10.length)

console.log("========================")
// charAt bu berilgan son bersa index bo'yicha qidiradi qiymatni ichidan
let se1 = "Games"
let se2 = "Free Fire"
let se3 = "Dls 26"
let se4 = "minecraft"
let se5 = "Roblox"
let se6 = "cs1.6"
let se7 = "CS:GO"
let se8 = "CS2"
let se9 = "PUBG"
let se10 = "BattleGraund"
console.log(se1.charAt(3))
console.log(se2.charAt(1))
console.log(se3.charAt(2))
console.log(se4.charAt(1))
console.log(se5.charAt(2))
console.log(se6.charAt(4))
console.log(se7.charAt(3))
console.log(se8.charAt(2))
console.log(se9.charAt(1))
console.log(se10.charAt(7))

console.log("=========================")
// at index bo'yicha bergan sonim ni string ichidan qidiradi bo'lsa consolga chiqaradi
let a1 = "Video saytlar"
let a2 = "Youtobe"
let a3 = "instagram"
let a4 = "X-ray"
let a5 = "Facebook"
let a6 = "Tiktiok"
let a7 = "twitter"
let a8 = "gugle"
let a9 = "TV larda"
let a10 = "Roblox"
console.log(a1.at(1))
console.log(a2.at(3))
console.log(a3.at(2))
console.log(a4.at(3))
console.log(a5.at(-1))
console.log(a6.at(-2))
console.log(a7.at(0))
console.log(a8.at(3))
console.log(a9.at(4))
console.log(a10.at(5))

console.log("===================================")
// concat bu berilgan string ga qo'yib qo'yadi berilgan qiymatimnni 
let b1 = "Telegram"
let b2 = "instagram"
let b3 = "Facebook"
let b4 = "x-er"
let b5 = "Tik Tok"
let b6 = "Gugle"
let b7 = "Terabayt tv"
let b8 = "server"
let b9 = "games"
let b10 = "emeil"
console.log(b1.concat(":Salom"))
console.log(b2.concat(":Sendanzo'riyo'q"))
console.log(b3.concat(":qalay"))
console.log(b4.concat("yahshisan"))
console.log(b5.concat("bo'ladi"))
console.log(b6.concat("yahshi"))
console.log(b7.concat("barmal"))
console.log(b8.concat("bo'lsa kerak"))
console.log(b9.concat("nimagappp"))
console.log(b10.concat("do'slar"))

console.log("=====================================")
// Men Bergan harifni string ichidan qidiradi va borbo'lsa true yo'qbo'lsa false chiqaradi
let nam1 = "Algoritm"
let nam2 = "OXfort"
let nam3 = "Start 21"
let nam4 = "Dombit"
let nam5 = "Algoritm"
let nam6 = "MAshqlarda"
let nam7 = "Misollard"
let nam8 = "Qoidalarda"
let nam9 = "Boshqalarda"
let nam10 = "Bizlarda"
console.log(nam1.includes("A"));
console.log(nam2.includes("a"));
console.log(nam3.includes("S"));
console.log(nam4.includes("d"));
console.log(nam5.includes("A"));
console.log(nam6.includes("n"));
console.log(nam7.includes("M"));
console.log(nam8.includes("Q"));
console.log(nam9.includes("s"));
console.log(nam10.includes("B"));

console.log("=================================")
// startsWith - stringni boshi shunaqami agar shunaqa bo'lsa true agar noto'gri bo'lsa false
let str1 = "Fanlar"
let str2 = "Matematika"
let str3 = "Onatili"
let str4 = "Tabifan"
let str5 = "Jistar"
let str6 = "Adabiot"
let str7 = "fizika"
let str8 = "rustili"
let str9 = "inliztili"
let str10 = "onash"
console.log(str1.startsWith("Fan"))
console.log(str2.startsWith("ka"))
console.log(str3.startsWith("Ona"))
console.log(str4.startsWith("tab"))
console.log(str5.startsWith("Jistar"))
console.log(str6.startsWith("Ada"))
console.log(str7.startsWith("Fi"))
console.log(str8.startsWith("ru"))
console.log(str9.startsWith("In"))
console.log(str10.startsWith("on"))

console.log("========================================")
// endsWith strinni ohiri ni ko'radi to'g'ri bo'lsa true noto'g'ri bo'lsa false beradi
let str11 = "Salom";
let str12 = "Javascript";
let str13 = "Telefon";
let str14 = "Kompyuter";
let str15 = "Olma";
let str16 = "uzum";
let str17 = "onor";
let str18 = "qalay";
let str19 = "Sizlar";
let str20 = "Bolalar";
console.log(str11.endsWith("om"));
console.log(str12.endsWith("pt"));
console.log(str13.endsWith("on"));
console.log(str14.endsWith("er"));
console.log(str15.endsWith("ma"));
console.log(str16.endsWith("um"));
console.log(str17.endsWith("or"));
console.log(str18.endsWith("ay"));
console.log(str19.endsWith("lar"));
console.log(str20.endsWith("lar"));

console.log("=====================================")
// searech stringni ichidan berilgn qiymatni qidiradi
let text1 = "ajoyib bolalar bilan"
let text2 = "Bilan birga o'yna"
let text3 = "nimaga ota"
let text4 = "hammaga qo'shilib o'yna"
let text5 = "yakkao'ng o'ynama"
let text6 = "hayir bolakay"
let text7 = "kechroq ko'rihamiz"
let text8 = "hayir boalar"
let text9 = "hammangizga hayir mitti"
let text10 = "bolalar "
console.log(text1.search("l",))
console.log(text2.search("r",))
console.log(text3.search("a",))
console.log(text4.search("m",))
console.log(text5.search("k",))
console.log(text6.search("h",))
console.log(text7.search("k",))
console.log(text8.search("h",))
console.log(text9.search("o",))
console.log(text10.search("b",))

console.log("=======================================")
// index of strin ni boshidan qidiradi stringni ichidan
let itm1 = "ALGORITM"
let itm2 = "Oxfort"
let itm3 = "Master"
let itm4 = "Grand Master"
let itm5 = "Elitra garnd master"
let itm6 = "Free fire "
let itm7 = "old player"
let itm8 = "gamers"
let itm9 = "Gamer_exa"
let itm10 = "sell"
console.log(itm1.indexOf("L"));
console.log(itm2.indexOf("r"));
console.log(itm3.indexOf("s"));
console.log(itm4.indexOf("G"));
console.log(itm5.indexOf("r"));
console.log(itm6.indexOf("e"));
console.log(itm7.indexOf("o"));
console.log(itm8.indexOf("g"));
console.log(itm9.indexOf("e"));
console.log(itm10.indexOf("l"));

console.log("===========================")
// lastIndexOf ohiridan boshlab qidiradi
let itm11 = "ALGORITM"
let itm12 = "Oxfort"
let itm13 = "Master"
let itm14 = "Grand Master"
let itm15 = "Elitra garnd master"
let itm16 = "Free fire "
let itm17 = "old player"
let itm18 = "gamers"
let itm19 = "Gamer_exa"
let itm20 = "sell"
console.log(itm11.lastIndexOf("l"))
console.log(itm12.lastIndexOf("r"))
console.log(itm13.lastIndexOf("s"))
console.log(itm14.lastIndexOf("G"))
console.log(itm15.lastIndexOf("r"))
console.log(itm16.lastIndexOf("e"))
console.log(itm17.lastIndexOf("o"))
console.log(itm18.lastIndexOf("g"))
console.log(itm19.lastIndexOf("e"))
console.log(itm20.lastIndexOf("l"))

console.log("===================================")
// padEnd ohiridan boshlab so'z qo'shib qo'yadi
let brend1 = "Algoritm"
let brend2 = "Algoritm"
let brend3 = "Algoritm"
let brend4 = "Algoritm"
let brend5 = "Algoritm"
let brend6 = "Algoritm"
let brend7 = "Algoritm"
let brend8 = "Algoritm"
let brend9 = "Algoritm"
let brend10 = "Algoritm"
console.log(brend1.padEnd(10 ,"it"));
console.log(brend2.padEnd(14 ,"markaz"));
console.log(brend3.padEnd(14 ,"studia"));
console.log(brend4.padEnd(14 ,"o'qish"));
console.log(brend5.padEnd(12 ,"kurs"));
console.log(brend6.padEnd(10 ,"it"));
console.log(brend7.padEnd(12 ,"sell"));
console.log(brend8.padEnd(15 ,"grafica"));
console.log(brend9.padEnd(14 ,"dizayn"));
console.log(brend10.padEnd(14 ,"capcut"));

console.log("================================")
// padStart boshigA so'z yoki belgi qo'yib qo'yadi.
let brend11 = "Algoritm"
let brend12 = "Algoritm"
let brend13 = "Algoritm"
let brend14 = "Algoritm"
let brend15 = "Algoritm"
let brend16 = "Algoritm"
let brend17 = "Algoritm"
let brend18 = "Algoritm"
let brend19 = "Algoritm"
let brend20 = "Algoritm"
console.log(brend11.padStart(10 ,"it"));
console.log(brend12.padStart(14 ,"markaz"));
console.log(brend13.padStart(14 ,"studia"));
console.log(brend14.padStart(14 ,"o'qish"));
console.log(brend15.padStart(12 ,"kurs"));
console.log(brend16.padStart(10 ,"it"));
console.log(brend17.padStart(12 ,"sell"));
console.log(brend18.padStart(15 ,"grafica"));
console.log(brend19.padStart(14 ,"dizayn"));
console.log(brend20.padStart(14 ,"capcut"));



