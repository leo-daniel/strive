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