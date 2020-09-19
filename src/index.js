import "./index.scss";
import Person from "./person";
import logoIcon from "./images/reactjs-icon.png";

const app = document.getElementById("app");
const Oleg = new Person("Oleg", 21, "Russia");

const img = document.createElement("img");
img.src = logoIcon;
img.width = 300;
img.classList.add("logo");

app.appendChild(img);

console.log(Oleg);
