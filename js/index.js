let timer;
let currentBackground = 1; // Initial background image

function startTimer(duration) {
  clearInterval(timer);
  let timerDisplay = document.getElementById('clock');
  let timeLeft = duration;

  timer = setInterval(function() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      timerDisplay.textContent = '00:00:00';
    }

    timeLeft--;
  }, 1000);
}

function showIframe(iframeId) {
  let iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => iframe.style.display = 'none');
  document.getElementById(iframeId).style.display = 'block';
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function updateDateTime() {
  let now = new Date();
  let hours = padZero(now.getHours());
  let minutes = padZero(now.getMinutes());
  let seconds = padZero(now.getSeconds());
  let timeAndDate = `${hours}:${minutes}:${seconds}`;

  document.getElementById('timeAndDate').textContent = timeAndDate;
}

function setRandomBackgroundImage() {
  document.body.style.backgroundImage = `url('assets/background${currentBackground}.jpg')`;
}

function changeBackgroundImage() {
  currentBackground = (currentBackground % 10) + 1; // Loop through 1 to 10
  setRandomBackgroundImage();
}

function playAudio(audioSource) {
  let audio = new Audio(audioSource);
  audio.loop = true;
  audio.play();

  // Display audio information
  document.getElementById('audioInfo').textContent = `Now Playing: ${audioSource}`;
}

updateDateTime(); // Initial call
setRandomBackgroundImage(); // Initial background image

// Update time and date every second
setInterval(updateDateTime, 1000);
// Change background image every 5 minutes (300,000 milliseconds)
setInterval(setRandomBackgroundImage, 300000);