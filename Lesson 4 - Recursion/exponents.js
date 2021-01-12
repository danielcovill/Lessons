// Calculate an exponent using a recursive function
// Base Case: Exponent = 0, result = 1 always
// Growth case: Exponent > 0, result = number * previous calc (which will eventually be zero)

const num = 5;
const exponent = 6;

const result = Math.pow(num, exponent);
console.log(`Answer should be ${result}`);
let answer = calculateExponent(num, exponent);
console.log(`The answer we got is ${answer} - ${result === answer ? "right!" : "wrong." }`);

function calculateExponent(currentValue, raisedTo) {
    if(raisedTo === 0) {
        return 1;
    } else {
        return currentValue * calculateExponent(currentValue, --raisedTo);
    }
}
