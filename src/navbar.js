import Checked from "./checked.png";

const navbar = (() => {
  let nav = document.createElement("div");
  nav.id = "nav";

  let img = document.createElement("img");
  img.id = "checked";
  img.src = Checked;

  let title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Todo List";

  nav.appendChild(img);
  nav.appendChild(title);

  content = document.getElementById("content");
  content.appendChild(nav);
})();

export { navbar };
