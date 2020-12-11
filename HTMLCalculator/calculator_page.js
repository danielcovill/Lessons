let calc = new Calculator();
let display = document.getElementById('display');
display.innerText = calc.reset();

let clearClick = (e) => {
	display.innerText = calc.reset();
}
let numberClick = (e) => {
	if(e.srcElement.innerText === 'DEL') {
		display.innerText = calc.undoValue();
	} else {
		display.innerText = calc.inputValue(e.srcElement.innerText);
	}
}

let operationClick = (e) => {
	display.innerText = calc.executeOperation(e.srcElement.dataset.operation);
}

for(button of document.querySelectorAll('[data-number]')) {
	button.addEventListener('click', numberClick);
}
for(button of document.querySelectorAll('[data-operation]')) {
	button.addEventListener('click', operationClick);
}
for(button of document.querySelectorAll('[data-clear]')) {
	button.addEventListener('click', clearClick);
}