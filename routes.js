// Define the routes for lucien

var express = require('express');

module.exports = (function() {
    'use strict';
    var api = express.Router();

    // Include all our models
    var models = {};
    models.properties = require('./models/properties');
    models.things = require('./models/things');

    //** Things are objects made up of properties (which can be values or other things)

    // Get a thing by its ID
    api.get('/thing/:id.:format?', function(req, res) {
      if (req.params.format == 'json') {
        res.send('json - by id');
      } else if (req.params.format == 'rdf') {
        // Todo: Use library to convert JSON-LD to RDFa
        res.send('rdfa - by id');
      } else {
        // Todo: Strip attributes from RDF?
        res.send('html - by id');
      }
    });

    // Get all things of a given type
    api.get('/things/:type.:format?', function(req, res) {
      // Extract the suffix manually (FIXME: Is there a way to do this with the router regex?)
      // var regex = /(?:\.([^.]+))?$/;
      // var suffix = regex.exec(req.params[0]);
      // if (!suffix) {
      //   res.send('html - by type');
      // } else if (suffix == 'json') {
      //   res.send('json - by type');
      // } else if (suffix == 'rdfa') {
      //   res.send('rdfa - by type');
      // }

      console.log(models.things[req.params.type]);

      // Todo: .find() things with the requested type and return in various formats

      // Assuming no hierarchy for types in the URL:
      if (req.params.format == 'json') {
        res.send('json - by type.  Type = ' + req.params.type);
      } else if (req.params.format == 'rdf') {
        // Todo: Use library to convert JSON-LD to RDFa
        res.send('rdfa - by type.  Type = ' + req.params.type);
      } else {
        res.send('html - by type.  Type = ' + req.params.type);
      }
    });

    //** Properties are values that have a many to many relationship with things

    // Get a property by its ID
    api.get('/property/:id.:format?', function(req, res) {
      if (req.params.format == 'json') {
        res.send('property json - by id');
      } else if (req.params.format == 'rdf') {
        // Todo: Use library to convert JSON-LD to RDFa
        res.send('property property rdfa - by id');
      } else {
        res.send('property html - by id');
      }
    });

    // Get all properties of a given type
    api.get('/properties/:type.:format?', function(req, res) {
      // Assuming no hierarchy for types in the URL:
      if (req.params.format == 'json') {
        res.send('property json - by type.  Type = ' + req.params.type);
      } else if (req.params.format == 'rdfa') {
        res.send('property rdfa - by type.  Type = ' + req.params.type);
      } else {
        res.send('property html - by type.  Type = ' + req.params.type);
      }
    });

    api.get('/', function(req, res) {
      res.send('root!');
    });

    return api;
})();




// Note: The cleaner routing format technique is based on request type:
// res.format({
//   text: function(){
//     res.send('hey');
//   },

//   html: function(){
//     res.send('<p>hey</p>');
//   },

//   json: function(){
//     res.send({ message: 'hey' });
//   }
// });