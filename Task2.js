// ==========================================
// TASK 1 — var, let, const
// ==========================================

// Create three variables
var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";

// 1. Print all three values
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// 2. Change the var value
studentName = "Rahul";
console.log("Changed var value:", studentName);

// 3. Change the let value
studentAge = 23;
console.log("Changed let value:", studentAge);

// 4. Try changing the const value
try {
    collegeName = "XYZ College";
} catch (error) {
    console.log("Error while changing const:", error.message);
}

// 5. Redeclare the var variable
var studentName = "Arun";
console.log("Redeclared var value:", studentName);

// 6. Try redeclaring the let variable
try {
    let studentAge = 25;
    console.log("Redeclared let value inside block:", studentAge);
} catch (error) {
    console.log("Error while redeclaring let:", error.message);
}


// ==========================================
// TASK 2 — User Information
// ==========================================

// Get information from the user using prompt()
let username = prompt("Enter your name:");
let userage = prompt("Enter your age:");
let usercity = prompt("Enter your city:");

// Print the result in the console
console.log("Name:", username);
console.log("Age:", userage);
console.log("City:", usercity);


// ==========================================
// TASK 3 — Welcome Message
// ==========================================

// Get user's name using prompt()
let userName = prompt("Enter your name:");

// Display welcome message using alert()
alert("Welcome " + userName + "!");


// ==========================================
// TASK 4 — Age Calculator
// ==========================================

// Ask the user for their birth year
let birthYear = prompt("Enter your birth year:");

// Convert birth year into number
birthYear = Number(birthYear);

// Get current year
let currentYear = new Date().getFullYear();

// Calculate approximate age
let calculatedAge = currentYear - birthYear;

// Print the age in the console
console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);


// ==========================================
// TASK 5 — Identify Data Types
// ==========================================

// Create variables containing different data types
let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

// Use typeof and print each data type
console.log(value1, "=>", typeof value1);
console.log(value2, "=>", typeof value2);
console.log(value3, "=>", typeof value3);
console.log(value4, "=>", typeof value4);
console.log(value5, "=>", typeof value5);
console.log(value6, "=>", typeof value6);
console.log(value7, "=>", typeof value7);


// ==========================================
// TASK 6 — Student Data
// ==========================================

// Create an object
const studentData = {
    name: "Chaitu",
    age: 21,
    city: "Hyderabad",
    qualification: "B.Tech",
    isStudent: true
};

// 1. Complete object
console.log("Complete Object:", studentData);

// 2. Name
console.log("Name:", studentData.name);

// 3. Age
console.log("Age:", studentData.age);

// 4. Qualification
console.log("Qualification:", studentData.qualification);

// 5. isStudent
console.log("Is Student:", studentData.isStudent);


// ==========================================
// TASK 7 — Fruit Array
// ==========================================

// Create an array containing 6 fruits
const fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

// 1. First fruit
console.log("First fruit:", fruits[0]);

// 2. Second fruit
console.log("Second fruit:", fruits[1]);

// 3. Last fruit
console.log("Last fruit:", fruits[fruits.length - 1]);

// 4. Total number of fruits
console.log("Total number of fruits:", fruits.length);


// ==========================================
// TASK 8 — Basic Calculator
// ==========================================

let numA = 20;
let numB = 5;

// Addition
console.log("Addition:", numA + numB);

// Subtraction
console.log("Subtraction:", numA - numB);

// Multiplication
console.log("Multiplication:", numA * numB);

// Division
console.log("Division:", numA / numB);

// Modulus
console.log("Modulus:", numA % numB);

// Exponentiation
console.log("Exponentiation:", numA ** numB);


// ==========================================
// TASK 9 — Shopping Bill
// ==========================================

let shirt = 999;
let pant = 1499;
let shoes = 1999;

// Calculate total price
let total = shirt + pant + shoes;

console.log("Total =", total);


// ==========================================
// TASK 10 — Simple Marks Calculation
// ==========================================

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// ==========================================
// TASK 11 — Post Increment
// ==========================================

let a11 = 10;

let b11 = a11++;

console.log("Task 11 - a:", a11);
console.log("Task 11 - b:", b11);


// ==========================================
// TASK 12 — Pre Increment
// ==========================================

let a12 = 10;

let b12 = ++a12;

console.log("Task 12 - a:", a12);
console.log("Task 12 - b:", b12);


// ==========================================
// TASK 13 — Post Decrement
// ==========================================

let a13 = 20;

let b13 = a13--;

console.log("Task 13 - a:", a13);
console.log("Task 13 - b:", b13);


// ==========================================
// TASK 14 — Pre Decrement
// ==========================================

let a14 = 20;

let b14 = --a14;

console.log("Task 14 - a:", a14);
console.log("Task 14 - b:", b14);


// ==========================================
// TASK 15 — Find the Final Values
// ==========================================

let a15 = 5;

let b15 = a15++;

let c15 = ++a15;

let d15 = b15--;

console.log("Task 15 - a:", a15);
console.log("Task 15 - b:", b15);
console.log("Task 15 - c:", c15);
console.log("Task 15 - d:", d15);


// ==========================================
// TASK 16 — Assignment Operators
// ==========================================

// +=
let num1 = 10;
num1 += 5;
console.log("+= :", num1);

// -=
let num2 = 10;
num2 -= 5;
console.log("-= :", num2);

// *=
let num3 = 10;
num3 *= 5;
console.log("*= :", num3);

// /=
let num4 = 10;
num4 /= 5;
console.log("/= :", num4);

// %=
let num5 = 10;
num5 %= 5;
console.log("%= :", num5);

// **=
let num6 = 10;
num6 **= 5;
console.log("**= :", num6);


// ==========================================
// TASK 17 — Mini Student Profile
// ==========================================

// Variables
let names = "Chaitu";
let age = 21;
let city = "Hyderabad";
let college = "ABC College";

// Array
let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Python"
];

// Object
let student = {
    name: names,
    age: age,
    city: city,
    college: college,
    subjects: subjects,
    isStudent: true
};

// Print details
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("City:", student.city);
console.log("College:", student.college);
console.log("First Subject:", student.subjects[0]);
console.log(
    "Last Subject:",
    student.subjects[student.subjects.length - 1]
);
console.log("Total Subjects:", student.subjects.length);
console.log("Complete Object:", student);

