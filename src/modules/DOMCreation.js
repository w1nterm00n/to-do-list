let purposeDOMCreation = function (purpose) {
	let mainSide = document.querySelector(".main_side");
	const toDoLine = document.querySelector(".to-do-line-closed");
	const newGoal = toDoLine.cloneNode(true);
	newGoal.style.display = "block";
	mainSide.appendChild(newGoal);

	let title = newGoal.querySelector("#title_text");
	title.textContent = purpose.title;
	let deadline = newGoal.querySelector(".deadline");
	deadline.textContent = purpose.deadline;
	let toggle = newGoal.querySelector(".toggle");

	let isFull = false;
	toggle.addEventListener("click", function () {
		if (isFull === false) {
			showFull();
			isFull = true;
		} else {
			hideFull();
			isFull = false;
		}
	});

	//DESCRIPTION AND PRIORITY CREATION START
	let fullPart = document.createElement("div");
	fullPart.className = "description_and_priority_part";
	newGoal.appendChild(fullPart);
	let descriptionSide = document.createElement("div");
	descriptionSide.className = "description_side";
	fullPart.appendChild(descriptionSide);
	let descriptionText = document.createElement("p");
	descriptionText.textContent = "Description:";
	descriptionSide.appendChild(descriptionText);

	let description = document.createElement("p");
	description.textContent = purpose.details;
	descriptionSide.appendChild(description);

	let prioritySide = document.createElement("div");
	prioritySide.className = "priority_side";
	fullPart.appendChild(prioritySide);
	let priorityText = document.createElement("p");
	priorityText.textContent = "Priority:";
	prioritySide.appendChild(priorityText);

	let priority = document.createElement("p");
	priority.textContent = purpose.priority;
	prioritySide.appendChild(priority);
	let toggleImg = toggle.querySelector("#toggleImg");
	hideFull();
	//DESCRIPTION AND PRIORITY CREATION END

	function showFull() {
		fullPart.style.display = "block";
		toggleImg.setAttribute("src", "pics/toggle_on.svg");
	}
	function hideFull() {
		fullPart.style.display = "none";
		toggleImg.setAttribute("src", "pics/toggle_off.svg");
	}
	return newGoal;
};

//добавить сюда ДОМ создание проекта

export { purposeDOMCreation };
