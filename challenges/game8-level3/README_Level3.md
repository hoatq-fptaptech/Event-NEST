
# 🛒 Thử thách Lập trình Game – Level 3 (game8): Lưu giỏ hàng và tên người chơi

## 🧠 Mục tiêu:
Khi người chơi hoàn tất việc đi chợ (vượt ngân sách hoặc bấm nút reset), yêu cầu họ nhập tên, lưu giỏ hàng và tổng tiền vào `localStorage`, đồng thời hiển thị bảng mua sắm của các người chơi khác.

## 📂 Tệp bạn có:
- `game8.js`: Code game đã đầy đủ nhưng chưa có chức năng lưu thông tin người chơi.
- `game8.html`, `game8.css`: Giao diện đầy đủ.

## 🔧 Việc cần làm:
1. Sau khi tổng tiền đã đạt giới hạn hoặc người dùng nhấn **Reset**, thực hiện:
   - Dùng `prompt()` để yêu cầu nhập tên.
   - Lưu `{ name, cart, total }` vào `localStorage` dưới key `purchases`.
   - Hiển thị bảng gồm top 5 người đã mua nhiều nhất.

### 💡 Gợi ý mã:
```js
let name = prompt("Nhập tên bạn:");
let history = JSON.parse(localStorage.getItem("purchases") || "[]");
history.push({ name, cart: cartList.innerHTML, total });
history.sort((a, b) => b.total - a.total);
history = history.slice(0, 5);
localStorage.setItem("purchases", JSON.stringify(history));

// hiển thị bảng
let html = "<h3>🧾 Bảng mua sắm:</h3><ol>";
history.forEach(p => html += `<li>${p.name} – ${p.total}đ</li>`);
html += "</ol>";
messageBox.innerHTML += html;
```

## ✅ Kết quả mong muốn:
- Người chơi nhập tên khi chơi xong
- Dữ liệu được lưu vào `localStorage`
- Hiển thị danh sách người chơi có tổng tiền mua cao nhất
