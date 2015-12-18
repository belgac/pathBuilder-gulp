var pathParts = require('./lib/pathParts');
var extensionAdder = require('./lib/extensionAdder')

module.exports = pathBuilder;

function pathBuilder (config) {
  return function (pathObject) {
    var path = pathObject.parts.map(pathParts(config));
    path = path.toString().replace(/,/g,'/').replace(/\/\//g,'/');
    if (pathObject.extension) {
      path = extensionAdder(path,pathObject.extension)  
    }  
    return path;
  }
}