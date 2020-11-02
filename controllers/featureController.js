var router = require('express').Router();
var sequelize = require('../db');
var featureModel = sequelize.import('../models/feature');

/*
     GET ALL FEATURES FOR A USER
*/
router.get('/', (req, res) => {
     var userid = req.user.id;

     featureModel.findAll({
          where: { owner_id: userid}
     }).then( (data) => {
          res.json(data);
     },
     (err) => {
          res.send(500, err.message);
     });
});


