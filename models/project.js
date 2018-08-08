module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define('Project', {
        project_name: DataTypes.STRING,
        category: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        progress: DataTypes.INTEGER,
        priority: DataTypes.INTEGER,
        date_due: DataTypes.DATE
    });
    return Project;
};