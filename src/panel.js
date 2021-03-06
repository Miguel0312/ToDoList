import { getProjectList, addTask, removeTask } from "./index.js";
import { getCurrentProject } from "./sidebar.js";
import Plus from "./plus.png";

const panel = () => {
  let panel = document.createElement("div");
  panel.id = "panel";
  const updateTasks = () => {
    panel.innerHTML = "";
    let currentProjectTitle = document.createElement("h3");
    currentProjectTitle.id = "projectTitle";
    currentProjectTitle.textContent = getCurrentProject();
    panel.appendChild(currentProjectTitle);
    if (getCurrentProject() != "") {
      let tasks = getProjectList()[getCurrentProject()]["tasks"];
      for (let task of tasks) {
        let taskItem = document.createElement("div");
        taskItem.classList.add("taskItem");

        let deleteTaskButton = document.createElement("button");
        deleteTaskButton.classList.add("deleteTaskButton");
        taskItem.appendChild(deleteTaskButton);
        deleteTaskButton.addEventListener("click", deleteTask);

        let taskName = document.createElement("p");
        taskName.textContent = task.name;
        taskItem.appendChild(taskName);

        panel.appendChild(taskItem);
      }
    }
  };

  const deleteTask = (e) => {
    let project = getCurrentProject();
    let name = e.target.parentNode.querySelector("p").textContent;
    removeTask(name, project);
    updateTasks();
    createAddTaskDiv();
  };

  const createAddTaskDiv = () => {
    let addTaskDiv = document.createElement("div");
    addTaskDiv.id = "addTaskDiv";
    addTaskDiv.onclick = addTaskDivOnClick;

    let img = document.createElement("img");
    img.src = Plus;
    img.id = "plusTask";

    let addTaskText = document.createElement("p");
    addTaskText.id = "addTaskText";
    addTaskText.textContent = "Add Task";

    addTaskDiv.appendChild(img);
    addTaskDiv.appendChild(addTaskText);

    panel.appendChild(addTaskDiv);
  };

  const addTaskDivOnClick = () => {
    panel.removeChild(panel.lastChild);
    createAddTaskForm();
  };

  const createAddTaskForm = () => {
    let addTaskForm = document.createElement("form");
    addTaskForm.id = "addTaskForm";
    addTaskForm.onsubmit = addTaskFormSubmit;

    let formText = document.createElement("input");
    formText.type = "text";
    formText.name = "taskName";
    formText.id = "formText";
    formText.autocomplete = "off";

    let buttons = document.createElement("div");
    buttons.id = "buttons";

    let addButton = document.createElement("input");
    addButton.type = "submit";
    addButton.value = "Add";
    addButton.id = "add";

    let cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "Cancel";
    cancelButton.id = "cancel";
    cancelButton.onclick = cancelButtonOnClick;

    buttons.appendChild(addButton);
    buttons.appendChild(cancelButton);

    addTaskForm.appendChild(formText);
    addTaskForm.appendChild(buttons);

    panel.appendChild(addTaskForm);
  };

  const addTaskFormSubmit = () => {
    let formData = new FormData(document.getElementById("addTaskForm"));
    addTask(formData.get("taskName"), getCurrentProject());
    panel.removeChild(panel.lastChild);

    panel.innerHTML = "";

    updateTasks();
    createAddTaskDiv();
    e.preventDefault();
  };

  const cancelButtonOnClick = () => {
    panel.removeChild(panel.lastChild);
    createAddTaskDiv();
  };

  updateTasks();
  if (getCurrentProject() != "") createAddTaskDiv();
  document.querySelector("#content").appendChild(panel);
};

export { panel };
