// // // let algoritm = { ism: "Algiritm IT center", yil: 2016, manzil: "Chorsu, DXA binosi.", telRaqam: "+998 99 000 00 00", }
// // // console.log(algoritm.ism); // 1
// // // console.log(algoritm["ism"]); //2
// // // let str = "ism";
// // // console.log(algoritm[str]); // 3


// // let algoritm = {
// //     ism: "Algiritm IT center",
// //     yil: 2016,
// //     manzil: "Chorsu, DXA binosi.",
// //     telRaqam: "+998 99 000 00 00",
// // }
// // //  let start21 = object.assign({}, algoritm);
// // //  let start21 = object.a({}, algoritm);
// // //  start21.ism = "Start21";

// // console.log(start21);
// // // console.log(algoritm);

// // // Link o'zgaruvchi 2 ta usul bor.

// // // 1. object.assign()
// // // 2. staructuredClone()

// let algoritm = {
//     ism1: "Algoritm IT center",
//     yil1:2016,
// };

// let start21 = {
//     ism2: "Start 21",
//     yil2: 2021,
// };

// let birlashgan = Object.assign(algoritm, start21);
// console.log(birlashgan);

// let obj = {
//     ism :"Eshmat",
//     yil:2010,
//     ism:"Toshkent",
// };

// console.log(obj);

let obj = {
    ism: "Toshmat",
    yosh: 20,
    statua: "Talaba",
    manzil: "Toshkent"
}

let b = Object.assign({}, obj)
obj.ism = "Toshmat"
obj.yosh = 27
obj.statua = "ishchi"
obj.manzil = "Namangan";


let c = structuredClone(obj)
obj.ism = "Ali"
obj.yosh = 17
obj.statua = "Maktab"
obj.manzil = "Fargona";

console.log(obj, c)


