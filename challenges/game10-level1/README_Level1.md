
# 🧩 Thử thách Level 1 – Bổ sung giao diện hiển thị kết quả vận mệnh

## 🎯 Mục tiêu:
Bạn cần bổ sung lại phần HTML để hiển thị kết quả dự đoán vận mệnh.

## 📍 Vị trí cần hoàn thiện:
Trong file `game10.html`, bạn sẽ thấy dòng:

```html
<!-- TODO: Viết lại giao diện hiển thị kết quả tại đây (div id="result" class="result") -->
```

Hãy thay thế nó bằng đoạn mã HTML sau:

```html
<div id="result" class="result"></div>
```

## 🧠 Lưu ý:
- Phải đặt đúng `id="result"` vì mã JavaScript sẽ hiển thị kết quả vào đó bằng:
  ```js
  document.getElementById("result").innerHTML = ...
  ```
- Bạn có thể thêm `class="result"` để giữ định dạng CSS như ban đầu.

## ✅ Kết quả mong muốn:
Sau khi điền ngày sinh, giới tính và bấm "Xem Kết Quả", phần kết quả sẽ hiển thị đúng nơi bạn đã thêm `div#result`.

Hình ảnh: ![alt text](<Screenshot 2025-06-05 at 11.01.42.png>)