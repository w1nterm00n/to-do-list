import { deepEqualObjects } from "./storage.js";
import { projectCreation } from "./projects.js";
export const sharedData = {
	projects: [],
};

const checkDisplay = function () {
	let sharedDataProjects = sharedData.projects;
	var projectsStorage = localStorage.getItem("projects");
	var storageProjects = JSON.parse(projectsStorage);

	storageProjects.forEach(function (storageProject) {
		for (let i = 0; i < sharedDataProjects.length; i++) {
			if (deepEqualObjects(storageProject, sharedDataProjects[i])) {
				console.log(storageProject, " and ", sharedDataProjects, " equal");
			} else if (i == sharedDataProjects.length - 1) {
				sharedData.projects.push(storageProject);
				projectCreation.projectDOMCreation(storageProject); //походу я хочу получить её раньше, чем она создана
				//здесь нужно будет использовать projectDOMCreation(storageProject)
			}
		}
	});
	console.log("sharedData proj: ", sharedData.projects);
};

export { checkDisplay };

//получаем массив projects из localStorage +
//сравниваем projects из localStorage с projects из sharedData (хотя в нём всегда будет 1 элемент) +

//если в sharedData не хватает каких-то проектов, то я их добавляю в sharedData +
//и запускаю функцию которая отображает их в DOM
