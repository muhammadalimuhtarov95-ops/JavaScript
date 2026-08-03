// let arr =   [1, 2, 3, 4, 5]
// let newarr = arr.map((value, index, a)=> value * 2)
// console.log(newarr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let neArr = arr.filter((value, index, a) => value % 2 )
// console.log(arr)

// let a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let sum = 0
// a.forEach((value, index, a) => (sum += value.length))
// console.log(sum)

// let a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let newarr = a.filter((value, index, a) => value.length <= 4)
// console.log(newarr)

// let  a = ["Olma", "Nok", "Uzum", "shaftoli"];
// let newarr = a.map((value, index, a) =>{
//     return value + " " + value.length
// })
// console.log(newarr)

// let a = [1, 20, 14, 7, 2, 5, 18, 17, 100]
// let newArr = a.filter((value, index, a) => {
//     return value  => 10 && value < 100
// })
// console.log(newArr)

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli "]
// let newArr = arr.map((value, index, a) => {
//     return `*${value.slice(1)}`
// })
// console.log(newArr)

// =========================


// find() - Array ichidan qiymat qidiradi topsa qiymat qaytaradi topa olmasa undafined qaytaradi. Agar qiymat 1 tadan ko'p bo'lsa fqat 1 chi topgan qiymatni qaytaradi

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli ", "Nok"]  
// let newvalue = arr.find((value, index, a) => {
//     if(value === "Nok") return value
// })
// console.log(newvalue)

// findindex() - 
// let arr = ["Olma", "Uzum", "Nok", "Shaftoli ", "Nok"]
// let newindex = arr.findIndex((value, index, a) =>{
//     if(value === "Nok") return index
// })
// console.log(newindex)

// let arr = ["Olma", "Uzum", "Nok", "Shaftoli ", "Nok"]
// let newindex = arr.findLastIndex((value, index, a) =>{
//     if(value === "Nok") return index
// })
// console.log(newindex)


