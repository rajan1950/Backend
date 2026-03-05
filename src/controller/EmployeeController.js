const employees = [
  { id: 1001, name: "vinit", salary: 3000 },
  { id: 1002, name: "shubh", salary: 28000 },
  { id: 1003, name: "Avi", salary: 31000 },
];

const getAllEmployees = (req, res) => {
  res.json({
    message: "All employees",
    data: employees,
  });
};
// 👉 Employee by Salar
// //localhost:4000/employee/salary/30000

// 👉 Salary Filter API
// Example: /employee/salary/30000
const getEmployeeBySalary = (req, res) => {
  const salary = parseInt(req.params.salary);

  // filter employees whose salary is less than given salary
  const filteredEmployees = employees.filter(
    (emp) => emp.salary < salary
  );

  if (filteredEmployees.length > 0) {
    res.json({
      message: `Employees having salary less than ${salary}`,
      data: filteredEmployees,
    });
  } else {
    res.status(404).json({
      message: "No employee found",
    });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeBySalary,
};