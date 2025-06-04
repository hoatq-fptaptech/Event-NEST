const commentsEl = document.getElementById("comments");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message");

const commentsPool = [
  { text: "Trà xanh làm gì cũng bị soi", negative: true },
  { text: "Chia tay văn minh không drama", negative: false },
  { text: "Ăn chặn từ thiện là không thể chấp nhận", negative: true },
  { text: "Bạn rất tuyệt vời!", negative: false },
  { text: "Những bình luận này gây đỏ mắt quá", negative: true },
  { text: "Cố lên, mọi chuyện sẽ tốt hơn!", negative: false },
  // TODO: Thêm 4 bình luận tích cực/tiêu cực vào đây để đa dạng nội dung
];

let gameDuration = 10; // seconds
let intervalId = null;
let timerId = null;
let timeLeft = gameDuration;
let negativeLeft = 0;

function getRandomComment() {
  return commentsPool[Math.floor(Math.random() * commentsPool.length)];
}

function addComment() {
  
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    endGame(false);
  }
}

function startGame() {
  startBtn.disabled = true;
  timeLeft = gameDuration;
  negativeLeft = 0;
  timerEl.textContent = timeLeft;
  commentsEl.innerHTML = "";
  messageEl.textContent = "";

  // Khởi tạo comment ban đầu
  for (let i = 0; i < 5; i++) {
    addComment();
  }

  intervalId = setInterval(addComment, 1500);
  timerId = setInterval(updateTimer, 1000);
}

function endGame(win) {
  clearInterval(intervalId);
  clearInterval(timerId);
  startBtn.disabled = false;
  if (win) {
    messageEl.textContent = "Chúc mừng! Bạn đã xóa hết bình luận tiêu cực. Không bị đỏ mắt 🎉";
    messageEl.style.color = "#198754";
  } else {
    messageEl.textContent = "Drama overload! Bạn đã để sót bình luận tiêu cực 😵‍💫";
    messageEl.style.color = "#dc3545";
  }
}

startBtn.addEventListener("click", startGame);