module.exports = function (sequelize, DataTypes) {
    var Step = sequelize.define('Step', {
        step_name: DataTypes.STRING,
        task_id_fk: DataTypes.INTEGER,
        address: DataTypes.STRING,
        description: DataTypes.TEXT,
        priority: DataTypes.INTEGER,
        date_due: DataTypes.DATE
    });
    return Step;
};