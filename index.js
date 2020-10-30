require("dotenv").config();
let express = require('express');
const db = require("./db");
let user = require('./controllers/userController');
let feature = require('./controllers/featureController');
const app = express();

db.sync();

app.use(express.json());

/*
    EXPOSED ROUTES
*/
app.use('/test',user);

// ROUTE PROTECTION GOES HERE

/*
    PROTECTED ROUTES
*/

app.listen(process.env.PORT, function() {
    console.log(`server is listening on port ${process.env.PORT}`)
})