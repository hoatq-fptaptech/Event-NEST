let rewards = [];
  let segments = [];
  let theWheel;
  let winnerList = [];

function addReward() {
  // TODO: Viết lại logic thêm phần thưởng vào danh sách
}
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

    theWheel.stopAnimation(false);
    spinSound();
    theWheel.rotationAngle = 0;
    theWheel.draw();
    theWheel.startAnimation();
  }

  function alertPrize(indicatedSegment) {
    const playerName = document.getElementById("playerName").value.trim();
    const prize = indicatedSegment.text;
    stopSound();
    winSound();
    const rewardObj = rewards.find(r => r.name === prize);
    if (rewardObj && rewardObj.qty > 0) {
      rewardObj.qty -= 1;
      winnerList.push({ player: playerName, prize });
      updateWinners();
      updateUI();
      document.getElementById("playerName").value = "";
      alert(`${playerName} đã nhận phần thưởng: ${prize}`);
    } else {
      alert("Phần thưởng này đã hết. Hãy quay lại.");
    }
  }

  function updateWinners() {
    const ul = document.getElementById("winnerList");
    ul.innerHTML = "";
    winnerList.forEach(w => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${w.player} - ${w.prize}`;
      ul.appendChild(li);
    });
  }

  // Sound functions
  function spinSound() {
    const audio = document.getElementById("spinSound");
    audio.play();
  }
  function stopSound() {
    const audio = document.getElementById("spinSound");
    audio.pause();
  }

  function winSound() {
    const audio = document.getElementById("winSound");
    audio.play();
  }


  function getPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  }

  renderWheel();