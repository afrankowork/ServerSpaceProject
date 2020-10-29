require("dotenv").config();
let express = require('express');

const db = require("./db");
const app = express();

db.sync();



app.listen(process.env.PORT, function() {
    console.log(`server is listening on port ${process.env.PORT}`)
})