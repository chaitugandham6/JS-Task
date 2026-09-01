// 1. What is a variable in JavaScript?
// Answer:
// A variable is a named container used to store a value.

let message = "Hello";
console.log(message);


// 2. What are the three keywords used to create variables?
// Answer: var, let, const

var x = 1;
let y = 2;
const z = 3;


// 3. Write the syntax to create a variable using var.
// Answer:

var name3 = "John";


// 4. Write the syntax to create a variable using let.
// Answer:

let age4 = 25;


// 5. Write the syntax to create a variable using const.
// Answer:

const country5 = "India";


// 6. What is declaration?
// Answer:
// Declaration means creating a variable without necessarily assigning a value.

let student6;


// 7. What is initialization?
// Answer:
// Initialization means assigning a value to a variable when it is created.

let student7 = "Chaitu";


// 8. What is reassignment?
// Answer:
// Reassignment means changing the value of an existing variable.

let marks8 = 50;
marks8 = 80;


// 9. What is redeclaration?
// Answer:
// Redeclaration means declaring the same variable again in the same scope.

var number9 = 10;
var number9 = 20;


// 10. Which keyword allows redeclaration?
// Answer: var

var city10 = "Delhi";
var city10 = "Mumbai";


// 11. Which keywords allow reassignment?
// Answer: var and let

let score11 = 90;
score11 = 95;

var marks11 = 50;
marks11 = 60;


// 12. Which keyword requires initialization when declared?
// Answer: const

const pi12 = 3.14;


// 13. Identify the declaration and initialization:
// let age = 25;

// Answer:
// Declaration: let age
// Initialization: = 25

let age13 = 25;


// 14. What is the value of a?
// Answer: 100

var a14 = 100;
console.log(a14);


// 15. Change the value of this variable to 200.
// Answer:

let number15 = 100;
number15 = 200;
console.log(number15);


// 16. What will be the output?

var a16 = 10;
console.log(a16);

// Answer: 10


// 17. What will be the output?

var a17 = 10;
a17 = 20;
console.log(a17);

// Answer: 20


// 18. What will be the output?

var a18 = 10;
var a18 = 30;
console.log(a18);

// Answer: 30


// 19. Write a var variable named name with the value "John".

var name19 = "John";
console.log(name19);

// Answer: John


// 20. Create a var variable named price with the value 500.

var price20 = 500;
console.log(price20);

// Answer: 500


// 21. Reassign price from 500 to 1000.

price20 = 1000;
console.log(price20);

// Answer: 1000


// 22. What will be the output?

var x22 = 50;
x22 = 100;
console.log(x22);

// Answer: 100


// 23. Can a var variable be reassigned?
// Answer: Yes

var age23 = 25;
age23 = 30;
console.log(age23);


// 24. Can a var variable be redeclared?
// Answer: Yes

var city24 = "Hyderabad";
var city24 = "Chennai";
console.log(city24);


// 25. Write an example of var redeclaration.

var country25 = "India";
var country25 = "USA";
console.log(country25);

// Answer: USA


// 26. Create a let variable named age with the value 25.
// Answer:

let age26 = 25;
console.log(age26);


// 27. What will be the output?

let age27 = 20;
age27 = 30;
console.log(age27);

// Answer: 30


// 28. Can a let variable be reassigned?
// Answer: Yes

let number28 = 10;
number28 = 20;
console.log(number28);


// 29. Can a let variable be redeclared?
// Answer: No

// Example:
// let city29 = "Chennai";
// let city29 = "Salem";
// Error: Identifier 'city29' has already been declared.


// 30. Find the error:

let name30 = "John";
// let name30 = "David";

// Error: Identifier 'name30' has already been declared.


// 31. Create a let variable called city and assign "Chennai".
// Answer:

let city31 = "Chennai";
console.log(city31);


// 32. Change the value of city to "Salem".
// Answer:

city31 = "Salem";
console.log(city31);


// 33. What will be the output?

let x33 = 10;
x33 = 50;
console.log(x33);

// Answer: 50


// 34. Write a let variable called salary with the value 25000.
// Answer:

let salary34 = 25000;
console.log(salary34);


// 35. Reassign salary to 30000.
// Answer:

salary34 = 30000;
console.log(salary34);

// Answer: 30000


// 36. Create a const variable called pi with the value 3.14.
// Answer:

const pi36 = 3.14;
console.log(pi36);


// 37. Can a const variable be reassigned?
// Answer: No

const number37 = 100;

// number37 = 200;
// Error: Assignment to a constant variable.


// 38. Can a const variable be redeclared?
// Answer: No

const name38 = "John";

// const name38 = "David";
// Error: Identifier 'name38' has already been declared.


// 39. What is wrong with this code?

// const age;
// age = 25;

// Answer:
// A const variable must be initialized when it is declared.

// Correct code:

const age39 = 25;
console.log(age39);


// 40. What happens here?

// const price = 500;
// price = 1000;

// Answer:
// Error because a const variable cannot be reassigned.

// Correct code:

const price40 = 500;
console.log(price40);


// 41. Create a const variable called country with the value "India".
// Answer:

const country41 = "India";
console.log(country41);


// 42. What will be the output?

const x42 = 100;
console.log(x42);

// Answer: 100


// 43. Which keyword should you use if the value should not be reassigned?
// Answer: const

const fixedValue43 = 500;
console.log(fixedValue43);


// 44. What is the difference between let and const?
// Answer:
// let can be reassigned.
// const cannot be reassigned.

let value44 = 10;
value44 = 20;

const value44Const = 10;

// value44Const = 20;
// Error: Assignment to a constant variable.


// 45. What is the difference between var and const?
// Answer:
// var can be redeclared and reassigned.
// const cannot be redeclared or reassigned.

var number45 = 10;
var number45 = 20;
number45 = 30;

const number45Const = 10;

// const number45Const = 20;
// Error: Identifier 'number45Const' has already been declared.

// number45Const = 30;
// Error: Assignment to a constant variable.


// 46. Write JavaScript code to print Hello World using console.log().
// Answer:

console.log("Hello World");


// 47. Write JavaScript code to print the number 500 using console.log().
// Answer:

console.log(500);


// 48. What is the purpose of console.warn()?
// Answer:
// console.warn() is used to display warning messages in the console.

console.warn("This is a warning");


// 49. What is the purpose of console.error()?
// Answer:
// console.error() is used to display error messages in the console.

console.error("This is an error");


// 50. What is the purpose of each?


// alert()
// Answer:
// Displays a message in a popup box.

alert("Hello World");


// prompt()
// Answer:
// Displays a popup box that asks the user to enter a value.

let userName50 = prompt("Enter your name");
console.log(userName50);


// confirm()
// Answer:
// Displays a popup with OK and Cancel buttons.
// Returns true for OK and false for Cancel.

let result50 = confirm("Are you sure?");
console.log(result50);


// document.writeln()
// Answer:
// Writes content directly to the webpage.

document.writeln("Hello World");


// console.log()
// Answer:
// Displays information in the browser console.

console.log("Hello World");
