// Load all properties from the schema.org.json file and create models for them

var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    mustache = require('mustache');

var schemaUrl = 'http://schema.org/docs/schema_org_rdfa.html';


// Download the canonical RDFa for schema.org and parse it
request(schemaUrl, function(error, response, html){
  if(!error){

    var $ = cheerio.load(html);

    // Process properties
    // $('div[typeof="rdf:Property"]').each(function (i, elem) {
    //   var label = $(this).find('span[property="rdfs:label"]').text(),
    //       comment = $(this).find('span[property="rdfs:comment"]').text(),
    //       domain = [],
    //       range = [];

    //   $(this).find('a[property="http://schema.org/domainIncludes"]').each(function() {
    //     domain.push($(this).text());
    //   });

    //   $(this).find('a[property="http://schema.org/rangeIncludes"]').each(function() {
    //      range.push($(this).text());
    //   });

    //   if (range.length > 1) {
    //     dataType = 'Schema.Types.Mixed';
    //   } else {
    //     dataType = parseDataType(range[0]);
    //   }

    //   generatePropertyModel(label, dataType);
    //   generatePropertyAdminPartial(label, comment, dataType);
    // });




    // Process things
    $('div[typeof="rdfs:Class"]').each(function (i, elem) {
      var label = $(this).find('span[property="rdfs:label"]').text(),
          comment = $(this).find('span[property="rdfs:comment"]').text(),
          properties = [];

      console.log(label + ':');
      properties = getPropertiesForThing.call(this, label, $);

      var properties = properties.map(function(property) {
        return property + ': { type: Schema.Types.ObjectId, ref: \''+property+'\' }';
      })
      var schema = properties.join(",\n  ");


      console.log(schema);
      console.log('---------------------------------')

      // Get attributes for this:
      // $('a[property="http://schema.org/domainIncludes"][href="http://schema.org/CLASSNAME"]').parent().parent()

      // Going to have to use model inheritance also
      // OR, define function for getting properties of a thing, and accumlate all ancestor's properties?
    })

  }
})


//
// Helper Functions
//

var getPropertiesForThing = function(label, $) {
  var properties = [];

  // If has ancestors, get parent properties recursively and push onto properties stack
  // Get properties specific to this thing
  $('body').find('a[property="http://schema.org/domainIncludes"][href="http://schema.org/'+label+'"]').parent().parent().find('[property="rdfs:label"]').each(function() {
      properties.push($(this).text());
  })

  // If this thing inherits properties from other things, push their properties onto the stack (recursively)
  var parents = [];
  $(this).find('a[property="rdfs:subClassOf"]').each(function() {
    parents.push($(this).text());
  })
  // if parents.lenth > 0, get parent properties and append
  console.log('parents length: ' + parents.length);
  if (parents.length > 0) {
    parents.forEach(function(element, index) {
      console.log('getting parent element: ' + element);
      properties = properties.concat(getPropertiesForThing.call($('div[typeof="rdfs:Class"][resource="http://schema.org/'+element+'"]'), element, $));
    })
  }

  return properties;
}

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
    default: return '{ type: Schema.Types.ObjectId, ref: "'+type+'" }';
  }
}

// Render a template and pass it into a callback.  Path is relative to util/templates/
var renderTemplate = function(templatePath, templateData, callback) {
  fs.readFile('./templates/'+templatePath, 'utf8', function (err,text) {
    if (err) {
      return console.log(err);
    }

    var renderedTemplate = mustache.render(text, templateData);
    callback(renderedTemplate);
  });
}

var generatePropertyModel = function(label, dataType) {
  renderTemplate('propertyModel.txt', { dataType: dataType, propertyName: label }, function(renderedTemplate) {
    fs.writeFile('../models/properties/' + label + '.js', renderedTemplate, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('Created ../models/properties/' + label + '.js');
      }
    });
  });
}

var generatePropertyAdminPartial = function(label, description, dataType) {
  // FIXME: We need different form templates depending on the data type
  renderTemplate('forms/text.txt', { label: label, description: description }, function(renderedTemplate) {
    fs.writeFile('../views/admin/properties/' + label + '.jade', renderedTemplate, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('Created ../views/admin/properties/' + label + '.jade');
      }
    });
  });
}

