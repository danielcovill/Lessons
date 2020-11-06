class Calculator {
	constructor() {
		this.currentValue = 0;
		this.history = [];

		//put the current value into the history using an array operation
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	}

	// Adds the value in the parameter to the currentValue

	add(/*Fill in the needed parameter here*/) {
		//if the parameter isn't a number, throw an error
		//add the parameter to the currentValue
		//add a row to the history array describing the operation in the format "oldValue + valueToAdd = result"
		//return the resulting value
	}
	
	//subtracts the value in the parameter from the current value
	subtract() {
		//fill me in
	}
	
	multiplyBy() {
		//fill me in
	}
	
	divideBy() {
		//fill me in
	}
	
	//returns the current value stored in the calculator
	getValue() {
		//fill me in
	}
	
	//Create a clear method that resets the current value in the calculator to zero and stores that action in history
	//fill me in
	
	//Create a method to clear all the history from the history array
	//fill me in
	

	//Create a method to get the most recent history item from the history array
	//fill me in
	
	//returns all actions in the history array as a single string
	//each action should be separated by a new line '\n'. There's a really good way to do this using one of the
	//built in array operations
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	toString() {
		//fill me in
	}
}
module.exports = Calculator;