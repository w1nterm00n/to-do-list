import { sharedData } from "./sharedData.js";
import { purposeDOMCreation } from "./DOMCreation.js";
import { deepEqualObjects } from "./storage.js";

const purposesCreation = function () {
	let addPurposeBtn = document.querySelector(".addPurposeBtn");
	addPurposeBtn.addEventListener("click", function () {
		formManipulation.showEmptyForm();
	});

	let form = document.getElementById("purposeForm");
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		let purpose;
		let valueFromForm = formManipulation.serializeForm(form);

		if (currentPurpose) {
			purpose = currentPurpose;
			//удалила прошлый ДОМ-узел
			let mainSide = document.querySelector(".main_side");
			mainSide.removeChild(purpose.DOM);
			//удалила прошлый ДОМ-узел
			let updatedPurpose = purposeUpdate(currentPurpose, valueFromForm);
			purpose.DOM = purposeDOMCreation(updatedPurpose); // создаст новый ДОМ-узел
			console.log(sharedData.projects); //значения в объекте цели изменились
			currentPurpose = null;
		} else {
			purpose = purposeCreation(valueFromForm);
			purpose.DOM = purposeDOMCreation(purpose);
		}

		purposeDelete(purpose);
		purposeChange(purpose);
		let checkbox = purpose.DOM.querySelector("#todo-checkbox");
		checkbox.addEventListener("click", function () {
			checkboxManipulation(purpose);
		});
		formManipulation.hideForm();
	});

	let closeBtn = document.querySelector(".closePurposetBtn");
	closeBtn.addEventListener("click", function () {
		formManipulation.hideForm();
	});

	let formWrapper = document.querySelector(".pop-up_purpose_window");
	let currentPurpose = null;
	let formManipulation = {
		title: formWrapper.querySelector(".title"),
		submitBtn: formWrapper.querySelector("#submit_btn"),
		formNodelist: formWrapper.querySelectorAll(".input"),
		showEmptyForm() {
			this.title.textContent = "New Form";
			this.submitBtn.textContent = "Add";
			this.formNodelist.forEach(function (input) {
				input.value = "";
			});
			formWrapper.style.display = "flex";
		},
		showFilledForm(purpose) {
			currentPurpose = purpose;
			this.title.textContent = "Change Form";
			this.submitBtn.textContent = "Change";
			formWrapper.style.display = "flex";
		},
		hideForm() {
			formWrapper.style.display = "none";
		},
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
	};

	let purposeCreation = function (arr) {
		let purpose = {
			isDone: false,
		};
		purpose.title = arr[0].value;
		purpose.deadline = arr[1].value;
		purpose.details = arr[2].value;
		purpose.priority = arr[3].value;
		purpose.DOM = "";

		//ДОБАВЛЕНИЕ PURPOSE В LOCALSTORAGE
		for (let i = 0; i < sharedData.projects.length; i++) {
			if (sharedData.projects[i].isActive == true) {
				sharedData.projects[i].purposes.push(purpose);

				var projectsStorage = localStorage.getItem("projects");
				var projects = JSON.parse(projectsStorage);
				projects.forEach(function (project) {
					if (deepEqualObjects(project, sharedData.projects[i])) {
						let projectIndex = projects.findIndex((proj) => proj === project);
						//добавляю цель в нужный проект, обновляю localStorage
						if (projectIndex !== -1) {
							projects[projectIndex].purposes.push(purpose);
							localStorage.setItem("projects", JSON.stringify(projects));
						}
					}
				});
			}
		}
		//ДОБАВЛЕНИЕ PURPOSE В LOCALSTORAGE
		return purpose;
	};

	//чтобы при нажатии на чекбокс цели текст становился серым
	let checkboxManipulation = function (purpose) {
		let titleText = purpose.DOM.querySelector("#title_text");
		if (purpose.isDone === false) {
			titleText.style.color = "grey";
			titleText.style.textDecoration = "line-through";
			purpose.isDone = true;
		} else {
			purpose.isDone = false;
			titleText.style.color = "black";
			titleText.style.textDecoration = "none";
		}
	};

	let purposeDelete = function (purpose) {
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
			console.log(sharedData.projects);
		});
	};

	let purposeUpdate = function (currentPurpose, arr) {
		currentPurpose.title = arr[0].value;
		currentPurpose.deadline = arr[1].value;
		currentPurpose.details = arr[2].value;
		currentPurpose.priority = arr[3].value;

		return currentPurpose;
	};

	let purposeChange = function (purpose) {
		let changeBtn = purpose.DOM.querySelector(".change");
		changeBtn.addEventListener("click", function () {
			formManipulation.showFilledForm(purpose);
		});
	};
};
export { purposesCreation };
