// 1-masala% massivini to'liq (Infinity chuqurlikda) tekislang.

// let arr = [1, [2, [3, [4, 5]]], 6]
// console.log([1, [2, [3, [4, 5]]], 6].flat(Infinity))
// =============================================
// 2-masala% Bo'sh "savat" massivi yarating. Foydalanuvchi tanlagan 3 ta mahsulot nomini (o'zingiz kiriting)
// push() yordamida qo'shing va oxirida savatdagi mahsulotlar sonini chop eting.

// let arr = ["olma", "anor"];
// arr.push("uzum");
// console.log(arr); 
// =================================================
// 3-masala! 

// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}];
// let idx = talabalar.findIndex((n) => n > 35);
// console.log(idx); // 2
// ================================================================
// 4-masala% 2-indeksdan boshlab 2 ta elementni o'chirib, o'rniga 100 va 200 sonlarini joylashtiring. Natijani chop eting.

// let arr = [10, 20, 30, 40, 50]
// arr.splice(1, 2, "x")
// console.log(arr);
// ================================================
// 5-masala% keys() yordamida faqat juft indekslarni (0, 2, ...) konsolga chiqaring.

//  let mevalar = ["olma", "nok", "shaftoli", "gilos"];
//  for (let index of mevalar.keys()) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }
// =============================================================
// 6-masala! 
// let arr = ["1", "2", "3", "4", "5"];
// let oxirgi = arr.pop(2, 3, 4);
// console.log(arr); 
// =============================================================
// 7-masala!



// =================================================================
// 8-masala%
// Navbatga eng oldinga "Ali" ismini unshift() bilan qo'shing va yangi navbat uzunligini chop eting.

// let arr =["Vali", "Guli"]
// arr.unshift("Ali")
// console.log(arr);
// =====================================================================
// 9-masala% values() iteratorini for...of bilan aylanib, faqat 10 dan katta sonlarni konsolga chiqaring.

// let arr = [4, 8, 15, 16, 23, 42];
// for (let val of arr.values()) {
//     if (val > 10) {
//         console.log(val); 
//     }
// }
// =============================================================================
// 10-masala
let sonlar = [12, 5, 8, 21, 3, 17];
let natija = sonlar.findLast((n) => n > 2);
console.log(natija); 