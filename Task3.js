// JavaScript Tasks — Beginner Level
// Task 1 — Variables
// Create variables using var, let, and const.
// Name
// Age
// City
// College
var name = "chaitu";
let age = 21;
const city = "bvrm";
let college = "vishnu";
// Requirements:
// Print all values.
console.log(name);
console.log(age);
console.log(city);
console.log(college);
// Change the var value.
name = "chaitanya";
console.log(name);
// Change the let value.
age = 22;
console.log(age);
// Try changing the const value.
// city = "Chennai";
// console.log(city);
 // This will throw an error
// Try redeclaring each variable and observe what happens.
var name = "ckv";
console.log(name);
//  var can be redeclared.
// let age = 30;
// SyntaxError: Identifier 'age' has already been declared.
// const city = "Chennai";
// SyntaxError: Identifier 'city' has already been declared.

// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.
console.log("Hello JavaScript");
alert("Welcome to JavaScript");
confirm("Are you ready?");
let userName = prompt("Enter your name:");
console.log(userName);
document.writeln("Hello from JavaScript");
// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.
let Name = prompt("Enter your name:");
let Age = prompt("Enter your age:");
let City = prompt("Enter your city:");
let Qualification = prompt("Enter your qualification:");

console.log("Name:", Name);
console.log("Age:", Age);
console.log("City:", City);
console.log("Qualification:", Qualification);

// 🟡 Data Type Tasks
// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.
let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let isStudent = true;
let isWorking = false;
let value;
let emptyValue = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(isStudent, typeof isStudent);
console.log(isWorking, typeof isWorking);
console.log(value, typeof value);
console.log(emptyValue, typeof emptyValue);

// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
console.log("First student:", students[0]);
// Second student
console.log("Second student:", students[1]);
// Last student
console.log("Last student:", students[students.length - 1]);
// Total students
console.log("Total students:", students.length);
// Use only:
// array[index]
// array.length

// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// Employee name
// Age
// Role
// First skill
// Last qualification
// Working status
// This follows the same array-inside-object structure from your notes.
let employee = {
    name: "chaitu",
    age: 21,
    role: "Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};

console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:",
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working status:", employee.isWorking);

// 🔵 Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log("Total price:", total);

// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);
console.log("Output of A and B: 11, 10 a++ means: use first, then increase.");

// B
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);
console.log("Output of A and B: 11, 11 ++a means: increase first, then use.");
// C
// let a = 10;

// let b = a--;

// console.log(a);
// console.log(b);
console.log("Output of A and B: 9, 10 a-- means: use first, then decrease.");
// D
// let a = 10;

// let b = --a;

// console.log(a);
// console.log(b);
console.log("Output of A and B: 9, 9 --a means: decrease first, then use.");
// 🟣 Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
let num = 10;
// Perform separately:
// num += 5
num += 5;
console.log(num); // 15
// num -= 3
num = 10;
num -= 3;
console.log(num); // 7
// num *= 2
num = 10;
num *= 2;
console.log(num); // 20
// num /= 4
num = 10;
num /= 4;
console.log(num); // 2.5
// num %= 3
num = 10;
num %= 3;
console.log(num); // 1
// num **= 2
num = 10;
num **= 2;
console.log(num); // 100
// Print the result after each operation.

// 🔴 Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 9);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(10 != "10");
// console.log(10 !== "10");

console.log("Output of comparison operators: true, false, true, false, true, false, false, true");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

// 🟠 Logical Operator Tasks
// Task 12 — AND
// Find the output:
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

console.log("Output of AND operator: true, false, false, false");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Task 13 — OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

console.log("Output of OR operator: true, true, true, false");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Task 14 — NOT
// console.log(!true);
// console.log(!false);
// console.log(!(5 > 10));
// console.log(!(10 > 5));

console.log("Output of NOT operator: false, true, true, false");
console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));
// 🔥 Task 15 — Combination
// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7);
console.log("Output of combination: false because 5 == '5' is true, but !(5 === 5) is false, so the AND condition is false, and 6 > 7 is false, so false || false is false.");
console.log(5 == "5" && !(5 === 5) || 6 > 7);


// console.log(10 > 5 && 8 < 12 || 4 === "4");
console.log("Output of combination: true because 10 > 5 is true and 8 < 12 is true, so the AND condition is true, and 4 === '4' is false, but true || false is true.");
console.log(10 > 5 && 8 < 12 || 4 === "4");

// console.log(7 === 7 && 10 != "10" || 5 >= 5);
console.log("Output of combination: true because 7 === 7 is true and 10 != '10' is false, so the AND condition is false, but 5 >= 5 is true, so false || true is true.");
console.log(7 === 7 && 10 != "10" || 5 >= 5);

// console.log(15 < 10 || 20 > 15 && 5 == "5");
console.log("Output of combination: true because 20 > 15 is true and 5 == '5' is true, so the AND condition is true, and 15 < 10 is false, but false || true is true.");
console.log(15 < 10 || 20 > 15 && 5 == "5");

// These follow the same comparison + logical style in your code.
// 🟤 Ternary Operator Tasks
// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"
let agee = 20;

let result = agee >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(result);

// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"
let password = true;

let resultt = password
    ? "Login successful"
    : "Wrong password";

console.log(resultt);

// 🟢 Concatenation & Template String
// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
let namme = "Naveen";
let age1 = 25;
let city1 = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// Using +
console.log(
    "My name is " + namme +
    ". I am " + age1 +
    " years old. I live in " + city1 + "."
);
// Using template literals `${}`
// Your notes cover both approaches.
console.log(
    `My name is ${name}. I am ${age1} years old. I live in ${city1}.`
);

// 🔵 Type Casting Tasks
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.
let a1 = String(100);
let b1 = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);

console.log(a1, typeof a1);
console.log(b1, typeof b1);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

// Task 20 — Number Conversion
// Predict the output:
// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("a1"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// Your notes specifically cover these conversions.
console.log("Number conversion: 0, 0, 123, NaN, 1, 0, NaN, 0");
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(123));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
console.log("Boolean conversion: false, false, true, true, true, false, false, false, true, true");
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// 🔴 Flow Control Tasks
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else
    let age3 = Number(prompt("Enter your age:"));

if (age3 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.
let numberr = Number(prompt("Enter a number:"));

if (numberr > 0) {
    console.log("Positive");
} else if (numberr < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
} else if (marks >= 0 && marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}

// 🟣 Nested If Task
// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.
let age4 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age4 >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60");
        }

    } else {
        console.log("You are not selected because your height is below 160");
    }

} else {
    console.log("You are not selected because your age is below 18");
}

// 🟡 Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go
let color = prompt("Enter traffic light color:");

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}

// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day
let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// 🏆 FINAL MINI PROJECT
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City
let nname = prompt("Enter your name:");
let aage = Number(prompt("Enter your age:"));
let ccity = prompt("Enter your city:");

// Step 2 — Get marks
// Tamil
// English
// Maths
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));
// Step 3 — Calculate
// Total
// Average
let totall = tamil + english + maths;
let average = totall / 3;
// Step 4 — Check result
// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}
// Step 5 — Check voting
// Age >= 18
let voting;

if (aage >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible
console.log(`
Name: ${nname}
Age: ${aage}
City: ${ccity}
Total: ${totall}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);