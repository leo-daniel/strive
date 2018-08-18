var chai = require('chai');
chai.use(require('chai-datetime'));
var chaiHttp = require('chai-http');
var server = require('../server');
var db = require('../models');
var expect = chai.expect;
var moment = require('moment');

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe('GET /api/tasks', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all examples', function(done) {
    var d1 = '2018-08-14T04:00:00.000Z';

    // Add some examples to the db to test with
    db.task
      .create({
        task_name: 'Name',
        category: 'Personal',
        address: '123 Main',
        description: 'Task Description',
        priority: 'High',
        date_due: d1,
        hours_complete: '1.0',
        complete: true,
      })
      .then(function() {
        // Request the route that returns all examples
        request.get('/api/tasks').end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(1);

          expect(responseBody[0])
            .to.be.an('object')
            .that.includes({
              task_name: 'Name',
              category: 'Personal',
              address: '123 Main',
              description: 'Task Description',
              priority: 'High',
              date_due: d1,
              hours_complete: '1.0',
              complete: true,
            });

          // The 'done' function is used to end any asynchronous tests
          done();
        });
      });
  });
});
