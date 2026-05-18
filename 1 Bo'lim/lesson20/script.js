// // const user = {
// //     name: "Ali",
// //     age: 25,
// //     javob: "developer",
// // }
// // const key = "salary";

// // function getSalary(a, b) {
// //     if (key in a) console.log(a[key]);
// //     else console.log("Not found!");
// // }
// // getSalary(user, key)



// //===================
// // const status = {
// //     views: 10,
// // }
// // const key = "views";

// // function setKey(a,b) {
// //     if (b in a) {
// //         a[b]++;
// //     } else {
// //         a[b = 1]
// //     }   
// //     console.log(a)
// // }
// // setKey(status, key)


// //========================

// // const user = {
// //     name: "Ali",
// //     age: 20,
// // }
// // const copy = Object.assign({}, user);
// // function reference(user, copy) {
// //     copy.age = 30
// //     console.log(user)
// //     console.log(copy)
// // }
// // console.log(user)
// // console.log(copy)

// //==============================

// // const user = {
// //   name: "Ali",
// //   address: {
// //     city: "Tashkent"
// //   }
// // };
// // const a = structuredClone( user);str
// // user.address.city = "Buhoro"
// // console.log(user)
// // console.log(a)


// ///=====================

// // const a = {x:1, y: 2};
// // const b = {y:10, z: 3};
// // const c = {z:100};

// // function s(a,b,c) {
// // let d = Object.assign({}, a, b, c)
// // console.log(d)
// // }
// // s(a,b,c)

// //======================


// const data = {
//   user: {
//     name: "Ali",
//     skills: ["JS", "React"]
//   },
// };
// let a = structuredClone(data)
// function s(data,s) {
//   data.user.skills = [" js,react,NodeJS"]
//   console.log(data)
//   console.log(a)
// }
// s(data,a)
///========

// const user = {
//   name: "Ali"
// };
// if ("age" in user) {
//   user["age"]++;
// }else{
//   user["age"] = 18
// }
// console.log(user)

//===============

const user = {
  name: "Ali"
};
const { name, age = 18} = user;

console.log(name,age)