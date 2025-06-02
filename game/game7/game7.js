const trends = [
    {
      phrase: "Đi đường quyền",
      options: [
        "Câu nói khiêu khích trong game",
        "Câu nói hài chế từ giới boxing",
        "Trend bắt nguồn từ màn múa võ hài hước của Lê Bống",
        "Lời bài hát của một rapper nổi tiếng"
      ],
      correct: 2
    },
    {
      phrase: "Ô mai gót",
      options: [
        "Biến thể hài hước của 'Oh my God'",
        "Thương hiệu ô mai nổi tiếng",
        "Tên nhân vật TikTok giả tưởng",
        "Câu thoại trong phim Hàn Quốc"
      ],
      correct: 0
    },
    {
      phrase: "Một ly trà sữa ít đá nhiều topping",
      options: [
        "Đơn hàng hot trên TikTok",
        "Câu mở đầu trend hóa đơn khổng lồ",
        "Trend về sự cầu kỳ của Gen Z",
        "Tựa đề video mukbang nổi tiếng"
      ],
      correct: 1
    },
    {
      phrase: "Quẩy banh nóc nhà",
      options: [
        "Bài hát sôi động dùng nhiều trên TikTok",
        "Câu cảm thán khi tiệc quá sung",
        "Tên trò chơi mobile",
        "Thương hiệu loa kéo nổi tiếng"
      ],
      correct: 1
    },
    {
      phrase: "Chào em anh đứng đây từ chiều",
      options: [
        "Câu tỏ tình trong game",
        "Trend từ clip đứng đợi người yêu",
        "Lời bài hát thất tình",
        "Thành ngữ cổ của người miền Tây"
      ],
      correct: 1
    },
    {
      phrase: "Thao túng tâm lý",
      options: [
        "Tiêu đề sách",
        "Trend nói về toxic relationship",
        "Thuật ngữ học thuật",
        "Tên nhạc phim Hàn"
      ],
      correct: 1
    },
    {
      phrase: "Ủa alo?",
      options: [
        "Câu nói viral khi ai đó vô lý",
        "Câu mở đầu livestream",
        "Trend của streamer",
        "Câu cảm thán khi trúng thưởng"
      ],
      correct: 0
    },
    {
      phrase: "Thích thì chiều",
      options: [
        "Câu nói chế ngôn tình",
        "Tên nhạc remix",
        "Câu đùa phổ biến từ TikTok Trung",
        "Meme về chiều cao"
      ],
      correct: 0
    },
    {
      phrase: "Ủa chứ sao không?",
      options: [
        "Biểu hiện tự tin của Gen Z",
        "Câu nói khi bị phản bác",
        "Tên show truyền hình",
        "Trend TikTok gốc Hàn"
      ],
      correct: 0
    },
    {
      phrase: "Deadline là ánh sáng cuối con đường",
      options: [
        "Trend trong hội sinh viên",
        "Lời trong bài nhạc chế",
        "Câu viral khi học online",
        "Châm ngôn lập trình viên"
      ],
      correct: 0
    }
  ];
  
  let current = 0;
  let score = 0;
  
  function renderQuestion() {
    const trend = trends[current];
    document.getElementById("trend-box").innerHTML = `<h3>${trend.phrase}</h3>`;
    const optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";
    trend.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-primary d-block mx-auto my-2";
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(idx);
      optionsBox.appendChild(btn);
    });
  }
  
  function checkAnswer(idx) {
    const trend = trends[current];
    const feedback = document.getElementById("feedback");
    if (idx === trend.correct) {
      score++;
      feedback.textContent = "✅ Chính xác! +1 Trend Point";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Sai rồi! Đó không phải nguồn gốc trend.";
      feedback.style.color = "red";
    }
  
    document.getElementById("score").textContent = `Trend Points: ${score}`;
    current++;
    document.getElementById("question-count").textContent = `Câu: ${Math.min(current + 1, trends.length)}/10`;
  
    if (current < trends.length) {
      setTimeout(() => {
        feedback.textContent = "";
        renderQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        alert(`Bạn đạt cấp độ: ${score >= 8 ? "🎉 Master Bắt Trend 🎉" : score >= 5 ? "Bắt trend ổn áp!" : "Bạn cần cập nhật thêm đó!"}`);
      }, 500);
    }
  }
  
  renderQuestion();
  