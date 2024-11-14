import { loadSavedTasksToDocument, addNewTask, Task } from "./task.js";

window.addEventListener("load", () => {
  document.querySelector("#data").textContent = new Date().toLocaleDateString(
    "pt-BR",
    {
      day: "numeric",
      month: "short",
    }
  );
  
  document.querySelector("#done-task-button").addEventListener("click", (e) => {
    const icon = document.querySelector("#icon-button");
    if (icon.classList.contains("fa-arrow-right")) {
      document.querySelector("#done-tasks-container").style.display = "block";
      icon.classList.replace("fa-arrow-right", "fa-arrow-down");
    } else {
      document.querySelector("#done-tasks-container").style.display = "none";
      icon.classList.replace("fa-arrow-down", "fa-arrow-right");
    }
  });

  loadSavedTasksToDocument();
});

const input = document.querySelector("#new-task-input");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let title = input.value;
    if (title.match(/(?!\s*$).+/)) {
      addNewTask(new Task(title, new Date(), false));
      input.value = "";
    }
  }
});
