let express = require('express');
let route = express.Router();

let sequelize = require('../db')
let User = sequelize.import('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

// Register a New User

route.post('/register', (req,res) => {
    let username = req.body.user.username;
    let password = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(password, 10) 
    }).then(
        function createSuccess(user) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                sessionToken: token
            });
        },
        
    );

})

//Logins in a User

route.post('/login', function(req,res) {
    User.findOne ( { where: { username: req.body.user.username}}).then(
        (user) => {
            if(user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                    if (matches) {
                        res.json({
                            sessionToken: token
                        })
                    }
                    
                })
            } else {
                res.status(500).send({error: "failed to authenticate"});
            }
        },
            function (err) {
                res.status(500).send({error: 'no heroku today'})
            }
        
    )
})



module.exports = route;