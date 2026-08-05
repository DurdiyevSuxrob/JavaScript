// const hozir = new Date();
// console.log(hozir);
// const sana3 = new Date("2026-08-03");
// ======================================================================================
// const juma = new Date(2026, 7, 7); // 2026-yil 7-avgust - bu juma kuni
// console.log(juma.getDate()); // 7 (oyning kuni)
// console.log(juma.getDay()); // 5 (haftaning kuni - juma)
// ======================================================================================
//                                   yaxlitlar
// console.log(Math.round(4.4)); // 4 - eng yaqin butun songa yaxlitlaydi (0.5 va undan yuqori - yuqoriga)
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(-4.5)); // -4 (diqqat: manfiy sonlarda -4.5 -> -4, ya'ni yuqoriga yaxlitlanadi!)

// console.log(Math.floor(4.9)); // 4 - har doim PASTGA yaxlitlaydi (kichraytiradi)
// console.log(Math.floor(-4.1)); // -5 - manfiy sonlarda ham "pastga" (kichikroq tomonga)

// console.log(Math.ceil(4.1)); // 5 - har doim YUQORIGA yaxlitlaydi (kattalashtiradi)
// console.log(Math.ceil(-4.9)); // -4 - manfiy sonlarda ham "yuqoriga" (kattaroq tomonga)

// console.log(Math.trunc(4.9)); // 4 - kasr qismini shunchaki "kesib tashlaydi" (yaxlitlamaydi)
// console.log(Math.trunc(-4.9)); // -4 - Math.floor'dan farqli, faqat kasr qismini olib tashlaydi
// =======================================================================================
// round, floor, ceil, trunc farqini bitta jadvalda ko'rish:
// console.log(Math.round(2.5), Math.floor(2.5), Math.ceil(2.5), Math.trunc(2.5)); // 3 2 3 2
// console.log(
//     Math.round(-2.5),
//     Math.floor(-2.5),
//     Math.ceil(-2.5),
//     Math.trunc(-2.5),
// ); // -2 -3 -2 -2
// =======================================================================================
// console.log(Math.max(5, 10, 3, 8)); // 10 - berilgan sonlar orasidan eng kattasi
// console.log(Math.min(5, 10, 3, 8)); // 3 - eng kichigi
// ===========================================================================================
// console.log(Math.pow(2, 10)); // 1024 - 2 ning 10-darajasi (2**10 bilan bir xil)
// console.log(Math.pow(5, 2)); // 25 - 5 ning kvadrati
// console.log(Math.pow(2, 0.5)); // 1.414... - kvadrat ildizga teng (chunki 0.5-daraja = ildiz)

// // Zamonaviy alternativa - "**" operatori (ES2016+), Math.pow() bilan bir xil natija beradi
// console.log(2 ** 10); // 1024

// console.log(Math.sqrt(25)); // 5 - kvadrat ildiz
// console.log(Math.sqrt(2)); // 1.4142135623730951
// console.log(Math.sqrt(-4)); // NaN - manfiy sonning kvadrat ildizi mavjud emas (haqiqiy sonlar orasida)

// console.log(Math.cbrt(27)); // 3 - kub ildiz (27 = 3*3*3)
// console.log(Math.cbrt(-8)); // -2 - kub ildiz manfiy sonlar uchun ham ishlaydi!

// // Boshqa foydali Math metodlari (bonus):
// console.log(Math.hypot(3, 4)); // 5 - gipotenuza uzunligi (Pifagor teoremasi: sqrt(3^2+4^2))
// console.log(Math.log(Math.E)); // 1 - natural logarifm (asosi E)
// console.log(Math.log2(8)); // 3 - 2 asosli logarifm (2^3=8)
// console.log(Math.log10(1000)); // 3 - 10 asosli logarifm
// console.log(Math.sign(-5)); // -1 - sonning belgisini qaytaradi (-1, 0, yoki 1)
// console.log(Math.sign(5)); // 1
// console.log(Math.sign(0)); // 0
// ============================================================================================
// 1-topshiriq
// const sana = new Date()
// console.log(sana);
// ===========================================================================================
// 2-topshiriq
const hozirgiYil = new Date().getFullYear()
// console.log(hozirgiYil);
// =====================================================================================
// 3-topshiriq
const hozirgioy = new Date().getMonth()
// console.log(hozirgioy);
// ====================================================================================
// 4-topshiriq
const hozirgikun = new Date().getDay()
// console.log(hozirgikun);
// ====================================================================================
// 5-topshiriq
const Hozirgisanani = new Date().toUTCString()
console.log(Hozirgisanani);




