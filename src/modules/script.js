//создание проекта

import "../styles/style.scss";
import { projectCreation } from "./projects.js";
projectCreation();
import { purposesCreation } from "./purposes.js";
purposesCreation();
// import { DOMCreation } from "./DOMCreation.js";
// DOMCreation();

import { sharedData } from "./sharedData.js";
console.log(sharedData.projects);

//localStorage.removeItem("projects");
