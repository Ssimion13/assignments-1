var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeData = function() {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
}

var employee1 = new Employee("Joe Schmoe", "Painter", 42000, "Part Time");
var employee2 = new Employee("Susan Smith", "Sculptor", 89000);
var employee3 = new Employee("John Jones", "Singer", 55000);

employee1.printEmployeeData();
employee2.printEmployeeData();
employee3.printEmployeeData();

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employees);
