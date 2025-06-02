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
  { text: "Drama overload, chán thật sự", negative: true },
  { text: "Chia sẻ tích cực để cuộc sống nhẹ nhàng", negative: false },
  { text: "Không thể tin nổi chuyện đó!", negative: true },
  { text: "Mọi người hãy bình tĩnh nhé", negative: false }
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
  const comment = getRandomComment();
  const div = document.createElement("div");
  div.classList.add("list-group-item", "comment");
  div.textContent = comment.text;
  div.dataset.negative = comment.negative;
  div.classList.add(comment.negative ? "negative" : "positive");

  if (comment.negative) negativeLeft++;

  div.addEventListener("click", () => {
    if (div.dataset.negative === "true") {
      negativeLeft--;
      div.remove();
      if (negativeLeft === 0 && timeLeft > 0) {
        endGame(true);
      }
    } else {
      // Không xóa comment tích cực, có thể cảnh báo nhẹ hoặc không
      messageEl.textContent = "Đây là bình luận tích cực, đừng xóa nhé!";
      messageEl.style.color = "#198754";
      setTimeout(() => {
        messageEl.textContent = "";
      }, 1500);
    }
  });

  commentsEl.appendChild(div);
  // Giữ tối đa 10 comment
  if (commentsEl.children.length > 10) {
    const first = commentsEl.children[0];
    if (first.dataset.negative === "true") negativeLeft--;
    first.remove();
  }
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
