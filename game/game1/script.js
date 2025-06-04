const choices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

let userScore = 0;
let computerScore = 0;
let history = [];

let highScore = localStorage.getItem('highScore') || 0;
document.getElementById('highScore').textContent = highScore;

document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('userChoice').textContent = choiceEmojis[userChoice];
    document.getElementById('computerChoice').textContent = choiceEmojis[computerChoice];

    const result = getResult(userChoice, computerChoice);
    const resultEl = document.getElementById('result');

    if (result === 'win') {
      resultEl.textContent = 'Kết quả: Bạn thắng!';
      resultEl.className = 'result text-success';
      userScore++;
    } else if (result === 'lose') {
      resultEl.textContent = 'Kết quả: Bạn thua!';
      resultEl.className = 'result text-danger';
      computerScore++;
    } else {
      resultEl.textContent = 'Kết quả: Hòa!';
      resultEl.className = 'result text-secondary';
    }

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;

    // Cập nhật kỷ lục
    if (userScore > highScore) {
      highScore = userScore;
      localStorage.setItem('highScore', highScore);
      document.getElementById('highScore').textContent = highScore;
    }

    // Thêm vào lịch sử
    const historyItem = `Bạn: ${choiceEmojis[userChoice]} - Máy: ${choiceEmojis[computerChoice]} → ${formatResult(result)}`;
    history.unshift(historyItem);
    if (history.length > 5) history.pop();
    renderHistory();
  });
});

function getResult(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function formatResult(result) {
  if (result === 'win') return '✅ Thắng';
  if (result === 'lose') return '❌ Thua';
  return '⚖️ Hòa';
}

function renderHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    list.appendChild(li);
  });
}
