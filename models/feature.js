module.exports = function(sequelize, DataTypes){
     return sequelize.define('feature', {
          // Identifiers:
          feature_name: DataTypes.STRING,
          feature_type: DataTypes.STRING,
          description: DataTypes.STRING,
          owner_id: DataTypes.INTEGER,
          user_notes: DataTypes.STRING,

          // Location elements
          distance: DataTypes.FLOAT,
          ascension: DataTypes.FLOAT,
          declination: DataTypes.FLOAT,
          alt: DataTypes.FLOAT,
          azi: DataTypes.FLOAT,


          //TODO: user_images: DataTypes.STRING - 
     })
}