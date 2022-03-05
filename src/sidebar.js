import Plus from "./plus.png";

const sidebar = (() => {
  let sidebar = document.createElement("div");
  sidebar.id = "sidebar";

  const createAddProjectDiv = () => {
    let addProjectDiv = document.createElement("div");
    addProjectDiv.id = "addProjectDiv";

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

  const setup = (()=>{
    createAddProjectDiv();
  })()

})();

export { sidebar };
