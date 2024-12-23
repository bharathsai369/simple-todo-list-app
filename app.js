const container = document.querySelector(".container");
const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("#input");
const form = document.querySelector("#form");

const taskListDiv = document.createElement("div");
taskListDiv.className = "taskListDiv";

container.appendChild(taskListDiv);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();
});

function createTask() {
  if (input.value === "") {
    alert("Enter something!");
    return;
  }

  // Create new task elements
  const task = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const del = document.createElement("button");

  // Set attributes and content
  checkbox.type = "checkbox";
  checkbox.id = "task-" + Date.now();
  label.htmlFor = checkbox.id;
  label.textContent = input.value;
  del.textContent = "x";

  // Add classes
  task.classList.add("task");
  checkbox.classList.add("checkbox");
  label.classList.add("label");
  del.classList.add("del-btn");

  // Append elements to the task
  task.appendChild(checkbox);
  task.appendChild(label);
  task.appendChild(del);

  // Append the task to the task list
  taskListDiv.appendChild(task);

  // Clear input field
  input.value = "";

  // Add toggle functionality for the checkbox
  checkbox.addEventListener("change", () => {
    label.classList.toggle("completed", checkbox.checked);
  });

  // Add delete functionality
  del.addEventListener("click", () => {
    task.remove();
  });
}
