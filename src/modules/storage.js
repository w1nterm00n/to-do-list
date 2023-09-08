import { sharedData } from "./sharedData.js";

if (!localStorage.getItem("projects")) {
	//т.е. если "projects" в localStorage не существует - создаём "projects"
	var projectsStorage = JSON.stringify([]);
	localStorage.setItem("projects", projectsStorage);
}

//localStorage.removeItem("projects");

//берём объект из хранилища, и обычный объект, и сравниваем их между собой
const deepEqualObjects = function (obj1, obj2) {
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (const key of keys1) {
		if (
			key !== "isActive" &&
			key !== "purposes" &&
			key !== "DOM" &&
			typeof obj1[key] === "object" &&
			typeof obj2[key] === "object"
		) {
			if (!deepEqual(obj1[key], obj2[key])) {
				return false;
			}
		} else if (
			key !== "isActive" &&
			key !== "purposes" &&
			key !== "DOM" &&
			obj1[key] !== obj2[key]
		) {
			return false;
		}
	}
	return true;
};

export { deepEqualObjects };
