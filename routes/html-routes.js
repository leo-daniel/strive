// *********************************************************************************
// HTML ROUTES: send users to the correct page, based on the current route
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var moment = require('moment');
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
        var req2 = db.task.findAll({
            where: {
                date_due: moment().format('YYYY-MM-DD')
            }
        });
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
    app.get("/calendar", function (req, res) {
        var req1 = db.project.findAll({});
        var req2 = db.task.findAll({});
        var req3 = db.goal.findAll({});
        Promise.all([req1, req2, req3]).then(function (results) {
            res.render("calendar", {
                projects: results[0],
                tasks: results[1],
                goals: results[2]
            });
        });
    });

    // Load user input form page
    app.get("/form", function (req, res) {
        res.render("userInput");
    });

    // Render 404 page for any unmatched routes
    app.get('*', function (req, res) {
        res.render('404');
    });
};