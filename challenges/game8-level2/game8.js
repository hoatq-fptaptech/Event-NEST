const budget = 200000;
let currentTotal = 0;
const cart = [];

const items = [
  { name: "Thịt heo", price: 45000 },
  { name: "Cá hồi", price: 85000 },
  { name: "Rau cải", price: 15000 },
  { name: "Trứng gà", price: 30000 },
  { name: "Bánh mì", price: 12000 },
  { name: "Sữa tươi", price: 25000 },
  { name: "Táo đỏ", price: 20000 },
  { name: "Gạo", price: 35000 }
];

const itemsContainer = document.getElementById("items");
const cartList = document.getElementById("cart-list");
const totalDisplay = document.getElementById("total");
const message = document.getElementById("message");
const budgetDisplay = document.getElementById("budget");
const resetBtn = document.getElementById("reset-btn");

budgetDisplay.textContent = budget.toLocaleString("vi-VN") + "đ";

function renderItems() {
  itemsContainer.innerHTML = "";
  items.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 mb-3";
    col.innerHTML = `
      <div class="item-card border bg-white p-3 shadow-sm" data-index="${index}">
        <h5>${item.name}</h5>
        <p class="text-success">${item.price.toLocaleString("vi-VN")}đ</p>
      </div>`;
    itemsContainer.appendChild(col);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, idx) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = item.name;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = item.price.toLocaleString("vi-VN") + "đ";
    li.appendChild(priceSpan);
    cartList.appendChild(li);
  });
  totalDisplay.textContent = currentTotal.toLocaleString("vi-VN") + "đ";
}

function addItem(index) {
  // TODO: Viết lại logic thêm mặt hàng vào giỏ và cập nhật tổng tiền

}

itemsContainer.addEventListener("click", e => {
  const card = e.target.closest(".item-card");
  if (!card) return;
  const index = card.getAttribute("data-index");
  addItem(parseInt(index));
});

resetBtn.addEventListener("click", () => {
  cart.length = 0;
  currentTotal = 0;
  message.textContent = "";
  renderCart();
});

renderItems();
renderCart();
