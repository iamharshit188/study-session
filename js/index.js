let timer;
let currentBackground = 1; // Initial background image

function startTimer(duration) {
  clearInterval(timer);
  let timerDisplay = document.getElementById("clock");
  let timeLeft = duration;

  timer = setInterval(function () {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      timerDisplay.textContent = "00:00:00";
    }

    timeLeft--;
  }, 1000);
}

function showIframe(iframeId) {
  let iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => (iframe.style.display = "none"));
  document.getElementById(iframeId).style.display = "block";
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

function updateDateTime() {
  let now = new Date();
  let hours = padZero(now.getHours());
  let minutes = padZero(now.getMinutes());
  let seconds = padZero(now.getSeconds());
  let timeAndDate = `${hours}:${minutes}:${seconds}`;

  document.getElementById("timeAndDate").textContent = timeAndDate;
}

function setRandomBackgroundImage() {
  document.body.style.backgroundImage = `url('images/wall${currentBackground}.jpg')`;
}

function changeBackgroundImage() {
  currentBackground = (currentBackground % 9) + 1; // Loop through 1 to 10
  setRandomBackgroundImage();
}

function playAudio(audioSource) {
  let audio = new Audio(audioSource);
  audio.loop = true;
  audio.play();

  // Display audio information
  document.getElementById(
    "audioInfo"
  ).textContent = `Now Playing: ${audioSource}`;
}

updateDateTime(); // Initial call
setRandomBackgroundImage(); // Initial background image

// Update time and date every second
setInterval(updateDateTime, 1000);
// Change background image every 5 minutes (300,000 milliseconds)
setInterval(setRandomBackgroundImage, 300000);

// Testing UI
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(checkbox);
    li.appendChild(taskText);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
