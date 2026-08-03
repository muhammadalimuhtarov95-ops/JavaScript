// forEach
// let arr = ["Olma", "Anor", "Uzum", "Nok"];

// let sum = 0
// arr.forEach((value, index, a) => {
// sum += value.length
//   if(index === 3)
//     console.log(value)
// })
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]
// let sum  = 0
// arr.forEach((value, index, a) => (sum += value))
// console.log(sum)

// ======================================
// map
// let arr = ["Olma", "Anor", "Uzum", "Nok"];
// let newarr = arr.map((value, index, a) =>{
//   return value +"Olaman."
// })
// console.log(newarr)

// let arr = ["Olma", "Anor", "Uzum", "Nok"];
// let newAtt = arr.map((value, index, a) => `${value} ${index + 1}`)
// console.log(newAtt)

// ===========================================
// filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arra = arr.filter((value, index, a) => {
//   if (value <= 5) return value;
// });
// console.log(arra);

// forEach va map / farqi.
// forEach da return ishlaydi qiymat qaytmaydi.
// map da return ishlaydi o'zidan yangi Array qaytaradi.

// let arr = ["Shaftoli", "Anjir", "Uzum", "Nok"]
// let newArr = arr.filter((value, index, a) =>{
//     if(value.length % 2 === 0) return value
// })
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// let newAtt = arr.map((value, index, a) => {
//   return value ** 2
// });
// console.log(newAtt);

// let arr = ["Scrach", "Paython", "Html", "css", "JavaScript", "React Js"];
// let newAtt = arr.map((value, index, a) => {
//   return value.toUpperCase()
// });
// console.log(newAtt)

let arr = ["Scrach", "Paython", "Html", "css", "JavaScript", "React Js"];
let newAtt = arr.map((value, index, a) => {
  return value.at(0).toUpperCase() + value.slice(1);
});
console.log(newAtt);
