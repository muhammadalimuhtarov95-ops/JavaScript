// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 2) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 3  === 0 || cur % 2 === 0 ) return acc + cur
//     return acc
// }, 0);
// console.log(sum)


// reduce
// reduce(() => {}, 0)
// reduce((acc, cur) => {}, 0)
// 1. accumulator
// 2. currentValue

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc * cur, 1);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum1 = arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) return acc + cur
//   return acc
// }, 0);
// console.log(sum1)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum2 = arr.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : cur, 0);
// console.log(sum2)

// let mul = arr.reduce((acc, cur) => cur % 2 ? acc + cur : cur, 1);
// console.log(mul)

// let mul = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc + cur
//     return acc
// }, 1)
// console.log(mul)

