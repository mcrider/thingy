// Load all properties from the schema.org.json file and create models for them

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var infile = __dirname + '/schema.org.json';

var fileContents = ["var mongoose = require('mongoose');",
  "var Schema = mongoose.Schema;",
  "var schema = new Schema({",
  "  value:  &&dataType&&",
  "});",
  "module.exports = mongoose.model('&&propertyName&&', schema);"].join("\n");

var parseDataType = function(type) {
  switch (type) {
    case 'Boolean': return 'Boolean';
    case 'Date':
    case 'DateTime':
    case 'Time': return 'Date';
    case 'Number':
    case 'Float':
    case 'Integer': return 'Number';
    case 'URL':
    case 'Text': return 'String';
    default: return '{ type: Schema.Types.ObjectId, ref: \''+type+'\' }';
  }
}

// Read in our properties into an object
fs.readFile(infile, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);

  // Write each property into its own file
  for (var property in data.properties) {

    // Scrape schema.org to get the data type of this property
    (function(property) {
      request("http://schema.org/" + property, function(error, response, html){
        console.log(property);
        if(!error){
          var $ = cheerio.load(html), dataType = 'String';
          if ($('#mainContent').find('.definition-table').first().find('code').length > 1) {
            dataType = 'Schema.Types.Mixed';
          } else {
            var schemaType = $('#mainContent').find('.definition-table').first().find('code').first().find('a').text();
            dataType = parseDataType(schemaType);
          }

          var replacedContents = fileContents.replace(/&&propertyName&&/g, property).replace(/&&dataType&&/g, dataType);
          fs.writeFile('../models/properties/' + property + '.js', replacedContents, function(err) {
            if(err) {
              console.log(err);
            } else {
              console.log("Created file");
            }
          });
        }
      })
    })(property);


  }

});


