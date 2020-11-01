# Goals
## Finalize basics of JS
* Variables 
    * Declaration
        * Multiple variables in a single statement
        * Declaration with and without assignment (undefined)
        * Naming restrictions
            * Keywords / Reserved words [W3 Schools Reserved Words](https://www.w3schools.com/js/js_reserved.asp)
            * letters, digits, dollar signs, underscores
            * Must start with a letter or $ _(generally used for private vars)
            * Case sensitive
    * Assignment
    * Scope
        * var, let, const [var, let, and const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
        * Hoisting (declarations go up, not initializations) [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
    * Naming restrictions
    * Naming formats (flat case, camelCase, PascalCase, sanke_case, kebab-case)
    * Types [MDN - Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
        * Object vs Primitive
        * Primitives have no properties but javascript will wrap them up for you automatically
            * undefined
            * string
            * number
            * boolean
        * Objects have more going on
        * Null (is an object - weird, see typeOf(undefined) vs typeOf(null) and null == undefined vs null === undefined
        * Number (scientific notation, int,double,etc. not really part of JS)
        * Boolean
        * Array 
            * They're objects [Frontend Mayhem - Arrays vs Objects](https://www.frontendmayhem.com/javascript-arrays-objects/)
            * They have special stuff added [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
        * String (single v double quotes and nesting)
        * Show dynamic nature with typeof by assigning and reassigning the same variable (this is JS specific)
        * Show how we can use instanceof for figuring out some object stuff
* Operators [MDN - Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* Control flows
    * if / then / else
    * switch / case
    * for
    * while
    * do / while
    * exiting loops (break/continue)
    * try / catch / finally (throw)
    * Bitwise (just mention, deal with this in detail much later)
* Objects
    * Properties
    * Methods
    * Relationship to arrays (objects are the parents of arrays)
* Classes
    * [W3 Schools - Classes](https://www.w3schools.com/js/js_classes.asp)
    * [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    * Modules
* Functions
    * They're techincally objects in JS because they have properties and methods
    * Arrow functions [Arrows](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
        * Read about arrow functions [Arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)
* Type
    * == vs ===
    * 
* BuiltIn JS Stuff
    * Console Methods 
    * Math
    * RegExp
    * [MDN - Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* this
   * [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

## Reading Assignment
* Skim over this link for 5 minutes or so [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * This is the best resource I know of for all things JavaScript
    * It's extremely extensive, learning it all would take a very long time. Just be aware of its existence. 
* Review the style guide here [w3 schools style guide](https://www.w3schools.com/js/js_conventions.asp) 
    * It's not nearly the best or most comprehensive but gives some good highlights
* Review the Console methods found here [Console - MDN](https://developer.mozilla.org/en-US/docs/Web/API/console), they'll come in handy when you're working

## Work Assignment
### Fill in the js class called "Calculator" in the calculator.js file
* This class should have the following properties:
    * Current value : Number (defaults to zero) - This should contain the currently calculated number 
    * History - This is an array of strings. Each string shows the calculation that was performed and the resulting new current value.
* In this class, provide the following functions:
    * add 
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Adds the received parameter to the currentValue
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * subtract
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Subtracts the received parameter from the currentValue
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * divideBy
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Divides the current value by the received parameter 
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * multiplyBy
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Multiplies the current value by the received parameter 
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * getValue
        * Returns the current value
    * clear
        * Resets the current value to zero
        * Adds a record to the history array stating "Current Value Cleared"
    * resetHistory
        * Clears the current history array
    * getLastAction
        * Gets the most recent action from the history array
    * toString
        * Returns a string containing all items from the history array separated by line breaks (line breaks in JS can be denoted using '\n')
### Fill in the js file named application.js
* Create a new instance of the calculator object
* Using the calculator object, perform the following actions:
    * Add 5
    * Subtract 100
    * Add 150
    * Multiply by -5
    * Divide by .5
    * Show the entire history up to this point
    * Clear the history
    * Send a blank line to the console
    * Add 50
    * Add 100
    * Show the most recent transaction
    * Attempt to add a letter and see the result