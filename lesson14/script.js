// // 1. Fonction Decloration
// let a = 10
// let b = 20
// function Functionname(raqam1, raqam2) {
//     let bolinma = raqam2 / raqam1
//     return bolinma
// }
// console.log(Functionname(a, b))

// //2. Expression Function
// const functionName2 = function (raqam3, raqam4) {
//     let bolinma = raqam4 / raqam3
//     return bolinma
// }
// console.log(functionName2(a, b))

// //3. Arrow Function

// const functionName3 = (raqam5, raqam6) => {
//     let bolinma = raqam6 / raqam5
//     return bolinma
// }
// console.log(functionName3(a, b))


// //=====================================

//  2. Expression Function
let start = 1
let stop = 10
const summa = function (a, b) {
    let yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i
    }
    return yigindi;
}
console.log(summa(start, stop))

// //3. Arrow Function
let start2 = 1
let stop2 = 10
const summa2 = (a, b) => {
    let yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i
    }
    return yigindi;
}
console.log(summa2(start2, stop2))

// // 1. Fonction Decloration
let start3 = 1
let stop3 = 10
function summa3(a, b) {
    let yigindi = 0;
    for (let i = a; i <= b; i++) {
        yigindi += i
    }
    return yigindi;
}
console.log(summa3(start3, stop3))

///==================================

let a = 5
let b = 7
function kattaSonniTop(raqam1, raqam2) {
    if (raqam1 > raqam2) {
        console.log(raqam1, "Katta")
        console.log(raqam2, "Kichik")
    }
    else if (raqam1 < raqam2) {
        console.log(raqam2, "Katta")
        console.log(raqam1, "Kichik")
    }
    else {
        console.log(raqam1, "va", raqam2, "bir-biriga teng")
    }
}

kattaSonniTop(a, b)

//arow function
let start2 = 7
let stop2 = 7
const summa2 = (raqam1, raqam2) => {
    if (raqam1 > raqam2) {
        console.log(raqam1, "Katta")
        console.log(raqam2, "Kichik")
    }
    else if (raqam1 < raqam2) {
        console.log(raqam2, "Katta")
        console.log(raqam1, "Kichik")
    }
    else {
        console.log(raqam1, "va", raqam2, "bir-biriga teng")
    };
}


//  2. Expression Function
let start = 50
let stop = 100
const summa = function (raqam1, raqam2) {
    if (raqam1 > raqam2) {
        console.log(raqam1, "Katta")
        console.log(raqam2, "Kichik")
    }
    else if (raqam1 < raqam2) {
        console.log(raqam2, "Katta")
        console.log(raqam1, "Kichik")
    }
    else {
        console.log(raqam1, "va", raqam2, "bir-biriga teng")
    };
}
summa(a, b)







