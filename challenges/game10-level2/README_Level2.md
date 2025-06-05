
# 🧠 Thử thách Level 2 – Hoàn thiện xử lý kết quả dự đoán

## 🎯 Mục tiêu:
Bạn cần viết lại phần **hiển thị kết quả** vào giao diện khi người dùng bấm "Xem Kết Quả".

## 📍 Vị trí cần bổ sung:
Trong file `game10.js`, bạn sẽ thấy dòng:

```js
// TODO: Viết đoạn hiển thị kết quả vào thẻ #result tại đây
```

Hãy hoàn thiện đoạn này bằng cách sử dụng:
```js
document.getElementById('result').innerHTML = "Kết quả của bạn là...";
```

## ✅ Gợi ý:
- Bạn có thể sử dụng `birthdate`, `gender`, `message` đã được xử lý ở phía trên.
- Kết quả phải hiển thị vào thẻ `div` có `id="result"`.

## 🧠 Ví dụ mẫu:
```js
document.getElementById('result').innerHTML = "<h2>Kết quả:</h2>" + message;
```
