
# 🎮 Thử thách Lập trình Game – Level 3: Ghi tên và bảng xếp hạng

## 🧠 Mục tiêu:
Bổ sung tính năng ghi điểm và hiển thị bảng xếp hạng sau khi hết thời gian chơi.

## 📂 Tệp bạn có:
- `game3.html`: Giao diện chưa có form nhập tên người chơi hoặc bảng xếp hạng.
- `game3.css`: Định dạng giao diện.
- `game3.js`: Logic game đầy đủ, **chưa có tính năng lưu tên và điểm**.

## 🔧 Việc cần làm:

1. **Thêm giao diện nhập tên và bảng xếp hạng vào `game3.html`:**
   - Sau khi hết giờ, yêu cầu người chơi nhập tên.
   - Hiển thị danh sách top 10 người chơi có điểm cao nhất bên dưới.

2. **Cập nhật `game3.js` như sau:**
   - Khi hết giờ, hiển thị form nhập tên.
   - Sau khi người chơi nhập tên, lưu thông tin vào `localStorage` dưới dạng danh sách các đối tượng `{name, score}`.
   - Hiển thị danh sách top 10 người chơi điểm cao nhất (theo thứ tự giảm dần điểm).

## 💡 Gợi ý:
- Sử dụng `prompt()` hoặc tạo `<input>` trong HTML để nhập tên.
- Dùng `localStorage.getItem()` và `setItem()` để lưu danh sách điểm.
- Dùng `JSON.parse()` và `JSON.stringify()` để làm việc với mảng lưu trữ.

### 🧪 Ví dụ kết quả:
```html
🏆 Bảng xếp hạng:
1. Nam - 120 điểm
2. Hoa - 95 điểm
3. Bình - 87 điểm
...
```

## ✅ Kết quả mong muốn:
- Khi hết giờ: nhập tên, lưu điểm.
- Bảng xếp hạng hiển thị top 10 người chơi có điểm cao nhất từ localStorage.

👉 Bạn có thể mở rộng để cho người chơi chơi lại, hoặc reset bảng xếp hạng nếu thích.
