// ==========================================
// TASK 1 — For Loop
// ==========================================
console.log("TASK 1");

for (let task1Index = 1; task1Index <= 10; task1Index++) {
    console.log(task1Index);
}


// ==========================================
// TASK 2 — Reverse Numbers
// ==========================================
console.log("\nTASK 2");

for (let task2Index = 10; task2Index >= 1; task2Index--) {
    console.log(task2Index);
}


// ==========================================
// TASK 3 — Even Numbers
// ==========================================
console.log("\nTASK 3");

for (let task3Index = 1; task3Index <= 20; task3Index++) {
    if (task3Index % 2 === 0) {
        console.log(task3Index);
    }
}


// ==========================================
// TASK 4 — Odd Numbers
// ==========================================
console.log("\nTASK 4");

for (let task4Index = 1; task4Index <= 20; task4Index++) {
    if (task4Index % 2 !== 0) {
        console.log(task4Index);
    }
}


// ==========================================
// TASK 5 — Multiplication Table
// ==========================================
console.log("\nTASK 5");

let task5Number = 5;

for (let task5Index = 1; task5Index <= 10; task5Index++) {
    console.log(
        task5Number + " x " + task5Index + " = " +
        (task5Number * task5Index)
    );
}


// ==========================================
// TASK 6 — Countdown
// ==========================================
console.log("\nTASK 6");

let task6Count = 10;

while (task6Count >= 1) {
    console.log(task6Count);
    task6Count--;
}


// ==========================================
// TASK 7 — Sum of Numbers
// ==========================================
console.log("\nTASK 7");

let task7Index = 1;
let task7Sum = 0;

while (task7Index <= 10) {
    task7Sum = task7Sum + task7Index;
    task7Index++;
}

console.log("Sum:", task7Sum);


// ==========================================
// TASK 8 — Do While
// ==========================================
console.log("\nTASK 8");

let task8Number = 1;

do {
    console.log(task8Number);
    task8Number++;
} while (task8Number <= 5);


// ==========================================
// TASK 9 — Do While Understanding
// ==========================================
console.log("\nTASK 9");

let task9Number = 10;

do {
    console.log(task9Number);
    task9Number++;
} while (task9Number <= 5);


// ==========================================
// TASK 10 — String Characters
// ==========================================
console.log("\nTASK 10");

let task10Name = "javascript";

for (let task10Character of task10Name) {
    console.log(task10Character);
}


// ==========================================
// TASK 11 — Array Values
// ==========================================
console.log("\nTASK 11");

let task11Fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let task11Fruit of task11Fruits) {
    console.log(task11Fruit);
}


// ==========================================
// TASK 12 — Student Names
// ==========================================
console.log("\nTASK 12");

let task12Students = [
    "Arun",
    "Priya",
    "Rahul",
    "Kavya",
    "Vijay"
];

for (let task12Student of task12Students) {
    console.log("Student: " + task12Student);
}


// ==========================================
// TASK 13 — Employee Object
// ==========================================
console.log("\nTASK 13");

let task13Employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let task13Key in task13Employee) {
    console.log(
        task13Key,
        task13Employee[task13Key]
    );
}


// ==========================================
// TASK 14 — Product Object
// ==========================================
console.log("\nTASK 14");

let task14Product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let task14Key in task14Product) {
    console.log(
        task14Key,
        task14Product[task14Key]
    );
}


// ==========================================
// TASK 15 — Simple Function
// ==========================================
console.log("\nTASK 15");

function task15Welcome() {
    console.log("Welcome to JavaScript");
}

task15Welcome();
task15Welcome();
task15Welcome();


// ==========================================
// TASK 16 — Function With Parameter
// ==========================================
console.log("\nTASK 16");

function task16Greet(task16PersonName) {
    console.log("Hello " + task16PersonName);
}

task16Greet("Naveen");
task16Greet("Arun");
task16Greet("Priya");


// ==========================================
// TASK 17 — Multiple Parameters
// ==========================================
console.log("\nTASK 17");

function task17DisplayStudent(
    task17StudentName,
    task17StudentAge,
    task17Department
) {
    console.log("Name:", task17StudentName);
    console.log("Age:", task17StudentAge);
    console.log("Department:", task17Department);
}

task17DisplayStudent("Arun", 25, "IT");
task17DisplayStudent("Priya", 24, "HR");
task17DisplayStudent("Rahul", 23, "Finance");


// ==========================================
// TASK 18 — Addition Function
// ==========================================
console.log("\nTASK 18");

function task18Add(task18X, task18Y) {
    return task18X + task18Y;
}

let task18Result = task18Add(10, 20);

console.log("Result:", task18Result);


// ==========================================
// TASK 19 — Salary
// ==========================================
console.log("\nTASK 19");

function task19Salary(task19Amount) {
    return task19Amount;
}

let task19EmployeeSalary = task19Salary(50000);

console.log("Salary:", task19EmployeeSalary);


// ==========================================
// TASK 20 — Bonus Calculator
// ==========================================
console.log("\nTASK 20");

function task20Bonus(
    task20SalaryAmount,
    task20BonusAmount
) {
    return task20SalaryAmount + task20BonusAmount;
}

let task20Total = task20Bonus(50000, 5000);

console.log("Total Salary:", task20Total);


// ==========================================
// TASK 21 — Default Parameter
// ==========================================
console.log("\nTASK 21");

function task21EmployeeDetails(
    task21EmployeeName,
    task21Role = "Developer"
) {
    console.log("Name:", task21EmployeeName);
    console.log("Role:", task21Role);
}

task21EmployeeDetails("Arun");
task21EmployeeDetails("Priya", "Designer");


// ==========================================
// TASK 22 — Named Function
// ==========================================
console.log("\nTASK 22");

function task22Square(task22Number) {
    return task22Number * task22Number;
}

console.log(task22Square(2));
console.log(task22Square(5));
console.log(task22Square(10));
console.log(task22Square(7));
console.log(task22Square(8));


// ==========================================
// TASK 23 — Anonymous Function
// ==========================================
console.log("\nTASK 23");

let task23Calculate = function (
    task23A,
    task23B
) {
    return task23A + task23B;
};

console.log(task23Calculate(10, 20));


// ==========================================
// TASK 24 — Arrow Function
// ==========================================
console.log("\nTASK 24");

let task24Multiply = (
    task24A,
    task24B
) => {
    return task24A * task24B;
};

console.log(task24Multiply(10, 5));


// ==========================================
// TASK 25 — Scope
// ==========================================
console.log("\nTASK 25");

function task25Test() {

    if (true) {

        var task25ScopeA = 10;
        let task25ScopeB = 20;
        const task25ScopeC = 30;

        console.log(task25ScopeA);
        console.log(task25ScopeB);
        console.log(task25ScopeC);
    }

    console.log(task25ScopeA);
}

task25Test();


// ==========================================
// TASK 26 — Hoisting with var
// ==========================================
console.log("\nTASK 26");

console.log(task26HoistA);

var task26HoistA = 10;


// ==========================================
// TASK 27 — Hoisting with let
// ==========================================
console.log("\nTASK 27");

try {
    console.log(task27HoistB);
} catch (error) {
    console.log(
        "ReferenceError: Cannot access variable before initialization"
    );
}

let task27HoistB = 20;


// ==========================================
// TASK 28 — Hoisting with const
// ==========================================
console.log("\nTASK 28");

try {
    console.log(task28HoistC);
} catch (error) {
    console.log(
        "ReferenceError: Cannot access variable before initialization"
    );
}

const task28HoistC = 30;


// ==========================================
// TASK 29 — IIFE
// ==========================================
console.log("\nTASK 29");

(function () {
    console.log("Welcome to JavaScript");
})();

(function (
    task29ProductName,
    task29Discount
) {
    console.log(
        task29ProductName +
        " has " +
        task29Discount +
        "% discount"
    );
})("Laptop", 20);


// ==========================================
// TASK 30 — Callback / Higher-Order Function
// ==========================================
console.log("\nTASK 30");

function task30WelcomeCallback() {
    console.log("Welcome");
}

function task30Execute(task30Callback) {
    task30Callback();
}

task30Execute(task30WelcomeCallback);


// ==========================================
// TASK 31 — Generator Function
// ==========================================
console.log("\nTASK 31");

function* task31Cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let task31CashbackResult = task31Cashback();

for (let task31Value of task31CashbackResult) {
    console.log(task31Value);
}


// ==========================================
// TASK 32 — Employee Management System
// ==========================================
console.log("\nTASK 32");

let task32Employees = [
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
    },
    {
        name: "Rahul",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    },
    {
        name: "Kavya",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 42000
    }
];


// 1. for...of

console.log("\n--- All Employees ---");

for (let task32Employee of task32Employees) {
    console.log(task32Employee);
}


// 2. for...in

console.log("\n--- Employee Keys and Values ---");

for (let task32Employee of task32Employees) {

    for (let task32Key in task32Employee) {
        console.log(
            task32Key,
            task32Employee[task32Key]
        );
    }

    console.log("----------------");
}


// 3 & 4. Function + Parameters

function task32DisplayEmployee(
    task32Name,
    task32Age,
    task32Department,
    task32Role,
    task32Salary
) {
    console.log("Name:", task32Name);
    console.log("Age:", task32Age);
    console.log("Department:", task32Department);
    console.log("Role:", task32Role);
    console.log("Salary:", task32Salary);
}


// Pass employee information to function

console.log("\n--- Employee Information ---");

for (let task32Employee of task32Employees) {

    task32DisplayEmployee(
        task32Employee.name,
        task32Employee.age,
        task32Employee.department,
        task32Employee.role,
        task32Employee.salary
    );

    console.log("----------------");
}


// 5. Return

function task32GetSalary(task32Employee) {
    return task32Employee.salary;
}

let task32ArunSalary =
    task32GetSalary(task32Employees[0]);

console.log(
    "\nArun Salary:",
    task32ArunSalary
);


// 6. Condition

console.log("\n--- Salary >= 40000 ---");

for (let task32Employee of task32Employees) {

    if (task32Employee.salary >= 40000) {
        console.log(
            task32Employee.name +
            " has salary >= 40000"
        );
    }
}


// 7. Arrow Function

let task32AnnualSalary = (
    task32Salary
) => {
    return task32Salary * 12;
};

console.log(
    "\nAnnual Salary:",
    task32AnnualSalary(40000)
);


// 8. Generator — Employee Benefits

function* task32Benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("\n--- Employee Benefits ---");

let task32EmployeeBenefits =
    task32Benefits();

for (
    let task32Benefit of task32EmployeeBenefits
) {
    console.log(task32Benefit);
}