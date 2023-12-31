let timer;
let currentBackground = 1; // Initial background image
let timerStatus = false;
let currentAudio = null;
// buton hidden on statup
hideButton();

function startTimer(duration) {
  clearInterval(timer);
  let timerDisplay = document.getElementById("clock");
  let timeLeft = duration;

  timer = setInterval(function () {
    if (!timerStatus) {
      let hours = Math.floor(timeLeft / 3600);
      let minutes = Math.floor((timeLeft % 3600) / 60);
      let seconds = timeLeft % 60;

      timerDisplay.textContent = `${padZero(hours)}:${padZero(
        minutes,
      )}:${padZero(seconds)}`;

      if (timeLeft === 0) {
        clearInterval(timer);
        timerDisplay.textContent = "00:00:00";
        hideButton();
      }
      if (seconds) {
        showButton();
      }
      timeLeft--;
    }
  }, 1000);
}

function pausePomodoro() {
  timerStatus = !timerStatus;
  let pomodoroButton = document.getElementById("pomodoroButton");
  let pauseIcon = document.getElementById("pauseIcon");
  if (timerStatus) {
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");
  } else {
    pauseIcon.classList.remove("fa-play");
    pauseIcon.classList.add("fa-pause");
  }
  console.log("Pomodoro status:", timerStatus);
}

function hideButton() {
  let pomodoroButton = document.getElementById("pomodoroButton");
  pomodoroButton.style.display = "none";
}

function showButton() {
  let pomodoroButton = document.getElementById("pomodoroButton");
  pomodoroButton.style.display = "block";
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
  // Stop the currently playing audio, if any
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create and play the new audio
  let audio = new Audio(audioSource);
  audio.loop = true;
  audio.play();

  // Update the currentAudio variable
  currentAudio = audio;

  // Display audio information
  document.getElementById("audioInfo").textContent =
    `Now Playing: ${audioSource}`;

  // Update the icon to the pause icon
  updateIcon("pause");
}

function pauseAudio() {
  // Pause the currently playing audio, if any
  if (currentAudio !== null) {
    currentAudio.pause();
    // Update the icon to the play icon
    updateIcon("play");
  }
}

function updateIcon(iconType) {
  // Update the icon based on the iconType (either "play" or "pause")
  const iconElement = document.getElementById("audioIcon");
  iconElement.className = `fa-solid ${iconType === "play" ? "fa-play" : "fa-pause"}`;
}


function playPause() {
  // Toggle between play and pause based on the current state
  if (currentAudio !== null && !currentAudio.paused) {
    pauseAudio();
  } else {
    playAudio(currentAudio);
  }
}

updateDateTime(); // Initial call
setRandomBackgroundImage(); // Initial background image

// Update time and date every second
setInterval(updateDateTime, 1000);
// Change background image every 5 minutes (300,000 milliseconds)
setInterval(setRandomBackgroundImage, 300000);

//Quote in middle
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your future is created by what you do today, not tomorrow. - Robert Kiyosaki",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The expert in anything was once a beginner. - Helen Hayes",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It always seems impossible until its done. - Nelson Mandela",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Don't stop when you're tired; stop when you're done. - Marilyn Monroe",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Dream big and dare to fail. - Norman Vaughan",
  "Do something today that your future self will thank you for. - Unknown",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = getRandomQuote();
}

// Initial display
displayQuote();

// Change the quote every 10 minutes
setInterval(displayQuote, 10 * 60 * 1000);


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
function clearTasks()
{
  var list=document.querySelector('#taskList')
  var allTasks=document.querySelectorAll('#taskList li')
  allTasks.forEach((task)=>{
    if (task.style.textDecoration === 'line-through') 
       list.removeChild(task)
  })
}
