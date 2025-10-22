// Elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task));

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if(taskText !== "") {
    tasks.push(taskText);
    addTaskToDOM(taskText);
    saveTasks();
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

// Function to add task to DOM
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== task);
    saveTasks();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
