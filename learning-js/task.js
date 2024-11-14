function Task(title, date, done) {
  this.id = Math.floor(Math.random() * 100 + 1);
  this.title = title;
  this.date = date;
  this.done = done;
}

function loadSavedTasksToDocument() {
  const tasks = getAllTasksFromLocalStorage();
  for (let task in tasks) {
    insertTaskIntoDocument(tasks[task]);
  }
}

function saveTaskInLocalStorage(task) {
  localStorage.setItem(task.id, JSON.stringify(task));
}

function removeTaskInLocalStorage(task) {
  localStorage.removeItem(task.id);
}

function getAllTasksFromLocalStorage() {
  const taskList = [];

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const task = JSON.parse(localStorage.getItem(key));
    taskList.push(task);
  }

  return taskList;
}

function placeTaskOnSection(done, taskDiv) {
  if (done) {
    taskDiv.classList.add("done");
    document.querySelector("#done-tasks-container").appendChild(taskDiv);
  } else {
    taskDiv.classList.remove("done");
    document.querySelector("#undone-tasks-container").appendChild(taskDiv);
  }
}

function insertTaskIntoDocument(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const input = document.createElement("input");
  input.id = "task-" + task.id;
  input.classList.add("task--checkbox");
  input.type = "checkbox";
  input.checked = task.done;
  input.addEventListener("input", (e) => {
    task.done = input.checked;
    saveTaskInLocalStorage(task);
    placeTaskOnSection(task.done, taskDiv);
  });

  const label = document.createElement("label");
  label.innerText = task.title;
  label.htmlFor = "task-" + task.id;

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-trash", "trash-button");

  i.addEventListener("click", (e) => {
    removeTaskInLocalStorage(task);
    i.parentElement.remove();
  });

  taskDiv.appendChild(input);
  taskDiv.appendChild(label);
  taskDiv.appendChild(i);

  placeTaskOnSection(task.done, taskDiv);
}

function addNewTask(task) {
  insertTaskIntoDocument(task);
  saveTaskInLocalStorage(task);
}

export { loadSavedTasksToDocument, addNewTask, Task };
