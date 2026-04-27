// let obj = {
//     ism: ":Hayotbek",
//     Familia: ":Saidahmadov",
//     yosh: 14,
//     kurs: ":Frontend",
// }

// // static
// // obj.ism = "Azizbeee";
// // obj.Familia = "Abdukarimov";
// // obj.yosh = 15;
// // obj.kurs = "JavaScript"
// // console.log(obj)

// // //Dinamic

// // obj["ism"] = "Mubosher"
// // obj["Familia"] = "Eshmatova"
// // obj["yosh"] = "7 oylik"
// // obj["kurs"] = "Becent";
// // console.log(obj)

// // for (let key in obj) { 
// //     console.log(key,obj [key])
// // }


//===========================================

// let loptop = {
//     name: "Macbook",
//     countrty: "Usa",
//     price: 1000,
// };
// let newLoptop {};
// for (let key in loptop) {
//     if (typeof loptop[key] === "number") {
//         newLoptop[key] = loptop[key] / 2;
//     } else {
//         newLoptop [key] = loptop[key];
//     }
// }
// console.log(newLoptop)

//=============================

// let loptop = {
//     name: "Macbook",
//     countrty: "Usa",
//     price: 1000,
//     chip: "M5"
// };

// let newLoptop = {}
// for (let key in loptop) {
//     if (typeof loptop[key] === "number") {
//         newLoptop[key] = loptop[key] / 2;
//     }
//     else if (key === "chip") {
//         newLoptop[key] = "M2"
//     }
//     else {
//         newLoptop[key] = loptop[key];
//     }

// }
// console.log(newLoptop)

//================================
let loptop = {
    nomi: "iphone 17 pro max",
    color: "while",
    prece: 1700,
};

let newLoptop = {}
for (let key in loptop) {
    if (typeof loptop[key] === "number") {
        newLoptop[key] = 2000;
    }
    else if (key === "nomi") {
        newLoptop[key] = "iphone 18 pro max"
    }
    else if (key === "color") {
        newLoptop[key] = "BlueViolet"
    }
        else {
        newLoptop[key] = loptop[key];
    }

}
console.log(newLoptop)




