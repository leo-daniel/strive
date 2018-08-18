var db = require('../models');

module.exports = function(app) {
  // Find all steps and return them to the user with res.json
  app.get('/api/steps', function(req, res) {
    db.steps.findAll({}).then(function(dbStep) {
      res.json(dbStep);
    });
  });

  app.get('/api/steps/:id', function(req, res) {
    // Find one step with the id in req.params.id and return them to the user with res.json
    db.steps
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then(function(dbStep) {
        res.json(dbStep);
      });
  });

  app.post('/api/steps', function(req, res) {
    // Create a step with the data available to us in req.body
    db.steps.create(req.body).then(function(dbStep) {
      res.json(dbStep);
    });
  });

  // PUT route for updating steps
  app.put('/api/steps', function(req, res) {
    db.steps
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then(function(dbStep) {
        res.json(dbStep);
      });
  });

  app.delete('/api/steps/:id', function(req, res) {
    // DELETE the step with the id available to us in req.params.id
    db.steps
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(function(dbStep) {
        res.json(dbStep);
      });
  });
};
