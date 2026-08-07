// sort - arrey ichidagi qiymatlar ni tartiblaydi

// let arr = [1, 3, 2, 5, 4, 7, 6, 9, 8];
// let sortArr = arr.sort()
// let sortArr = arr.sort((a, b) => a - b);
// let sortArr = arr.sort((a, b) => b - a);
// console.log(sortArr);
// let arr = ["Olma", "Uzum", "Nok", "anor", "Anor"]
// let sotrArr = arr.sort((a, b) => a.localeCompare(b))
// let sotrArr = arr.sort((a, b) => b.localeCompare(a))
// console.log(sotrArr)

// evety - bu (&&- AND ) operatoriga oxshab ishlaydi
// Barcha qiymat true ekan ligini tekshiradi va true yoki false javob qaytaradi
// let arr = [1, "Algoritm", { ism: "Eshmat" }, true, null, undefined];
// let arr = [1, "Algoritm", { ism: "Eshmat" }, true];
// let arr = [1, 2, 3, 4, 5]
// let isTrusy = arr.every((value) => value > 0);
// console.log(isTrusy)

// some - bu (|| - OR) operatoriga oxshab ishlaydi
// Qiymatlar ichida 1 ta qiymat shartga mos tushsa yakuni javob true bo'ladi.
// Akisholda false qaytaradi.
// let arr = [-1, -2, -3, 4, -5]
// let or = arr.some((value) => value)
// let or = arr.some((value) => value > 0)
// console.log(or)

// flat - nesed array larni parchalab 1 ta arrey ga aylantiradi
// let nestArr = [1, 2, [3, 4, [5, 6, [7, 8]]]]
// let arr = nestArr.flat(0)
// let arr = nestArr.flat()
// let arr = nestArr.flat(Infinity)
// console.log(arr)

// flat + map = flatmap - bu return ga qaytarilgan arrey ni parchalaydi va 
// 1ta arrey yaratib beradi
// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.flatMap((value) => [value ** 2]);
// console.log(newarr)
// let newarr = arr.map((value) => [value **2])
// console.log(newarr);

// fill - Arrey inchidagi bo'sh joylarni qiymat bilan to'ldirib beradi
// []
// Arrey()

// let arr1 = [3]
// console.log(arr1)
// let arr2 = Array(3)
// let arr3 = arr2.fill("Algoritm")
// let arr3 = arr2.fill(0)
// console.log(arr3)

// copyWithin - arreyni 1 qismini copy qilib boshqa qismiga joylab beradi.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let copiyarrey = arr.copyWithin(5, 0, 5)
// let copyarr = arr.copyWithin(0, 5, 5)
// console.log(copyarr)