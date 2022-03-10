import "./style.css";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import { panel } from "./panel";

var projectList = {};
if (localStorage.projectList != undefined)
  projectList = JSON.parse(localStorage.projectList);

const updateLocalStorage = () => {
  localStorage.projectList = JSON.stringify(projectList);
};

const Project = (title) => {
  let tasks = [];

  return { title, tasks };
};

const Task = (name) => {
  return { name };
};

const addProject = (title) => {
  if (projectList[title] == undefined) {
    projectList[title] = Project(title);
    updateLocalStorage();
  } else {
    alert("Two projects can't have the same name");
  }
};

const removeProject = (title) => {
  if (projectList[title] != undefined) {
    delete projectList[title];
    updateLocalStorage();
  }
};

const addTask = (name, project) => {
  if (projectList[project] == undefined) {
    alert("The required project doesn't exist");
  } else if (
    projectList[project].tasks.map((element) => element.name).indexOf(name) > -1
  ) {
    alert("There can't be two tasks with the same name in the same project");
  } else {
    projectList[project].tasks.push(Task(name));
    updateLocalStorage();
  }
};

const removeTask = (name, title) => {
  let project = projectList[title];
  if (project != undefined) {
    let index = -1;
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].name == name) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      project.tasks.splice(index, 1);
      updateLocalStorage();
    }
  }
};

const getProjectList = () => projectList;

sidebar();
panel();

export {
  Project,
  Task,
  addProject,
  addTask,
  getProjectList,
  removeProject,
  removeTask,
};
