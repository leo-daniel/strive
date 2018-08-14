module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define('project', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        project_name: {
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
        progress: {
            type: DataTypes.DECIMAL
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
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false
    });


    return Project;
};