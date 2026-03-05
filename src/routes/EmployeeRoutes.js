const express = require("express");
const router = express.Router();

const {
  getAllEmployees,
  getEmployeeBySalary,
} = require("../controller/EmployeeController");

// Get all
router.get("/employee", getAllEmployees);

// Get by salary
router.get("/employee/salary/:salary", getEmployeeBySalary);

module.exports = router;