
# 🚀 Level 3 – Mở rộng tính năng: So sánh 2 người

## 🎯 Mục tiêu:
Sinh viên cần bổ sung tính năng so sánh mệnh giữa 2 người để xem họ có hợp nhau không.

## 🔧 Cách thực hiện:

### 1. Giao diện:
- Thêm form nhập cho **người thứ 2** gồm:
  - Ngày sinh
  - Giới tính

### 2. Xử lý logic:
- Viết thêm JavaScript xử lý:
  - Phân tích thông tin của cả hai người.
  - So sánh cung mệnh, giới tính, năm sinh, hoặc các yếu tố như:
    - Cung phi bát trạch
    - Ngũ hành tương sinh – tương khắc
- Đưa ra đánh giá:
  - Hợp nhau / Khắc nhau
  - Lời khuyên nếu không hợp

### 3. Gợi ý đoạn code:
Bạn có thể thêm vào trong `submit` form:
```js
let birthdate2 = document.getElementById("birthdate2").value;
let gender2 = document.querySelector('input[name="gender2"]:checked').value;
// Sau đó xử lý và so sánh với birthdate + gender ban đầu
```

### ✅ Ví dụ hiển thị:
```html
<div id="compareResult">
  <h3>So sánh 2 người:</h3>
  <p>Người A mệnh Thủy, Người B mệnh Mộc → Hợp nhau (Thủy sinh Mộc)</p>
</div>
```

## 📝 Lưu ý:
- Giữ nguyên logic cũ
- Mở rộng thêm phần phân tích & so sánh
- Giao diện rõ ràng, dễ nhìn

