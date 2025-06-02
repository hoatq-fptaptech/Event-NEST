const totalDays = 7;
    let currentDay =  1;
    let actions =  [];

    document.getElementById('dayStatus').innerText = `Ngày ${currentDay} / ${totalDays}`;
    updateLog();

    function choose(action) {
      if (currentDay > totalDays) return;

      actions.push(action);
      currentDay++;

      if (currentDay > totalDays) {
        showResult();
        document.getElementById('actions').style.display = 'none';
      } else {
        document.getElementById('dayStatus').innerText = `Ngày ${currentDay} / ${totalDays}`;
        updateLog();
      }
    }

    function updateLog() {
      const log = document.getElementById('log');
      log.innerHTML = '<h3>Nhật ký của bạn:</h3>';
      actions.forEach((a, i) => {
        log.innerHTML += `Ngày ${i + 1}: ${a}<br>`;
      });
    }

    function showResult() {
      let study = actions.filter(a => a === 'học').length;
      let message = '';

      if (study >= 5) message = '🎓 Bạn là học bá! Học lực xuất sắc!';
      else if (study >= 3) message = '📘 Học tạm ổn. Cần cố gắng thêm!';
      else message = '📱 Bạn đã dành quá nhiều thời gian để giải trí. Kết quả học yếu!';

      document.getElementById('result').innerHTML = `<h2>Kết quả:</h2><p>${message}</p>`;
    }

    if (currentDay > totalDays) {
      document.getElementById('actions').style.display = 'none';
      showResult();
    }