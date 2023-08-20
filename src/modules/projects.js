import { sharedData } from "./sharedData.js";

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

	//form manipulations start
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
			let project = new Project(valueFromForm[0].value);
			projectDOMCreation(project);
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
	//form manipulations end

	class Project {
		constructor(name) {
			this.name = name;
			this.isActive = false;
			this.purposes = []; // массив для хранения целей проекта
			sharedData.projects.push(this);
		}
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
};

export { projectCreation };
