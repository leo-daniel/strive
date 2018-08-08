smodule.exports = function (sequelize, DataTypes) {
    var Goal = sequelize.define('goal', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        goal_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        progress: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: false
    });
    return Goal;
};