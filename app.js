
const express = require("express"); //express module
const dbConnection = require("./src/utils/DBConnection");

const app = express();

app.use(express.json()); //middleware to parse JSON request bodies
// Connect to MongoDB
dbConnection();





const employeeRoutes = require("./src/routes/EmployeeRoutes");
app.use("/emp",employeeRoutes);



//localhost:4000/user/users
const userRoutes = require("./src/routes/UserRoutes");
app.use("/user",userRoutes)


//localhost:4000/emp/employees
const productRoutes = require("./src/routes/ProductRoute");
app.use("/prod",productRoutes)




//localhost:4000/Users  
//localhost:4000/Userdata
//localhost:4000/allUser
//localhost:4000/user/101
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})