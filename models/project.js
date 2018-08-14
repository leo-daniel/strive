module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define(
    "project",
    {
      // id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     primaryKey: true,
      //     autoIncrement: true
      // },
      project_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false
    }
  );

  return Project;
};
