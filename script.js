let todayDate =
  new Date();

document.getElementById("currentDate").textContent =
  todayDate.toDateString();
let streakValue = 0;

let jsValue = 0;
let reactValue = 0;
let dsaValue = 0;

function addTask(){

  let taskText =
    document.getElementById("taskInput").value;

  if(taskText === ""){
    return;
  }

  let newTask =
    document.createElement("li");

newTask.innerHTML = `
  <span>${taskText}</span>

  <div class="taskButtons">

    <button onclick="completeTask(this)">
      Done
    </button>

    <button onclick="deleteTask(this)"
            class="deleteBtn">
      Delete
    </button>

  </div>
`;

  document.getElementById("taskList")
    .appendChild(newTask);

  document.getElementById("taskInput").value = "";
  saveTasks();
}

function updateHours(){

  jsValue += 1;
  reactValue += 1;
  dsaValue += 1;

  document.getElementById("jsHours").textContent =
    jsValue + " hrs";

  document.getElementById("reactHours").textContent =
    reactValue + " hrs";

  document.getElementById("dsaHours").textContent =
    dsaValue + " hrs";
}

function increaseStreak(){

  streakValue++;
let progressWidth =
  streakValue * 10;

if(progressWidth > 100){
  progressWidth = 100;
}

document.querySelector(".progressBar").style.width =
  progressWidth + "%";
  document.getElementById("streakCount").textContent =
    "🔥 " + streakValue + " Days";
}

function toggleTheme(){

  document.body.classList.toggle("darkMode");
}
function completeTask(button){

  let selectedTask =
    button.parentElement;

  selectedTask.style.textDecoration =
    "line-through";

  selectedTask.style.opacity =
    "0.6";
}

function deleteTask(button){

  button.parentElement.parentElement.remove();
saveTasks();
}
function clearTasks(){

  document.getElementById("taskList").innerHTML =
    "";
localStorage.removeItem("focusTasks");
}
function saveTasks(){

  let allTasks =
    document.getElementById("taskList").innerHTML;

  localStorage.setItem(
    "focusTasks",
    allTasks
  );
}

function loadTasks(){

  let savedData =
    localStorage.getItem("focusTasks");

  if(savedData){

    document.getElementById("taskList").innerHTML =
      savedData;
  }
}

loadTasks();
let totalSeconds = 1500;

let timerRunning = false;

function startTimer(){

  if(timerRunning){
    return;
  }
function resetTimer(){

  totalSeconds = 1500;

  document.getElementById("timerText").textContent =
    "25:00";

}
  timerRunning = true;

  let timerInterval = setInterval(function(){

    let minutes =
      Math.floor(totalSeconds / 60);

    let seconds =
      totalSeconds % 60;

    if(seconds < 10){
      seconds = "0" + seconds;
    }

    document.getElementById("timerText").textContent =
      minutes + ":" + seconds;

    totalSeconds--;

    if(totalSeconds < 0){

      clearInterval(timerInterval);

      timerRunning = false;

      alert("Study Session Completed ✅");
    }

  },1000);
}
let quoteList = [

  "Discipline beats motivation.",

  "Small progress is still progress.",

  "Consistency creates success.",

  "Focus on becoming better daily.",

  "Dream big and work silently.",

  "Hard work compounds over time."

];

function changeQuote(){

  let randomNumber =
    Math.floor(Math.random() * quoteList.length);

  document.getElementById("quoteText").textContent =
    quoteList[randomNumber];
}