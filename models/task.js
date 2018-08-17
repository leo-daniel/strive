module.exports = function (sequelize, DataTypes) {
    var task = sequelize.define(
        'task', {
            id: {
                type: DataTypes.INTEGER,
                // allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            projectId: {
                type: DataTypes.INTEGER
                // allowNull: false
            },
            task_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.TEXT
            },
            description: {
                type: DataTypes.TEXT
            },
            priority: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     contains: [['High', 'Medium', 'Low']]
                // }
            },
            date_due: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            hours_complete: {
                type: DataTypes.DECIMAL(4, 1),
                allowNull: false,
                // validate = {
                //     isFloat: true
                // }
            },
            is_complete: {
                type: DataTypes.BOOLEAN,
                defaultvalue: false
            }
        }, {
            timestamps: false
        });

    return task;
};