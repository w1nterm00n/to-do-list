import { sharedData } from "./sharedData.js";
import { purposeDOMCreation } from "./DOMCreation.js";

const purposesCreation = function () {
	let addPurposeBtn = document.querySelector(".addPurposeBtn");
	addPurposeBtn.addEventListener("click", function () {
		formManipulation.showForm();
	});

	let form = document.getElementById("purposeForm");
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		let valueFromForm = formManipulation.serializeForm(form);
		let purpose = purposeCreation(valueFromForm);
		let DOMpurpose = purposeDOMCreation(purpose);
		purposeDelete(DOMpurpose, purpose);
		let checkbox = DOMpurpose.querySelector("#todo-checkbox");
		checkbox.addEventListener("click", function () {
			checkboxManipulation(DOMpurpose, purpose);
		});
		formManipulation.hideForm();
	});

	let closeBtn = document.querySelector(".closePurposetBtn");
	closeBtn.addEventListener("click", function () {
		formManipulation.hideForm();
	});

	let formManipulation = {
		formWrapper: document.querySelector(".pop-up_purpose_window"),
		showForm() {
			this.formWrapper.style.display = "flex";
		},
		hideForm() {
			this.formWrapper.style.display = "none";
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
		for (let i = 0; i < sharedData.projects.length; i++) {
			if (sharedData.projects[i].isActive == true) {
				sharedData.projects[i].purposes.push(purpose);
			}
		}
		return purpose;
	};

	//чтобы при нажатии на чекбокс цели текст становился серым
	let checkboxManipulation = function (DOMpurpose, purpose) {
		let titleText = DOMpurpose.querySelector("#title_text");
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

	let purposeDelete = function (DOMpurpose, purpose) {
		//DOMpurpose - это ДОМ элемент этой цели
		//purpose - это объект с целью
		let mainSide = document.querySelector(".main_side");
		let deleteBtn = DOMpurpose.querySelector(".trash");
		deleteBtn.addEventListener("click", function () {
			mainSide.removeChild(DOMpurpose); //удаляю ДОМ-узел цели
			for (let i = 0; i < sharedData.projects.length; i++) {
				if (sharedData.projects[i].isActive == true) {
					let index = sharedData.projects[i].purposes.indexOf(purpose);
					if (index !== -1) {
						sharedData.projects[i].purposes.splice(index, 1); //удаляю цель из массива
					}
				}
			}
			console.log(sharedData.projects);
		});
	};
};
export { purposesCreation };
