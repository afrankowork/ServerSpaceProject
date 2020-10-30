require("dotenv").config();
let express = require('express');
const db = require("./db");
let user = require('./controllers/userController')
const app = express();

db.sync();
app.use(express.json());

app.use('/test', user);

app.listen(process.env.PORT, function() {
    console.log(`server is listening on port ${process.env.PORT}`)
})