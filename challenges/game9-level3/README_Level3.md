
# 👁️‍🗨️ Thử thách Lập trình Game – Level 3 (game9): Gợi ý tích cực khi kết thúc game

## 🧠 Mục tiêu:
Khi người chơi kết thúc game mà còn nhiều bình luận tiêu cực chưa được xoá, hãy hiển thị một số **lời khuyên tích cực** để nâng cao tinh thần.

## 📂 Tệp bạn có:
- `game9.js`: Toàn bộ game đầy đủ, chưa có tính năng gợi ý lời khuyên.
- `game9.html`, `game9.css`: Giao diện đã đầy đủ.

## 🔧 Việc cần làm:
1. Mở file `game9.js`
2. Tìm hàm `endGame(success)` – hàm này chạy khi người chơi thắng hoặc hết thời gian
3. Viết thêm đoạn code kiểm tra nếu `success == false`, hiển thị lời khuyên tích cực vào `#message`.

### 💡 Gợi ý:
```js
const advices = [
    "🌟 Hãy học cách buông bỏ những điều tiêu cực.",
    "🌈 Tích cực không phải là giả vờ, mà là lựa chọn nhìn nhận vấn đề khác đi.",
    "💪 Mỗi ngày đều là cơ hội mới để bắt đầu lại.",
    "😊 Chia sẻ với người thân có thể giúp bạn nhẹ lòng hơn."
  ];
```

## ✅ Kết quả mong muốn:
- Nếu người chơi không xoá hết bình luận tiêu cực (thua game)
- Một lời khuyên tích cực ngẫu nhiên sẽ hiện ra để động viên họ

🎯 Điều này giúp trò chơi mang ý nghĩa giáo dục và nâng cao nhận thức tích cực trong đời sống số.
