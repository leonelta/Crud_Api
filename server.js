const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/users", require("./routes/userroutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})