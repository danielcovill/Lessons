class Calculator {
	constructor() {
		this.currentValue = 0;
		this.history = [];

		this.history.push(this.currentValue);
	}

	// Adds the value in the parameter to the currentValue
	add(addValue) {
		if(typeof(addValue) !== 'number') {
			throw "Invalid value. Input must be a number."
		}
		let oldValue = this.currentValue;
		this.currentValue += addValue;
		this.history.push(oldValue + " + " + addValue + " = " + this.currentValue);
		return this.currentValue;
	}
	
	//subtracts the value in the parameter from the current value
	subtract(subtractValue) {
		if(typeof(subtractValue) !== 'number') {
			throw "Invalid value. Input must be a number."
		}
		let oldValue = this.currentValue;
		this.currentValue -= subtractValue;
		this.history.push(oldValue + " - " + subtractValue + " = " + this.currentValue);
		return this.currentValue;
	}
	
	multiplyBy(multiplier) {
		if(typeof(multiplier) !== 'number') {
			throw "Invalid value. Input must be a number."
		}
		let oldValue = this.currentValue;
		this.currentValue *= multiplier;
		this.history.push(oldValue + " * " + multiplier + " = " + this.currentValue);
		return this.currentValue;
	}
	
	divideBy(denominator) {
		if(typeof(denominator) !== 'number') {
			throw "Invalid value. Input must be a number."
		}
		let oldValue = this.currentValue;
		this.currentValue /= denominator;
		this.history.push(oldValue + " / " + denominator + " = " + this.currentValue);
		return this.currentValue;
	}
	
	getValue() {
		return this.currentValue;
	}
	
	clear() {
		this.currentValue = 0;
		this.history.push("Current Value Cleared");
	}
	
	resetHistory() {
		this.history.length = 0;
	}

	getLastAction() {
		return this.history[this.history.length - 1];
	}

	toString() {
		return this.history.join('\n');
	}
}
module.exports = Calculator;