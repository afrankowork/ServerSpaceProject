module.exports = function(sequelize, DataTypes){
     return sequelize.define('feature', {
          // Identifiers:
          feature_name: DataTypes.STRING,
          feature_type: DataTypes.STRING,
          description: DataTypes.STRING,
          owner_id: DataTypes.INTEGER,
          user_notes: DataTypes.STRING,

          // Location elements
          distance: DataTypes.INTEGER,
          ascension: DataTypes.INTEGER,
          declination: DataTypes.INTEGER,
          alt: DataTypes.INTEGER,
          azi: DataTypes.INTEGER,


          //TODO: user_images: DataTypes.STRING - 
     })
}