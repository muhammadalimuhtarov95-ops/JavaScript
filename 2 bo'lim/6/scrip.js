// let arr = [1, 1, 2, 9, 7, 0, 0, 0, 3, 1];
// let arrr = []
// for(let value of arr){
//     if(!arrr.includes(value)) arrr.push(value)
// }
// console.log(arrr)

// console.log(katta);
// console.log(kichik);
// let str = "AAAAALLLLGGGGOOOOORRRRRRRIIITTTTMMMMMM";
// let res = ""
// for(let value of str){
//     if(!res.includes(value)) res +=value
// }
// console.log(res)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = 0;
// for (let value of arr) {
//   let code = `${value}`.charCodeAt();
//   if (!(code % 2)) res += code;
// }
// console.log(res);

let str = "AlgORItm";
let katta = "";
let kichik = "";
for (let value of str) {
  if (value !== value.toUpperCase())  katta += value;
   else {
    kichik += value;
  }
}
console.log(kichik,katta)
