let express = require('express');
let route = express.Router();
// TODO make a database and make .db file then require here
//let sequelize = require()


let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

route.get('/user', (req,res) => {
    res.send('this works')

})