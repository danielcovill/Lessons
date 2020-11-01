const Calculator = require("./calculator");

let calc = new Calculator();
calc.add(5);
calc.subtract(100);
calc.add(150);
calc.multiplyBy(-5);
calc.divideBy(.5);
console.log(calc.toString());
calc.clear();
calc.add(50);
calc.add(100);
console.log('');
console.log(calc.getLastAction());
calc.add('a');