
# 🧠 Thử thách Level 3 – Thống kê lựa chọn của người chơi

## Mục tiêu:
Viết thêm tính năng thống kê người chơi đã chọn:
- ✊ Rock bao nhiêu lần
- ✋ Paper bao nhiêu lần
- ✌️ Scissors bao nhiêu lần

## Việc cần làm:
1. Ghi nhận lựa chọn người chơi mỗi lần bấm nút
2. Cập nhật số lần chọn tương ứng
3. Hiển thị thông tin trong phần tử có id="stats"

## Gợi ý:
```js
let countRock = 0;
let countPaper = 0;
let countScissors = 0;

// Khi người chơi chọn:
if (choice === "rock") countRock++;
// ...

// Hiển thị:
document.getElementById("stats").textContent =
  `✊ Rock: ${countRock} | ✋ Paper: ${countPaper} | ✌️ Scissors: ${countScissors}`;
```

