const questions = [
    {
      options: [
        "Em là Google à? Vì em có mọi thứ anh cần.",
        "Em có thể cho anh mượn bản đồ không? Anh lạc vào mắt em rồi.",
        "Anh có biết em là ai không? Em là người sẽ bên anh suốt đời.",
        "Nếu em là Wifi thì anh muốn được kết nối cả đời.",
        "Tình yêu em dành cho anh như Excel không có lỗi."
      ],
      weakest: 4
    },
    {
      options: [
        "Anh có biết tại sao anh không cần GPS không? Vì em là điểm đến rồi.",
        "Trái tim em giống như Wi-Fi công cộng, ai cũng có thể vào.",
        "Em là lý do khiến anh thức dậy mỗi sáng.",
        "Trông em như deadline – khiến anh hoảng loạn nhưng vẫn không thể rời mắt.",
        "Em là lý do mà trái tim anh tốn pin."
      ],
      weakest: 1
    },
    {
      options: [
        "Anh muốn trở thành lý do để em mỉm cười mỗi ngày.",
        "Em là bài hát yêu thích của anh.",
        "Tình yêu của em là đèn xanh trong tim anh.",
        "Anh như là nắng, còn em là kem – chảy tan vì anh.",
        "Anh đang FA, nhưng không phải vì ế mà vì chờ em."
      ],
      weakest: 3
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function renderQuestion() {
    const q = questions[current];
    const container = document.getElementById("question-box");
    container.innerHTML = "";
    q.options.forEach((text, idx) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.className = "btn btn-light d-block mx-auto mb-2";
      btn.onclick = () => checkAnswer(idx);
      container.appendChild(btn);
    });
  }
  
  function checkAnswer(choice) {
    const feedback = document.getElementById("feedback");
    if (choice === questions[current].weakest) {
      score++;
      feedback.textContent = "😐 Tụt mood thật sự!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "💘 Bạn đã dính bẫy thính rồi!";
      feedback.style.color = "red";
    }
    document.getElementById("score").textContent = `Điểm: ${score}`;
  }
  
  function nextQuestion() {
    if (current < questions.length - 1) {
      current++;
      renderQuestion();
      document.getElementById("feedback").textContent = "";
    } else {
      alert(`Hoàn thành! Bạn là thợ săn thính cấp ${score >= 3 ? 'S' : score >= 2 ? 'A' : 'B'}!`);
    }
  }
  
  function shareResult() {
    const text = `Tôi là thợ săn thính cấp ${score >= 3 ? 'S' : score >= 2 ? 'A' : 'B'} với ${score} điểm! #NgonTinhHunter`;
    navigator.clipboard.writeText(text);
    alert("Đã sao chép kết quả để chia sẻ!");
  }
  
  renderQuestion();
  