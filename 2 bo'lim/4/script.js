// repet - bir qiymatni qayta qayta takrorlash uchun ishlatiladi.
// let ism = "toshmat";
// let a = ism.repeat(5);
// console.log(r)

// gol - gooooooooool
// let str = "gol"
// let newstr = str[0] + str[1].repeat(10) + str[2]
// console.log(newstr)

// replece, repleceAll - bir qiymatni boshqa qiymatga almashtirib beradi
// 17.07.2026, 17/07/2026
// let sana = "17.07.2026";
// sana = sana.replaceAll(".", "/");
// console.log(sana)

// let emeil = "ali@gmail.com"; // ali@yandex.ru
// emeil = emeil.replace("gmail.com", "yandex.ru")
// console.log(emeil)

// ==================================
// sliece , substring - matindan nesha olish uchun ishlatiladi.
// let str = "Men Algoritm IT CEnterda O'qiyman."   
// let a = str.slice(4, 12);
// let b = str.substring(4, 12);
// console.log(a)
// console.log(b)
// let c = str.slice(-9);
// console.log(c)
// let d = str.substring(-9)
// console.log(d)

// split string qiymatni arry ga aylantirish uchun ishlatiladi .
// "Algoritm" - [A, l, g, o, r, i, t,  m]
// let str = "Algoritm";
// let arr = str.split("");
// console.log(arr)
// let str2 = "Algoritm, Oxfort, strt21, dombit, ziyokor"
// let ar = str2.split(", ")
// console.log(ar)

// // ===============

// // trim qiymatni  boshi va oxiridagi bo'shjoylarni olib tashlaydi.
// let matn = "       Salom         "
// console.log(matn)//olding holat
// matn = matn.trim();
// console.log(matn)

// let raqam = 200
// console.log(raqam.toString())

// ========================
// localeCompare - hariflarni alfabit bo'yicha taqqos laydi
1, -1, 0
let a = "Salom"
let b = "lom"
console.log(a.localeCompare(b))

let c = "salom"
let d = "salom"
console.log(c.localeCompare(d))

let f = "Zlik"
let e = "salom"
console.log(f.localeCompare(e))
// ====================
// eval - string ichidagi matematika amallarni to'g'ri bajarib beradi.
let sum = "(20 + 10 / 30 - 5)*10 ";
console.log(eval(sum))
