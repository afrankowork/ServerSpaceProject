var router = require('express').Router();
var sequelize = require('../db');
var featureModel = sequelize.import('../models/feature');

/*        GET ALL FEATURES FOR A USER   */
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

/*        GET A FEATURE FOR A USER      */
router.get('/:id', (req, res) => {
     var data = req.params.id;
     var userid = req.user.id;

     featureModel.findOne({
               where: { id: data, owner_id: userid }
          }).then(
               function Success(data) {
                    res.json(data);
               },
               function Error(err) {
                    res.send(500, err.message);
               }
          );
});

/*        POST A FEATURE                */
router.post("/", (req, res) => {
     var ownerData = req.user.id;
     var featureName = req.body.feature.feature_name;
     var featureType = req.body.feature.feature_type;
     var description = req.body.feature.description;
     var userNotes = req.body.feature.user_notes;
     var distanceData = req.body.feature.distance;
     var ascensionData = req.body.feature.ascension;
     var declinationData = req.body.feature.declination;
     var altData = req.body.feature.alt;
     var aziData = req.body.feature.azi;

     featureModel.create({
          feature_name: featureName,
          feature_type: featureType,
          description: description,
          owner_id: ownerData,
          user_notes: userNotes,
          distance: distanceData,
          ascension: ascensionData,
          declination: declinationData,
          alt: altData,
          azi: aziData,
     }).then( function createSuccess(featureData){
          res.json({
               feature: featureData
          });
     },
     function createError(err){
          res.send(500, err.message);
     });
});

/*        DELETE A FEATURE              */
router.delete('/:id', function(req, res){
     var data = req.params.id;
     var userid = req.user.id;

     featureModel.destroy({
          where: {id: data, owner_id: userid}
     }).then(
          function deleteLogSuccess(){
               res.send("Feature removed successfully.");
          },
          function deleteLogError(err){
               res.send(500, erro.message);
          }
     )
})

/*        UPDATE A FEATURE              */
router.put('/:id', function(req, res){
     var data = req.params.id;
     var featureName = req.body.feature.feature_name;
     var featureType = req.body.feature.feature_type;
     var description = req.body.feature.description;
     var ownerId = req.user.owner_id;
     var userNotes = req.body.feature.user_notes;
     var distanceData = req.body.feature.distance;
     var ascensionData = req.body.feature.ascension;
     var declinationData = req.body.feature.declination;
     var altData = req.body.feature.alt;
     var aziData = req.body.feature.azi;

     featureModel.update({
          feature_name: featureName,
          feature_type: featureType,
          description: description,
          owner_id: ownerId,
          user_notes: userNotes,
          distance: distanceData,
          ascension: ascensionData,
          declination: declinationData,
          alt: altData,
          azi: aziData,
          },{where: {id: data}}
          ).then(
               function updateSuccess(updatedData){
                    res.json({
                         feature_name: featureName,
                         feature_type: featureType,
                         description: description,
                         owner_id: ownerId,
                         user_notes: userNotes,
                         distance: distanceData,
                         ascension: ascensionData,
                         declination: declinationData,
                         alt: altData,
                         azi: aziData,
                    })
               },
               function updateError(err){
                    res.send(500, err.message);
               }
          );
});

module.exports = router;