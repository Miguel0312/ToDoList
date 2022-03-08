import { addProject, getProjectList } from "./index.js";
import { panel } from "./panel.js";
import Plus from "./plus.png";

let currentProject = "";

const sidebar = () => {
  let sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const createProjectDivs = () => {
    let projectList = getProjectList();

    let projectsTitle = document.createElement("h3");
    projectsTitle.textContent = "Projects";
    projectsTitle.style.fontSize = "30px";
    projectsTitle.style.marginBottom = "20px";
    sidebar.appendChild(projectsTitle);

    let unorderedList = document.createElement("ul");
    unorderedList.id = "projectList";

    for (let name in projectList) {
      let projectItem = document.createElement("li");
      projectItem.className = "projectItem";
      projectItem.textContent = name;
      projectItem.onclick = selectProject;
      unorderedList.appendChild(projectItem);
    }

    sidebar.append(unorderedList);

    let projectDivs = document.querySelectorAll(".projectItem");
    for (let proj of projectDivs) {
      if (proj.textContent == currentProject) {
        proj.classList.add("selected");
      }
    }
  };

  const selectProject = (e) => {
    let name = e.target.textContent;
    let projectDivs = document.querySelectorAll(".projectItem");
    for (let proj of projectDivs) {
      if (proj.textContent == currentProject) {
        proj.classList.remove("selected");
      }
    }
    for (let proj of projectDivs) {
      if (proj.textContent == name) {
        proj.classList.add("selected");
      }
    }
    currentProject = name;

    document
      .getElementById("content")
      .removeChild(document.getElementById("panel"));

    panel();
  };

  const createAddProjectDiv = () => {
    let addProjectDiv = document.createElement("div");
    addProjectDiv.id = "addProjectDiv";
    addProjectDiv.onclick = addProjectDivOnClick;

    let img = document.createElement("img");
    img.src = Plus;
    img.id = "plus";

    let addProjectText = document.createElement("p");
    addProjectText.id = "addProjectText";
    addProjectText.textContent = "Add Project";

    addProjectDiv.appendChild(img);
    addProjectDiv.appendChild(addProjectText);

    sidebar.appendChild(addProjectDiv);

    let content = document.getElementById("content");
    content.appendChild(sidebar);
  };

  const addProjectDivOnClick = (e) => {
    e.preventDefault();
    let sidebar = document.getElementById("sidebar");
    sidebar.removeChild(sidebar.lastChild);
    createAddProjectForm();
  };

  const createAddProjectForm = () => {
    let addProjectForm = document.createElement("form");
    addProjectForm.id = "addProjectForm";
    addProjectForm.onsubmit = addProjectFormSubmit;

    let formText = document.createElement("input");
    formText.type = "text";
    formText.name = "projectName";
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

    addProjectForm.appendChild(formText);
    addProjectForm.appendChild(buttons);

    sidebar.appendChild(addProjectForm);
  };

  const addProjectFormSubmit = (e) => {
    let formData = new FormData(document.getElementById("addProjectForm"));
    addProject(formData.get("projectName"));
    sidebar.removeChild(sidebar.lastChild);

    sidebar.innerHTML = "";

    createProjectDivs();
    createAddProjectDiv();
    e.preventDefault();
  };

  const cancelButtonOnClick = (e) => {
    e.preventDefault();
    sidebar.removeChild(sidebar.lastChild);
    createAddProjectDiv();
  };

  const setup = (() => {
    createProjectDivs();
    createAddProjectDiv();
  })();
};

const getCurrentProject = () => currentProject;

export { sidebar, getCurrentProject };
