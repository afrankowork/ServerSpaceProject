let express = require('express');
let route = express.Router();
// TODO make a database and make .db file then require here
//let sequelize = require()
let userModel = user.js;

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

route.post('/register', (req,res) => {
    let username = req.body.user.username;
    let password = req.body.user.password
    

})