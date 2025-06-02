const questions = [
    {
      type: 'image',
      content: 'https://i.imgur.com/AfFp7pu.jpg',
      options: ['Sơn Tùng M-TP', 'MONO', 'Binz', 'Erik'],
      answer: 'Sơn Tùng M-TP'
    },
    {
      type: 'lyrics',
      content: '"making my way to you..."',
      options: ['MONO', 'AMEE', 'Min', 'Sơn Tùng M-TP'],
      answer: 'Sơn Tùng M-TP'
    },
    {
      type: 'image',
      content: 'https://i.imgur.com/ZKkQ20P.jpg',
      options: ['BLACKPINK', 'TWICE', 'NewJeans', 'IVE'],
      answer: 'NewJeans'
    },
    {
      type: 'lyrics',
      content: '"Em không nghe phone là em đang chill..."',
      options: ['Chi Pu', 'Hoàng Thùy Linh', 'AMEE', 'ERIK'],
      answer: 'AMEE'
    },
    {
      type: 'image',
      content: 'https://i.imgur.com/1OeXv54.jpg',
      options: ['MONO', 'Kay Trần', 'Sơn Tùng M-TP', 'Noo Phước Thịnh'],
      answer: 'MONO'
    },
    {
      type: 'bonus',
      content: 'Idol này từng bị dính phốt đạo nhạc?',
      options: ['Sơn Tùng M-TP', 'MONO', 'B Ray', 'Jack'],
      answer: 'Jack'
    }
  ];
  
  let current = 0;
  let correctStreak = 0;
  let timeLeft = 15;
  let timer;
  
  function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById('timer').textContent = `${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }
  
  function renderQuestion() {
    const q = questions[current];
    const qBox = document.getElementById('questionContent');
    const optBox = document.getElementById('options');
    qBox.innerHTML = '';
    optBox.innerHTML = '';
  
    if (q.type === 'image') {
      qBox.innerHTML = `<img src="${q.content}" class="quiz-img mb-3" alt="question image">`;
    } else {
      qBox.innerHTML = `<p class="question">${q.content}</p>`;
    }
  
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-light col-6 mb-2';
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optBox.appendChild(btn);
    });
  
    document.getElementById('quizBox').classList.toggle('bonus', q.type === 'bonus');
    startTimer();
  }
  
  function checkAnswer(answer) {
    clearInterval(timer);
    const q = questions[current];
    if (answer === q.answer) {
      correctStreak++;
      if (correctStreak === 5 && questions[current+1]?.type === 'bonus') {
        current++;
      }
    } else {
      correctStreak = 0;
    }
    nextQuestion();
  }
  
  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      document.getElementById('quizBox').style.display = 'none';
      document.getElementById('resultBox').innerHTML = `<h2>Hoàn thành! Bạn đã trả lời đúng ${correctStreak} câu liên tiếp!</h2>`;
    } else {
      renderQuestion();
    }
  }
  
  renderQuestion();
  