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
		purposeDOMCreation(purpose);
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
		// console.log(sharedData.projects);
		for (let i = 0; i < sharedData.projects.length; i++) {
			if (sharedData.projects[i].isActive == true) {
				sharedData.projects[i].purposes.push(purpose);
				console.log(sharedData.projects);
			}
		}
		return purpose;
	};
};
export { purposesCreation };
