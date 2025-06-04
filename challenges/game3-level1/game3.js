const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

const characters = [
  { name: 'Trend1', color: '#f39c12', score: 1 },
  { name: 'Trend2', color: '#9b59b6', score: 1 },
  { name: 'Xì Trum', color: '#3498db', score: 3 },
  { name: 'Santa', color: '#e74c3c', score: -2 }
];

let score = 0;
let gameTime = 60;
let gameInterval;
let spawnInterval;

function startGame() {
  score = 0;
  gameTime = 60;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = gameTime;
  clearInterval(gameInterval);
  clearInterval(spawnInterval);
  gameInterval = setInterval(() => {
    gameTime--;
    timeDisplay.textContent = gameTime;
    if (gameTime <= 0) {
      clearInterval(gameInterval);
      clearInterval(spawnInterval);
      alert(`Hết giờ! Điểm của bạn là: ${score}`);
    }
  }, 1000);
  spawnCharacters();
}

function spawnCharacters() {
  spawnInterval = setInterval(() => {
    const hole = holes[Math.floor(Math.random() * holes.length)];
    const character = characters[Math.floor(Math.random() * characters.length)];

    const charElem = document.createElement('div');
    charElem.className = 'character show';
    charElem.style.backgroundColor = character.color;
    charElem.innerHTML = `<span>${character.name}</span>`;

    hole.innerHTML = '';
    hole.appendChild(charElem);

    setTimeout(() => {
      charElem.classList.remove('show');
      setTimeout(() => hole.innerHTML = '', 300);
    }, 1000);
  }, 800);
}

startGame();
