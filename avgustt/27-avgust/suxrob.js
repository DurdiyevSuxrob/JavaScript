const products = [
  { id: 1, name: "Noutbuk", emoji: "💻", price: 4200000 },
  { id: 2, name: "Smartfon", emoji: "📱", price: 2800000 },
  { id: 3, name: "Naushniklar", emoji: "🎧", price: 450000 },
  { id: 4, name: "Soat", emoji: "⌚", price: 890000 },
  { id: 5, name: "Kamera", emoji: "📷", price: 3100000 },
  { id: 6, name: "Planshet", emoji: "📟", price: 2200000 },
];

let cart = {}; 

const productsGrid = document.getElementById("productsGrid");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalPriceEl = document.getElementById("cartTotalPrice");
const cartCounter = document.getElementById("cartCounter");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartModal = document.getElementById("cartModal");

function formatPrice(price) {
  return new Intl.NumberFormat("uz-UZ").format(price) + " so‘m";
}

function getTotalItems() {
  let total = 0;
  for (let id in cart) total += cart[id];
  return total;
}


































