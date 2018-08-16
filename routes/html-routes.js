// *********************************************************************************
// HTML ROUTES: send users to the correct page, based on the current route
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {


    // app.get('/', function (req, res) {
    //     db.project.findAll({
    //         include: [db.task]
    //     }).then(function (dbProjects) {
    //         db.goal.findAll({}).then(
    //             function (dbGoals) {
    //                 res.render('index', {
    //                     projects: dbProjects,
    //                     tasks: dbTasks,
    //                     goals: dbGoals
    //                 });
    //             });
    //     });
    // });

    // Load all tables from the database, then render the home (index) page
    app.get('/', function (req, res) {
        var req1 = db.project.findAll({});
        var req2 = db.task.findAll({});
        var req3 = db.goal.findAll({});
        Promise.all([req1, req2, req3]).then(function (results) {
            res.render('index', {
                projects: results[0],
                tasks: results[1],
                goals: results[2]
            });
        });
    });

    // load all tables from the database, then render the calendar page
    app.get('/calendar', function (req, res) {
<<<<<<< HEAD
        db.project.findAll({})
            .then(db.task.findAll({}))
            //.then(db.step.findAll({}))
            .then(db.goal.findAll({}))
            .then(function (dbProjects, dbTasks, dbSteps, dbGoals) {
                res.render('calendar', {
                    projects: dbProjects,
                    tasks: dbTasks,
                    //steps: dbSteps,
                    goals: dbGoals
                });
=======
        var req1 = db.project.findAll({});
        var req2 = db.task.findAll({});
        var req3 = db.goal.findAll({});
        Promise.all([req1, req2, req3]).then(function (results) {
            res.render('calendar', {
                projects: results[0],
                tasks: results[1],
                goals: results[2]
>>>>>>> 363ab549633fa5381aaf352b10609c7d50e670e6
            });
        });
    });

    // Load user input form page
    app.get('/form', function (req, res) {
        res.render('userInput');
    });

    // Render 404 page for any unmatched routes
    app.get('*', function (req, res) {
        res.render('404');
    });
};
