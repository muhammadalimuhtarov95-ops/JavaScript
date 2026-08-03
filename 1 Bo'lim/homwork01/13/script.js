let text = "olma,banan,shaftoli,anor";
console.log(text.split(" "))


let text2 = "JavaScript juda qiziqarli til";
console.log(text2.replaceAll(" ", ",").split(" "))

let fruits = ["olma", "banan", "anor"];
console.log(fruits.join(" ").replaceAll(" ", "-"))


let nums = [1, 2, 3, 4, 5];
console.log(nums.reverse())

let letters = ["a", "b", "c", "d"];
console.log(letters.reverse(" "))

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2))

let boys = ["Ali", "Vali"];
let girls = ["Malika", "Dilnoza"];
console.log(boys.concat(girls))

let nums1 = [10, 20, 30, 40, 50, 60];
console.log(nums1.slice(2,5))

let fruits1 = ["olma", "banan", "anor", "shaftoli", "uzum"];
console.log(fruits1.slice(2,5))