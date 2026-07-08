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
// console.log(talabalar.findIndex((n)));
// let idx = talabalar.findIndex((n) => n > 35);
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
// 6-masala%
// let stack = [];
// let popStack = [];
// for (let i = 1; i <= 5; i++) {
//   stack.push(i);
// }
// for (let i = 0; i < 3; i++) {
//   popStack.push(stack.pop());
// }
// console.log(`Jami stack da (${stack}) lar qoldi `);
// console.log(`olib tashlangan mahsulotlar (${popStack.reverse()})`);

// 7-masala%
// let arr = ["JS", "dan", "salom"];
// let vazifalar = arr.reduceRight((acc, cur) => acc.concat(cur), []);
// console.log(vazifalar); 


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
// let sonlar = [12, 5, 8, 21, 3, 17];
// let natija = sonlar.findLast((n) => n > 2);
// console.log(natija);
// ==============================================================================
// 11-MASALA!
// let narxlar = [1000, 2500, 3200, 4700];
// narxlar.forEach((son, i) => {
//    console.log(`${i}-indeksdagi mahsulot narxi ${son*15/100+son} so'm`)
// }) 
// ========================================================================================
// 12-masala%  "b" harfi massivda nechta marta uchrashini indexOf() dan foydalanib (tsikl yordamida) sanang.
// let arr = ["a", "b", "c", "b", "d", "b"];
// console.log(arr.indexOf("b"));
// ======================================================================================
// 14-masala% while tsikli yordamida navbatdagi barcha mijozlarni shift() bilan xizmat ko'rsatish tartibida
// konsolga chiqaring ("mijoz1 xizmat ko'rmoqda" kabi).

// let navbat = ["mijoz1", "mijoz2", "mijoz3", "mijoz4"];
// while (navbat.length > 0) {
//     let mijoz = navbat.shift();
//     console.log(`${mijoz} xizmat ko'rmoqda`);
// }
// ====================================================================================
// 15-masala!
// let taomlar = ["osh", "manti", "lag'mon"];
// for





// =============================================================================
// 16-masala% "click" harakati oxirgi marta qaysi indeksda sodir bo'lganini toping.

// let arr = ["login", "click", "scroll", "click", "logout", "click"];
// console.log(arr.lastIndexOf("click"));
// =============================================================================
// 17-masala! 
// =================================================================================
// 18-masala%
// let baholar = [3, 5, 2, 4, 5, 1];
// let indeks = baholar.findLastIndex(baho => baho === 5);
// console.log(indeks);
// =========================================================================
// 19-masala!
// ===========================================================================
// 20-masala%
// let sonlar = [2, 4, 6, 7, 8, 10];
// let natija = sonlar.find(son => son % 2 !== 0);
// console.log(natija || "Topilmadi");
// =======================================================================
// 21-masala!
// =====================================================================
// 22-masala%
// let arr = ["Fizika: 4"];
// console.log(arr.push("Matematika: 5", "Kimyo: 3"));
// console.log(arr);
// ======================================================================
// 23-24!
// ===========================================================================
// 25-masala%
// let arr = ["x", "y", "z"];
// for (let key of arr.keys()) {
//   console.log(key); 
// }
// ========================================================================
// 26-masala% Foydalanuvchi "orqaga" tugmasini bossa oxirgi sahifa pop() bilan olib tashlanadi. Buni 2 marta
// simulyatsiya qiling va qolgan sahifalarni chop eting.

// let sahifalar = ["bosh", "biz-haqimizda", "xizmatlar", "aloqa"];
// sahifalar.pop()
// sahifalar.pop()
// console.log(sahifalar);
// =================================================================================
// 27-masala!
// ====================================================================
// 28-masala% "Eng muhim: byudjetni tasdiqlash" vazifasini ro'yxat boshiga unshift() bilan qo'shing, so'ng
// barcha vazifalarni raqamlab chop eting.

// let vazifalar = ["hujjatlarni tayyorlash"];
// vazifalar.unshift("Eng muhim: byudjetni tasdiqlash")
// console.log(vazifalar);
// ========================================================================
// metodlar//
// let matn = "Kecha juda kuchli yomg'ir shamol boldi va tinmay 2-soat yomg'ir yog'do!"
// let kattaHarf = matn.toUpperCase()
// console.log(kattaHarf);

// let kichikHarf = matn.toLowerCase()
// console.log(kichikHarf);

// console.log(matn.indexOf("yomg'ir")); //18
// console.log(matn.lastIndexOf("yomg'ir")); //56

// console.log(matn.includes("shamolli")); //folse
// console.log(matn.startsWith("Kecha") ); //true
// console.log(matn.slice(0, 7));
// console.log(matn);
// ====================================================================
let mahsulotlar = ["non", "sut", "tuxim"]
for (let i of mahsulotlar.entries()) {
    console.log(`#${i[0]} - ${i[1]} `);
}







