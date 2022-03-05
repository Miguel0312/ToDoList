import "./style.css";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

var projectList = {};

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
  } else {
    alert("Two projects can't have the same name");
  }
};

const addTask = (name, project) => {
  console.log(
    name in projectList[project].tasks.map((element) => element.name)
  );
  if (projectList[project] == undefined) {
    alert("The required project doesn't exist");
  } else if (
    projectList[project].tasks.map((element) => element.name).indexOf(name) > -1
  ) {
    alert("There can't be two tasks with the same name in the same project");
  } else {
    projectList[project].tasks.push(Task(name));
  }
};

const getProjectList = () => projectList;

addProject("Test");
addTask("test", "Test");
console.log(projectList);

export { Project, Task, addProject, addTask, getProjectList };
