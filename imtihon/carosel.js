const trak = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nexBtn = document.getElementById("nexBtn");
const card = document.querySelectorAll(".card");

const cardLength = card.length
let hisoblagich = 0;

const cardwidth = 210;

nexBtn.addEventListener("click", () => {
    if (hisoblagich > 0) {
        hisoblagich++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (hisoblagich > 0) {
        hisoblagich--;
        updateCarousel();
    }
});

function updateCarousel() {
    const moveAmount = -hisoblagich * cardwidth;
    trak.style.transform = `translateX(${moveAmount}px)`;
}

























c























