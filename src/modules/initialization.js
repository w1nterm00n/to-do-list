let objectController = {
	projects: [], //массив для хранения всех проектов

	deleteObject(object) {
		//удаление проекта
		const index = this.projects.indexOf(object);
		if (index !== -1) {
			this.projects.splice(index, 1);
		}
	},

	//КАК УДАЛИТЬ ЕБАНУЮ ЦЕЛЬ
};

class Purpose {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		(this.description = description),
			(this.dueDate = dueDate),
			(this.priority = priority);
	}
}

class Project {
	constructor(name) {
		this.name = name;
		this.purposes = []; // массив для хранения целей проекта
		objectController.projects.push(this);
	}

	addPurpose(title, description, dueDate, priority) {
		let purpose = new Purpose(title, description, dueDate, priority);
		this.purposes.push(purpose);
	}
}

let printer = {
	showAllProjects() {
		console.log(objectController.projects);
	},

	showProject(project) {
		console.log(project);
	},
};

let school = new Project("school");
school.addPurpose("math", "solve 4 exercises", "23/08/2023", "medium");
school.addPurpose("english", "learn 20 words", "12/08/2023", "small");

//создание проекта

// - при нажатии на + должна высвечиваться форма проекта

function serializeForm(formNode) {
	const { elements } = formNode; //elements содержит в себе все элементы управления и поля этой формы
	let formValues = Array.from(elements).map(function (element) {
		const { name, value } = element;
		return { name, value };
	});
	return formValues;
}
