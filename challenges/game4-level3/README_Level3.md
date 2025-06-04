
# 🎮 Thử thách Lập trình Game – Level 3 (game4): Ghi tên và hiển thị bảng xếp hạng

## 🧠 Mục tiêu:
Sau khi kết thúc trò chơi, người chơi sẽ được nhập tên. Trò chơi lưu tên và điểm của người chơi vào `localStorage`, và hiển thị bảng xếp hạng 10 người có điểm cao nhất.

## 📂 Tệp bạn có:
- `game4.html`: Chưa có form nhập tên hay bảng xếp hạng.
- `game4.css`: Định dạng sẵn sàng để bạn mở rộng.
- `game4.js`: Logic kết thúc trò chơi chưa xử lý nhập tên và lưu điểm.

## 🔧 Việc cần làm:
1. **Thêm giao diện nhập tên vào `game4.html`**:
   - Có thể dùng `prompt()` hoặc tạo một thẻ `<input>` và nút `<button>`.

2. **Sửa trong `game4.js`:**
   - Trong hàm `endGame()`, sau khi kết thúc trò chơi, yêu cầu người chơi nhập tên.
   - Lưu `{ name, score }` vào `localStorage` (danh sách).
   - Hiển thị bảng xếp hạng top 10 người chơi có điểm cao nhất.

## 💡 Gợi ý:
- Dùng `localStorage.getItem("leaderboard")` để lấy danh sách điểm hiện có.
- Dùng `JSON.parse()` và `JSON.stringify()` để làm việc với mảng dữ liệu.
- Dùng `.sort()` và `.slice(0, 10)` để lấy top 10.

### 📋 Ví dụ kết quả mong muốn:
```text
🏆 Bảng xếp hạng:
1. An - 120 điểm
2. Bình - 105 điểm
...
```

## ✅ Kết quả mong muốn:
- Sau khi chơi xong, nhập tên người chơi.
- Điểm và tên được lưu trữ lại.
- Hiển thị bảng xếp hạng ngay trong giao diện game hoặc qua alert.
