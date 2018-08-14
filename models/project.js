module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("project", {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  // Project.associate = function (models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Project.hasMany(models.Task, {
  //     onDelete: "cascade"
  //   });
  // };

  return Project;
};