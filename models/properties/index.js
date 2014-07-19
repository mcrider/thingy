// Loop over all files in this folder and require each model
var fs = require("fs"),
    path = require("path");

var properties = {};

var startTime = new Date().getTime();

fs.readdir(__dirname, function (err, files) {
  if (err) {
      throw err;
  }

  files.map(function (file) {
      return path.join(__dirname, file);
  }).filter(function (file) {
      return fs.statSync(file).isFile();
  }).forEach(function (file) {
    var modelName = file.substr(0, file.lastIndexOf('.')).replace(/^.*[\\\/]/, '');
    if (modelName !== 'index') {
      properties[modelName] = require(file);
    }
  });

  var endTime = new Date().getTime();
  console.log('Property models loaded (' + (endTime - startTime) + 'ms)');
});

module.exports = properties;