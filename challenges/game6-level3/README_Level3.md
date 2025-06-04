
# 🎮 Thử thách Lập trình Game – Level 3 (game6): Ghi tên người chơi và bảng xếp hạng

## 🧠 Mục tiêu:
Sau khi người chơi hoàn thành các câu hỏi, yêu cầu nhập tên, lưu điểm vào `localStorage`, và hiển thị bảng xếp hạng điểm cao nhất.

## 📂 Tệp bạn có:
- `game6.html`: Giao diện chưa có form nhập tên hoặc bảng xếp hạng.
- `game6.js`: Logic đã hoàn chỉnh nhưng chưa có lưu tên và xếp hạng.

## 🔧 Việc cần làm:

1. **Sửa `game6.js`:**
   - Sau khi câu hỏi cuối cùng được trả lời:
     - Dùng `prompt()` để người chơi nhập tên.
     - Lưu `{ name, score }` vào mảng trong `localStorage`.

2. **Hiển thị bảng xếp hạng top 5 người chơi**:
   - Lấy danh sách từ `localStorage`
   - Dùng `.sort()` theo điểm giảm dần
   - Hiển thị trong `#feedback` hoặc tạo một `#leaderboard`

### 🧪 Gợi ý đoạn mã:
```js
let name = prompt("Nhập tên của bạn:");
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
leaderboard.push({ name, score });
leaderboard.sort((a, b) => b.score - a.score);
leaderboard = leaderboard.slice(0, 5);
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
```

3. **Hiển thị bảng xếp hạng ra giao diện**:
```js
let html = "<h3>🏆 Bảng xếp hạng:</h3><ol>";
leaderboard.forEach(p => html += `<li>${p.name} - ${p.score} điểm</li>`);
html += "</ol>";
document.getElementById("feedback").innerHTML += html;
```

## ✅ Kết quả mong muốn:
- Sau khi chơi xong, người chơi nhập tên.
- Điểm và tên được lưu lại.
- Hiển thị bảng xếp hạng người chơi ngay trên giao diện.
