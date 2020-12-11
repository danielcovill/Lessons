class Calculator {
	//Javascript is pretty bad at precision math so this thing falls apart when we get into decimals
	constructor() {
		this.reset();
	}
	executeOperation(nextOperator) {
		//error check
		if(!['+', '-', '*', '/', '='].includes(nextOperator)) {
			throw "Invalid operator";
		}

		this.runningTotal = this.#getResult();
		this.nextOperation = nextOperator;
		this.workingValue = 0;
		return this.runningTotal;
	}
	reset() {
		this.runningTotal = 0;
		this.workingValue = 0;
		this.decimalNext = false;
		this.nextOperation = '+';
		return this.runningTotal;
	}
	undoValue() {
		if(this.decimalNext) {
			this.decimalNext = false;
		} else {
			//fixme by trimming one place off the workingValue
			//this is actually very difficult due to the implementation and
			//javascript's limitations on how it manages numbers. 
			//e.g. In base10, the value 7/10 can't be represented cleanly resulting
			//in the calculated value being a very long decimal place. How do I undo
			//that without keeping a long running history of the calculations and 
			//backing up operations?
		}
		return this.workingValue;
	}
	inputValue(val) {
		//error checking, only single digit numbers
		if(val.length > 1 || (val !== '.' && isNaN(val))) {
			throw "Invalid input value";
		}
		if(val === '.')
		{
			if(Math.floor(this.workingValue) === this.workingValue) {
				this.decimalNext = true;
				return this.workingValue;
			}
		}
		//if they're trying to type a new number after hitting equals, we need to reset stuff
		if(this.nextOperation === '=') {
			this.runningTotal = 0;
			this.workingValue = 0;
			this.nextOperation = '+';
		}
		if(this.decimalNext || Math.floor(this.workingValue) !== this.workingValue) {
			//if there's a decimal coming or if we're already working with decimals
			//figure out how many decimal places we're up to and add on the right fraction
			let newval = val*Math.pow(10,(-1-this.#getDecimalPlaces(this.workingValue)));
			this.workingValue = this.workingValue + newval;
		} else {
			this.workingValue = (this.workingValue * 10) + Number(val);
		}
		this.decimalNext = false;
		return this.workingValue;
	}
	#getResult() {
		let result = this.runningTotal;
		switch(this.nextOperation) {
			case '+':
				result += this.workingValue;
				break;
			case '-':
				result -= this.workingValue;
				break;
			case '*':
				result *= this.workingValue;
				break;
			case '/':
				result /= this.workingValue;
				break;
			default:
				break;
		}
		return result;
	}
	#getDecimalPlaces = (value) => {
		let text = value.toString();
		// verify if number 0.000005 is represented as "5e-6"
		if (text.indexOf('e-') > -1) {
			let [base, trail] = text.split('e-');
			let deg = parseInt(trail, 10);
			return deg;
		}
		// count decimals for number in representation like "0.123456"
		if (Math.floor(value) !== value) {
			return value.toString().split(".")[1].length;
		} else {
			return 0;
		}
	}
}