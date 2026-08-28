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


function getTotalPrice() {
  let total = 0;
  for (let id in cart) {
    const product = products.find((p) => p.id === Number(id));
    if (product) total += product.price * cart[id];
  }
  return total;
}

function renderProducts() {
  productsGrid.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <div class="product-emoji">${product.emoji}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <button class="add-to-cart-btn" data-id="${product.id}">
                <i class="fas fa-plus-circle"></i> Savatga
            </button>
        `;
    productsGrid.appendChild(card);
  });

  // Savatga qo'shish tugmalariga event
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(Number(btn.dataset.id));
    });
  });
}


































