import { deepEqualObjects } from "./storage.js";
import { projectCreation } from "./projects.js";
export const sharedData = {
	projects: [],
	currentPurpose: null,
};

const checkDisplay = function () {
	let sharedDataProjects = sharedData.projects;
	var projectsStorage = localStorage.getItem("projects");
	var storageProjects = JSON.parse(projectsStorage);

	let DOMCreation = {
		//здесь будет создание ДОМ проектов
		//здесь будет создание ДОМ целей
	};

	//каждый раз когда загружается страница, мы чекаем localStorage, и делаем отображение на экране соответствующим localStorage
	//на default Project пока забей, потом я уберу его автоматическое создание на экране (но по дефолту он будет находиться в стораге)

	//отображаем все проекты из storageProjects (создаём их DOM-элементы)
};

export { checkDisplay };

//получаем массив projects из localStorage +
//сравниваем projects из localStorage с projects из sharedData (хотя в нём всегда будет 1 элемент) +

//если в sharedData не хватает каких-то проектов, то я их добавляю в sharedData +
//и запускаю функцию которая отображает их в DOM
