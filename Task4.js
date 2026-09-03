// 🟢 Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected:
// 1
// 2
// 3
// ...
// 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 🟢 Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 🟢 Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2
// 4
// 6
// 8
// ...
// 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 🟢 Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 🟡 Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// 🔵 While Loop
// Task 6 — Countdown
// Using while, print:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55
let i1 = 1;
let sum = 0;

while (i1 <= 10) {
    sum = sum + i1;
    i1++;
}

console.log(sum);

// 🟣 Do While
// Task 8 — Print Numbers
// Use do...while to print:
// 1
// 2
// 3
// 4
// 5
let i2 = 1;

do {
    console.log(i2);
    i2++;
} while (i2 <= 5);

// Task 9 — Do While Understanding
// What is the output?
// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// Important: Explain why the output occurs even though the condition is false.
console.log("The output is 10 because the do while loop executes the block of code once before checking the condition.Since'a starts at 10, it prints 10 and then increments a to 11. After that it checks the condition (a <= 5), which is false, so the loop stops.");

// 🟠 For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.
let name = "javascript";

for (let character of name) {
    console.log(character);
}

// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.
let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...
let students = ["Arun", "Priya", "chaitu", "sushmi", "tobi"];

for (let student of students) {
    console.log("Student: " + student);
}

// 🔴 For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

// 🟡 Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     // code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya
function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.
function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("tobi", 3, "IT");
student("chaitu", 21, "CsE");
student("sushmi", 23, "ECE");

// 🔵 Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
//     // return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.
function salary(amount) {
    return amount;
}

let result1 = salary(50000);

console.log(result1);

// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000

// Total = 55000
function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log(total);

// 🟣 Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
// Find the output.
// This follows the default-parameter concept in your notes.
function createEmployee(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

createEmployee("Arun");
createEmployee("Priya", "Designer");

// 🔥 Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.
function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));

// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.
let calculate = function(a, b) {
    return a + b;
};

let result2 = calculate(10, 20);

console.log(result2);

// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };
let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));

// 🔴 Scope
// Task 25 — Predict the Output
// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test();
// Before running it, identify which values can be accessed.
// Your notes demonstrate var versus let/const inside a function and block.
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    // console.log(b);
    // console.log(c);
}

test();
console.log("The output is 10, 20, 30, 10, ReferenceError: b is not defined, ReferenceError: c is not defined. The variable a is declared with var and has function scope, so it can be accessed outside the if block. The variables b and c are declared with let and const, which have block scope so they cannot be accessed outside the if block.");

// 🟠 Hoisting
// Task 26 — Predict
// console.log(a);

// var a = 10;
// What happens?
console.log("The output is undefined. The variable a is hoisted to the top of its scope but its value is not assigned until the line where it is declared. so, when console.log(a) is executed a is undefined.");
// Task 27
// Predict:
// console.log(b);

// let b = 20;
console.log("The output is ReferenceError: Cannot access b before initialization. The variable b is declared with let, which is hoisted but not initialized. so when console.log(b) is executed it throws a ReferenceError because b cant be accesed until its declaration is evaluated.");
// Task 28
// Predict:
// console.log(c);

// const c = 30;
console.log("The output is ReferenceError: Cannot access c before initialization. The variable c is declared with const which is hoisted but not initialized. so when console.log(c) is executed it throws a ReferenceError because c cant be accesed until its declaration is evaluated.");
// Then explain the difference between the three.
console.log("The difference between var, let, and const is");
console.log("var: Has function scope and is hoisted with an initial value of undefined.");
console.log("let: Has block scope and is hoisted but not initialized.");
console.log("const: Has block scope and is hoisted but not initialized. It must be assigned a value when declared.");
// 🟢 IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
(function() {
    console.log("Welcome to JavaScript");
})();

// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

// Your notes demonstrate an IIFE using product and discount parameters.
console.log("The IIFE is a function that is defined and immediately invoked. It is used to create a new scope and avoid polluting the global namespace. In this example, the first IIFE prints a welcome message, while the second IIFE accepts parameters for product and discount and prints a discount message.");
// 🔵 Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcome);
function welcomeCallback() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeCallback);


// Understand which function is the callback and which function is the higher-order function.
console.log("the function welcome is the callback function because it is passed as an argument to another function. The function execute is the higher-order function because it accepts a function as an argument and invokes it.");
// 🟣 Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// Create the generator object and print all values using for...of.
// This matches the generator approach in your syllabus.
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result4 = cashback();

for (let value of result4) {
    console.log(value);
}
// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];
// Employee data

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];

// Requirements
// Use:
// 1. for...of
// Print every employee.
console.log("EMPLOYEE DETAILS");

for (let employee of employees) {
    console.log(employee);
}

// 2. for...in
// Print each employee's keys and values.
console.log("KEYS AND VALUES");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}
// 3. Function
// Create a function to display employee information.
// 4. Function parameters
// Pass employee information to the function.
function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}
console.log("DISPLAY EMPLOYEE");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}
// 5. Return
// Create a function that returns an employee's salary.
function getSalary(employee) {
    return employee.salary;
}

// 6. Condition
// Check:
// Salary >= 40000
console.log("SALARY CHECK");

for (let employee of employees) {

    let salary = getSalary(employee);

    if (salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}
// 7. Arrow function
// Create an arrow function for another simple calculation.
console.log("I CREATED ARROW FUNCTION FOR YEARLY SALARY");

let yearlySalary = (salary) => {
    return salary * 12;
};


console.log("YEARLY SALARY");

for (let employee of employees) {

    let yearly = yearlySalary(employee.salary);

    console.log(employee.name + ":", yearly);
}

// 8. Generator
// Create a generator that produces employee benefits:
// Medical Insurance
// Transport
// Food Allowance
// Bonus
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}


console.log("EMPLOYEE BENEFITS");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}