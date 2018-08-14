module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('task', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        project: {
            type: DataTypes.STRING
        },

    }, {
        timestamps: false
    });

    // Task.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Task.belongsTo(models.Project, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Task;
};