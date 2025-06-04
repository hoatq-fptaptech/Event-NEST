
# 🛡️ Thử thách Level 3 – Giới hạn lượt quay mỗi người chơi

## 🎯 Mục tiêu:
Chặn người chơi quay nhiều lần bằng cách kiểm tra tên.

## Yêu cầu:
1. Khi người chơi nhập tên và bấm nút quay:
   - Nếu tên đã xuất hiện trong danh sách người trúng → hiển thị thông báo
   - Ngược lại → cho phép quay

2. Đoạn kiểm tra cần thêm vào đầu hàm `spin()`:
```js
let playerName = document.getElementById("playerNameInput").value.trim();
if (winnerList.some(w => w.name === playerName)) {
  alert("Người chơi này đã quay rồi!");
  return;
}
```

## ✅ Kết quả mong muốn:
Một người chỉ được quay duy nhất 1 lần.
