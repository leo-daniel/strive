module.exports = function (sequelize, DataTypes) {
    var Goal = sequelize.define('Goal', {
        goal_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        progress: DataTypes.INTEGER
    });
    return Goal;
};