require("dotenv").config();
let express = require('express');
let user = require('./controllers/userController')
const db = require("./db");
const app = express();

db.sync();
app.use(express.json());

app.use('/test', user);

app.listen(process.env.PORT, function() {
    console.log(`server is listening on port ${process.env.PORT}`)
})