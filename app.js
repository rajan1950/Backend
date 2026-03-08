const express = require("express"); //express module
const dbConnection = require("./src/utils/DBConnection");

const app = express();

app.use(express.json()); //middleware to parse JSON request bodies
// Connect to MongoDB
dbConnection();

//localhost:4000/emp/employees
const employeeRoutes = require("./src/routes/EmployeeRoutes");
app.use("/emp",employeeRoutes);

//localhost:4000/user/users
const userRoutes = require("./src/routes/UserRoutes");
app.use("/user",userRoutes)

//localhost:4000/prod/products
//http://localhost:4000/prod/products/search?name=iPhone
//localhost:4000/prod/products/search?category=electronics
//localhost:4000/prod/products/search?minPrice=500&maxPrice=90000
const productRoutes = require("./src/routes/ProductRoute");
app.use("/prod",productRoutes)

//localhost:4000/book/books
const bookRoutes = require("./src/routes/BookRoutes");
app.use("/book", bookRoutes)

//localhost:4000/city/cities
const cityRoutes = require("./src/routes/CityRoutes");
app.use("/city", cityRoutes)

//localhost:4000/state/states
const stateRoutes = require("./src/routes/StateRoutes");
app.use("/state", stateRoutes)

//localhost:4000/category/categories
const categoryRoutes = require("./src/routes/CategoryRoutes");
app.use("/category", categoryRoutes)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})