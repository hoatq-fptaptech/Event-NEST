const gameArea = document.getElementById('game-area');
const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score');

let playerX = 180;
let score = 0;
let gameInterval;
let spawnInterval;
let isGameOver = false;

// Điều khiển xe máy
document.addEventListener('keydown', (e) => {
  if (isGameOver) return;
  if (e.key === 'ArrowLeft' && playerX > 0) {
    playerX -= 20;
  } else if (e.key === 'ArrowRight' && playerX < 360) {
    playerX += 20;
  }
  player.style.left = playerX + 'px';
});

// Tạo chướng ngại vật
function spawnObstacle() {
  const obs = document.createElement('div');
  obs.classList.add('obstacle');
  obs.style.left = Math.floor(Math.random() * 10) * 40 + 'px';
  gameArea.appendChild(obs);

  let obsY = -60;
  const fall = setInterval(() => {
    if (isGameOver) {
      clearInterval(fall);
      obs.remove();
      return;
    }

    obsY += 5;
    obs.style.top = obsY + 'px';

    if (obsY > 600) {
      clearInterval(fall);
      obs.remove();
      return;
    }

    // Va chạm
    const obsX = parseInt(obs.style.left);
    if (
      obsY + 60 > 520 &&
      obsX < playerX + 40 &&
      obsX + 40 > playerX
    ) {
      endGame();
    }
  }, 20);
}

// Bắt đầu game
function startGame() {
  score = 0;
  isGameOver = false;
  playerX = 180;
  player.style.left = playerX + 'px';
  scoreDisplay.textContent = 'Điểm: 0';

  gameInterval = setInterval(() => {
    score++;
    scoreDisplay.textContent = 'Điểm: ' + score;
  }, 200);

  spawnInterval = setInterval(spawnObstacle, 1000);
}

// Kết thúc
function endGame() {
  isGameOver = true;
  clearInterval(gameInterval);
  clearInterval(spawnInterval);
  alert(`Bạn đã va chạm! Tổng điểm: ${score}`);
}

startGame();
