// =====================================================
// TASK 1 — Variables: var, let, const
// =====================================================

console.log("\n========== TASK 1 ==========");

var studentName1 = "Chaitu";
let studentAge1 = 21;
const studentCity1 = "BVRM";
let studentCollege1 = "Vishnu";

console.log("Name:", studentName1);
console.log("Age:", studentAge1);
console.log("City:", studentCity1);
console.log("College:", studentCollege1);

// Change var
studentName1 = "Chaitanya";
console.log("Changed var:", studentName1);

// Change let
studentAge1 = 22;
console.log("Changed let:", studentAge1);

// Try changing const
try {
    studentCity1 = "Chennai";
} catch (error) {
    console.log("Const error:", error.message);
}

// Redeclare var
var studentName1 = "CKV";
console.log("Redeclared var:", studentName1);

// let can be declared in another block
{
    let studentAge1 = 30;
    console.log("let inside block:", studentAge1);
}


// =====================================================
// TASK 2 — Printing Statements
// =====================================================

console.log("\n========== TASK 2 ==========");

console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Are you ready?");

let userName2 = prompt("Enter your name:");
console.log("User Name:", userName2);

document.writeln("Hello from JavaScript");


// =====================================================
// TASK 3 — User Details
// =====================================================

console.log("\n========== TASK 3 ==========");

let userName3 = prompt("Enter your name:");
let userAge3 = prompt("Enter your age:");
let userCity3 = prompt("Enter your city:");
let userQualification3 = prompt("Enter your qualification:");

console.log("Name:", userName3);
console.log("Age:", userAge3);
console.log("City:", userCity3);
console.log("Qualification:", userQualification3);


// =====================================================
// TASK 4 — Find Data Types
// =====================================================

console.log("\n========== TASK 4 ==========");

let language4 = "JavaScript";
let number4 = 100;
let decimal4 = 99.5;
let isStudent4 = true;
let isWorking4 = false;
let undefinedValue4;
let nullValue4 = null;

console.log(language4, "=>", typeof language4);
console.log(number4, "=>", typeof number4);
console.log(decimal4, "=>", typeof decimal4);
console.log(isStudent4, "=>", typeof isStudent4);
console.log(isWorking4, "=>", typeof isWorking4);
console.log(undefinedValue4, "=>", typeof undefinedValue4);
console.log(nullValue4, "=>", typeof nullValue4);


// =====================================================
// TASK 5 — Student Array
// =====================================================

console.log("\n========== TASK 5 ==========");

let students5 = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
];

console.log("First student:", students5[0]);
console.log("Second student:", students5[1]);
console.log("Last student:", students5[students5.length - 1]);
console.log("Total students:", students5.length);


// =====================================================
// TASK 6 — Employee Object
// =====================================================

console.log("\n========== TASK 6 ==========");

let employee6 = {
    name: "Chaitu",
    age: 21,
    role: "Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};

console.log("Employee Name:", employee6.name);
console.log("Age:", employee6.age);
console.log("Role:", employee6.role);
console.log("First Skill:", employee6.skills[0]);

console.log(
    "Last Qualification:",
    employee6.qualification[
        employee6.qualification.length - 1
    ]
);

console.log("Working Status:", employee6.isWorking);


// =====================================================
// TASK 7 — Calculator
// =====================================================

console.log("\n========== TASK 7 ==========");

let calculatorA7 = 20;
let calculatorB7 = 5;

console.log("Addition:", calculatorA7 + calculatorB7);
console.log("Subtraction:", calculatorA7 - calculatorB7);
console.log("Multiplication:", calculatorA7 * calculatorB7);
console.log("Division:", calculatorA7 / calculatorB7);
console.log("Modulus:", calculatorA7 % calculatorB7);
console.log("Exponentiation:", calculatorA7 ** calculatorB7);


// =====================================================
// TASK 8 — Shopping Bill
// =====================================================

console.log("\n========== TASK 8 ==========");

let shirt8 = 999;
let pant8 = 1499;
let shoes8 = 1999;
let bag8 = 799;

let shoppingTotal8 =
    shirt8 + pant8 + shoes8 + bag8;

console.log("Total Price:", shoppingTotal8);


// =====================================================
// TASK 9 — Increment & Decrement
// =====================================================

console.log("\n========== TASK 9 ==========");

// A — Post Increment
let incrementA9 = 10;
let incrementB9 = incrementA9++;

console.log("A - a:", incrementA9);
console.log("A - b:", incrementB9);

// B — Pre Increment
let incrementA9b = 10;
let incrementB9b = ++incrementA9b;

console.log("B - a:", incrementA9b);
console.log("B - b:", incrementB9b);

// C — Post Decrement
let decrementA9 = 10;
let decrementB9 = decrementA9--;

console.log("C - a:", decrementA9);
console.log("C - b:", decrementB9);

// D — Pre Decrement
let decrementA9d = 10;
let decrementB9d = --decrementA9d;

console.log("D - a:", decrementA9d);
console.log("D - b:", decrementB9d);


// =====================================================
// TASK 10 — Assignment Operators
// =====================================================

console.log("\n========== TASK 10 ==========");

let assignmentNum10 = 10;

assignmentNum10 += 5;
console.log("+= :", assignmentNum10);

assignmentNum10 = 10;
assignmentNum10 -= 3;
console.log("-= :", assignmentNum10);

assignmentNum10 = 10;
assignmentNum10 *= 2;
console.log("*= :", assignmentNum10);

assignmentNum10 = 10;
assignmentNum10 /= 4;
console.log("/= :", assignmentNum10);

assignmentNum10 = 10;
assignmentNum10 %= 3;
console.log("%= :", assignmentNum10);

assignmentNum10 = 10;
assignmentNum10 **= 2;
console.log("**= :", assignmentNum10);


// =====================================================
// TASK 11 — Comparison Operators
// =====================================================

console.log("\n========== TASK 11 ==========");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


// =====================================================
// TASK 12 — AND Operator
// =====================================================

console.log("\n========== TASK 12 ==========");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// =====================================================
// TASK 13 — OR Operator
// =====================================================

console.log("\n========== TASK 13 ==========");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// =====================================================
// TASK 14 — NOT Operator
// =====================================================

console.log("\n========== TASK 14 ==========");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// =====================================================
// TASK 15 — Combination
// =====================================================

console.log("\n========== TASK 15 ==========");

console.log(
    5 == "5" && !(5 === 5) || 6 > 7
);

console.log(
    10 > 5 && 8 < 12 || 4 === "4"
);

console.log(
    7 === 7 && 10 != "10" || 5 >= 5
);

console.log(
    15 < 10 || 20 > 15 && 5 == "5"
);


// =====================================================
// TASK 16 — Ternary Operator - Voting
// =====================================================

console.log("\n========== TASK 16 ==========");

let votingAge16 = 20;

let votingResult16 =
    votingAge16 >= 18
        ? "Eligible to vote"
        : "Not eligible";

console.log(votingResult16);


// =====================================================
// TASK 17 — Ternary Operator - Password
// =====================================================

console.log("\n========== TASK 17 ==========");

let password17 = true;

let passwordResult17 =
    password17
        ? "Login successful"
        : "Wrong password";

console.log(passwordResult17);


// =====================================================
// TASK 18 — User Introduction
// =====================================================

console.log("\n========== TASK 18 ==========");

let introductionName18 = "Naveen";
let introductionAge18 = 25;
let introductionCity18 = "Trichy";

// Using +
console.log(
    "My name is " + introductionName18 +
    ". I am " + introductionAge18 +
    " years old. I live in " +
    introductionCity18 + "."
);

// Using template literals
console.log(
    `My name is ${introductionName18}. I am ${introductionAge18} years old. I live in ${introductionCity18}.`
);


// =====================================================
// TASK 19 — String Conversion
// =====================================================

console.log("\n========== TASK 19 ==========");

let stringConversion19a = String(100);
let stringConversion19b = String(true);
let stringConversion19c = String(undefined);
let stringConversion19d = String(null);
let stringConversion19e = String([1, 2]);

console.log(
    stringConversion19a,
    typeof stringConversion19a
);

console.log(
    stringConversion19b,
    typeof stringConversion19b
);

console.log(
    stringConversion19c,
    typeof stringConversion19c
);

console.log(
    stringConversion19d,
    typeof stringConversion19d
);

console.log(
    stringConversion19e,
    typeof stringConversion19e
);


// =====================================================
// TASK 20 — Number Conversion
// =====================================================

console.log("\n========== TASK 20 ==========");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// =====================================================
// TASK 21 — Boolean Conversion
// =====================================================

console.log("\n========== TASK 21 ==========");

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


// =====================================================
// TASK 22 — Voting Eligibility
// =====================================================

console.log("\n========== TASK 22 ==========");

let votingAge22 =
    Number(prompt("Enter your age:"));

if (votingAge22 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// =====================================================
// TASK 23 — Positive or Negative
// =====================================================

console.log("\n========== TASK 23 ==========");

let checkNumber23 =
    Number(prompt("Enter a number:"));

if (checkNumber23 > 0) {
    console.log("Positive");
} else if (checkNumber23 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// =====================================================
// TASK 24 — Grade System
// =====================================================

console.log("\n========== TASK 24 ==========");

let marks24 =
    Number(prompt("Enter your marks:"));

if (marks24 >= 90 && marks24 <= 100) {
    console.log("A Grade");
} else if (marks24 >= 80 && marks24 < 90) {
    console.log("B Grade");
} else if (marks24 >= 70 && marks24 < 80) {
    console.log("C Grade");
} else if (marks24 >= 60 && marks24 < 70) {
    console.log("D Grade");
} else if (marks24 >= 0 && marks24 < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}


// =====================================================
// TASK 25 — Nested If - Job Eligibility
// =====================================================

console.log("\n========== TASK 25 ==========");

let jobAge25 =
    Number(prompt("Enter your age:"));

let jobHeight25 =
    Number(prompt("Enter your height:"));

let jobWeight25 =
    Number(prompt("Enter your weight:"));

if (jobAge25 >= 18) {

    if (jobHeight25 >= 160) {

        if (jobWeight25 >= 60) {

            console.log(
                "Congratulations! You are selected"
            );

        } else {

            console.log(
                "You are not selected because your weight is below 60"
            );
        }

    } else {

        console.log(
            "You are not selected because your height is below 160"
        );
    }

} else {

    console.log(
        "You are not selected because your age is below 18"
    );
}


// =====================================================
// TASK 26 — Switch - Traffic Light
// =====================================================

console.log("\n========== TASK 26 ==========");

let trafficColor26 =
    prompt("Enter traffic light color:");

switch (trafficColor26) {

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


// =====================================================
// TASK 27 — Switch - Day
// =====================================================

console.log("\n========== TASK 27 ==========");

let day27 = 1;

switch (day27) {

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


// =====================================================
// TASK 28 — Student Result System
// =====================================================

console.log("\n========== TASK 28 ==========");

// Step 1 — Get student details

let resultStudentName28 =
    prompt("Enter your name:");

let resultStudentAge28 =
    Number(prompt("Enter your age:"));

let resultStudentCity28 =
    prompt("Enter your city:");


// Step 2 — Get marks

let tamilMarks28 =
    Number(prompt("Enter Tamil marks:"));

let englishMarks28 =
    Number(prompt("Enter English marks:"));

let mathsMarks28 =
    Number(prompt("Enter Maths marks:"));


// Step 3 — Calculate total and average

let resultTotal28 =
    tamilMarks28 +
    englishMarks28 +
    mathsMarks28;

let resultAverage28 =
    resultTotal28 / 3;


// Step 4 — Check grade

let resultGrade28;

if (resultAverage28 >= 90) {

    resultGrade28 = "A";

} else if (resultAverage28 >= 80) {

    resultGrade28 = "B";

} else if (resultAverage28 >= 70) {

    resultGrade28 = "C";

} else if (resultAverage28 >= 60) {

    resultGrade28 = "D";

} else {

    resultGrade28 = "Fail";
}


// Step 5 — Check voting eligibility

let resultVoting28;

if (resultStudentAge28 >= 18) {

    resultVoting28 = "Eligible";

} else {

    resultVoting28 = "Not Eligible";
}


// Step 6 — Display result

console.log(`
Name: ${resultStudentName28}
Age: ${resultStudentAge28}
City: ${resultStudentCity28}
Total: ${resultTotal28}
Average: ${resultAverage28.toFixed(2)}
Grade: ${resultGrade28}
Voting: ${resultVoting28}
`);
