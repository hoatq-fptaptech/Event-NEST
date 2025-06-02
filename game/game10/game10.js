const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const resultEl = document.getElementById('result');

const segments = [
  "Crush đồng ý",
  "Bị block",
  "Được tặng trà sữa",
  "Ế bền vững",
  "Gấu xịn full đồ hiệu",
  "Crush rep 1 tuần/lần",
  "Gấu ảo",
  "Ế xuyên Tết"
];

const segmentCount = segments.length;
const segmentAngle = 360 / segmentCount;

// Tạo 8 segment vòng quay
segments.forEach((text, i) => {
  const seg = document.createElement('div');
  seg.classList.add('wheel-segment');
  seg.style.transform = `rotate(${i * segmentAngle}deg) skewY(-${90 - segmentAngle}deg)`;
  seg.style.backgroundColor = i % 2 === 0 ? '#ffe0b2' : '#fff3e0';
  seg.textContent = text;
  wheel.appendChild(seg);
});

let spinning = false;

spinBtn.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  resultEl.textContent = '';

  // Random vòng quay (3s animation)
  // quay ít nhất 3 vòng + chọn vị trí ngẫu nhiên
  const randomIndex = Math.floor(Math.random() * segmentCount);
  const spins = 3; // số vòng quay
  // Góc dừng = (số vòng * 360) + vị trí segment
  // Góc dừng phải quay theo chiều ngược kim đồng hồ nên trừ đi
  const stopAngle = 360 * spins + (360 - (randomIndex * segmentAngle) - segmentAngle / 2);

  wheel.style.transition = 'transform 3s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${stopAngle}deg)`;

  spinBtn.disabled = true;

  wheel.addEventListener('transitionend', () => {
    spinning = false;
    spinBtn.disabled = false;
    const wonText = segments[randomIndex];
    resultEl.textContent = `Bạn đã trúng: ${wonText}! 🎉`;
  }, { once: true });
});
