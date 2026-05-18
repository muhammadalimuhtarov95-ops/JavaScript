// // for(let i = 1;i<=30;i++){
// //     let sum = eval(`${i}`.split("").join("+"));
// //     if (sum % 5 === 0) continue;
// //     console.log(i);
// // }

// //Tub sonlar topish masalasi
// // for (let i = 2; i <= 50; i++) {
// //     let x = true;
// //     for (let j = 2; j < i; j++) {
// //         if (i % j == 0) {
// //             x = false;
// //             break;
// //         }
// //     }
// //     if (x) console.log(i)
// // }


// // let count = 0
// // for (let i = 1; i <= 50; i++) {
// //     count++;
// //     if (count === 11) {
// //         count = 0;
// //         continue;
// //     }
// //     console.log(i)
// // }



// for (let i = 1; i <= 100; i++) {
//     let sum = 0
//     for (let k = 1; k < i; k++) {
//         if (i % k === 0) sum += k;
//     }
//     if (i !== sum) continue;
//     console.log(i);
// }


//====================================

function xisobla(stop) {
    let ty = 0
    let jy = 0
    for (let a = 1; a <= stop; a++) {
        if (a % 2 === 1) ty += a
        else jy += a
    }
    console.log(jy - ty)
}

xisobla(30)
xisobla(20)
xisobla(10)