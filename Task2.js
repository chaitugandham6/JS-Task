// ==========================================
// TASK 1 — var, let, const
// ==========================================

var task1StudentName = "Naveen";
let task1StudentAge = 22;
const task1CollegeName = "ABC College";

console.log("Student Name:", task1StudentName);
console.log("Student Age:", task1StudentAge);
console.log("College Name:", task1CollegeName);

task1StudentName = "Rahul";
console.log("Changed var:", task1StudentName);

task1StudentAge = 23;
console.log("Changed let:", task1StudentAge);

try {
    task1CollegeName = "XYZ College";
} catch (error) {
    console.log("Const Error:", error.message);
}

// var can be redeclared
var task1StudentName = "Arun";
console.log("Redeclared var:", task1StudentName);

// let cannot be redeclared in same scope,
// but it can be declared inside another block.
{
    let task1StudentAge = 25;
    console.log("Block let:", task1StudentAge);
}


// ==========================================
// TASK 2 — User Information
// ==========================================

let task2Username = prompt("Enter your name:");
let task2UserAge = prompt("Enter your age:");
let task2UserCity = prompt("Enter your city:");

console.log("Name:", task2Username);
console.log("Age:", task2UserAge);
console.log("City:", task2UserCity);


// ==========================================
// TASK 3 — Welcome Message
// ==========================================

let task3UserName = prompt("Enter your name:");

alert("Welcome " + task3UserName + "!");


// ==========================================
// TASK 4 — Age Calculator
// ==========================================

let task4BirthYear = Number(
    prompt("Enter your birth year:")
);

let task4CurrentYear = new Date().getFullYear();

let task4CalculatedAge =
    task4CurrentYear - task4BirthYear;

console.log("Birth Year:", task4BirthYear);
console.log("Age:", task4CalculatedAge);


// ==========================================
// TASK 5 — Identify Data Types
// ==========================================

let task5StringValue = "Hello";
let task5NumberValue = 100;
let task5DecimalValue = 25.5;
let task5TrueValue = true;
let task5FalseValue = false;
let task5UndefinedValue = undefined;
let task5NullValue = null;

console.log(
    task5StringValue,
    "=>",
    typeof task5StringValue
);

console.log(
    task5NumberValue,
    "=>",
    typeof task5NumberValue
);

console.log(
    task5DecimalValue,
    "=>",
    typeof task5DecimalValue
);

console.log(
    task5TrueValue,
    "=>",
    typeof task5TrueValue
);

console.log(
    task5FalseValue,
    "=>",
    typeof task5FalseValue
);

console.log(
    task5UndefinedValue,
    "=>",
    typeof task5UndefinedValue
);

console.log(
    task5NullValue,
    "=>",
    typeof task5NullValue
);


// ==========================================
// TASK 6 — Student Data
// ==========================================

const task6StudentData = {
    name: "Chaitu",
    age: 21,
    city: "Hyderabad",
    qualification: "B.Tech",
    isStudent: true
};

console.log(
    "Complete Object:",
    task6StudentData
);

console.log(
    "Name:",
    task6StudentData.name
);

console.log(
    "Age:",
    task6StudentData.age
);

console.log(
    "Qualification:",
    task6StudentData.qualification
);

console.log(
    "Is Student:",
    task6StudentData.isStudent
);


// ==========================================
// TASK 7 — Fruit Array
// ==========================================

const task7Fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log(
    "First Fruit:",
    task7Fruits[0]
);

console.log(
    "Second Fruit:",
    task7Fruits[1]
);

console.log(
    "Last Fruit:",
    task7Fruits[task7Fruits.length - 1]
);

console.log(
    "Total Fruits:",
    task7Fruits.length
);


// ==========================================
// TASK 8 — Basic Calculator
// ==========================================

let task8NumberA = 20;
let task8NumberB = 5;

console.log(
    "Addition:",
    task8NumberA + task8NumberB
);

console.log(
    "Subtraction:",
    task8NumberA - task8NumberB
);

console.log(
    "Multiplication:",
    task8NumberA * task8NumberB
);

console.log(
    "Division:",
    task8NumberA / task8NumberB
);

console.log(
    "Modulus:",
    task8NumberA % task8NumberB
);

console.log(
    "Exponentiation:",
    task8NumberA ** task8NumberB
);


// ==========================================
// TASK 9 — Shopping Bill
// ==========================================

let task9ShirtPrice = 999;
let task9PantPrice = 1499;
let task9ShoesPrice = 1999;
let task9BagPrice = 799;

let task9Total =
    task9ShirtPrice +
    task9PantPrice +
    task9ShoesPrice +
    task9BagPrice;

console.log(
    "Shopping Total:",
    task9Total
);


// ==========================================
// TASK 10 — Marks Calculation
// ==========================================

let task10TamilMarks = 80;
let task10EnglishMarks = 75;
let task10MathsMarks = 90;

let task10TotalMarks =
    task10TamilMarks +
    task10EnglishMarks +
    task10MathsMarks;

let task10AverageMarks =
    task10TotalMarks / 3;

console.log(
    "Total Marks:",
    task10TotalMarks
);

console.log(
    "Average Marks:",
    task10AverageMarks
);


// ==========================================
// TASK 11 — Post Increment
// ==========================================

let task11Value = 10;

let task11Result = task11Value++;

console.log(
    "Task 11 Value:",
    task11Value
);

console.log(
    "Task 11 Result:",
    task11Result
);


// ==========================================
// TASK 12 — Pre Increment
// ==========================================

let task12Value = 10;

let task12Result = ++task12Value;

console.log(
    "Task 12 Value:",
    task12Value
);

console.log(
    "Task 12 Result:",
    task12Result
);


// ==========================================
// TASK 13 — Post Decrement
// ==========================================

let task13Value = 20;

let task13Result = task13Value--;

console.log(
    "Task 13 Value:",
    task13Value
);

console.log(
    "Task 13 Result:",
    task13Result
);


// ==========================================
// TASK 14 — Pre Decrement
// ==========================================

let task14Value = 20;

let task14Result = --task14Value;

console.log(
    "Task 14 Value:",
    task14Value
);

console.log(
    "Task 14 Result:",
    task14Result
);


// ==========================================
// TASK 15 — Final Values
// ==========================================

let task15Value = 5;

let task15First = task15Value++;

let task15Second = ++task15Value;

let task15Third = task15First--;

console.log(
    "Task 15 Value:",
    task15Value
);

console.log(
    "Task 15 First:",
    task15First
);

console.log(
    "Task 15 Second:",
    task15Second
);

console.log(
    "Task 15 Third:",
    task15Third
);


// ==========================================
// TASK 16 — Assignment Operators
// ==========================================

// +=
let task16Add = 10;
task16Add += 5;
console.log("+= :", task16Add);

// -=
let task16Subtract = 10;
task16Subtract -= 5;
console.log("-= :", task16Subtract);

// *=
let task16Multiply = 10;
task16Multiply *= 5;
console.log("*= :", task16Multiply);

// /=
let task16Divide = 10;
task16Divide /= 5;
console.log("/= :", task16Divide);

// %=
let task16Modulus = 10;
task16Modulus %= 5;
console.log("%= :", task16Modulus);

// **=
let task16Power = 10;
task16Power **= 5;
console.log("**= :", task16Power);


// ==========================================
// TASK 17 — Mini Student Profile
// ==========================================

let task17Name = "Chaitu";
let task17Age = 21;
let task17City = "Hyderabad";
let task17College = "ABC College";

let task17Subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Python"
];

let task17Student = {
    name: task17Name,
    age: task17Age,
    city: task17City,
    college: task17College,
    subjects: task17Subjects,
    isStudent: true
};

console.log(
    "Student Name:",
    task17Student.name
);

console.log(
    "Student Age:",
    task17Student.age
);

console.log(
    "City:",
    task17Student.city
);

console.log(
    "College:",
    task17Student.college
);

console.log(
    "First Subject:",
    task17Student.subjects[0]
);

console.log(
    "Last Subject:",
    task17Student.subjects[
        task17Student.subjects.length - 1
    ]
);

console.log(
    "Total Subjects:",
    task17Student.subjects.length
);

console.log(
    "Complete Student Object:",
    task17Student
);
