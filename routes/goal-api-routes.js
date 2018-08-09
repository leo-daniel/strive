var db = require('../models');

module.exports = function (app) {
    // Find all goals and return them to the user with res.json
    app.get('/api/goals', function (req, res) {
        db.goal.findAll({}).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.get('/api/goals/:id', function (req, res) {
        // Find one goal with the id in req.params.id and return them to the user with res.json
        db.goal.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.post('/api/goals', function (req, res) {
        // Create a goal with the data available to us in req.body
        db.goal.create(req.body).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    // PUT route for updating goals
    app.put('/api/goals', function (req, res) {
        db.goal.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.delete('/api/goals/:id', function (req, res) {
        // DELETE the goal with the id available to us in req.params.id
        db.goal.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

};