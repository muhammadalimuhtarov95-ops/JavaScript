// let arr = ["Olma", "Uzum", "Nok", "Olma"];
// arr.forEach((value, index, a) => {
//   console.log(`Men bozordan ${value} olaman.`);
// });

// let a = arr.map((value, index, a) => {
//   return (value += " yeyman");
// });
// console.log(a);

// let newarr = arr.filter((value, index, a) => {
//   return value.length > 3;
// });
// console.log(newarr);

//  let newArr = arr.find((value) => {
//     return value === "Nok"
// })
// console.log(newArr)

// let newArr = arr.findIndex((value) => {
//     return value === "Nok"
// })
// console.log(newArr)

// let newArr = arr.findLastIndex((value) => {
//     return value === "Olma"
// })
// console.log(newArr)

// let s = arr.sort((a, b) => a.localeCompare(b));
// console.log(s)

// let num = [6, 4, 9, 5, 3, 2, 0, 1];
// let a = num.sort((a, b) => a - b);
// console.log(a)

// let a3 = num.every((value) => {
//     return value => 0
// })
// console.log(a3)

// let a =   num.some((value) => {
//     return value = 0
// })
// console.log(a)

// let data = [1, [2, [3, [4, [5, [6, [7]]]]]]];
// console.log(data.flat([Infinity]))

// let n = [1, 2, 3, 4, 5]
// let d = n.flatMap((value, inde, a) => value ** 2 )
// console.log(d)

// let a = Array(4).fill("Algoritm").fill("Oxfort", 2);
// console.log(a);

// let a = [1, 2, 3, 4, 5]
// a.copyWithin(0, 2)
// console.log(a)

// let numsd = [1, 2, "a", 3, "b", "c", 4, 5];
// let d3 = 0;
// let a3 = numsd.reduce((acc, cur) => {
//     if(!isNaN(cur)) return acc + cur
//     return acc
// }, 0);
// console.log(a3);

let arr = [
  { id: 1, type: "kirim" },
  { id: 2, type: "chiqim" },
  { id: 3, type: "kirim" },
  { id: 4, type: "chiqim" },
  { id: 5, type: "kirim" },
  { id: 6, type: "kirim" },
];

let a = Object.groupBy(arr, (value) => value.type)
console.log(a)
