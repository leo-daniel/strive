var db = require('../models');

module.exports = function (app) {
    // Find all projects and return them to the user with res.json
    app.get('/api/projects', function (req, res) {
        db.project.findAll({
            include: [
                {
                    model: db.task
                }
            ]
        }).then(function (dbProject) {
            var resObj = dbProject.map(dbProject => {
                return Object.assign(
                    {},
                    {
                        task: dbProject.task
                    }
                )
            })
            res.json(resObj);
        });
    });

    app.get('/api/projects/:id', function (req, res) {
        // Find one project with the id in req.params.id and return them to the user with res.json
        db.project.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    app.post('/api/projects', function (req, res) {
        // Create a project with the data available to us in req.body
        db.project.create(req.body).then(function () {
            db.project.findAll({
                // include: [
                //     {
                //         model: db.task
                //     }
                // ]
            }).then(function (dbProject) {
                res.json(dbProject);
            });
        });
    });

    // PUT route for updating projects
    app.put('/api/projects', function (req, res) {
        db.project.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbProject) {
                var resObj = dbProject.map(dbProject => {
                    return Object.assign(
                        {},
                        {
                            task: dbProject.task
                        }
                    )
                })
                console.log('HELLO', resObj)
                res.json(dbProject);
            });
    });

    // TODO: do we need to do a cascading delete here?
    app.delete('/api/projects/:id', function (req, res) {
        // DELETE the project with the id available to us in req.params.id
        db.project.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

};