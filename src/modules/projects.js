import { sharedData } from "./sharedData.js";
import { purposeDOMCreation } from "./DOMCreation.js";
import { deepEqualObjects } from "./storage.js";

const projectCreation = function () {
	let addProjectBtn = document.querySelector(".addProjectBtn");
	addProjectBtn.addEventListener("click", function () {
		formManipulation.showForm();
	});

	let form = document.getElementById("projectForm");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		formManipulation.submitForm(form);
	});

	let closeBtn = document.querySelector(".closeProjectBtn");
	closeBtn.addEventListener("click", function () {
		formManipulation.hideForm();
	});

	//project form manipulations start
	let formManipulation = {
		formWrapper: document.querySelector(".pop-up_project_window"),
		showForm() {
			this.formWrapper.style.display = "flex";
		},
		hideForm() {
			this.formWrapper.style.display = "none";
		},
		submitForm(form) {
			let valueFromForm = this.serializeForm(form);
			this.hideForm();
			projectManipulation.createProject(valueFromForm);
		},
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
	//project form manipulations end

	class Project {
		constructor(name) {
			this.name = name;
			this.isActive = false;
			this.purposes = []; // массив для хранения целей проекта
			sharedData.projects.push(this);

			//Добавляю PROJECT to LOCALSTORAGE
			var projectsStorage = localStorage.getItem("projects");
			var projects = JSON.parse(projectsStorage);
			var self = this;
			var addProject = true;

			//смотрю, есть ли уже этот проект в хранилище
			projects.forEach(function (project) {
				if (deepEqualObjects(project, self)) {
					addProject = false;
				}
			});
			//смотрю, есть ли уже этот проект в хранилище

			if (addProject) {
				projects.push(this);
			}
			var updatedProjectsStorage = JSON.stringify(projects);
			localStorage.setItem("projects", updatedProjectsStorage);
			//Добавляю PROJECT to LOCALSTORAGE
		}
	}

	let purposesManipulation = {
		serializeForm(formNode) {
			const { elements } = formNode;
			let formValues = Array.from(elements)
				.filter((item) => !!item.name)
				.map(function (element) {
					const { name, value } = element;
					return { name, value };
				});
			return formValues;
		},
		deletePurpose(purpose) {
			//DOMpurpose - это ДОМ элемент этой цели
			//purpose - это объект с целью
			let mainSide = document.querySelector(".main_side");
			let deleteBtn = purpose.DOM.querySelector(".trash");
			deleteBtn.addEventListener("click", function () {
				mainSide.removeChild(purpose.DOM); //удаляю ДОМ-узел цели
				for (let i = 0; i < sharedData.projects.length; i++) {
					if (sharedData.projects[i].isActive == true) {
						let index = sharedData.projects[i].purposes.indexOf(purpose);
						if (index !== -1) {
							sharedData.projects[i].purposes.splice(index, 1); //удаляю цель из массива
							//УДАЛЕНИЕ ЦЕЛИ ИЗ ЛОКАЛСТОРАГЕ
							var projectsStorage = localStorage.getItem("projects");
							var projects = JSON.parse(projectsStorage);
							projects.forEach(function (project) {
								if (deepEqualObjects(project, sharedData.projects[i])) {
									//нашла совпадающий проект +
									project.purposes.forEach(function (storagePurpose) {
										if (deepEqualObjects(storagePurpose, purpose)) {
											//нашла совпавшую цель +
											project.purposes.splice(index, 1); //yaay, она удаляется
										}
									});
									localStorage.setItem("projects", JSON.stringify(projects));
								}
							});
							//УДАЛЕНИЕ ЦЕЛИ ИЗ ЛОКАЛСТОРАГЕ
						}
					}
				}
			});
		},

		changePurpose(purpose) {
			let changeBtn = purpose.DOM.querySelector(".change");
			changeBtn.addEventListener("click", function () {
				let purposeWindow = document.querySelector(".pop-up_purpose_window");

				purposeWindow.style.display = "flex";
				let form = document.querySelector("#purposeForm");
				form.addEventListener("submit", function (event) {
					event.preventDefault();
					let formValue = purposesManipulation.serializeForm(form);
					//сделать цикл по целям из sharedData и найти аналогичную цель
					//сделать цикл по целям из localStorage и найти аналогичную цель
					let localStoragePurpose;
					let indexOfProject;

					var projectsStorage = localStorage.getItem("projects");
					var storageProjects = JSON.parse(projectsStorage);
					// for (let i = 0; i < storageProjects.length; i++) {
					// 	storageProjects[i].purposes.forEach(function (purp) {
					// 		if (deepEqualObjects(purp, purpose)) {
					// 			localStoragePurpose = purp;
					// 			console.log(purp, purpose);
					// 			indexOfProject = i;
					// 			//по хорошему бы просто найти индекс proj
					// 			//а внутри его purposes заменить совпавшую цель на нужную
					// 		}
					// 	});
					// }
					// console.log(storageProjects[indexOfProject]);

					purpose.title = formValue[0].value;
					purpose.deadline = formValue[1].value;
					purpose.details = formValue[2].value;
					purpose.priority = formValue[3].value;
					//changing the DOM of purpose

					let title = purpose.DOM.querySelector("#title_text");
					title.textContent = formValue[0].value;
					let deadline = purpose.DOM.querySelector(".deadline");
					deadline.textContent = formValue[1].value;
					let details = purpose.DOM.querySelector(
						".description_side p:nth-child(2)"
					);
					details.textContent = formValue[2].value;
					let priority = purpose.DOM.querySelector(
						".priority_side p:nth-child(2)"
					);
					priority.textContent = formValue[3].value;

					console.log("hui1 ", storageProjects);
					console.log("hui2 ", sharedData.projects); //тут кажется не надо менять

					//changing the DOM of purpose is done

					// var index =
					// 	storageProjects[indexOfProject].purposes.indexOf(
					// 		localStoragePurpose
					// 	);

					// if (index !== -1) {
					// 	// Удалить элемент elem из массива
					// 	storageProjects[indexOfProject].purposes.splice(index, 1);
					// 	// Вставить элемент elem2 на место удаленного elem
					// 	storageProjects[indexOfProject].purposes.splice(index, 0, purpose);
					// 	console.log("horrayyy");
					// 	console.log(storageProjects[indexOfProject]);
					// }

					//не забудь обновить локалстораге
					//че за мистика блять.. почему localStorage и storageProjects САМИ обновляются..

					//эта цель должна попасть в sharedData вместо аналогичной прошлой
					//эта цель должна попасть в localStorage вместо аналогичной прошлой
					//поменять некоторые DOM-элементы у цели +
				});
			});
		},
	};

	let projectManipulation = {
		createProject(valueFromForm) {
			let project = new Project(valueFromForm[0].value);
			let DOMproject = projectDOMCreation(project);
			let deleteBtn = DOMproject.querySelector(".trash");
			deleteBtn.addEventListener("click", function () {
				projectManipulation.deleteProject(project, DOMproject);
			});
		},
		deleteProject(project, DOMproject) {
			for (let i = 0; i < sharedData.projects.length; i++) {
				if (sharedData.projects[i] == project) {
					sharedData.projects.splice(i, 1); //удаляю проект и его содержимое из массива

					//УДАЛЕНИЕ ИЗ LOCALSTORAGE
					var projectsStorage = localStorage.getItem("projects");
					var projects = JSON.parse(projectsStorage);
					projects.forEach(function (storageProject) {
						if (deepEqualObjects(project, storageProject)) {
							let index = projects.indexOf(storageProject);
							projects.splice(index, 1);
							localStorage.setItem("projects", JSON.stringify(projects));
						}
					});
					//УДАЛЕНИЕ ИЗ LOCALSTORAGE
				}
			}
			let parentNode = document.querySelector(".projects_list");
			parentNode.removeChild(DOMproject); //удаление ДОМ-элемента с проектом
			projectName.textContent = "deleted project";
			//удаляются нодлисты его целей :
			let mainSide = document.querySelector(".main_side");
			let purposesNodelist = mainSide.querySelectorAll(".to-do-line");
			purposesNodelist.forEach((purposeNode) => {
				if (purposeNode.style.display === "block")
					mainSide.removeChild(purposeNode);
			});
		},
		defaultProjectCreation() {
			this.createProject([{ value: "Default project" }]);
			let projectList = document.querySelector(".project_list");
			let toggleImg = projectList.querySelector(".toggle");
			toggleManiplation.openToggle(
				toggleImg,
				projectList,
				sharedData.projects[0]
			);
			if (!localStorage.getItem("projects")) {
				//т.е. если "projects" в localStorage не существует - создаём "projects", чтобы не возникало бед
				var projectsStorage = JSON.stringify(sharedData.projects);
				localStorage.setItem("projects", projectsStorage);
			}
			//вот тут будет создание проектов из localStorage
		},
		creationOfStorageProjects() {
			var projectsStorage = localStorage.getItem("projects");
			var storageProjects = JSON.parse(projectsStorage);
			storageProjects.forEach(function (proj) {
				projectManipulation.createProject([{ value: proj.name }]);
				let projectList = document.querySelector(".project_list");
				let toggleImg = projectList.querySelector(".toggle");
				let sharedDataProj = {};
				sharedData.projects.forEach(function (SDproject) {
					if (deepEqualObjects(SDproject, proj)) {
						sharedDataProj = SDproject;
					}
				});
				proj.purposes.forEach(function (purpose) {
					//помещаю в sharedData цели из localStorage
					sharedDataProj.purposes.push(purpose);
					purpose.DOM = purposeDOMCreation(purpose);
					purposesManipulation.changePurpose(purpose);
					purposesManipulation.deletePurpose(purpose);
				});
				toggleManiplation.openToggle(toggleImg, projectList, proj);
			});

			//разобраться чё с defaultProjectCreation
		},
	};

	let projectDOMCreation = function (project) {
		let container = document.querySelector(".projects_list");
		let projectList = document.createElement("div");
		projectList.classList.add("project_list");
		container.appendChild(projectList);

		let toggle = document.createElement("button");
		toggle.classList.add("toggle");
		projectList.appendChild(toggle);
		let toggleImg = document.createElement("img");
		toggleImg.classList.add("toggle_img");
		toggleImg.setAttribute("src", "pics/toggle_off.svg");
		//делаю чтобы только один проект одновременно был активный
		toggle.addEventListener("click", function () {
			if (
				toggleManiplation.isToggleOpen === false &&
				project.isActive === false
			) {
				toggleManiplation.openToggle(toggleImg, projectList, project);
			} else if (
				toggleManiplation.isToggleOpen === true &&
				project.isActive === true
			) {
				toggleManiplation.closeToggle(toggleImg, projectList, project);
			} else if (
				toggleManiplation.isToggleOpen === true &&
				project.isActive === false
			) {
				for (let i = 0; i < sharedData.projects.length; i++) {
					if (sharedData.projects[i].isActive === true) {
						sharedData.projects[i].isActive = false;

						let projectList = container.querySelectorAll(".project_list");
						let toggleImages = container.querySelectorAll(".toggle_img");
						projectList.forEach((projectList) => {
							projectList.style.background = "rgba(172, 196, 204, 1)";
							projectList.style.border = "none";
						});
						toggleImages.forEach((image) => {
							image.setAttribute("src", "pics/toggle_off.svg");
						});
					}
					toggleManiplation.openToggle(toggleImg, projectList, project);
				}
			}
		});
		//делаю чтобы только один проект одновременно был активный
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
		return projectList;
	};

	let toggleManiplation = {
		isToggleOpen: false,
		openToggle(toggleImg, projectList, project) {
			this.isToggleOpen = true;
			toggleImg.setAttribute("src", "pics/toggle_on.svg");
			projectList.style.background = "#B49463";
			projectList.style.border = "1px solid black";
			mainSideManipulation.setProjectName(project.name);
			project.isActive = true;
			mainSideManipulation.purposeDisplaying(project);
			//каждый раз при клике на тоггл должны отображаться цели
		},
		closeToggle(toggleImg, projectList, project) {
			this.isToggleOpen = false;
			toggleImg.setAttribute("src", "pics/toggle_off.svg");
			projectList.style.background = "rgba(172, 196, 204, 1)";
			projectList.style.border = "none";
			project.isActive = false;
		},
	};

	let mainSideManipulation = {
		projectName: document.getElementById("projectName"),
		mainSide: document.querySelector(".main_side"),

		purposeDisplaying(project) {
			let purposeNodelist = this.mainSide.querySelectorAll(".to-do-line");
			purposeNodelist.forEach((purpose) => {
				let title = purpose.querySelector("#title_text");
				if (project.purposes.length === 0) {
					//when the project is empty, no purposes displaying
					purpose.style.display = "none";
				}
				for (let i = 0; i < project.purposes.length; i++) {
					if (project.purposes[i].title === title.textContent) {
						//if purpose with this title exist in this project
						purpose.style.display = "block";
						break;
					} else {
						purpose.style.display = "none";
					}
				}
			});
		},

		setProjectName(newProjectName) {
			this.projectName.textContent = newProjectName;
		},
	};

	//projectManipulation.defaultProjectCreation();
	projectManipulation.creationOfStorageProjects();
};

export { projectCreation };
