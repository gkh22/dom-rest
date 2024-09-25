import "./styles.css";
import load from "./load.js";
import menu from "./menu.js";
import about from "./about.js";

const home_button = document.querySelector(".home");
const menu_button = document.querySelector(".menu");
const about_button = document.querySelector(".about");

console.log("hello there");
load();

home_button.addEventListener("click", load);
menu_button.addEventListener("click", menu);
about_button.addEventListener("click", about);
