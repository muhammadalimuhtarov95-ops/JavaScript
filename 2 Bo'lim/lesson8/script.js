// let str = "biz bugun algoritmda js darslarni o'rgan moqdamiz."

// let data = str.split(" ")
// let newStr = "";
// for (let value of data){
//     newStr = newStr + value[0].toUpperCase() + value.slice(1) + " ";
// }

// console.log(newStr)

// ==========================================
// let str = "Men A1gor1tm 1t markaz1da 0'qiyman!"

// let obj = {
//     num: "",
//     char: "",
//     Symbol: "",
// }

// for (let value of str){
//     if (!isNaN(value) && value !==  " ") obj.num += value;
//     else if(
//         (value.charCodeAt() >= 65 && value.charCodeAt() <= 90) ||
//         (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
//     )obj.char += value;
//     else obj.Symbol += value;
// }

// console.log(obj)

// ==============================

let text = "Rerue    voluptatibus, esse qui maiores in eveniet."
let result = ""
for (let value of text){
    if(
        (value.charCodeAt() >= 65 && value.charCodeAt() <= 90) ||
        (value.charCodeAt() >= 97 && value.charCodeAt() <= 122)
    ){
        if (value .charCodeAt() % 2) result += value
    }else{
        result += value;
    }
}

console.log(result); 