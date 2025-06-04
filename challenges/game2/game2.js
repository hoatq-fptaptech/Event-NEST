let rewards = [];
  let segments = [];
  let theWheel;
  let winnerList = [];

  function addReward() {
    const name = document.getElementById("rewardName").value.trim();
    const qty = parseInt(document.getElementById("rewardQty").value);
    if (!name || qty < 1) return alert("Vui lòng nhập phần thưởng hợp lệ.");

    const existing = rewards.find(r => r.name === name);
    if (existing) {
      existing.qty += qty;
    } else {
      rewards.push({ name, qty });
    }

    document.getElementById("rewardName").value = "";
    document.getElementById("rewardQty").value = "";
    updateUI();
  }

  function updateUI() {
    const ul = document.getElementById("rewardList");
    ul.innerHTML = "";
    segments = [];
    rewards.forEach(r => {
      if (r.qty > 0) {
        segments.push({ fillStyle: getPastelColor(), text: r.name });
      }
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between";
      li.innerHTML = `<span>${r.name}</span><span>Số lượng: ${r.qty}</span>`;
      ul.appendChild(li);
    });
    renderWheel();
  }

  function renderWheel() {
    theWheel = new Winwheel({
      canvasId: 'wheelCanvas',
      numSegments: segments.length,
      outerRadius: 220,
      segments: segments,
      animation: {
        type: 'spinToStop',
        duration: 5,
        spins: 8,
        callbackFinished: alertPrize
      },
      pins: false
    });
  }

  function spinWheel() {
    const playerName = document.getElementById("playerName").value.trim();
    if (!playerName) return alert("Vui lòng nhập tên người chơi.");
    if (segments.length === 0) return alert("Không có phần thưởng nào khả dụng.");
    // Bổ sung code phát âm thanh khi người chơi quay bánh xe
    
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();
    theWheel.startAnimation();
  }

  function alertPrize(indicatedSegment) {
    const playerName = document.getElementById("playerName").value.trim();
    const prize = indicatedSegment.text;
    // Bổ sung code phát âm thanh phù hợp khi quay bánh xe dừng lại 

    const rewardObj = rewards.find(r => r.name === prize);
    if (rewardObj && rewardObj.qty > 0) {
      rewardObj.qty -= 1;
      winnerList.push({ player: playerName, prize });
      updateWinners();
      updateUI();
      document.getElementById("playerName").value = "";
      // Bổ sung code phát âm thanh phù hợp khi người chơi thắng cuộc

      alert(`${playerName} đã nhận phần thưởng: ${prize}`);
    } else {
      alert("Phần thưởng này đã hết. Hãy quay lại.");
    }
  }
  /*Bổ sung code cập nhật danh sách người thắng cuộc trong mảng winnerList lên giao diện*/
  function updateWinners() {
    // Cập nhật giao diện danh sách về rỗng

    // Sử dụng vòng lặp forEach để duyệt qua từng phần tử trong mảng winnerList
      
        // Tạo một phần tử li mới cho mỗi người thắng cuộc

        // Thêm class cho phần tử li mới

        // Cập nhật nội dung của phần tử li với tên người chơi và phần thưởng

        // Thêm phần tử li vào danh sách người thắng cuộc
  }

  // Sound functions
  function spinSound() {
    const audio = document.getElementById("spinSound");
    // Phát âm thanh quay bánh xe

  }
  function stopSound() {
    const audio = document.getElementById("spinSound");
    // Dừng âm thanh quay bánh xe
  
  }
  //Bổ sung code phát âm thanh khi người chơi thắng cuộc
  function winSound() {
    // Lấy phần tử âm thanh từ DOM

    // Phát âm thanh thắng cuộc
    
  }


  function getPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  }

  renderWheel();