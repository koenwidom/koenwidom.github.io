//problem 1
const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },

    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];


console.log("Q1:", JSON.parse(JSON.stringify(employees)));

// problem 2
const company = {
    name: "Tech Stars",
    site: "www.techstars.site",
    employees: employees
};


console.log("Q2:", JSON.parse(JSON.stringify(company)));

// problem 3
const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
}

company.employees.push(newEmployee);


console.log("Q3:", JSON.parse(JSON.stringify(company)));

//problem 4
// shorthand loop: total is start #, stores running total, passed as 0, god I love JS
const totSal = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log("Q4:", totSal);

//problem 5
function raise(company) {
    for (let emp of company.employees) {
        if (emp.raiseEligible) {
            emp.salary = emp.salary*1.1;
            emp.raiseEligible = false;
        }
    }
};

raise(company);

console.log("Q5:", JSON.parse(JSON.stringify(company)));

//problem 6
const workingFromHome = ["Anna", "Sam"];

function wfh(company) {
    for (let emp of company.employees) {
        emp.wfh = workingFromHome.includes(emp.firstName);
    }
};

wfh(company);

console.log("Q6:", JSON.parse(JSON.stringify(company)));