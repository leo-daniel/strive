var db = require('../models');

module.exports = function (app) {
    // Find all projects and return them to the user with res.json
    app.get("/api/projects", function (req, res) {
        db.Project.findAll({}).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.get("/api/projects/:id", function (req, res) {
        // Find one task with the id in req.params.id and return them to the user with res.json
        db.Project.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.post("/api/projects", function (req, res) {
        // Create a task with the data available to us in req.body
        db.Project.create(req.body).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // PUT route for updating projects
    app.put("/api/projects", function (req, res) {
        db.Project.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.delete("/api/projects/:id", function (req, res) {
        // DELETE the task with the id available to us in req.params.id
        db.Project.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

};