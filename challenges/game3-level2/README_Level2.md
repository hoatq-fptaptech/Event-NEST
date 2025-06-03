
# 🎮 Thử thách Lập trình Game – Level 2: Viết lại xử lý sự kiện

## 🧠 Mục tiêu:
Viết lại đoạn xử lý khi người chơi nhấn vào nhân vật trong trò chơi.

## 📂 Tệp bạn có:
- `game3.html`: Giao diện đầy đủ.
- `game3.css`: Có sẵn định dạng.
- `game3.js`: Đoạn xử lý sự kiện click đã bị xoá (thay bằng dòng `// TODO`).

## 🔧 Việc cần làm:
1. Mở file `game3.js`.
2. Tìm dòng comment: `// TODO: Viết đoạn xử lý khi người chơi nhấn vào nhân vật tại đây.`
3. Viết lại đoạn mã như sau:
   ```js
   charElem.onclick = () => {
   };
   ```

## 💡 Gợi ý:
- Mỗi nhân vật được tạo trong thẻ `.hole` là một thẻ `div`.
- Khi click vào nhân vật, bạn cần tăng điểm, cập nhật `#score`, và loại bỏ nhân vật khỏi giao diện.

## ✅ Kết quả mong muốn:
- Khi click đúng vào nhân vật: điểm tăng lên, nhân vật biến mất.
