module.exports = function (sequelize, DataTypes) {
    var Step = sequelize.define('Step', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        step_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_due: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Step;
};