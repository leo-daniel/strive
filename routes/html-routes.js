// *********************************************************************************
// HTML ROUTES: send users to the correct page, based on the current route
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

    // Load all tabled from the database, then render the home (index) page
    app.get('/', function (req, res) {
        db.project.findAll({})
            .then(db.task.findAll({}))
            .then(db.step.findAll({}))
            .then(db.goal.findAll({}))
            .then(function (dbProjects, dbTasks, dbSteps, dbGoals) {
                res.render('index', {
                    projects: dbProjects,
                    tasks: dbTasks,
                    steps: dbSteps,
                    goals: dbGoals
                });
            });
    });

    // load all tables from the database, then render the calendar page
    app.get('/calendar', function (req, res) {
        db.project.findAll({})
            .then(db.task.findAll({}))
            .then(db.step.findAll({}))
            .then(db.goal.findAll({}))
            .then(function (dbProjects, dbTasks, dbSteps, dbGoals) {
                res.render('calendar', {
                    projects: dbProjects,
                    tasks: dbTasks,
                    steps: dbSteps,
                    goals: dbGoals
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