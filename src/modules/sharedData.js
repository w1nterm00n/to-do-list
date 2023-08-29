export const sharedData = {
	projects: [],
};

if (!localStorage.getItem("projects")) {
	//т.е. если localStorage не существует - создаём localStorage
	var projectsStorage = JSON.stringify(sharedData.projects);
	localStorage.setItem("projects", projectsStorage);
}
