module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('task', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
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
        project:{
            type: DataTypes.STRING
        }
    }, {
            timestamps: false
        });
    return Task;
};
<<<<<<< HEAD
=======

>>>>>>> d16256403af648f8309eb87f37ff2178b3c350e7
