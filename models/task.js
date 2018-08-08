module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        task_name: DataTypes.STRING,
        category: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        priority: DataTypes.INTEGER,
        date_due: DataTypes.DATE
    });
    return Task;
};