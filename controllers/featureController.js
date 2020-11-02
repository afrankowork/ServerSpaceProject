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
     var data = request.params.id;
     var userid = request.user.id;

     featureModel.findOne({
               where: { id: data, owner_id: userid }
          }).then(
               function findOneSuccess(data) {
                    response.json(data);
               },
               function findOneError(err) {
                    response.send(500, err.message);
               }
          );
});

/*        POST A FEATURE                */
router.post("/", async (req, res) => {
     var featureName = req.feature.featureName;
     var featureType = req.feature.featureType;
     var description = req.feature.description;
     var ownerId = req.feature.ownerId;
     var userNotes = req.feature.userNotes;
     var distanceData = req.feature.distance;
     var ascensionData = req.feature.ascension;
     var declinationData = req.feature.declination;
     var altData = req.feature.alt;
     var aziData = req.feature.azi;

     featureModel.create({
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
     }).then( function createSuccess(featureData){
          res.json({
               feature: featuredata
          });
     },
     function createError(err){
          res.send(500, err.message);
     });
});

/*        DELETE A FEATURE              */
router.delete('/:id', function(request, response){
     var data = request.params.id;
     var userid = request.user.id;

     logModel.destroy({
          where: {id: data, owner_id: userid}
     }).then(
          function deleteLogSuccess(){
               response.send("Feature removed successfully.");
          },
          function deleteLogError(err){
               response.send(500, erro.message);
          }
     )
})

/*        UPDATE A FEATURE              */
router.put('/:id', function(req, res){
     var data = request.params.id;
     var featureName = req.body.feature.featureName;
     var featureType = req.body.feature.featureType;
     var description = req.body.feature.description;
     var ownerId = req.body.feature.ownerId;
     var userNotes = req.body.feature.userNotes;
     var distanceData = req.body.feature.distance;
     var ascensionData = req.body.feature.ascension;
     var declinationData = req.body.feature.declination;
     var altData = req.body.feature.alt;
     var aziData = req.body.feature.azi;

     logModel.update({
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
                    response.json({
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