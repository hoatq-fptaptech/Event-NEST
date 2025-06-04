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
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (birthdate && gender) {
    const year = parseInt(birthdate.split('-')[0]);
    const can = canList[year % 10];
    const chi = chiList[year % 12];
    const menh = menhList[year % 5];
    const cung = (gender === 'male') ? ['Khảm', 'Càn', 'Đoài', 'Cấn', 'Ly', 'Chấn', 'Tốn', 'Khôn'][year % 8] 
                                     : ['Cấn', 'Ly', 'Khảm', 'Khôn', 'Đoài', 'Tốn', 'Càn', 'Chấn'][year % 8];
    /* Challenge 4: Bổ sung thêm các thẻ html vào biến resultHTML để được kết quả như hình ảnh trong Challenge 4*/
    const resultHTML = `<div class="section-title">🐯 Tuổi:</div>
      <p>Tuổi ${can} ${chi} (${year})</p>`;

    document.getElementById('result').innerHTML = resultHTML;
  }
});