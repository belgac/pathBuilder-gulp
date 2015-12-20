var pathBuilder = require('./lib/pathBuilder')

module.exports = pathsBuilderGulp;

function pathsBuilderGulp (paths,config) {
  var builtPaths = paths.map(pathBuilder(config));
  return builtPaths;
}