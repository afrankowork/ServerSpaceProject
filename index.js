require("dotenv").config();
let express = require('express');

const db = require("./db");
const app = express();

db.sync();



app.listen(3500, function() {
    console.log('listening on 3500')
})




