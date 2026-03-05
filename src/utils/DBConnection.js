const mongoose = require("mongoose");

const dbConnection = () => {

    mongoose.connect("mongodb://127.0.0.1:27017/backend").then(() => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log("DB Connection Failed", err);
    });

}

module.exports = dbConnection