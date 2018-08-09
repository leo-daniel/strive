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
        project_id_fk: {
            type: DataTypes.INTEGER
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_due: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Task;
};