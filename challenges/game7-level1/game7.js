const trends = [
    {
      phrase: "Đi đường quyền",
      options: [
        "Câu nói khiêu khích trong game",
        "Câu nói hài chế từ giới boxing",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 2
    },
    {
      phrase: "Ô mai gót",
      options: [
        "Biến thể hài hước của 'Oh my God'",
        "Thương hiệu ô mai nổi tiếng",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 0
    },
    {
      phrase: "Một ly trà sữa ít đá nhiều topping",
      options: [
        "Đơn hàng hot trên TikTok",
        "Câu mở đầu trend hóa đơn khổng lồ",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 1
    },
    {
      phrase: "Quẩy banh nóc nhà",
      options: [
        "Bài hát sôi động dùng nhiều trên TikTok",
        "Câu cảm thán khi tiệc quá sung",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 1
    },
    {
      phrase: "Chào em anh đứng đây từ chiều",
      options: [
        "Câu tỏ tình trong game",
        "Trend từ clip đứng đợi người yêu",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 1
    },
    {
      phrase: "Thao túng tâm lý",
      options: [
        "Tiêu đề sách",
        "Trend nói về toxic relationship",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 1
    },
    {
      phrase: "Ủa alo?",
      options: [
        "Câu nói viral khi ai đó vô lý",
        "Câu mở đầu livestream",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 0
    },
    {
      phrase: "Thích thì chiều",
      options: [
        "Câu nói chế ngôn tình",
        "Tên nhạc remix",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 0
    },
    {
      phrase: "Ủa chứ sao không?",
      options: [
        "Biểu hiện tự tin của Gen Z",
        "Câu nói khi bị phản bác",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
      ],
      correct: 0
    },
    {
      phrase: "Deadline là ánh sáng cuối con đường",
      options: [
        "Trend trong hội sinh viên",
        "Lời trong bài nhạc chế",
        // TODO: Thêm 2 lựa chọn còn thiếu tại đây
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
    
  }
  
  renderQuestion();
  