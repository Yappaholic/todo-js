import { ToDo, Folder, Urgency } from "./classes";
import "./style.css";
const main = document.querySelector(".main");
const create = document.querySelector(".add-folder");
const module = document.querySelector("dialog");
const submit = document.querySelector("form>button");
const form = document.querySelector("form");

function createFolder(name: string) {
  const div = document.createElement("div");
  const title = document.createElement("p");
  const toggle = document.createElement("button");
  div.classList.toggle("folder");
  title.textContent = name;
  toggle.textContent = "Open folder ▼";
  div.appendChild(title);
  div.appendChild(toggle);
  main.appendChild(div);
}
create.addEventListener("click", () => {
  module.showModal();
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("folder");
  createFolder(name.toString());
  module.close();
});
