var db = require('../models');

module.exports = function (app) {
    // Find all goals and return them to the user with res.json
    app.get("/api/goals", function (req, res) {
        db.Goal.findAll({}).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.get("/api/goals/:id", function (req, res) {
        // Find one goal with the id in req.params.id and return them to the user with res.json
        db.Goal.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.post("/api/goals", function (req, res) {
        // Create a goal with the data available to us in req.body
        db.Goal.create(req.body).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    // PUT route for updating goals
    app.put("/api/goals", function (req, res) {
        db.Goal.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

    app.delete("/api/goals/:id", function (req, res) {
        // DELETE the goal with the id available to us in req.params.id
        db.Goal.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbGoal) {
            res.json(dbGoal);
        });
    });

};