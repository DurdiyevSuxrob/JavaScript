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

function addToCart(productId) {
  cart[productId] = cart[productId] ? cart[productId] + 1 : 1;
  updateCartUI();
}

function updateItemQuantity(productId, delta) {
  if (!cart[productId]) return;
  const newQty = cart[productId] + delta;
  if (newQty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = newQty;
  }
  updateCartUI();
}

function removeItem(productId) {
  delete cart[productId];
  updateCartUI();
}



function updateCartUI() {
  const items = Object.keys(cart);
  cartItemsContainer.innerHTML = "";

  if (items.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-box-open"></i>
                <p>Savat hozircha bo'sh</p>
            </div>
        `;
  } else {
    items.forEach((id) => {
      const product = products.find((p) => p.id === Number(id));
      if (!product) return;
      const qty = cart[id];

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${product.emoji} ${product.name}</span>
                    <span class="cart-item-price">${formatPrice(product.price)}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn dec-btn" data-id="${product.id}">−</button>
                    <span class="item-qty">${qty}</span>
                    <button class="qty-btn inc-btn" data-id="${product.id}">+</button>
                    <button class="qty-btn remove-item" data-id="${product.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
      cartItemsContainer.appendChild(itemDiv);
    });

    // Eventlar: +, -, o'chirish
    document.querySelectorAll(".inc-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateItemQuantity(Number(btn.dataset.id), 1),
      );
    });
    document.querySelectorAll(".dec-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateItemQuantity(Number(btn.dataset.id), -1),
      );
    });
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => removeItem(Number(btn.dataset.id)));
    });
  }

  // Jami summa va badge
  cartTotalPriceEl.textContent = formatPrice(getTotalPrice());
  cartCounter.textContent = getTotalItems();
}




































