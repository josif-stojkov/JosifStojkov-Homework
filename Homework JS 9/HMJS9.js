let timerId;
let timerCount = 0;
let paused = false;

function startTimer(delay, countTo) {
  setTimeout(() => {
    timerId = setInterval(() => {
      if (timerCount <= countTo) {
        console.log(timerCount);
        document.getElementById('timerDisplay').innerHTML = timerCount;
        timerCount++;
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  }, delay * 1000);
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (!timerId) {
    startTimer(2, 10); // start timer after 2 seconds and count to 10
  } else if (paused) {
    paused = false;
    startTimer(0, 10 - timerCount); // resume timer where it left off
  }
});

document.getElementById('stopBtn').addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  timerCount = 0;
  document.getElementById('timerDisplay').innerHTML = timerCount;
});

document.getElementById('pauseBtn').addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  paused = true;
});
