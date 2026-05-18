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

  newTask.textContent = taskText;

  document.getElementById("taskList")
    .appendChild(newTask);

  document.getElementById("taskInput").value = "";
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

  document.getElementById("streakCount").textContent =
    "🔥 " + streakValue + " Days";
}

function toggleTheme(){

  document.body.classList.toggle("darkMode");
}