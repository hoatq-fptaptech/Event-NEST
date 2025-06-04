
# 🎮 Thử thách Lập trình Game – Level 3 (game5): Ghi tên và bảng xếp hạng

## 🧠 Mục tiêu:
Sau khi chơi xong 7 ngày, người chơi nhập tên của mình. Trò chơi lưu tên và số ngày đã học vào `localStorage`. Hiển thị bảng xếp hạng người chơi có thành tích học tập tốt nhất.

## 📂 Tệp bạn có:
- `game5.html`: Giao diện chưa có form nhập tên hoặc bảng xếp hạng.
- `game5.js`: Logic kết thúc trò chơi chưa xử lý lưu tên/điểm.

## 🔧 Việc cần làm:
1. **Trong hàm `showResult()` của `game5.js`**:
   - Gọi `prompt()` để người chơi nhập tên sau khi hoàn thành 7 ngày.
   - Tính số ngày đã chọn hành động "học".
   - Lưu `{ name, score }` vào `localStorage`.

2. **Hiển thị bảng xếp hạng sau khi lưu**:
   - Lấy danh sách từ `localStorage`, sắp xếp theo điểm giảm dần.
   - Hiển thị top 5 người học nhiều nhất trong `#result`.

## 💡 Gợi ý:
- Dùng `localStorage.getItem("leaderboard")` và `JSON.parse()` để lấy danh sách.
- Dùng `.sort()` để sắp xếp theo điểm (số ngày học).
- Hiển thị bảng xếp hạng trong `#result`:
```html
<h3>🏆 Bảng xếp hạng:</h3>
<ol>
  <li>An - 6 ngày học</li>
  <li>Bình - 5 ngày học</li>
</ol>
```

## ✅ Kết quả mong muốn:
- Sau khi hoàn thành 7 ngày, người chơi nhập tên.
- Tên và số ngày học được lưu và hiển thị cùng bảng xếp hạng.
