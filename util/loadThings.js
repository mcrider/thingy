// Load all things from the schema.org.json file and create models for them

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var infile = __dirname + '/schema.org.json';

var fileContents = ["var mongoose = require('mongoose');",
  "var Schema = mongoose.Schema;",
  "var schema = new Schema({ &&schema&& });",
  "module.exports = mongoose.model('&&thingName&&', schema);"].join("\n");

var union_arrays = function (x, y) {
  if (!x || !y) return false;
  var obj = {};
  for (var i = x.length-1; i >= 0; -- i)
     obj[x[i]] = x[i];
  for (var i = y.length-1; i >= 0; -- i)
     obj[y[i]] = y[i];
  var res = []
  for (var k in obj) {
    if (obj.hasOwnProperty(k))  // <-- optional
      res.push(obj[k]);
  }
  return res;
}

// Read in our properties into an object
fs.readFile(infile, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);

  // Write each thing into its own file
  for (var thingKey in data.types) {
    var thing = data.types[thingKey];

    // Make sure all of our properties in specific_properties are in properties
    var properties = union_arrays(thing.specific_properties, thing.properties);
    properties = properties.map(function(property) {
      return property + ': { type: Schema.Types.ObjectId, ref: \''+property+'\' }';
    })
    var schema = properties.join(",\n  ");

    var replacedContents = fileContents.replace(/&&thingName&&/g, thing.id).replace(/&&schema&&/g, schema);

    fs.writeFile('../models/things/' + thing.id + '.js', replacedContents, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("Created file");
      }
    });
  }

});


