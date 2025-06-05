// Dữ liệu mẫu
const canList = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
const chiList = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
const menhList = ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'];
const huongHop = {
  'Kim': 'Tây, Tây Bắc',
  'Mộc': 'Đông, Đông Nam',
  'Thủy': 'Bắc',
  'Hỏa': 'Nam',
  'Thổ': 'Đông Bắc, Tây Nam'
};
const mauHop = {
  'Kim': 'Trắng, Xám, Ghi',
  'Mộc': 'Xanh Lá',
  'Thủy': 'Xanh Dương, Đen',
  'Hỏa': 'Đỏ, Cam, Hồng, Tím',
  'Thổ': 'Vàng, Nâu'
};
const tuoiHopLamAn = ['Tý', 'Thìn', 'Thân', 'Dậu'];
const tuoiHopTinhDuyen = ['Ngọ', 'Dần', 'Tuất', 'Hợi'];
const ngayTot = ['Mùng 1', 'Mùng 6', 'Mùng 11', 'Mùng 16', '21', '26'];

document.getElementById('fortuneForm').addEventListener('submit', function(e) {
  e.preventDefault();
 // TODO: Lấy giá trị từ các trường nhập liệu

  if (birthdate && gender) {
    const year = parseInt(birthdate.split('-')[0]);
    const can = canList[year % 10];
    const chi = chiList[year % 12];
    const menh = menhList[year % 5];
    const cung = (gender === 'male') ? ['Khảm', 'Càn', 'Đoài', 'Cấn', 'Ly', 'Chấn', 'Tốn', 'Khôn'][year % 8] 
                                     : ['Cấn', 'Ly', 'Khảm', 'Khôn', 'Đoài', 'Tốn', 'Càn', 'Chấn'][year % 8];

    const resultHTML = `
      <div class="section-title">🐯 Tuổi:</div>
      <p>Tuổi ${can} ${chi} (${year})</p>

      <div class="section-title">🎨 Mệnh Ngũ Hành:</div>
      <p>Thuộc mệnh <strong>${menh}</strong> - màu sắc hợp: <strong>${mauHop[menh]}</strong>.</p>

      <div class="section-title">🧿 Cung Mệnh:</div>
      <p>Cung <strong>${cung}</strong> - hợp hướng: <strong>${huongHop[menh]}</strong>.</p>

      <div class="section-title">🏠 Hướng Tốt - Hướng Xấu:</div>
      <p>Hướng tốt: ${huongHop[menh]}.<br>Hướng xấu: ngược lại với hướng tốt.</p>

      <div class="section-title">❤️ Tuổi Hợp:</div>
      <p>Hợp làm ăn: ${tuoiHopLamAn.join(', ')}.<br>Hợp tình duyên: ${tuoiHopTinhDuyen.join(', ')}.</p>

      <div class="section-title">🚀 Ngày Tốt Xuất Hành:</div>
      <p>Nên chọn các ngày âm lịch: ${ngayTot.join(', ')} để khởi sự việc lớn, cầu tài, cầu duyên.</p>

      <div class="section-title">✨ Tổng Kết Lời Khuyên:</div>
      <p>Vận trình năm nay khá hanh thông, bạn nên tận dụng cơ hội vào những tháng tốt. 
      Chăm chỉ, kiên nhẫn và quyết đoán sẽ giúp bạn gặt hái thành công lớn. 
      Tình duyên cũng khởi sắc nếu bạn chủ động mở lòng và chia sẻ nhiều hơn!</p>
    `;

    // TODO: Viết đoạn hiển thị kết quả vào thẻ #result tại đây
  }
});