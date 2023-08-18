const projectCreation = function () {
	let addProjectBtn = document.querySelector(".addProjectBtn");
	addProjectBtn.addEventListener("click", function () {
		formManipulation.showForm();
		//formManipulation.addFormSubmit();
	});

	// let closeBtn = document.querySelector(".closeBtn");
	// closeBtn.addEventListener("click", function (event) {
	// 	event.stopPropagation(); // Предотвращаем всплытие события
	// 	console.log("jopa");
	// 	formManipulation.formWrapper.style.display = "none";
	// });

	let form = document.getElementById("projectForm");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let valueFromForm = formManipulation.serializeForm(form);
		formManipulation.hideForm();
		let project = new Project(valueFromForm[0].value);
		projectDOMCreation(project);
		console.log(objectController.projects);
		//сделать создание ДОМ-элемента (полоски) id = projectN
	});

	let formManipulation = {
		formWrapper: document.querySelector(".pop-up_project_window"),
		//form: document.getElementById("projectForm"),
		showForm() {
			this.formWrapper.style.display = "flex";
		},
		hideForm() {
			this.formWrapper.style.display = "none";
		},
		// addFormSubmit() {
		// 	this.form.addEventListener("submit", (event) => {
		//         //ПОЧЕМУ ОН ВЫПОЛНЯЕТ ЭТОТ КОД МИЛЛИАРД РАЗ ДАЖЕ КОГДА НЕ ПРОСЯТ БЛЯТЬ
		// 		event.preventDefault();
		// 		let valueFromForm = this.serializeForm(this.form);
		// 		this.hideForm();
		// 		let project = new Project(valueFromForm[0].value); //тут по любому хуйня
		// 		//выведи целиком потом этот массив
		// 		projectDOMCreation(project);
		// 		console.log(objectController.projects);
		// 		//сделать создание ДОМ-элемента (полоски) id = projectN
		// 	});
		// },
		serializeForm(formNode) {
			//обрабатывает значения полей и возвращает массив с значениями
			const { elements } = formNode;
			let formValues = Array.from(elements)
				.filter((item) => !!item.name)
				.map(function (element) {
					const { name, value } = element;
					return { name, value };
				});
			return formValues;
		},
	};

	let objectController = {
		projects: [], //массив для хранения всех проектов
	};

	class Project {
		constructor(name) {
			this.name = name;
			this.purposes = []; // массив для хранения целей проекта
			objectController.projects.push(this);
		}
		//purpose пока хз
	}

	let projectDOMCreation = function (project) {
		let container = document.querySelector(".projects_list");
		let projectList = document.createElement("div");
		projectList.classList.add("project_list");
		container.appendChild(projectList);

		let toggle = document.createElement("button");
		toggle.classList.add("toggle");
		projectList.appendChild(toggle);
		let toggleImg = document.createElement("img");
		toggleImg.setAttribute("src", "pics/toggle_off.svg");
		toggle.appendChild(toggleImg);

		let projectName = document.createElement("p");
		projectName.textContent = project.name;
		projectList.appendChild(projectName);

		let trash = document.createElement("button");
		trash.classList.add("trash");
		projectList.appendChild(trash);
		let trashImg = document.createElement("img");
		trashImg.setAttribute("src", "pics/trash.svg");
		trash.appendChild(trashImg);
		//добавлю ей id = projectN
	};

	//новый объект должен высветиться слева

	//return массив с проектами
};

export { projectCreation };
