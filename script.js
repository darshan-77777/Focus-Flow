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

}