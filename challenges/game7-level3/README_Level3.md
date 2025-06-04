
# 🎮 Thử thách Lập trình Game – Level 3 (game7): Ghi tên người chơi và hiển thị bảng xếp hạng

## 🧠 Mục tiêu:
Sau khi người chơi hoàn thành các câu hỏi về trend TikTok, yêu cầu người chơi nhập tên, lưu điểm và hiển thị bảng xếp hạng trên trình duyệt.

## 📂 Tệp bạn có:
- `game7.js`: Logic trò chơi đã hoàn chỉnh nhưng chưa có tính năng lưu tên và điểm.
- `game7.html`, `game7.css`: Giao diện chưa có phần bảng xếp hạng.

## 🔧 Việc cần làm:

1. **Sau khi người chơi hoàn thành game (câu hỏi cuối):**
   - Dùng `prompt()` để nhập tên người chơi.
   - Tạo một mảng `leaderboard` trong `localStorage` để lưu thông tin điểm.
   - Thêm `{ name, score }` vào mảng, sắp xếp theo điểm giảm dần và giới hạn 5 người.

2. **Hiển thị bảng xếp hạng:**
   - Tạo 1 thẻ mới trong HTML (hoặc dùng `#feedback`)
   - Hiển thị bảng xếp hạng tên và điểm bằng `innerHTML`

### 🧪 Gợi ý đoạn mã:
```js
let name = prompt("Nhập tên bạn:");
let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
leaderboard.push({ name, score });
leaderboard.sort((a, b) => b.score - a.score);
leaderboard = leaderboard.slice(0, 5);
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
```

```js
let html = "<h3>🏆 Bảng xếp hạng:</h3><ol>";
leaderboard.forEach(p => html += `<li>${p.name} - ${p.score} điểm</li>`);
html += "</ol>";
document.getElementById("feedback").innerHTML += html;
```

## ✅ Kết quả mong muốn:
- Sau khi chơi xong, người chơi nhập tên.
- Tên và điểm được lưu vào localStorage.
- Hiển thị bảng xếp hạng top 5 người chơi ngay trên giao diện.
