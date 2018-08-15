var db = require('../models');

module.exports = function (app) {
    // Find all tasks and return them to the user with res.json
    app.get('/api/tasks', function (req, res) {
        db.task.findAll({}).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    app.get('/api/tasks/:id', function (req, res) {
        // Find one task with the id in req.params.id and return them to the user with res.json
        db.task.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    app.post('/api/tasks', function (req, res) {
        // Create a task with the data available to us in req.body
        db.task.create(req.body).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    // PUT route for updating tasks
    app.put('/api/tasks', function (req, res) {
        db.task.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbTask) {
                res.json(dbTask);
            });
    });

    app.delete('/api/tasks/:id', function (req, res) {
        // DELETE the task with the id available to us in req.params.id
        db.task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });

};