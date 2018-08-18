module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date_due: {
      type: DataTypes.DATEONLY,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  });

  return project;
};
