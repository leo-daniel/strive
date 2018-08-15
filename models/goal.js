module.exports = function (sequelize, DataTypes) {
    var goal = sequelize.define('goal', {
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
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });
    return goal;
};