// ======================================================
// TASK 1 — STUDENT RESULT ANALYZER
// ======================================================

function analyzeStudent(name, department, marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    let result;
    let grade;

    if (average >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("===== TASK 1: STUDENT RESULT =====");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total Marks:", total);
    console.log("Average:", average.toFixed(2));
    console.log("Result:", result);
    console.log("Grade:", grade);
}

analyzeStudent(
    "Arun",
    "Computer Science",
    [85, 90, 78, 92, 88]
);


// ======================================================
// TASK 2 — employeee SALARY CALCULATOR
// ======================================================

let employeee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employeee) {
    let basicSalary = employeee.salary;
    let bonus = 0;

    if (employeee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employeee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("\n===== TASK 2: SALARY CALCULATOR =====");
    console.log("Name:", employeee.name);
    console.log("Role:", employeee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);

    return finalSalary;
}

calculateSalary(employeee);


// ======================================================
// TASK 3 — PRODUCT FILTER SYSTEM
// ======================================================

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

console.log("\n===== TASK 3: PRODUCT FILTER =====");

let productsAbove2000 = products.filter(
    product => product.price > 2000
);
console.log("Products above ₹2,000:", productsAbove2000);

let electronics = products.filter(
    product => product.category === "electronics"
);
console.log("Electronics:", electronics);

let productBelow1000 = products.find(
    product => product.price < 1000
);
console.log("First product below ₹1,000:", productBelow1000);

let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);
console.log("Total price:", totalProductPrice);

let anyAbove50000 = products.some(
    product => product.price > 50000
);
console.log("Any product above ₹50,000:", anyAbove50000);

let everyAbove500 = products.every(
    product => product.price > 500
);
console.log("Every product above ₹500:", everyAbove500);


// ======================================================
// TASK 4 — employeee MANAGEMENT
// ======================================================

let employeeeList = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 55000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Full Stack Developer",
        salary: 70000
    },
    {
        id: 105,
        name: "Meena",
        role: "HR Manager",
        salary: 50000
    },
    {
        id: 106,
        name: "Karthi",
        role: "Software Tester",
        salary: 42000
    }
];

console.log("\n===== TASK 4: employeee MANAGEMENT =====");

let allemployeeeNames = employeeeList.map(
    employeee => employeee.name
);
console.log("employeee Names:", allemployeeeNames);

let employeeesAbove40000 = employeeeList.filter(
    employeee => employeee.salary > 40000
);
console.log("employeees earning above ₹40,000:", employeeesAbove40000);

let employeeeId103 = employeeeList.find(
    employeee => employeee.id === 103
);
console.log("employeee ID 103:", employeeeId103);

let totalemployeeeSalary = employeeeList.reduce(
    (total, employeee) => total + employeee.salary,
    0
);
console.log("Total Salary:", totalemployeeeSalary);

let highestPaidemployeee = employeeeList.reduce(
    (highest, employeee) =>
        employeee.salary > highest.salary ? employeee : highest
);
console.log("Highest Paid employeee:", highestPaidemployeee);

let sortedemployeees = [...employeeeList].sort(
    (a, b) => b.salary - a.salary
);
console.log("employeees High to Low:", sortedemployeees);

let namesOnly = employeeeList.map(
    employeee => employeee.name
);
console.log("Names Only:", namesOnly);


// ======================================================
// TASK 5 — SHOPPING CART
// ======================================================

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    console.log("\n===== TASK 5: SHOPPING CART =====");

    let itemTotals = cart.map(item => {
        return {
            name: item.name,
            total: item.price * item.quantity
        };
    });

    console.log("Item Totals:", itemTotals);

    let totalCartValue = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalPayable = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalPayable);
}

calculateCart(cart);


// ======================================================
// TASK 6 — STUDENT SEARCH SYSTEM
// ======================================================

let Studentss = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

console.log("\n===== TASK 6: STUDENT SEARCH =====");

let studentNames = Studentss.map(
    student => student.name
);
console.log("Student Names:", studentNames);

let StudentssAbove80 = Studentss.filter(
    student => student.mark > 80
);
console.log("Studentss above 80:", StudentssAbove80);

let priya = Studentss.find(
    student => student.name === "Priya"
);
console.log("Student Priya:", priya);

let totalMarks = Studentss.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / Studentss.length;
console.log("Average Mark:", averageMark.toFixed(2));

let anyoneFailed = Studentss.some(
    student => student.mark < 50
);
console.log("Anyone Failed:", anyoneFailed);

let everyoneAbove40 = Studentss.every(
    student => student.mark > 40
);
console.log("Everyone scored above 40:", everyoneAbove40);

let StudentssSortedByMark = [...Studentss].sort(
    (a, b) => b.mark - a.mark
);
console.log("Studentss sorted by marks:", StudentssSortedByMark);


// ======================================================
// TASK 7 — ARRAY TRANSFORMATION
// ======================================================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

console.log("\n===== TASK 7: ARRAY TRANSFORMATION =====");

let doubledNumbers = numbers.map(
    number => number * 2
);
console.log("Numbers × 2:", doubledNumbers);

let evenNumbers = numbers.filter(
    number => number % 2 === 0
);
console.log("Even Numbers:", evenNumbers);

let numbersGreater15 = numbers.filter(
    number => number > 15
);
console.log("Numbers greater than 15:", numbersGreater15);

let firstGreater20 = numbers.find(
    number => number > 20
);
console.log("First number greater than 20:", firstGreater20);

let numbersTotal = numbers.reduce(
    (total, number) => total + number,
    0
);
console.log("Total:", numbersTotal);

let anyGreater40 = numbers.some(
    number => number > 40
);
console.log("Any number greater than 40:", anyGreater40);

let everyPositive = numbers.every(
    number => number > 0
);
console.log("Every number positive:", everyPositive);

let numbersDescending = [...numbers].sort(
    (a, b) => b - a
);
console.log("Highest to Lowest:", numbersDescending);


// ======================================================
// TASK 8 — STRING ANALYZER
// ======================================================

let sentence = prompt("Enter a sentence:");

console.log("\n===== TASK 8: STRING ANALYZER =====");

console.log("Original:", sentence);

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log(
    'Contains "JavaScript":',
    sentence.includes("JavaScript")
);

console.log(
    "First Character:",
    sentence.slice(0, 1)
);

console.log(
    "Last Character:",
    sentence.slice(-1)
);

let words = sentence.trim().split(/\s+/);

console.log(
    "Number of Words:",
    words.length
);

console.log(
    "Replace JavaScript:",
    sentence.replace("JavaScript", "Python")
);

console.log(
    "Sentence Array:",
    sentence.split(" ")
);


// ======================================================
// FINAL MINI PROJECT — employeee DASHBOARD
// ======================================================

let dashboardemployeees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log("\n====================================");
console.log("       employeee DASHBOARD");
console.log("====================================");


// 1. employeee List

console.log("\n1. ALL employeeeS");

dashboardemployeees.forEach(employeee => {
    console.log(
        employeee.id,
        employeee.name,
        employeee.department,
        employeee.salary,
        employeee.experience
    );
});


// 2. Search employeee by Name

let searchName = "Arun";

let searchedemployeee = dashboardemployeees.find(
    employeee =>
        employeee.name.toLowerCase() ===
        searchName.toLowerCase()
);

console.log("\n2. SEARCH employeee:", searchName);
console.log(searchedemployeee);


// 3. Department Filter

let department = "IT";

let departmentemployeees = dashboardemployeees.filter(
    employeee =>
        employeee.department.toLowerCase() ===
        department.toLowerCase()
);

console.log("\n3. DEPARTMENT FILTER:", department);
console.log(departmentemployeees);


// 4. Salary Filter

let salaryemployeees = dashboardemployeees.filter(
    employeee => employeee.salary > 50000
);

console.log("\n4. SALARY ABOVE ₹50,000");
console.log(salaryemployeees);


// 5. Total Company Salary

let companySalary = dashboardemployeees.reduce(
    (total, employeee) =>
        total + employeee.salary,
    0
);

console.log("\n5. TOTAL COMPANY SALARY:");
console.log("₹" + companySalary);


// 6. Highest Salary

let highestSalaryemployeee = dashboardemployeees.reduce(
    (highest, employeee) =>
        employeee.salary > highest.salary
            ? employeee
            : highest
);

console.log("\n6. HIGHEST PAID employeee:");
console.log(highestSalaryemployeee);


// 7. Experience More Than 3 Years

let experiencedemployeees = dashboardemployeees.filter(
    employeee => employeee.experience > 3
);

console.log("\n7. EXPERIENCE ABOVE 3 YEARS:");
console.log(experiencedemployeees);


// 8. Sort Low → High

let salaryLowToHigh = [...dashboardemployeees].sort(
    (a, b) => a.salary - b.salary
);

console.log("\n8. SALARY LOW → HIGH:");
console.log(salaryLowToHigh);


// 9. Sort High → Low

let salaryHighToLow = [...dashboardemployeees].sort(
    (a, b) => b.salary - a.salary
);

console.log("\n9. SALARY HIGH → LOW:");
console.log(salaryHighToLow);


// 10. Statistics

let totalemployeees = dashboardemployeees.length;

let totalSalary = dashboardemployeees.reduce(
    (total, employeee) =>
        total + employeee.salary,
    0
);

let highestSalary = Math.max(
    ...dashboardemployeees.map(
        employeee => employeee.salary
    )
);

let averageSalary =
    totalSalary / totalemployeees;

console.log("\n10. STATISTICS");
console.log("Total employeees:", totalemployeees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary);
console.log(
    "Average Salary: ₹" + averageSalary.toFixed(2)
);
