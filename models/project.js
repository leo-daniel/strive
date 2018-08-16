<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
	var project = sequelize.define(
		"project", {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			project_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			description: {
				type: DataTypes.TEXT
			},
			complete: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
			due_date: {
				type: DataTypes.DATE
			},
			total_tasks: {
				type: DataTypes.INTEGER
			},
			complete_tasks: {
				type: DataTypes.INTEGER
			},
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			}

		});

	return project;
};
=======
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define(
    "project",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      project_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      date_due: {
        type: DataTypes.DATE
      },
      total_tasks: {
        type: DataTypes.INTEGER
      },
      complete_tasks: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false
    }
  );
  // project.associate = function (models) {
  // 	models.project.hasMany(models.task, {
  // 		onDelete: "CASCADE"
  // 	});
  // };
  return project;
};
>>>>>>> 8de17a0fcb4dbb61b6f041e5fcdea16a182de7e3
