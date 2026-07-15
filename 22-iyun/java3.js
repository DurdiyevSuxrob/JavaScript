// 1-masala%
// let matn = "salom dunyo";
// let natija = matn.toUpperCase();
// console.log(natija);
// =====================================================================================
// 2-masala%
// let son = ["JavaScript"]
// let natija = son.length;
// console.log(natija);
// ==========================================================================================
// 3-masala%
// const matn = "Dasturlash";
// console.log(matn[5]);
// ================================================================================================
// 4-masala%
// let son = "Hello world";
// let natija = son.endsWith("d");
// console.log(natija);
// ===================================================================================================
// 5-masala%
// let matn = "WEB DASTURLASH";
// console.log(matn.toLowerCase());
// =================================================================================
// 6-masala%
// let matn = "Kompyuter"
// console.log(matn[3]);
// =================================================================================
// 7-masala%
// let son = "   salom   "
// let natija = son.trim( )
// console.log(natija);
// ==================================================================================
// 8-masala%
// let son = "Assalomu alaykum!";
// let natija = son.endsWith("!");
// console.log(natija);
// ===============================================================================
// 9-masala%
// let son = "Men js o'rganyapman";
// let natija = son.startsWith("js");
// console.log(natija);
// ============================================================================
// 10-masala%
// let son = "ha"
// console.log("ha".padEnd(6, "ha"))
// ==============================================================================
// 11-masala%
// let son = ["Ali", "Karimov"]
// let natija = son.join(" ")
// console.log(natija);
// ================================================================================
// 12-masala%
// let word = "javascript";
// let capitalized = word[0].toUpperCase() + word.slice(1);
// console.log(capitalized);
// ===================================================================================
// 13-masala%
// let matn = prompt("Gapingizni yozing:");
// console.log(matn.split(" "));
// ================================================================================
// 14-masala%
// let son = "salom"
// console.log(son.replace("salom", "solom"))
// ================================================================================
// 15-masala%
// let son = "Dasturlash";
// let natija = son.slice(-4);
// console.log(natija);
// ==================================================================================
// 16-masala%
// let son = "Hello world";
// let natija = son.slice(5);
// console.log(natija);
// ===================================================================================
// 17-masala%
// let son =  "ali@gmail.com"
// let natija = son.slice(4)
// console.log(natija);
// ======================================================================================
// 18-masala%
// let son = "JavaScript";
// console.log(son.split("").reverse().join(""));
// =======================================================================================
// 19-masala%
// let son = "Dasturlash";
// let natija = son.endsWith("h");
// console.log(natija);
// ==================================================================================
// 20-masala%
// let son = "Men olma yedim"
// console.log(son.replace("olma", "anor"))
// =================================================================================
// 21-masala%
// let son = "Dasturlash"
// console.log(son.slice(2, 7));
// ========================================================================
// 22-masala%
// let son = ["Men", "o'qiyman"]
// console.log(son.join(" "));
// ====================================================================================
// 23-masala%
// let son =  "Dasturlash"
// let natija = son.slice(1, 7, 8)
// console.log(natija);
// ==============================================================================
// 24-masala%
// let son = "Salom123"
// let natija = son.endsWith("3")
// console.log(natija);
// ===============================================================================
// 25-masala%
// let son = "   JavaScript   "
// let natija = son.trim( )
// console.log(natija);
// =====================================================================================
// 26-masala%
// let son =  "document.pdf"
// let natija = son.slice(9)
// console.log(natija);
// ================================================================================
// 27-masala%
// let son = "abc"
// let natija = son.padEnd("10", "*")
// console.log(natija);
// ========================================================================================
// 28-masala%
// let son = "Men JS o'rganyapman"
// let natija = son.indexOf("JS")
// console.log(natija);
// =========================================================================================
// 29-masala%
// let son = "bir ikk uch"
// let natija = son.split(" ")
// console.log(natija);
// ==========================================================================================
// 30-masala%
// let son = "salom"
// let natija = son.split("")
// console.log(natija);
// ===========================================================================================
// 31-masala%
// let son = "https://google.com";
// let natija = son.endsWith("m");
// console.log(natija);
// =============================================================================================
// 32-masala%
// let son = "Mening Blog Postim"
// console.log(son.toUpperCase().replaceAll(" ", "-"));
// ========================================================================================
// 33-masala%
// let son = "JavaScript"
// let natija = son.slice(0,4)
// console.log(natija);
// =========================================================================================
// 34-masala%
// let son = "Bu bir gap"
// let natija = son.split(" ")
// console.log(natija.length);
// =============================================================================================
// 35-masala%
// let son = "a1b2c3"
// let a = son.match(/\d/g).join("")
// console.log(a);
// =========================================================================================
// 36-masala%
// let son = "123"
// let natija = son.padEnd("5", ".")
// console.log(natija);
// ============================================================================================
// 37-masala%
// let son =  "jAVAsCRIPT"
// console.log(son.charAt(0).toUpperCase() + son.slice(1).toLowerCase());
// =============================================================================================
// 38-masala%
// let son = "abc";
// console.log(son.split("").reverse().join(""));
// =============================================================================
// 39-masala%
// let son = "salom"
// let natija = son.split("a")
// console.log(natija);
// ============================================================================
// 40-masala%
// let matn = prompt("Matn kiriting:")
// let belgisoni = {}
// let maksimonsoni = 0
// let engKopBelgi = ""
// for (let i of matn) {
//     belgisoni[i] = (belgisoni[i] ||)
// }

// ====================================================================================
// 41-masala%
// let title = "salom dunyo uzbekiston";
// let titled = title
//   .split(" ")
//   .map((w) => w[0].toUpperCase() + w.slice(1))
//   .join(" ");
// console.log(titled);
// =========================================================================
// 42-masala%
// let son = "kiyikm";
// let natija = son === son.split("").reverse().join("");
// console.log(natija);
// 43-masala%
// let son = "salom";
// let natija = son.split("");
// let unlilar = ["a", "e", "i", "o", "u"];
// let newText = []
// for (let i of natija) {
//     if(!unlilar.includes(i)) {
//         newText.push(i)
//     }
// }
// console.log(newText.join(" "));

// =====================================================================
// 44-masala%
// let son = "men dastur yozaman";
// let natija = son.split(" ").reverse().join(" ");
// console.log(natija);
// ======================================================================
// 45-masala%
let matn = "a1b2c3d4"
let arr = yigindi = 0;
for (let i of matn.split("")) {
    if (parseInt()) {
        
    }
}



