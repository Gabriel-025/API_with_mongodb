const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const connectToDatabase = require("./database");


connectToDatabase();

const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());
app.use(routes);


 app.listen(port, () => 
console.log(`🌱 Back-and started at http://localhost:${port}/`)
) 