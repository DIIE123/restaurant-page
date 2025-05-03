import "./styles.css";

import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

createHome();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const content = document.querySelector("#content");

homeButton.addEventListener("click", () => {
  content.textContent = "";
  createHome();
});

menuButton.addEventListener("click", () => {
  content.textContent = "";
  createMenu();
});

contactButton.addEventListener("click", () => {
  content.textContent = "";
  createContact();
});
